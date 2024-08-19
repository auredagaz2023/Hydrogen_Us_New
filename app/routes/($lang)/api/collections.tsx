import {json, type MetaFunction, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import type {
  Collection,
  CollectionConnection,
  MoneyV2,
  Product,
} from '@shopify/hydrogen/storefront-api-types';
import {Image, Money} from '@shopify/hydrogen';
import {
  Grid,
  Heading,
  PageHeader,
  Section,
  Link,
  Pagination,
  getPaginationVariables,
  Button,
} from '~/components';
import {getImageLoadingPriority} from '~/lib/const';
import {CollectionHeading} from '~/components/CollectionHeading';
import {CollectionDetails} from '~/components/CollectionDetails';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {CollectionLinks} from '~/components/CollectionLinks';
import {TestMattressWidget} from '~/components/TestMattressWidget';
import {CollectionWithMetafields, ProductWithMetafields} from '~/lib/type';
import CollectionReviewImage from '../../../assets/category-review-placeholder.jpg';

const PAGINATION_SIZE = 8;

export const handle = {
  seo: {
    title: 'All Collections',
  },
};

export const loader = async ({request, context: {storefront}}: LoaderArgs) => {
  const variables = getPaginationVariables(request, PAGINATION_SIZE);
  const {collections} = await storefront.query<{
    collections: CollectionConnection;
  }>(COLLECTIONS_QUERY, {
    variables: {
      ...variables,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  });

  return json({collections});
};

export const meta: MetaFunction = () => {
  return {
    title: 'All Collections',
  };
};

const COLLECTIONS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query Collections(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        id
        title
        description
        handle
        seo {
          description
          title
        }
        image {
          id
          url
          width
          height
          altText
        }
        mattressId: metafield(namespace: "custom", key: "mattress_id") {
          value
        }
        mattressSummary: metafield(namespace: "custom", key: "mattress_summary") {
          value
        }
        mattressCoverImage: metafield(namespace: "custom", key: "mattress_cover_image") {
          reference {
            ... on MediaImage {
              image {
                url
                width
                height
              }
            }
          }
        }
        pillowId: metafield(namespace: "custom", key: "pillow_id") {
          value
        }
        pillowSummary: metafield(namespace: "custom", key: "pillow_summary") {
          value
        }
        pillowCoverImage: metafield(namespace: "custom", key: "pillow_cover_image") {
          reference {
            ... on MediaImage {
              image {
                url
                width
                height
              }
            }
          }
        }
        topperId: metafield(namespace: "custom", key: "topper_id") {
          value
        }
        topperSummary: metafield(namespace: "custom", key: "topper_summary") {
          value
        }
        topperCoverImage: metafield(namespace: "custom", key: "topper_cover_image") {
          reference {
            ... on MediaImage {
              image {
                url
                width
                height
              }
            }
          }
        }
        products(
          first: 100
        ) {
          filters {
            id
            label
            type
            values {
              id
              label
              count
              input
            }
          }
          nodes {
            ...ProductCard
            discountPercent: metafield(namespace: "custom", key: "discount_percent") {
              value
            }  
          }
          pageInfo {
            hasNextPage
            endCursor
          }  
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
