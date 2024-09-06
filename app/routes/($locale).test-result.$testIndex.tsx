import {useFetcher, useLoaderData, useLocation} from '@remix-run/react';
import {Collection, Product} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {useEffect} from 'react';
import {CollectionLinks} from '~/components/CollectionLinks';
import {ProductDetails} from '~/components/ProductDetails';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {CollectionWithMetafields} from '~/lib/type';

export async function loader({params, request, context}: LoaderArgs) {
  const {testIndex} = params;
  const {collection} = await context.storefront.query<{
    collection: Collection;
  }>(COLLECTION_QUERY, {
    variables: {
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
      handle:
        testIndex == '2' ? 'teenager-test-result' : 'mattress-test-result',
    },
  });

  return json({
    collection,
  });
}

export default function TestResult() {
  const {collection} = useLoaderData<typeof loader>();

  const {data, submit} = useFetcher();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.tags) {
      submit(
        {
          tags: JSON.stringify(location.state.tags),
        },
        {
          action: '/api/productsByTags',
          method: 'post',
        },
      );
    }
  }, [submit, location.state]);

  return (
    <>
      <div className="flex flex-col align-start">
        <p className="px-3 xl:px-6 text-dark-blue text-2xl pt-6 font-semibold">
          We suggest the following mattresses (
          {data && data.products.nodes.length > 0
            ? data.products.nodes.length
            : 0}
          )
        </p>
        <div className="flex flex-row flex-wrap justify-start">
          {data && data.products.nodes.length > 0
            ? data.products.nodes.map((product: Product, index: number) => (
                <ProductDetails
                  product={product}
                  collection={product.collections.nodes[0] as Collection}
                  key={index}
                />
              ))
            : (collection.products.nodes as Product[]).map(
                (product: Product, index: number) => (
                  <ProductDetails
                    product={product}
                    collection={product.collections.nodes[0] as Collection}
                    key={index}
                  />
                ),
              )}
        </div>
      </div>
      <CollectionLinks />
    </>
  );
}

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      products(
        first: 100
      ) {
        nodes {
          ...ProductCard
          collections(first: 1) {
            nodes {
              handle
            }
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
        }
      }
    }
  }
`;
