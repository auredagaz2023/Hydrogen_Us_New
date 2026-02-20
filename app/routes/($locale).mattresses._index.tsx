import { useLoaderData } from '@remix-run/react';
import {
  AnalyticsPageType,
  SeoHandleFunction,
  flattenConnection,
} from '@shopify/hydrogen';
import {
  Collection,
  CollectionConnection,
} from '@shopify/hydrogen/storefront-api-types';
import { LoaderFunctionArgs, json } from '@shopify/remix-oxygen';
import { useEffect, useState } from 'react';
import invariant from 'tiny-invariant';
import { CollectionDetails } from '~/components/CollectionDetails';
import { CollectionHeading } from '~/components/CollectionHeading';
import { CollectionLinks } from '~/components/CollectionLinks';
import { TestMattressWidget } from '~/components/TestMattressWidget';
import { CollectionWithMetafields, ContentfulCollection } from '~/lib/type';

export const handle = {
  seo: {
    title: 'Discover Italian Mattresses | Magniflex } Magniflex',
    titleTemplate: 'Discover Italian Mattresses | Magniflex } Magniflex',
    description:
      'Experience certified luxury with Italian-made Magniflex mattresses – the epitome of quality and comfort, crafted in Italy',
    handle: '@shopify',
    url: `https://magniflex.us/mattresses`,
  },
};

export async function loader({ params, request, context }: LoaderFunctionArgs) {
  const productType = 'Mattress';
  invariant(productType, 'Missing productType param');

  const { collections } = await context.storefront.query<{
    collections: CollectionConnection;
  }>(CATEGORY_QUERY, {
    variables: {
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!collections) {
    throw new Response(null, { status: 404 });
  }

  const collectionNodes = flattenConnection(collections);
  const filteredCollections = collectionNodes.filter((collectionNode) =>
    collectionNode.products.nodes.some(
      (productNode) => productNode.productType === productType,
    ),
  );

  if (filteredCollections.length == 0) {
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
    collections: filteredCollections,
    productType,
    analytics: {
      pageType: AnalyticsPageType.listCollections,
      productType,
    },
  });
}


export default function CategoryCollections() {
  const { contentfulCollections, collections, productType } =
    useLoaderData<typeof loader>();

  const [desktopBackground, setDesktopBackground] = useState<string | undefined>(undefined);
  const [mobileBackground, setMobileBackground] = useState<string | undefined>(undefined);

  const getComfortLevels = (
    collection: CollectionWithMetafields<Collection>,
  ) => {
    const comfortLevels: {
      name: string;
      color: string;
    }[] = [];
    let productKey: 'mattressId' | 'pillowId' | 'topperId';
    switch (productType) {
      case 'Mattress':
        productKey = 'mattressId';
        break;

      case 'Pillow':
        productKey = 'pillowId';
        break;

      case 'Topper':
        productKey = 'topperId';
        break;

      default:
        productKey = 'mattressId';
        break;
    }

    const contentfulCollectionItem = contentfulCollections?.items?.find(
      (item) => item.fields.name == collection[productKey]?.value,
    );
    if (
      contentfulCollectionItem &&
      contentfulCollectionItem.fields.comfortLevels
    ) {
      contentfulCollectionItem.fields.comfortLevels.forEach((comfortLevel) => {
        const item = contentfulCollections?.includes?.Entry?.find(
          (link) => link.sys.id === comfortLevel.sys.id,
        );
        if (item && item.fields) {
          comfortLevels.push(item.fields);
        } else {
          console.error('contentful error')
        }
      });
      return comfortLevels;
    }
    return undefined;
  };

  useEffect(() => {
    (async () => {
      const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
      const CONTENTFUL_ACCESS_TOKEN = 'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';
      const activePromotionsEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=activePromotions&fields.name=mxusa-active-promotions`;
      const promoRes: any = await fetch(activePromotionsEndpoint).then(res => {
        return res.json();
      });

      const promoDesktopItem = promoRes?.items[0]?.fields?.mattressesPromoBannerDesktop;
      const promoMobileItem = promoRes?.items[0]?.fields?.mattressesPromoBannerMobile;

      if (promoDesktopItem) {
        const promoDesktopImage = promoRes.includes.Asset.find((asset: any) => {
          return asset.sys.id === promoDesktopItem.sys.id;
        })
        if (promoDesktopImage?.fields?.file?.url) {
          setDesktopBackground(promoDesktopImage?.fields?.file?.url)
        }
      }

      if (promoMobileItem) {
        const promoMobileImage = promoRes.includes.Asset.find((asset: any) => {
          return asset.sys.id === promoMobileItem.sys.id;
        })
        if (promoMobileImage?.fields?.file?.url) {
          setMobileBackground(promoMobileImage?.fields?.file?.url)
        }
      }
    })();
  }, [])

  return (
    <>
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
        <CollectionHeading heading="Mattresses" />
        {desktopBackground && <img src={desktopBackground} className="hidden md:block w-full" alt="" />}
        {mobileBackground && <img src={mobileBackground} className='md:hidden block w-full' alt="" />}
        <div className="flex flex-row flex-wrap justify-start">
          {collections.map((collection, index) => (
            <CollectionDetails
              productType={productType}
              collection={collection as CollectionWithMetafields<Collection>}
              comfortLevels={getComfortLevels(
                collection as CollectionWithMetafields<Collection>,
              )}
              key={index}
            />
          ))}
        </div>
      </div>
      {productType == 'Mattress' && (
        <>
          <CollectionLinks />
          <TestMattressWidget />
        </>
      )}
    </>
  );
}

const CATEGORY_QUERY = `#graphql
  query Category(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collections(first: 100) {
      nodes {
        handle
        title
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
        products(first: 100) {
          nodes {
            title
            productType
            variants(first: 100) {
              nodes {
                price {
                  amount
                  currencyCode
                }
              }
            }
            discountPercent: metafield(namespace: "custom", key: "discount_percent") {
              value
            }  
          }
        }
      }
    }
  }
`;
