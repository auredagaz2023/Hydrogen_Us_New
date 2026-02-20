import { useLoaderData, useSearchParams } from '@remix-run/react';
import {
  AnalyticsPageType,
  flattenConnection,
} from '@shopify/hydrogen';
import {
  Collection,
  CollectionConnection,
} from '@shopify/hydrogen/storefront-api-types';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import { CollectionDetails } from '~/components/CollectionDetails';
import { CollectionHeading } from '~/components/CollectionHeading';
import { CollectionLinks } from '~/components/CollectionLinks';
import { TestMattressWidget } from '~/components/TestMattressWidget';
import { CollectionWithMetafields, ContentfulCollection } from '~/lib/type';

import { useEffect, useState } from 'react';

export const handle = {
  seo: {
    title: 'Shop Magniflex Premium Accessories | Magniflex | Magniflex',
    titleTemplate: 'Shop Magniflex Premium Accessories | Magniflex | Magniflex',
    description:
      'Discover the perfect blend of Italian craftsmanship and comfort with our 100% Made in Italy Memofoam pillow. OEKO-TEX Certified and designed to adapt to your body, it relieves daily muscle tensions. ',
    handle: '@shopify',
    url: `https://magniflex.us/accessories`,
  },
};

export async function loader({ params, request, context }: LoaderArgs) {
  const productType = 'Accessories';
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
      (productNode) => (productNode.productType === 'Mattress protector'),
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
  const [searchParams] = useSearchParams()
  const { contentfulCollections, collections, productType } =
    useLoaderData<typeof loader>();
  const [banner, setBanner] = useState(false);
  const [desktopBackground, setDesktopBackround] = useState('');
  const [mobileBackground, setMobileBackground] = useState('');

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

      setDesktopBackround(promoRes?.includes?.Asset[0].fields.file.url)
      setMobileBackground(promoRes?.includes?.Asset[1].fields.file.url)
      setBanner(promoRes?.items[0]?.fields?.promoInHomepage);
    })();
  }, [])

  return (
    <>
      <div className='relative w-full'>
        {
          // !searchParams.has('no-banner') &&
          banner &&
          <>
            <img src={desktopBackground} className='md:hidden block w-full' alt="" />
            <img src={mobileBackground} className='hidden md:block w-full' alt="" />
          </>
        }
        {/* <div className='absolute top-[40px] md:top-[30%] w-full text-white flex flex-col items-center text-center md:text-left md:block md:px-12'>
          <div className='uppercase text-lg md:text-xs font-semibold md:font-normal leading-2 mb-4 md:mb-2'>Holiday sale!</div>
          <h1 className='text-2xl text-[36px] font-semibold px-[5px] md:px-0 md:font-semibold md:text-[30px] leading-[48px] mb-2 md:mb-4 w-full md:max-w-[35%]'>
            Holidays and quality of sleep are better together
          </h1>
          <h4 className='uppercase md:text-xs text-xl font-bold md:font-semibold mb-[25px] md:mb-4'>BUY 1 PILLOW, GET 1 FREE</h4>
        </div>
        <div className='absolute bottom-[100px] left-[60%] md:left-[80%] text-gray-400 md:text-black'>
          <h1 className='font-semibold text-sm'>Giorgio Chiellini</h1>
          <div className='pr-4 text-xs'>
            <h1>Centre-back for MLS club </h1>
            <h1>Los Angeles FC</h1>
          </div>
        </div>
        <div className='hidden md:block absolute w-full text-gray-300 text-sm text-center bottom-4'>Valid on all pillows through January 7th, 2024</div>
        <div className='md:hidden absolute bottom-4 w-full text-center text-sm text-gray-200 font-[200]'>Ends Jan 7th</div> */}
      </div>
      {/* <div className='w-full flex items-center justify-center py-4'>
        <svg width="27" height="37" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0583 36.2806C14.0583 28.5015 8.5465 21.7882 0.977743 20.166L0.762695 21.2366C7.81721 22.7326 12.9877 29.0157 12.9877 36.2806H14.0583Z" fill="#024663"/>
          <path d="M26.279 21.2371L26.0639 20.1666C20.4633 21.3634 16.0174 25.3371 14.054 30.4655V0.71875H12.9834V36.2812H14.054C14.054 29.0163 19.1824 22.7331 26.279 21.2371Z" fill="#024663"/>
        </svg>
      </div> */}
      <div className="px-3 sm:container py-6 md:pt-16 md:pb-28">
        <CollectionHeading heading="Accessories" />
        <div className="flex flex-row flex-wrap justify-start">
          {collections?.map((collection, index) => (
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
