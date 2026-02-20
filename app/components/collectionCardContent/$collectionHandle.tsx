import { useLoaderData } from '@remix-run/react';
import {
  AnalyticsPageType,
  SeoHandleFunction,
  flattenConnection,
} from '@shopify/hydrogen';
import {
  Product as ProductType,
  Collection as CollectionType,
} from '@shopify/hydrogen/storefront-api-types';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import { CollectionHeading } from '~/components/CollectionHeading';
import { CollectionLinks } from '~/components/CollectionLinks';
import { ProductDetails } from '~/components/ProductDetails';
import { TestMattressWidget } from '~/components/TestMattressWidget';
import { PRODUCT_CARD_FRAGMENT } from '~/data/fragments';
import { CollectionWithMetafields, ContentfulCollection } from '~/lib/type';

const seo: SeoHandleFunction<typeof loader> = ({ data }) => ({
  title: data.collection.title,
  description: 'Product category',
});

export async function loader({ params, request, context }: LoaderArgs) {
  const { collectionHandle } = params;
  invariant(collectionHandle, 'Missing productType param');

  const { collection } = await context.storefront.query<{
    collection: CollectionWithMetafields<CollectionType>;
  }>(COLLECTION_QUERY, {
    variables: {
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
      handle: collectionHandle,
    },
  });

  if (!collection) {
    throw new Response(null, { status: 404 });
  }

  const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
  const CONTENTFUL_ACCESS_TOKEN = 'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';

  const contentfulEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.comfortLevels,fields.name&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=collection`;

  const response = await fetch(contentfulEndpoint).then((res) => {
    return res.json();
  });
  let contentfulCollections = response as unknown as ContentfulCollection;

  return json({
    contentfulCollections,
    collection,
    analytics: {
      pageType: AnalyticsPageType.listCollections,
      collectionHandle,
      resourceId: collection.id,
    },
  });
}

export default function CategoryCollections() {
  const { contentfulCollections, collection } = useLoaderData<typeof loader>();

  const getComfortLevels = () => {
    const comfortLevels: {
      name: string;
      color: string;
    }[] = [];
    let productKey: 'mattressId' | 'pillowId' | 'topperId';
    productKey = 'mattressId';

    if (collection[productKey] != null) {
      const contentfulCollectionItem = contentfulCollections?.items?.find(
        (item) => item.fields.name == collection[productKey].value,
      );
      if (
        contentfulCollectionItem &&
        contentfulCollectionItem.fields.comfortLevels
      ) {
        contentfulCollectionItem.fields.comfortLevels.forEach(
          (comfortLevel) => {
            const item = contentfulCollections?.includes?.Entry?.find(
              (link) => link.sys.id === comfortLevel.sys.id,
            );
            if (item && item.fields) {
              comfortLevels.push(item.fields);
            }
          },
        );

        return comfortLevels;
      }
      return undefined;
    }
  };

  const sortProductsByType = (products: ProductType[]): ProductType[] => {
    let _products: ProductType[] = [];
    _products = [..._products, ...products.filter((product: ProductType) => product.productType === "Mattress")];
    _products = [..._products, ...products.filter((product: ProductType) => product.productType === "Pillow")];
    _products = [..._products, ...products.filter((product: ProductType) => product.productType === "Beds and Bases")];
    _products = [..._products, ...products.filter((product: ProductType) => product.productType === "Topper")];
    return _products;
  }

  return (
    <>
      <div
        className={`relative h-banner bg-center bg-cover`}
        style={{ backgroundImage: `url('${collection.image?.url}')` }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-between">
          <span className="mt-32 text-white text-5xl font-semibold text-center" style={{ textShadow: "1px 1px 1px gray" }}>
            {collection.title} Collection
          </span>
          <span className="relative">
            <p className="text-white text-lg font-medium mb-2">
              Discover this collection
            </p>
            <div className="border-r border-white h-20 mx-auto w-[1px]"></div>
          </span>
        </div>
      </div>
      <div className="px-3 sm:container py-16">
        <div className="pb-10 text-[#212529] text-lg text-left px-10 lg:px-20 xl:px-32 font-light max-w-4xl mx-auto border-b border-border">
          {collection.description}
        </div>
        <CollectionHeading heading={collection.title} showTitle={false} />
        <div className="flex flex-row flex-wrap justify-start">
          {collection &&
            sortProductsByType(collection.products.nodes as ProductType[]).map(
              (product: ProductType, index: number) => (
                <ProductDetails
                  product={product}
                  collection={collection as CollectionType}
                  key={index}
                  comfortLevels={getComfortLevels()}
                />
              ),
            )}
        </div>
      </div>
      <CollectionLinks />
      <TestMattressWidget />
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
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        url
        width
        height
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
      collectionId: metafield(namespace: "custom", key: "collection_id") {
        value
      }
      pillowId: metafield(namespace: "custom", key: "pillow_id") {
        value
      }
      pillowSummary: metafield(namespace: "custom", key: "pillow_summary") {
        value
      }
      pillowCoverImage: metafield(namespace: "custom", key: "pillow_cover_image") {
        value
      }
      topperId: metafield(namespace: "custom", key: "topper_id") {
        value
      }
      topperSummary: metafield(namespace: "custom", key: "topper_summary") {
        value
      }
      topperCoverImage: metafield(namespace: "custom", key: "topper_cover_image") {
        value
      }
      products(
        first: 100
      ) {
        nodes {
          ...ProductCard
          discountPercent: metafield(namespace: "custom", key: "discount_percent") {
            value
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
