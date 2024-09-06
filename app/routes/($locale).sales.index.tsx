import {Link, useLoaderData, useNavigate} from '@remix-run/react';
import {flattenConnection} from '@shopify/hydrogen';
import {
  Collection,
  CollectionConnection,
  Product,
} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {
  ContentfulParagraph,
  ContentfulPromoDesc,
  ContentfulPromotion,
} from './($locale).types';
import {CollectionWithMetafields, ProductWithMetafields} from '~/lib/type';
import { useEffect } from 'react';

export const handle = {
  seo: {
    title: 'Current Magniflex Sales, Promotions, and Discounts | Magnflex',
    titleTemplate:
      'Current Magniflex Sales, Promotions, and Discounts | Magnflex',
    description:
      'Discover Magniflex Sales & Promotions. Save on Italian bedding excellence today!',
    handle: '@shopify',
    url: `https://magniflex.us/sales`,
  },
};

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

export default function Promotion() {
  const {collections, promotions, promoDesc} = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const getProductLink = (productReference: string) => {
    let products: ProductWithMetafields<Product>[] = [];
    collections.forEach((collection) => {
      collection.products.nodes.forEach((product) => {
        products.push(product as ProductWithMetafields<Product>);
      });
    });
    const product = products.find(
      (p) => p.productId.value === productReference,
    );

    return `/products/${product?.handle || ''}`;
  };

  const getCollectionLink = (collectionReference: string) => {
    const collection = collections.find(
      (c) =>
        (c as CollectionWithMetafields<Collection>).collectionId.value ===
        collectionReference,
    );

    return `/collections/${collection?.handle || ''}`;
  };

  useEffect(()=>{
    const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
    const CONTENTFUL_ACCESS_TOKEN =
      'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';
    const activePromotionsEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.promoInHomepage,fields.saleRedirectLink&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=activePromotions&fields.name=mxusa-active-promotions`;
    (async () => {
      await fetch(activePromotionsEndpoint)
        .then((res) => res.json())
        .then((res:any) => {
          const redirectLink = res?.items[0]?.fields?.saleRedirectLink;
          if (redirectLink) {
            const url = new URL(redirectLink);
            const path = url.pathname;
            navigate(path)
          }
        });
    })();  
  },[])

  return (
    <div className="px-3 sm:container pt-12 pb-20 md:py-20 md:pb-32">
      <p className="text-text text-dark-blue font-bold uppercase mb-6 lg:text-2xl text-center">
        sales
      </p>
      <div className="pb-6 md:pb-8 max-w-xl mx-auto">
        {promoDesc.items[0].fields.description.content.map(
          (content: ContentfulParagraph, index: number) => (
            <p
              className="text-gray-800 text-sm text-justify mx-[30px]"
              key={index}
            >
              {(content as ContentfulParagraph).content.map((text, index) => (
                <span key={index}>{text.value}</span>
              ))}
            </p>
          ),
        )}
      </div>
      <div className="mt-5 pt-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
        {promotions &&
          promotions.items.reverse().map((promotion, index: number) => (
            <div key={index}>
              <p className="text-gold mb-[12px]">{promotion.fields.label}</p>
              <div
                className="relative"
                style={{
                  paddingBottom: '60%',
                  backgroundImage: `url(${
                    promotions.includes.Asset.find(
                      (asset) =>
                        asset.sys.id == promotion.fields.coverImage.sys.id,
                    )?.fields.file.url || ''
                  })`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                {promotion.fields.discount && <div className="absolute top-5 w-40 bg-red-600 text-white text-center py-1">
                  Promo -{promotion.fields.discount}%
                </div>}
              </div>
              <h3 className="text-dark-blue text-xl mt-2 font-semibold">
                {promotion.fields.title}
              </h3>
              <div className="mt-3">
                {promotion.fields.description.content.map(
                  (content: ContentfulParagraph, index: number) => (
                    <p
                      className="text-gray-800 text-sm text-justify"
                      key={index}
                    >
                      {(content as ContentfulParagraph).content.map(
                        (text, index) => (
                          <span key={index}>{text.value}</span>
                        ),
                      )}
                    </p>
                  ),
                )}
              </div>
              <div className="flex justify-start mt-5">
                <Link
                  to={
                    promotion.fields.productReference
                      ? getProductLink(promotion.fields.productReference)
                      : promotion.fields.collectionReference
                      ? getCollectionLink(promotion.fields.collectionReference)
                      : promotion.fields.urlReference || ''
                  }
                  className="text-dark-blue text-sm uppercase py-2 px-8 border border-dark-blue font-semibold transition-all ease-in-out hover:bg-[#2f88b1] hover:border-[#2f88b1] hover:text-white"
                >
                  {promotion.fields.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
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
