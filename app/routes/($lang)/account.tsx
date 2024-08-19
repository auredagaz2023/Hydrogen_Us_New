import {
  Await,
  Form,
  Link,
  Outlet,
  useLoaderData,
  useMatches,
  useOutlet,
  useSearchParams,
} from '@remix-run/react';
import type {
  Collection,
  Customer,
  MailingAddress,
  Order,
} from '@shopify/hydrogen/storefront-api-types';
import {Suspense, useState, useEffect} from 'react';
import {
  Button,
  OrderCard,
  PageHeader,
  Text,
  AccountDetails,
  AccountAddressBook,
  Modal,
  ProductSwimlane,
} from '~/components';
import {FeaturedCollections} from '~/components/FeaturedCollections';
import {
  json,
  defer,
  redirect,
  type LoaderArgs,
  type AppLoadContext,
} from '@shopify/remix-oxygen';
import {Money, flattenConnection} from '@shopify/hydrogen';
import {getFeaturedData} from './featured-products';
import {doLogout} from './account/__private/logout';
import {statusMessage, usePrefixPathWithLocale} from '~/lib/utils';

// Combining json + Response + defer in a loader breaks the
// types returned by useLoaderData. This is a temporary fix.
type TmpRemixFix = ReturnType<typeof defer<{isAuthenticated: false}>>;

export async function loader({request, context, params}: LoaderArgs) {
  const {pathname} = new URL(request.url);
  const lang = params.lang;
  const customerAccessToken = await context.session.get('customerAccessToken');
  const isAuthenticated = Boolean(customerAccessToken);
  const loginPath = lang ? `/${lang}/account/login` : '/account/login';

  if (!isAuthenticated) {
    if (/\/account\/login$/.test(pathname) || /\/account\/register$/.test(pathname)) {
      return json({isAuthenticated}) as unknown as TmpRemixFix;
    }
    return redirect(loginPath) as unknown as TmpRemixFix;
  }

  const customer = await getCustomer(context, customerAccessToken);

  const heading = customer
    ? customer.firstName
      ? `Welcome, ${customer.firstName}.`
      : `Welcome to your account.`
    : 'Account Details';

  const orders = flattenConnection(customer.orders) as Order[];

  return defer({
    isAuthenticated,
    customer,
    heading,
    orders,
    addresses: flattenConnection(customer.addresses) as MailingAddress[],
    featuredData: getFeaturedData(context.storefront),
  });
}

export default function Authenticated() {
  const data = useLoaderData<typeof loader>();
  const outlet = useOutlet();
  const matches = useMatches();

  // routes that export handle { renderInModal: true }
  const renderOutletInModal = matches.some((match) => {
    return match?.handle?.renderInModal;
  });

  const cancelLink = matches.find((match) => {
    return match?.handle?.cancelLink;
  })?.handle?.cancelLink;

  // Public routes
  if (!data.isAuthenticated) {
    return <Outlet />;
  }

  // Authenticated routes
  if (outlet) {
    if (renderOutletInModal) {
      return (
        <>
          <Modal cancelLink={cancelLink || "/account"}>
            <Outlet context={{customer: data.customer}} />
          </Modal>
          <Account {...(data as Account)} />
        </>
      );
    } else {
      return <Outlet context={{customer: data.customer}} />;
    }
  }

  return <Account {...(data as Account)} />;
}

interface Account {
  customer: Customer;
  orders: Order[];
  heading: string;
  addresses: MailingAddress[];
  featuredData: any; // @todo: help please
}

function Account({
  customer,
  orders,
  heading,
  addresses,
  featuredData,
}: Account) {
  const [page, setPage] = useState<string | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setPage(searchParams.get("page") || 'account');
  }, [])

  const handlePageChange = (_page: string) => {
    setPage(_page);
    setSearchParams({page: _page});
  }

  return (
    <div className='w-full flex flex-wrap justify-center lg:justify-between'>
      <aside className="w-full lg:w-3/12 py-4 lg:py-12 bg-[#f7f7f7]">
        <div className="sticky top-[118px] pt-2 lg:pt-6 sm:px-12 md:mx-6 lg:mx-0 bg-[#f7f7f7] px-3">
          <ul>
            <li
              className={`py-2 lg:py-6 border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer ${page == 'account' && 'font-bold'}`}
              onClick={() => handlePageChange("account")}
            >
              My account
            </li>
            <li 
              className={`py-2 lg:py-6 border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer ${page == 'orders' && 'font-bold'}`}
              onClick={() => handlePageChange("orders")}
            >
              My orders
            </li>
            <li 
              className={`py-2 lg:py-6 border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer ${page == 'addresses' && 'font-bold'}`}
              onClick={() => handlePageChange("addresses")}
            >
              My Addresses
            </li>
          </ul>
          <Form method="post" action={usePrefixPathWithLocale('/account/logout')} className=" text-right">
            <button type="submit" className="text-dark-blue text-14 pt-2 lg:pt-6 mb-0">
              Sign out
            </button>
          </Form>
        </div>
      </aside>
      <div className="w-full sm:w-10/12 px-3 lg:w-7/12 py-12 lg:my-6 mx-auto">
        <h1 className="mt-2 mb-6 xl:mb-12 text-subheading lg:text-[40px] text-dark-blue font-semibold">My { page }</h1>
        {
          page == 'account' ? 
            <div className="text-dark-blue">
              <AccountDetails customer={customer as Customer} />
              <u onClick={() => handlePageChange("orders")} className="font-bold cursor-pointer">{orders.length} order</u> in your account
            </div>
          : <>
          {
            page == 'orders' ? (
              orders && <AccountOrderHistory orders={orders as Order[]} />
            ) : (
              <AccountAddressBook
                addresses={addresses as MailingAddress[]}
                customer={customer as Customer}
              />      
            )
          }
          </>
        }
      </div>
      {/* {!orders.length && (
        <Suspense>
          <Await
            resolve={featuredData}
            errorElement="There was a problem loading featured products."
          >
            {(data) => (
              <>
                <FeaturedCollections
                  title="Popular Collections"
                  collections={data.featuredCollections as Collection[]}
                />
                <ProductSwimlane products={data.featuredProducts} />
              </>
            )}
          </Await>
        </Suspense>
      )} */}
    </div>
  );
}

function AccountOrderHistory({orders}: {orders: Order[]}) {
  return (
    <div className="mt-6">
      {orders?.length ? 
        <table className='w-full'>
          <thead>
            <tr className='text-dark-blue uppercase text-left border-b border-8c8c8c'>
              <th className='font-normal pb-4 text-14'>order</th>
              <th className='font-normal pb-4 text-14'>date</th>
              <th className='font-normal pb-4 text-14'>payment status</th>
              <th className='font-normal pb-4 text-14'>fulfillment status</th>
              <th className='font-normal pb-4 text-14'>total</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order: Order, index: number) => {
                const [legacyOrderId, key] = order!.id!.split('/').pop()!.split('?');
                return (
                  <tr key={index} className='border-b border-light-gray'>
                    <td className='py-5 font-bold text-dark-blue text-14'>
                      <Link to={`/account/orders/${legacyOrderId}?${key}`} className='underline'>
                      #{ order.orderNumber }
                      </Link></td>
                    <td className='py-5 font-medium text-dark-blue text-14'>{ new Date(order.processedAt).toLocaleDateString("en-US", {
                      month: 'long',
                      day: '2-digit',
                      year: 'numeric'
                    }) }</td>
                    <td className='py-5 font-medium text-dark-blue text-14 capitalize'>{ order.financialStatus?.toLocaleLowerCase() || "" }</td>
                    <td className='py-5 font-medium text-dark-blue text-14'>{ statusMessage(order.fulfillmentStatus!) }</td>
                    <td className='py-5 font-medium text-dark-blue text-14'><Money withoutTrailingZeros data={order.currentTotalPrice} /></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table> : 
        <EmptyOrders />
      }
    </div>
  );
}

function EmptyOrders() {
  return (
    <div>
      <Text className="mb-1" size="fine" width="narrow" as="p">
        You haven&apos;t placed any orders yet.
      </Text>
      <div className="w-48">
        <Button
          className="w-full mt-2 text-sm"
          variant="secondary"
          to={usePrefixPathWithLocale('/')}
        >
          Start Shopping
        </Button>
      </div>
    </div>
  );
}

function Orders({orders}: {orders: Order[]}) {
  return (
    <ul className="grid grid-flow-row grid-cols-1 gap-2 gap-y-6 md:gap-4 lg:gap-6 false sm:grid-cols-3">
      {orders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </ul>
  );
}

const CUSTOMER_QUERY = `#graphql
  query CustomerDetails(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      firstName
      lastName
      phone
      email
      defaultAddress {
        id
        formatted
        firstName
        lastName
        company
        address1
        address2
        country
        province
        city
        zip
        phone
      }
      addresses(first: 6) {
        edges {
          node {
            id
            formatted
            firstName
            lastName
            company
            address1
            address2
            country
            province
            city
            zip
            phone
          }
        }
      }
      orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {
        edges {
          node {
            id
            orderNumber
            processedAt
            financialStatus
            fulfillmentStatus
            currentTotalPrice {
              amount
              currencyCode
            }
            lineItems(first: 2) {
              edges {
                node {
                  variant {
                    image {
                      url
                      altText
                      height
                      width
                    }
                  }
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function getCustomer(
  context: AppLoadContext,
  customerAccessToken: string,
) {
  const {storefront} = context;

  const data = await storefront.query<{
    customer: Customer;
  }>(CUSTOMER_QUERY, {
    variables: {
      customerAccessToken,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  /**
   * If the customer failed to load, we assume their access token is invalid.
   */
  if (!data || !data.customer) {
    throw await doLogout(context);
  }

  return data.customer;
}
