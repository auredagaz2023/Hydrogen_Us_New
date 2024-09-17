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
    title: 'Shop Magniflex Collections - Explore Our Premium Sleep Solutions',
    titleTemplate:
      'Shop Magniflex Collections - Explore Our Premium Sleep Solutions',
    description:
      "Explore and shop Magniflex's premium mattress collections, elevating your sleep experience with luxurious comfort and uncompromising quality",
    handle: '@shopify',
    url: `https://magniflex.us/collections`,
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
  return [{
    title: 'All Collections',
  }];
};

export default function Collections() {
  const {collections} = useLoaderData<typeof loader>();

  return (
    <>
      {/* <div className="w-full relative h-[750px] bg-[url('../assets/bg-collezione-classico.jpg')] bg-center bg-cover">
        <div className="container h-full flex items-center justify-center">
          <p className="text-white text-center text-heading lg:text-50">Magnistretch Collection</p>
        </div>
        <div className="absolute bottom-0 flex justify-center h-[70px] w-full">
          <a href="#scrollanchor" className="text-white text-sm uppercase after:h-[40px] after:absolute after:bottom-0 after:border-l after:border-white after:left-1/2">Discover collection</a>
        </div>
      </div> */}
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
        {/* <div className="w-full lg:w-10/12 xxl:px-5/12 text-center mx-auto pb-16 md:pb-24 lg:pb-28">
          <p className="uppercase text-gold text-cusSubheading">
          Stretch your body and mind
          </p>
          <p className="text-dark-blue text-[20px] py-5">
            At night, your brain recharges with new strength, your memory gathers all thoughts and ideas, and now your spinal column and muscles can stretch and decompress like never before. The MagniStretch Line is your spine's dream come true, thanks to its ability to stretch and decompress it all through the night.
          </p>
        </div> */}
        <CollectionHeading heading="Collections" />
        <div className="flex flex-row flex-wrap justify-start">
          {collections.nodes.map((collection, index) => (
            <CollectionCard
              collection={collection as CollectionWithMetafields<Collection>}
              key={index}
            />
          ))}
        </div>
      </div>
      {/* <div className='relative h-[435px] lg:h-banner-sm bg-[url("../assets/carousel-category-item.jpg")] bg-center bg-cover'>
        <div className="absolute bottom-[14%] ml-[3%] mb-3 text-white text-sm">
          01 | 01 ---
        </div>
      </div>
      <div className="px-3 sm:container py-16 lg:py-24">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 xxl:w-1/4 px-3 xl:px-6">
            <p className="text-gold mb-5 text-cusSubheading">
              The energy of technology
            </p>
          </div>
          <div className="w-full lg-w-7/12 xl:w-8/12 px-3 xl:px-6">
            <div className="text-dark-blue">
              <p>
                "Sleeping is already a pleasure, but stretching your back while
                sleeping can make waking up the following day an even more
                wonderful experience. Once you try it, you won't want to go
                back.”
              </p>
              <strong>Giorgio Chiellini, an Italian football champion.</strong>
              <p>
                “With MagniStretch, I've discovered the pleasure of stretching
                as a form of relaxation while I sleep.”{' '}
              </p>
              <strong>
                Stefano Tonut, a player on the Italian national basketball team
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div>
          */}
      <CollectionLinks />

      <div>
        <TestMattressWidget />
      </div>
      {/* <PageHeader heading="Collections" />
      <Section>
        <Pagination connection={collections}>
          {({
            endCursor,
            hasNextPage,
            hasPreviousPage,
            nextPageUrl,
            nodes,
            prevPageUrl,
            startCursor,
            nextLinkRef,
            isLoading,
          }) => (
            <>
              {hasPreviousPage && (
                <div className="flex items-center justify-center mt-6">
                  <Button
                    to={prevPageUrl}
                    variant="secondary"
                    width="full"
                    prefetch="intent"
                    disabled={!isLoading}
                    state={{
                      pageInfo: {
                        endCursor,
                        hasNextPage,
                        startCursor,
                      },
                      nodes,
                    }}
                  >
                    {isLoading ? 'Loading...' : 'Previous products'}
                  </Button>
                </div>
              )}
              <Grid
                items={nodes.length === 3 ? 3 : 2}
                data-test="collection-grid"
              >
                {nodes.map((collection, i) => (
                  <CollectionCard
                    collection={collection as Collection}
                    key={collection.id}
                    loading={getImageLoadingPriority(i, 2)}
                  />
                ))}
              </Grid>
              {hasNextPage && (
                <div className="flex items-center justify-center mt-6">
                  <Button
                    ref={nextLinkRef}
                    to={nextPageUrl}
                    variant="secondary"
                    width="full"
                    prefetch="intent"
                    disabled={!isLoading}
                    state={{
                      pageInfo: {
                        endCursor,
                        hasPreviousPage,
                        startCursor,
                      },
                      nodes,
                    }}
                  >
                    {isLoading ? 'Loading...' : 'Next products'}
                  </Button>
                </div>
              )}
            </>
          )}
        </Pagination>
      </Section> */}
    </>
  );
}

function CollectionCard({
  collection,
}: {
  collection: Collection;
  loading?: HTMLImageElement['loading'];
}) {
  const vtPrices: MoneyV2[] = [];
  collection.products.nodes.forEach((product) => {
    product.variants.nodes.forEach((variant) => {
      vtPrices.push(variant.price);
    });
  });
  const minVtPrice = vtPrices.sort(
    (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
  )[0];

  let productDiscount: number = 0;
  collection.products.nodes.forEach((product: Product, index: number) => {
    const discountPercent = (product as ProductWithMetafields<Product>)
      .discountPercent;
    if (discountPercent && discountPercent.value > productDiscount)
      productDiscount = discountPercent.value;
  });

  if (collection.title.includes('test')) return null;

  return (
    <div className="w-full px-3 xl:px-6 md:w-1/2 lg:w-4/12 mt-6 mb-12 ">
      <div className="collection-image w-full aspect-[10/7] relative">
        {collection.image && (
          <Link to={`/collections/${collection.handle}`}>
            <Image
              className="w-full h-full object-cover"
              data={collection.image}
              sizes="700"
              widths={[700]}
            />
          </Link>
        )}
        {productDiscount > 0 && (
          <div className="absolute left-0 top-5 bg-red-600 text-white flex justify-end w-40 uppercase px-4">
            Promo -{productDiscount}%
          </div>
        )}
      </div>
      <div className="collection-data px-2 py-6 xl:p-6">
        <Link
          to={`/collections/${collection.handle}`}
          className="block xl:h-[85px] collection-title text-cusSubheading font-semibold xl:text-28 text-dark-blue uppercase hover:text-[#b09987]"
        >
          {collection.title}
        </Link>
      </div>
      <div
        className="collection-description border-t border-border pt-5 mt-2 mb-5 text-[#212529] text-[14px] h-[7.5rem] overflow-hidden"
        dangerouslySetInnerHTML={{ __html: collection?.descriptionHtml }}
      ></div>
      {/* <div className="collection-description border-t border-border pt-5 mt-2 mb-5 text-[#212529] text-[14px] h-[7.5rem] overflow-hidden">
        {collection.description}
      </div> */}
      {minVtPrice && (
        <div className="collection-price border-t border-border pt-4 mb-2 mt-2 text-dark-blue text-sm font-semibold flex">
          Starting at&nbsp;&nbsp;
          {productDiscount == 0 ? (
            <Money data={minVtPrice} />
          ) : (
            <>
              <s>
                <Money data={minVtPrice} />
              </s>
              <span className="text-red-600 text-sm ml-2">
                <Money
                  data={{
                    ...minVtPrice,
                    amount: (
                      (parseInt(minVtPrice.amount) * (100 - productDiscount)) /
                      100
                    ).toString(),
                  }}
                />
              </span>
            </>
          )}
        </div>
      )}
      <div className="collection-actions flex flex-row justify-end items-center mt-4">
        <Link
          to={`/collections/${collection.handle}`}
          className="text-dark-blue text-sm uppercase py-2 px-8 border border-dark-blue font-semibold transition-all ease-in-out hover:bg-[#2f88b1] hover:border-[#2f88b1] hover:text-white"
        >
          Discover
        </Link>
      </div>
    </div>
  );
}

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
        descriptionHtml
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
