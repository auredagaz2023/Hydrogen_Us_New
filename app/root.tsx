import {
  defer,
  type LinksFunction,
  type MetaFunction,
  type AppLoadContext,
  LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  // useCatch,
  useRouteLoaderData,
  useLoaderData,
  useMatches,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import {
  ShopifySalesChannel,
  // Seo,
  type SeoHandleFunction,
  getShopAnalytics,
} from '@shopify/hydrogen';
import {Layout} from '~/components';
import {GenericError} from './components/GenericError';
import {NotFound} from './components/NotFound';

import styles from '../app/styles/app.css';
import customSliderStyles from 'public/styles/slick-custom.css';
import customStyles from 'public/styles/custom-styles.css';
import favicon from '../public/favicon.svg';

import {DEFAULT_LOCALE, parseMenu, type EnhancedMenu} from './lib/utils';
import invariant from 'tiny-invariant';
import {Shop, Cart} from '@shopify/hydrogen/storefront-api-types';
import {useAnalytics} from '~/hooks/useAnalytics';

import {seoPayload} from '~/lib/session.server'


// import * as gtag from './gtags.client';
// import {useLocation} from 'react-use';
// import {useEffect, useRef} from 'react';

const seo: SeoHandleFunction<typeof loader> = ({data, pathname}) => ({
  // title: data?.layout?.shop?.name,
  title: 'Magniflex US | Online Store',
  // titleTemplate: '%s | Hydrogen Store',
  // description: data?.layout?.shop?.description,
  handle: '@shopify',
  url: 'https://magniflex.us',
  // url: `https://hydrogen.shop${pathname}`,
});

// export const handle = {
//   seo: {
//     title: 'Magniflex USA store.',
//     titleTemplate: 'Magniflex USA store with 60 years of experience.',
//     description:
//       'This is Magniflex usa store with 60 years of experience and sell mattress, collections, pillows and beds.',
//     handle: '@shopify',
//     url: `https://magniflex.us`,
//   },
// };

export const handle = {
  seo,
};

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {rel: 'stylesheet', href: customStyles},
    {rel: 'stylesheet', href: customSliderStyles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
    },
  ];
};

// export const meta: MetaFunction = () => ({
//   charset: 'utf-8',
//   viewport: 'width=device-width,initial-scale=1',
// });
export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{charset: 'utf-8', viewport: 'width=device-width,initial-scale=1',}];
};

export async function loader({request, context}: LoaderFunctionArgs) {
  const {storefront, cart, env} = context;
  // const isLoggedInPromise = context.customerAccount?.isLoggedIn(); 
  const [cartId, layout] = await Promise.all([
    context.session.get('cartId'),
    getLayoutData(context),
  ]);

  const seo = seoPayload.root({shop: layout.shop, url: request.url});

  return defer({
    shop: getShopAnalytics({
      storefront: context.storefront,
      publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
    }),
    consent: {
      checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
      storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
    },
    // isLoggedIn: isLoggedInPromise,
    // layout,
    selectedLocale: storefront.i18n,
    // cart: cart.get(),
    seo,
    layout,
    // selectedLocale: context.storefront.i18n,
    cart: cartId ? getCart(context, cartId) : undefined,
    analytics: {
      shopifySalesChannel: ShopifySalesChannel.hydrogen,
      shopId: layout.shop.id,
    },
  },
  {
    headers: {
      'Set-Cookie': await context.session.commit(),
    },
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  const locale = data.selectedLocale ?? DEFAULT_LOCALE;
  const hasUserConsent = true;

  useAnalytics(hasUserConsent, locale);

  // const location = useLocation();
  // const lastLocationKey = useRef<string>('');

  // useEffect(() => {
  //   if (lastLocationKey.current === location.key) return;
  //   lastLocationKey.current = location.key;

  //   if (data.analytics.gaTrackingId) {
  //     gtag.pageview(location.pathname, data.analytics.gaTrackingId);
  //   }
  // }, [location, data.analytics.gaTrackingId]);

  return (
    <html lang={locale.language}>
      <head>
        {/* <Seo /> */}
        <Meta />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Links />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8ZQTL2qrSTWiK6gnZ5uYotq5LdfsGJPw&libraries=places"></script>
        {/* <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/26099639.js"
        ></script> */}
        <script src="//code.tidio.co/lrlmjfwi8cxioagyk9wddkzfw9ktmh0m.js" async></script>
      </head>
      <body>
        <Layout
          layout={data.layout as LayoutData}
          key={`${locale.language}-${locale.country}`}
        >
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const [root] = useMatches();
  // const caught = useCatch();
  const routeError = useRouteError()
  const isNotFound = routeError.status === 404;
  const locale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const isRouteError = isRouteErrorResponse(routeError);
  let title = 'Error';
  let pageType = 'page';

  if (isRouteError) {
    title = 'Not found';
    if (routeError.status === 404) pageType = routeError.data || pageType;
  }

  return (
    <html lang={locale.language}>
      <head>
        <title>{isNotFound ? 'Not found' : 'Error'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout
          layout={root?.data?.layout}
          key={`${locale.language}-${locale.country}`}
        >
          {isNotFound ? (
            <NotFound type={pageType} />
          ) : (
            <GenericError
              error={{message: `${routeError.status} ${routeError.data}`}}
            />
          )}
        </Layout>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P40TSPJNYM"
        ></script> */}
        {/* <script> 
          window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-P40TSPJNYM'); 
        </script> */}
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({error}: {error: Error}) {
  const [root] = useMatches();
  const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE;

  return (
    <html lang={locale.language}>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout layout={root?.data?.layout}>
          <GenericError error={error} />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layoutMenus(
    $language: LanguageCode
    $headerMenuHandle: String!
    $footerMenuHandle: String!
  ) @inContext(language: $language) {
    shop {
      id
      name
      description
    }
    headerMenu: menu(handle: $headerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
    footerMenu: menu(handle: $footerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
  }
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
`;

export interface LayoutData {
  headerMenu: EnhancedMenu;
  footerMenu: EnhancedMenu;
  shop: Shop;
  cart?: Promise<Cart>;
}

async function getLayoutData({storefront}: AppLoadContext) {
  const HEADER_MENU_HANDLE = 'main-menu';
  const FOOTER_MENU_HANDLE = 'footer';

  const data = await storefront.query<LayoutData>(LAYOUT_QUERY, {
    variables: {
      headerMenuHandle: HEADER_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
      language: storefront.i18n.language,
    },
  });

  invariant(data, 'No data returned from Shopify API');

  /*
    Modify specific links/routes (optional)
    @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
    e.g here we map:
      - /blogs/news -> /news
      - /blog/news/blog-post -> /news/blog-post
      - /collections/all -> /products
  */
  const customPrefixes = {BLOG: '', CATALOG: 'products'};

  const headerMenu = data?.headerMenu
    ? parseMenu(data.headerMenu, customPrefixes)
    : undefined;

  const footerMenu = data?.footerMenu
    ? parseMenu(data.footerMenu, customPrefixes)
    : undefined;

  return {shop: data.shop, headerMenu, footerMenu};
}

const CART_QUERY = `#graphql
  query CartQuery($cartId: ID!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartFragment
    }
  }

  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...MoneyFragment
              }
              price {
                ...MoneyFragment
              }
              requiresShipping
              title
              image {
                ...ImageFragment
              }
              product {
                handle
                title
                id
                upsellingMessage: metafield(namespace: "custom", key: "upselling_message") {
                  value
                }
                discountPercent: metafield(namespace: "custom", key: "discount_percent") {
                  value
                }
              }
              discountPercent: metafield(namespace: "custom", key: "discount") {
                value
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...MoneyFragment
      }
      totalAmount {
        ...MoneyFragment
      }
      totalDutyAmount {
        ...MoneyFragment
      }
      totalTaxAmount {
        ...MoneyFragment
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
    }
    discountAllocations {
      discountedAmount {
        ...MoneyFragment
      }
    }
  }

  fragment MoneyFragment on MoneyV2 {
    currencyCode
    amount
  }

  fragment ImageFragment on Image {
    id
    url
    altText
    width
    height
  }
`;

export async function getCart({storefront}: AppLoadContext, cartId: string) {
  invariant(storefront, 'missing storefront client in cart query');

  const {cart} = await storefront.query<{cart?: Cart}>(CART_QUERY, {
    variables: {
      cartId,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
    cache: storefront.CacheNone(),
  });

  return cart;
}
