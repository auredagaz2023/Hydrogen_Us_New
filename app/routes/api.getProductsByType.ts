import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {flattenConnection} from '@shopify/hydrogen';
import {ProductConnection} from '@shopify/hydrogen/storefront-api-types';

/**
 * Fetch a given set of products from the storefront API
 * @param count
 * @param query
 * @param reverse
 * @param sortKey
 * @returns Product[]
 * @see https://shopify.dev/api/storefront/2023-01/queries/products
 */

export async function loader({params, request, context}: LoaderArgs) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const productType = searchParams.get('productType') ?? 'Topper';
  
    const {products} = await context.storefront.query<{
      products: ProductConnection;
    }>(PRODUCTS_QUERY, {
      variables: {
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
        query: `product_type:'${productType}'`,
      },
    });
  
    if (!products) {
      throw new Response(null, {status: 404});
    }
  
    const productNodes = flattenConnection(products);
  
    return json({
      productNodes,
      productType,
    });
  }

const PRODUCTS_QUERY = `#graphql
  query productsByProductType(
    $query: String
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    products(
      first: 10,
      query: $query
    ) {
      nodes {
        title
        description
        handle
        featuredImage {
          url
          altText
        }
        collections(first:10) {
          nodes {
            handle
          }
        }
        productType
        discountPercent: metafield(namespace: "custom", key: "discount_percent") {
          value
        }
        variants(first: 100) {
          nodes {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;