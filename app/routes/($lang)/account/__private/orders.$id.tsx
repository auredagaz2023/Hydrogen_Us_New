import invariant from 'tiny-invariant';
import clsx from 'clsx';
import {
  json,
  redirect,
  type MetaFunction,
  type LoaderArgs,
} from '@shopify/remix-oxygen';
import {Form, useLoaderData} from '@remix-run/react';
import {Money, Image, flattenConnection} from '@shopify/hydrogen';
import {statusMessage, usePrefixPathWithLocale} from '~/lib/utils';
import type {
  Order,
  OrderLineItem,
  DiscountApplicationConnection,
} from '@shopify/hydrogen/storefront-api-types';
import {Link, Heading, PageHeader, Text} from '~/components';

export const meta: MetaFunction = ({data}) => ({
  title: `Order ${data?.order?.name}`,
});

export async function loader({request, context, params}: LoaderArgs) {
  if (!params.id) {
    return redirect(params?.lang ? `${params.lang}/account` : '/account');
  }

  const queryParams = new URL(request.url).searchParams;
  const orderToken = queryParams.get('key');

  invariant(orderToken, 'Order token is required');

  const customerAccessToken = await context.session.get('customerAccessToken');

  if (!customerAccessToken) {
    return redirect(
      params.lang ? `${params.lang}/account/login` : '/account/login',
    );
  }

  const orderId = `gid://shopify/Order/${params.id}?key=${orderToken}`;

  const data = await context.storefront.query<{node: Order}>(
    CUSTOMER_ORDER_QUERY,
    {variables: {orderId}},
  );

  const order = data?.node;

  if (!order) {
    throw new Response('Order not found', {status: 404});
  }

  const lineItems = flattenConnection(order.lineItems!) as Array<OrderLineItem>;

  const discountApplications = flattenConnection(
    order.discountApplications as DiscountApplicationConnection,
  );

  const firstDiscount = discountApplications[0]?.value;

  const discountValue =
    firstDiscount?.__typename === 'MoneyV2' && firstDiscount;

  const discountPercentage =
    firstDiscount?.__typename === 'PricingPercentageValue' &&
    firstDiscount?.percentage;

  return json({
    order,
    lineItems,
    discountValue,
    discountPercentage,
  });
}

export default function OrderRoute() {
  const {order, lineItems, discountValue, discountPercentage} =
    useLoaderData<typeof loader>();
  return (
    <div className='w-full flex flex-wrap justify-center lg:justify-between'>
      <aside className="w-full lg:w-3/12 py-4 lg:py-12 bg-[#f7f7f7]">
        <div className="sticky top-[118px] pt-2 lg:pt-6 sm:px-12 md:mx-6 lg:mx-0 bg-[#f7f7f7] px-3">
          <ul>
            <Link
              className={`py-2 lg:py-6 block border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer`}
              to={`/account`}
            >
              My account
            </Link>
            <Link
              className={`py-2 lg:py-6 block border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer font-bold`}
              to={`/account?page=orders`}
            >
              My orders
            </Link>
            <Link
              className={`py-2 lg:py-6 block border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer`}
              to={`/account?page=addresses`}
            >
              My Addresses
            </Link>
          </ul>
          <Form method="post" action={usePrefixPathWithLocale('/account/logout')} className=" text-right">
            <button type="submit" className="text-dark-blue text-14 pt-2 lg:pt-6 mb-0">
              Sign out
            </button>
          </Form>
        </div>
      </aside>
      <div className="w-full sm:w-10/12 px-3 lg:w-7/12 py-12 lg:my-6 mx-auto">
        <h1 className="mt-2 mb-6 text-subheading lg:text-[40px] text-dark-blue font-semibold">My orders</h1>
        <div>
          <div className="w-full sm:grid-cols-1">
            <div>
              <Text as="h3" size="lead" className='mb-4 text-dark-blue text-[13px]'>
                Order <strong>{order.name}</strong>
              </Text>
              <div className="grid grid-cols-2">
                {order?.shippingAddress ? (
                  <div className='text-dark-blue'>
                    <p className="font-bold">Shipping address</p>
                    <p>Fullfillment status: { statusMessage(order.fulfillmentStatus) }</p>
                    <ul className="mt-3">
                      <li>
                        <Text>
                          {order.shippingAddress.firstName &&
                            order.shippingAddress.firstName + ' '}
                          {order.shippingAddress.lastName}
                        </Text>
                      </li>
                      {order?.shippingAddress?.formatted ? (
                        order.shippingAddress.formatted.map((line: string) => (
                          <li key={line}>
                            <Text>{line}</Text>
                          </li>
                        ))
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                ) : (
                  <p className="mt-3">No shipping address defined</p>
                )}
              </div>
              <table className="w-full mt-12 mb-12">
                <thead>
                  <tr className='text-dark-blue uppercase text-left border-b border-8c8c8c'>
                    <th className='font-normal pb-4 text-14'>product</th>
                    <th className='font-normal pb-4 text-14'>sku</th>
                    <th className='font-normal pb-4 text-14'>price</th>
                    <th className='font-normal pb-4 text-14'>quantity</th>
                    <th className='font-normal pb-4 text-14'>total</th>
                  </tr>
                </thead>
                <tbody>
                  { lineItems.map((lineItem: OrderLineItem) => (
                    <tr key={lineItem.variant!.id} className='border-b border-light-gray'>
                      <td className='py-5 font-bold text-dark-blue text-14'>
                        <Link to={`/products/${lineItem.variant!.product!.handle}`} className={`underline`}>
                          { lineItem.title }
                        </Link>
                      </td>
                      <td className='py-5 font-bold text-dark-blue text-14'>{ lineItem.variant?.sku || '' }</td>
                      <td className='py-5 font-bold text-dark-blue text-14'><Money data={lineItem.variant?.price!} withoutTrailingZeros /></td>
                      <td className='py-5 font-bold text-dark-blue text-14'>{ lineItem.quantity }</td>
                      <td className='py-5 font-bold text-dark-blue text-14'><Money data={lineItem.discountedTotalPrice} withoutTrailingZeros /></td>
                    </tr>
                  )) }
                </tbody>
              </table>
              <div className="w-full flex justify-between items-center text-dark-blue text-sm mb-1">
                <span>Subtotal</span>
                <span><Money withoutTrailingZeros data={order.subtotalPriceV2!} /></span>
              </div>
              <div className="w-full flex justify-between items-center text-dark-blue text-sm mb-1">
                <span>Shipping (Standard Delivery (Delivered in 3-5 Business Days if Ordered by 13:00 CET))</span>
                <span><Money withoutTrailingZeros data={{amount: "0", currencyCode: 'USD'}} /></span>
              </div>
              <div className="w-full flex justify-between items-center text-dark-blue text-sm mb-1">
                <span>Taxes</span>
                <span><Money withoutTrailingZeros data={order.totalTaxV2!} /></span>
              </div>
              <div className="w-full flex justify-between items-center text-dark text-sm">
                <span>Total including taxes</span>
                <span><Money withoutTrailingZeros data={order.totalPriceV2!} /></span>
              </div>
              {/* <div className="grid items-start gap-12 sm:grid-cols-1 md:grid-cols-4 md:gap-16 sm:divide-y sm:divide-gray-200">
                <table className="min-w-full my-8 divide-y divide-gray-300 md:col-span-3">
                  <thead>
                    <tr className="align-baseline ">
                      <th
                        scope="col"
                        className="pb-4 pl-0 pr-3 font-semibold text-left"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="hidden px-4 pb-4 font-semibold text-right sm:table-cell md:table-cell"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="hidden px-4 pb-4 font-semibold text-right sm:table-cell md:table-cell"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-4 pb-4 font-semibold text-right"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {lineItems.map((lineItem: OrderLineItem) => (
                      <tr key={lineItem.variant!.id}>
                        <td className="w-full py-4 pl-0 pr-3 align-top sm:align-middle max-w-0 sm:w-auto sm:max-w-none">
                          <div className="flex gap-6">
                            <Link
                              to={`/products/${lineItem.variant!.product!.handle}`}
                            >
                              {lineItem?.variant?.image && (
                                <div className="w-24 card-image aspect-square">
                                  <Image
                                    data={{
                                      url: lineItem.variant.image.src!,
                                    }}
                                    width={lineItem.variant.image.width!}
                                    height={lineItem.variant.image.height!}
                                    alt={lineItem.variant.image.altText!}
                                    loaderOptions={{
                                      scale: 2,
                                      crop: 'center',
                                    }}
                                  />
                                </div>
                              )}
                            </Link>
                            <div className="flex-col justify-center hidden lg:flex">
                              <Text as="p">{lineItem.title}</Text>
                              <Text size="fine" className="mt-1" as="p">
                                {lineItem.variant!.title}
                              </Text>
                            </div>
                            <dl className="grid">
                              <dt className="sr-only">Product</dt>
                              <dd className="truncate lg:hidden">
                                <Heading size="copy" format as="h3">
                                  {lineItem.title}
                                </Heading>
                                <Text size="fine" className="mt-1">
                                  {lineItem.variant!.title}
                                </Text>
                              </dd>
                              <dt className="sr-only">Price</dt>
                              <dd className="truncate sm:hidden">
                                <Text size="fine" className="mt-4">
                                  <Money data={lineItem.variant!.price!} />
                                </Text>
                              </dd>
                              <dt className="sr-only">Quantity</dt>
                              <dd className="truncate sm:hidden">
                                <Text className="mt-1" size="fine">
                                  Qty: {lineItem.quantity}
                                </Text>
                              </dd>
                            </dl>
                          </div>
                        </td>
                        <td className="hidden px-3 py-4 text-right align-top sm:align-middle sm:table-cell">
                          <Money data={lineItem.variant!.price!} />
                        </td>
                        <td className="hidden px-3 py-4 text-right align-top sm:align-middle sm:table-cell">
                          {lineItem.quantity}
                        </td>
                        <td className="px-3 py-4 text-right align-top sm:align-middle sm:table-cell">
                          <Text>
                            <Money data={lineItem.discountedTotalPrice!} />
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    {((discountValue && discountValue.amount) ||
                      discountPercentage) && (
                      <tr>
                        <th
                          scope="row"
                          colSpan={3}
                          className="hidden pt-6 pl-6 pr-3 font-normal text-right sm:table-cell md:pl-0"
                        >
                          <Text>Discounts</Text>
                        </th>
                        <th
                          scope="row"
                          className="pt-6 pr-3 font-normal text-left sm:hidden"
                        >
                          <Text>Discounts</Text>
                        </th>
                        <td className="pt-6 pl-3 pr-4 font-medium text-right text-green-700 md:pr-3">
                          {discountPercentage ? (
                            <span className="text-sm">
                              -{discountPercentage}% OFF
                            </span>
                          ) : (
                            discountValue && <Money data={discountValue!} />
                          )}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pt-6 pl-6 pr-3 font-normal text-right sm:table-cell md:pl-0"
                      >
                        <Text>Subtotal</Text>
                      </th>
                      <th
                        scope="row"
                        className="pt-6 pr-3 font-normal text-left sm:hidden"
                      >
                        <Text>Subtotal</Text>
                      </th>
                      <td className="pt-6 pl-3 pr-4 text-right md:pr-3">
                        <Money data={order.subtotalPriceV2!} />
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pt-4 pl-6 pr-3 font-normal text-right sm:table-cell md:pl-0"
                      >
                        Tax
                      </th>
                      <th
                        scope="row"
                        className="pt-4 pr-3 font-normal text-left sm:hidden"
                      >
                        <Text>Tax</Text>
                      </th>
                      <td className="pt-4 pl-3 pr-4 text-right md:pr-3">
                        <Money data={order.totalTaxV2!} />
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pt-4 pl-6 pr-3 font-semibold text-right sm:table-cell md:pl-0"
                      >
                        Total
                      </th>
                      <th
                        scope="row"
                        className="pt-4 pr-3 font-semibold text-left sm:hidden"
                      >
                        <Text>Total</Text>
                      </th>
                      <td className="pt-4 pl-3 pr-4 font-semibold text-right md:pr-3">
                        <Money data={order.totalPriceV2!} />
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CUSTOMER_ORDER_QUERY = `#graphql
  fragment Money on MoneyV2 {
    amount
    currencyCode
  }
  fragment AddressFull on MailingAddress {
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    id
    lastName
    name
    phone
    province
    provinceCode
    zip
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      ... on MoneyV2 {
        amount
        currencyCode
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment Image on Image {
    altText
    height
    src: url(transform: {crop: CENTER, maxHeight: 96, maxWidth: 96, scale: 2})
    id
    width
  }
  fragment ProductVariant on ProductVariant {
    id
    image {
      ...Image
    }
    price {
      ...Money
    }
    product {
      handle
    }
    sku
    title
  }
  fragment LineItemFull on OrderLineItem {
    title
    quantity
    discountAllocations {
      allocatedAmount {
        ...Money
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    originalTotalPrice {
      ...Money
    }
    discountedTotalPrice {
      ...Money
    }
    variant {
      ...ProductVariant
    }
  }

  query CustomerOrder(
    $country: CountryCode
    $language: LanguageCode
    $orderId: ID!
  ) @inContext(country: $country, language: $language) {
    node(id: $orderId) {
      ... on Order {
        id
        name
        orderNumber
        processedAt
        financialStatus
        fulfillmentStatus
        totalTaxV2 {
          ...Money
        }
        totalPriceV2 {
          ...Money
        }
        subtotalPriceV2 {
          ...Money
        }
        shippingAddress {
          ...AddressFull
        }
        discountApplications(first: 100) {
          nodes {
            ...DiscountApplication
          }
        }
        lineItems(first: 100) {
          nodes {
            ...LineItemFull
          }
        }
      }
    }
  }
`;
