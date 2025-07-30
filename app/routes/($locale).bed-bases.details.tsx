import {type ReactNode, useRef, Suspense, useMemo, useState} from 'react';
import {Disclosure, Listbox} from '@headlessui/react';
import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  Await,
  useSearchParams,
  useLocation,
  // useTransition,
} from '@remix-run/react';
import {
  AnalyticsPageType,
  Money,
  ShopifyAnalyticsProduct,
  //ShopPayButton,
  flattenConnection,
  Image,
  type SeoHandleFunction,
  type SeoConfig,
} from '@shopify/hydrogen';
import {
  Heading,
  IconCaret,
  IconCheck,
  IconClose,
  ProductGallery,
  ProductSwimlane,
  Section,
  Skeleton,
  Text,
  Link,
  AddToCartButton,
} from '~/components';
import {ProductContent} from '~/components/ProductContent';
import WorldMap from '~/components/worldmap';
import {getExcerpt} from '~/lib/utils';
import invariant from 'tiny-invariant';
import clsx from 'clsx';
import type {
  ProductVariant,
  SelectedOptionInput,
  Product as ProductType,
  Shop,
  ProductConnection,
  MediaConnection,
  MediaImage,
  Image as ImageType,
} from '@shopify/hydrogen/storefront-api-types';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import type {ProductWithMetafields, Storefront} from '~/lib/type';
import type {Product} from 'schema-dts';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types/index';
import {BsChevronDown} from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {RxMinusCircled, RxPlusCircled} from 'react-icons/rx';
import affirm_banner from '~/assets/magniflex-us-banner-affirm-product-page-02.jpg'

const seo: SeoHandleFunction<typeof loader> = ({data}) => {
  const media = flattenConnection<MediaConnection>(data.product.media).find(
    (media) => media.mediaContentType === 'IMAGE',
  ) as MediaImage | undefined;

  return {
    title: data?.product?.seo?.title ?? data?.product?.title,
    media: media?.image,
    description:
      data?.product?.seo?.description ??
      data?.product?.description.slice(0, 149),
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      brand: data?.product?.vendor,
      name: data?.product?.title,
    },
  } satisfies SeoConfig<Product>;
};

export const handle = {
  seo,
};

export async function loader({params, request, context}: LoaderArgs) {
  const url = new URL(request.url);
  const productHandle = url.searchParams.get('product');
  // const {productHandle} = params;
  invariant(productHandle, 'Missing productHandle param, check route filename');

  const searchParams = new URL(request.url).searchParams;

  const selectedOptions: SelectedOptionInput[] = [];
  searchParams.forEach((value, name) => {
    selectedOptions.push({name, value});
  });

  const {product} = await context.storefront.query<{
    product: ProductWithMetafields<
      ProductType & {selectedVariant?: ProductVariant}
    >;
  }>(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  const firstVariant = product.variants.nodes[0];
  const selectedVariant = product.selectedVariant ?? firstVariant;

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: product.vendor,
    price: selectedVariant.price.amount,
  };

  return defer({
    product: {...product, productType:'Beds and bases'},
    analytics: {
      pageType: AnalyticsPageType.product,
      resourceId: product.id,
      products: [productAnalytics],
      totalValue: parseFloat(selectedVariant.price.amount),
    },
  });
}

export default function Product() {
  const {product, analytics} = useLoaderData<typeof loader>();
  const {media, title, vendor, descriptionHtml} = product;
  const [productImagesSwiper, setProductImagesSwiper] = useState<
    SwiperType | undefined
  >(undefined);
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariant | undefined
  >(undefined);
  const [selectedImage, setSelectedImage] = useState<ImageType>(
    product.featuredImage || product.images?.nodes[0],
  );
  const [quantity, setQuantity] = useState<number>(1);

  const onClickNavigation = (navImage: ImageType, index: number) => {
    setSelectedImage(navImage);
    productImagesSwiper?.slideTo(index);
  };
  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full pb-6 flex flex-wrap justify-between">
      <div className="w-full lg:w-9/12">
        <div className="product-image w-full relative h-[350px] sm:h-[480px] md:h-[500px] lg:h-auto aspect-[100/55]">
          {product.images && (
            <>
              <Swiper
                slidesPerView={1}
                loop
                onInit={(ev) => setProductImagesSwiper(ev)}
              >
                {product.images?.nodes.map(
                  (productImage: ImageType, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-[350px] sm:h-[480px] md:h-[500px] lg:h-auto aspect-[100/55]">
                        <Image
                          className="w-full h-full object-cover"
                          data={productImage}
                          sizes="1500"
                          widths={[
                            350, 460, 580, 660, 780, 900, 1100, 1240, 1360,
                            1440,
                          ]}
                        />
                      </div>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
              <div className="imageNavigation absolute top-[25px] left-5 w-10 md:w-16 z-10">
                {product.images.nodes.map(
                  (navImage: ImageType, index: number) => (
                    <Image
                      key={index}
                      data={navImage}
                      sizes="60"
                      widths={[60]}
                      alt={
                        navImage.altText ||
                        `${product.handle}-nav-image-${index}`
                      }
                      onClick={() => onClickNavigation(navImage, index)}
                      className={`${
                        navImage == selectedImage
                          ? 'border border-dark-blue'
                          : 'border-0'
                      } cursor-pointer mb-2`}
                    />
                  ),
                )}
              </div>
            </>
          )}
          <div className="product-menu-bottom absolute right-0 left-0 bottom-0 bg-white z-10">
            <div className="w-full flex justify-center border border-border cursor-pointer">
              <AnchorLink
                href="#productDetails"
                className={`text-xs font-semibold uppercase hidden md:flex items-center gap-2`}
                offset={100}
              >
                <span>Discover more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                    fill="#174860"
                  />
                </svg>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/12 bg-white lg:border-l-[30px] lg:border-[#f7f7f7] pb-3">
        <h1 className="product-title text-cusSubheading text-dark-blue font-semibold lg:text-[25px] mt-[15px] mb-[10px] p-5">
          {product.title}
        </h1>
        {/* Variant picker */}
        <Disclosure as="div" className="p-5 border-t border-[#dee2e6]">
          {({open}) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-[13px] text-dark-blue">
                <span>
                  {selectedVariant
                    ? selectedVariant.selectedOptions[0].value
                    : 'Select your size'}
                  <br />
                  <a href="#" className="text-8c8c8c text-xxs">
                    Sizes guide
                  </a>
                </span>
                <BsChevronDown
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="pt-3">
                {({close}) => (
                  <>
                    {flattenConnection(product.variants).map(
                      (variant: ProductVariant, index: number) => (
                        <div
                          className="flex items-center mb-4"
                          key={index}
                          onClick={() => {
                            setSelectedVariant(variant);
                            // close();
                          }}
                        >
                          <input
                            checked={variant == selectedVariant}
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-[#181a1b] bg-gray-100 border-gray-300 focus:text-[#181818] dark:text-red-200"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {variant.selectedOptions[0].value}
                          </label>
                        </div>
                        // <div
                        //   key={index}
                        //   className={`${
                        //     selectedVariant == variant ? 'bg-[#e9eced]' : ''
                        //   } border rounded-xs border-[#e9eced] mt-2 flex items-center cursor-pointer`}
                        //   onClick={() => {
                        //     setSelectedVariant(variant);
                        //     close();
                        //   }}
                        // >
                        //   <div className="grow pl-5 text-dark-blue text-[10px]">
                        //     {variant.selectedOptions[0].value}
                        //   </div>
                        // </div>
                      ),
                    )}
                  </>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="product-quantity p-5 border-t border-b border-[#dee2e6] uppercase flex justify-between items-center text-[13px] text-dark-blue">
          <span>Quantity</span>
          <div className="qty-form flex items-center">
            <button onClick={() => decreaseQty()}>
              <RxMinusCircled className="w-5 h-5 text-dark-blue" />
            </button>
            <input
              type="text"
              name="qty"
              className="w-10 border-0 p-0 text-center text-lg"
              value={quantity}
              onChange={() => {}}
            />
            <button onClick={() => increaseQty()}>
              <RxPlusCircled className="w-5 h-5 text-dark-blue" />
            </button>
          </div>
        </div>
        {selectedVariant && (
          <div className="product-price p-5 text-dark-blue text-cusSubheading lg:text-[20px]">
            <Money data={selectedVariant.price} />
          </div>
        )}
        {!selectedVariant && (
          <div className="text-dark-blue text-md mt-12 px-5">
            Select your size to show product price
          </div>
        )}
        <div className="product-actions px-5">
          {/* <button className="bg-light-blue py-3 w-full text-white text-xs hover:bg-btn-hover">BOK YOUR IN-STORE TRIAL</button> */}
          {selectedVariant ? (
            <>
              {selectedVariant.availableForSale && (
                <AddToCartButton
                  lines={[
                    {
                      merchandiseId: selectedVariant.id,
                      quantity: quantity,
                    },
                  ]}
                  className="bg-dark-blue border border-dark-blue py-3 w-full text-white text-xs uppercase mt-2 hover:bg-white hover:text-dark-blue"
                  data-test="add-to-cart"
                  analytics={{
                    products: [
                      {
                        ...analytics.products[0],
                        quantity: 1,
                      },
                    ],
                    totalValue: parseFloat(analytics.products[0].price),
                  }}
                >
                  <Text
                    as="span"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>ADD TO CART</span> <span>·</span>{' '}
                    <Money
                      withoutTrailingZeros
                      data={selectedVariant?.price!}
                      as="span"
                    />
                    {selectedVariant?.price?.amount &&
                      selectedVariant?.compareAtPrice?.amount &&
                      selectedVariant?.price?.amount <
                        selectedVariant?.compareAtPrice?.amount && (
                        <Money
                          withoutTrailingZeros
                          data={selectedVariant?.compareAtPrice!}
                          as="span"
                          className="opacity-50 strike"
                        />
                      )}
                  </Text>
                </AddToCartButton>
              )}

              {selectedVariant.availableForSale ? (
                <></>
              ) : (
                // <AddToCartButton
                //   lines={[
                //     {
                //       merchandiseId: selectedVariant.id,
                //       quantity: 1,
                //     },
                //   ]}
                //   className="bg-dark-blue border border-dark-blue py-3 w-full text-white text-xs uppercase mt-2 hover:bg-white hover:text-dark-blue"
                //   data-test="add-to-cart"
                //   analytics={{
                //     products: [
                //       {
                //         ...analytics.products[0],
                //         quantity: 1,
                //       },
                //     ],
                //     totalValue: parseFloat(analytics.products[0].price),
                //   }}
                // >
                //   <Text
                //     as="span"
                //     className="flex items-center justify-center gap-2"
                //   >
                //     <span>ADD TO CART</span> <span>·</span>{' '}
                //     <Money
                //       withoutTrailingZeros
                //       data={selectedVariant?.price!}
                //       as="span"
                //     />
                //     {selectedVariant?.price?.amount &&
                //       selectedVariant?.compareAtPrice?.amount &&
                //       selectedVariant?.price?.amount <
                //         selectedVariant?.compareAtPrice?.amount && (
                //         <Money
                //           withoutTrailingZeros
                //           data={selectedVariant?.compareAtPrice!}
                //           as="span"
                //           className="opacity-50 strike"
                //         />
                //       )}
                //   </Text>
                // </AddToCartButton>
                <h3>Out of Stock</h3>
                // <p className='text-xxs'>Currently out of stock. The product will be delivered within 10 days.</p>
                // <button
                //   className="bg-dark-blue py-3 w-full text-white text-xs mt-2 disabled:opacity-70"
                //   disabled
                // >
                //   ADD TO CART
                // </button>
              )}
            </>
          ) : (
            <>
              <button
                className="bg-dark-blue py-3 w-full text-white text-xs mt-2 disabled:opacity-70"
                disabled
              >
                ADD TO CART
              </button>
              <div className='text-center pt-1'>
                <a href="/shipping-methods" className='text-gray-400 text-xs underline'>Free Shipping</a>
                &nbsp;&nbsp;
                <a href="/warranty" className='text-gray-400 text-xs underline'>Warranty and return policy</a>
              </div>
            </>
      )}
        </div>
        <div className='absolute px-5 py-8 bg-white'>
          <img src={affirm_banner}></img>
        </div>
      </div>
      <div
        className="lg:px-0 px-0 w-full border-t-[30px] border-[#f7f7f7]"
        id="productDetails"
      >
        <ProductContent
          product={product as ProductWithMetafields<ProductType>}
        />
        <WorldMap keyframe={''} />
      </div>

      {/* <Section padding="x" className="px-0">
          <div className="grid items-start md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
            <ProductGallery
              media={media.nodes}
              className="w-screen md:w-full lg:col-span-2"
            />
            <div className="sticky md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll">
              <section className="flex flex-col w-full max-w-xl gap-8 p-6 md:mx-auto md:max-w-sm md:px-0">
                <div className="grid gap-2">
                  <Heading as="h1" className="whitespace-normal">
                    {title}
                  </Heading>
                  {vendor && (
                    <Text className={'opacity-50 font-medium'}>{vendor}</Text>
                  )}
                </div>
                <ProductForm />
                <div className="grid gap-4 py-4">
                  {descriptionHtml && (
                    <ProductDetail
                      title="Product Details"
                      content={descriptionHtml}
                    />
                  )}
                </div>
              </section>
            </div>
          </div>
        </Section> */}
      {/* <Section className="lg:px-0 px-0">
          <ProductContent product={product} collectionID='' />
        </Section> */}
      {/* <Suspense fallback={<Skeleton className="h-32" />}>
          <Await
            errorElement="There was a problem loading related products"
            resolve={recommended}
          >
            {(products) => (
              <ProductSwimlane title="Related Products" products={products} />
            )}
          </Await>
        </Suspense> */}
      {/* <WorldMap keyframe={''} /> */}
    </div>
  );
}

export function ProductForm() {
  const {product, analytics} = useLoaderData<typeof loader>();

  const [currentSearchParams] = useSearchParams();
  // const transition = useTransition();
  const location = useLocation();
  /**
   * We update `searchParams` with in-flight request data from `transition` (if available)
   * to create an optimistic UI, e.g. check the product option before the
   * request has completed.
   */
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  const firstVariant = product.variants.nodes[0];

  /**
   * We're making an explicit choice here to display the product options
   * UI with a default variant, rather than wait for the user to select
   * options first. Developers are welcome to opt-out of this behavior.
   * By default, the first variant's options are used.
   */
  const searchParamsWithDefaults = useMemo<URLSearchParams>(() => {
    const clonedParams = new URLSearchParams(searchParams);

    for (const {name, value} of firstVariant.selectedOptions) {
      if (!searchParams.has(name)) {
        clonedParams.set(name, value);
      }
    }

    return clonedParams;
  }, [searchParams, firstVariant.selectedOptions]);

  /**
   * Likewise, we're defaulting to the first variant for purposes
   * of add to cart if there is none returned from the loader.
   * A developer can opt out of this, too.
   */
  const selectedVariant = product.selectedVariant ?? firstVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;

  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;

  const productAnalytics: ShopifyAnalyticsProduct = {
    ...analytics.products[0],
    quantity: 1,
  };

  return (
    <div className="grid gap-10">
      <div className="grid gap-4">
        <ProductOptions
          options={product.options}
          searchParamsWithDefaults={searchParamsWithDefaults}
        />
        {selectedVariant && (
          <div className="grid items-stretch gap-4">
            <AddToCartButton
              lines={[
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                },
              ]}
              variant={isOutOfStock ? 'secondary' : 'primary'}
              data-test="add-to-cart"
              analytics={{
                products: [productAnalytics],
                totalValue: parseFloat(productAnalytics.price),
              }}
            >
              {isOutOfStock ? (
                <Text>Sold out</Text>
              ) : (
                <Text
                  as="span"
                  className="flex items-center justify-center gap-2"
                >
                  <span>ADD TO CART</span> <span>·</span>{' '}
                  <Money
                    withoutTrailingZeros
                    data={selectedVariant?.price!}
                    as="span"
                  />
                  {isOnSale && (
                    <Money
                      withoutTrailingZeros
                      data={selectedVariant?.compareAtPrice!}
                      as="span"
                      className="opacity-50 strike"
                    />
                  )}
                </Text>
              )}
            </AddToCartButton>
            {/*
            {!isOutOfStock && (
              <ShopPayButton variantIds={[selectedVariant?.id!]} />
            )}
            */}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductOptions({
  options,
  searchParamsWithDefaults,
}: {
  options: ProductType['options'];
  searchParamsWithDefaults: URLSearchParams;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      {options
        .filter((option) => option.values.length > 1)
        .map((option) => (
          <div
            key={option.name}
            className="flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0"
          >
            <Heading as="legend" size="lead" className="min-w-[4rem]">
              {option.name}
            </Heading>
            <div className="flex flex-wrap items-baseline gap-4">
              {/**
               * First, we render a bunch of <Link> elements for each option value.
               * When the user clicks one of these buttons, it will hit the loader
               * to get the new data.
               *
               * If there are more than 7 values, we render a dropdown.
               * Otherwise, we just render plain links.
               */}
              {option.values.length > 7 ? (
                <div className="relative w-full">
                  <Listbox>
                    {({open}) => (
                      <>
                        <Listbox.Button
                          ref={closeRef}
                          className={clsx(
                            'flex items-center justify-between w-full py-3 px-4 border border-primary',
                            open
                              ? 'rounded-b md:rounded-t md:rounded-b-none'
                              : 'rounded',
                          )}
                        >
                          <span>
                            {searchParamsWithDefaults.get(option.name)}
                          </span>
                          <IconCaret direction={open ? 'up' : 'down'} />
                        </Listbox.Button>
                        <Listbox.Options
                          className={clsx(
                            'border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b',
                            open ? 'max-h-48' : 'max-h-0',
                          )}
                        >
                          {option.values.map((value) => (
                            <Listbox.Option
                              key={`option-${option.name}-${value}`}
                              value={value}
                            >
                              {({active}) => (
                                <ProductOptionLink
                                  optionName={option.name}
                                  optionValue={value}
                                  className={clsx(
                                    'text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer',
                                    active && 'bg-primary/10',
                                  )}
                                  searchParams={searchParamsWithDefaults}
                                  onClick={() => {
                                    if (!closeRef?.current) return;
                                    closeRef.current.click();
                                  }}
                                >
                                  {value}
                                  {searchParamsWithDefaults.get(option.name) ===
                                    value && (
                                    <span className="ml-2">
                                      <IconCheck />
                                    </span>
                                  )}
                                </ProductOptionLink>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>
              ) : (
                <>
                  {option.values.map((value) => {
                    const checked =
                      searchParamsWithDefaults.get(option.name) === value;
                    const id = `option-${option.name}-${value}`;

                    return (
                      <Text key={id}>
                        <ProductOptionLink
                          optionName={option.name}
                          optionValue={value}
                          searchParams={searchParamsWithDefaults}
                          className={clsx(
                            'leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200',
                            checked ? 'border-primary/50' : 'border-primary/0',
                          )}
                        />
                      </Text>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        ))}
    </>
  );
}

function ProductOptionLink({
  optionName,
  optionValue,
  searchParams,
  children,
  ...props
}: {
  optionName: string;
  optionValue: string;
  searchParams: URLSearchParams;
  children?: ReactNode;
  [key: string]: any;
}) {
  const {pathname} = useLocation();
  const isLangPathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  // fixes internalized pathname
  const path = isLangPathname
    ? `/${pathname.split('/').slice(2).join('/')}`
    : pathname;

  const clonedSearchParams = new URLSearchParams(searchParams);
  clonedSearchParams.set(optionName, optionValue);

  return (
    <Link
      {...props}
      preventScrollReset
      prefetch="intent"
      replace
      to={`${path}?${clonedSearchParams.toString()}`}
    >
      {children ?? optionValue}
    </Link>
  );
}

function ProductDetail({
  title,
  content,
  learnMore,
}: {
  title: string;
  content: string;
  learnMore?: string;
}) {
  return (
    <Disclosure key={title} as="div" className="grid w-full gap-2">
      {({open}) => (
        <>
          <Disclosure.Button className="text-left">
            <div className="flex justify-between">
              <Text size="lead" as="h4">
                {title}
              </Text>
              <IconClose
                className={clsx(
                  'transition-transform transform-gpu duration-200',
                  !open && 'rotate-[45deg]',
                )}
              />
            </div>
          </Disclosure.Button>

          <Disclosure.Panel className={'pb-4 pt-2 grid gap-2'}>
            <div
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{__html: content}}
            />
            {learnMore && (
              <div className="">
                <Link
                  className="pb-px border-b border-primary/30 text-primary/50"
                  to={learnMore}
                >
                  Learn more
                </Link>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      description
      descriptionHtml
      options {
        name
        values
      }
      technology: metafield(namespace: "custom", key: "technology") {
        value
      }
      benefits: metafield(namespace: "custom", key: "benefits") {
        value
      }
      height: metafield(namespace: "custom", key: "height") {
        value
      }
      comfortDescription: metafield(namespace: "custom", key: "comfort_description") {
        value
      }
      shapeAndSize: metafield(namespace: "custom", key: "shape_and_size") {
        value
      }
      headline: metafield(namespace: "custom", key: "headline") {
        value
      }
      productId: metafield(namespace: "custom", key: "product_id") {
        value
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      images(first: 10) {
        nodes {
          src
          url
          width
          height
          altText
        }
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 10) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

async function getRecommendedProducts(
  storefront: Storefront,
  productId: string,
) {
  const products = await storefront.query<{
    recommended: ProductType[];
    additional: ProductConnection;
  }>(RECOMMENDED_PRODUCTS_QUERY, {
    variables: {productId, count: 12},
  });

  invariant(products, 'No data returned from Shopify API');

  const mergedProducts = products.recommended
    .concat(products.additional.nodes)
    .filter(
      (value, index, array) =>
        array.findIndex((value2) => value2.id === value.id) === index,
    );

  const originalProduct = mergedProducts
    .map((item: ProductType) => item.id)
    .indexOf(productId);

  mergedProducts.splice(originalProduct, 1);

  return mergedProducts;
}
