import {json, type LoaderArgs} from '@shopify/remix-oxygen';
import {flattenConnection} from '@shopify/hydrogen';
import {
    Collection,
    CollectionConnection,
    Product,
  } from '@shopify/hydrogen/storefront-api-types';
import {ProductConnection} from '@shopify/hydrogen/storefront-api-types';
import {
    ContentfulParagraph,
    ContentfulPromoDesc,
    ContentfulPromotion,
  } from './($locale).types';

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
    const {collections} = await context.storefront.query<{
      collections: CollectionConnection;
    }>(COLLECTION_QUERY, {
      variables: {
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    });
  
    const collectionNodes = flattenConnection(collections);
  
    const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
    const CONTENTFUL_ACCESS_TOKEN = 'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';
  
    const contentfulEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.label,fields.coverImage,fields.discount,fields.title,fields.description,fields.ctaLabel,fields.productReference,fields.collectionReference,fields.urlReference&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=promotion`;
  
    const descContentfulEndpiont = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.description&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=activePromotions`;
  
    const response = await fetch(contentfulEndpoint).then((res) => {
      return res.json();
    });
  
    const descResponse = await fetch(descContentfulEndpiont).then((res) => {
      return res.json();
    });
  
    return json({
      collections: collectionNodes,
      promotions: response as unknown as ContentfulPromotion,
      promoDesc: descResponse as unknown as ContentfulPromoDesc,
    });
  }


  const COLLECTION_QUERY = `#graphql
    query Collections(
        $country: CountryCode
        $language: LanguageCode
    ) @inContext(country: $country, language: $language) {
        collections(first: 100) {
            nodes {
                handle
                collectionId: metafield(namespace: "custom", key: "collection_id") {
                    value
                }
                products(first: 100) {
                    nodes {
                        handle
                        productId: metafield(namespace: "custom", key: "product_id") {
                            value
                        }
                    }
                }
            }
        }
    }
`;
