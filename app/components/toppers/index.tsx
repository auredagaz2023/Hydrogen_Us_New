import {useLoaderData} from '@remix-run/react';
import {
  AnalyticsPageType,
  SeoHandleFunction,
  flattenConnection,
} from '@shopify/hydrogen';
import {
  Product as ProductType,
  ProductConnection,
  Collection,
} from '@shopify/hydrogen/storefront-api-types';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import invariant from 'tiny-invariant';
import {CollectionHeading} from '~/components/CollectionHeading';
import {CollectionLinks} from '~/components/CollectionLinks';
import {ProductDetails} from '~/components/ProductDetails';
import {TestMattressWidget} from '~/components/TestMattressWidget';

const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data.productType,
  description: 'Product category',
});

export async function loader({params, request, context}: LoaderArgs) {
  const productType = "Topper";
  invariant(productType, 'Missing productType param');

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

  // const CONTENTFUL_SPACE_ID="7xbaxb2q56jj";
  // const CONTENTFUL_ACCESS_TOKEN="yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g";

  // const contentfulEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.comfortLevels,fields.name&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=collection`;

  // const response = await fetch(contentfulEndpoint)
  //   .then((res) => {
  //     return res.json();
  //   });
  // let contentfulCollections = response as unknown as ContentfulCollection;

  return json({
    productNodes,
    productType,
    analytics: {
      pageType: AnalyticsPageType.listCollections,
      productType,
    },
  });
}

export default function CategoryCollections() {
  const {productNodes, productType} = useLoaderData<typeof loader>();

  // const getComfortLevels = (collection: CollectionWithMetafields<Collection>) => {
  //   const comfortLevels: {
  //     name: string;
  //     color: string;
  //   }[] = [];
  //   let productKey: "mattressId" | "pillowId" | "topperId";
  //   switch (productType) {
  //     case "Mattress":
  //       productKey = "mattressId";
  //       break;

  //     case "Pillow":
  //       productKey = "pillowId"
  //       break;

  //     case "Topper":
  //       productKey = "topperId";
  //       break;

  //     default:
  //       productKey = "mattressId";
  //       break;
  //   }
  //   console.log(productKey);

  //   const contentfulCollectionItem = contentfulCollections.items.find((item) => item.fields.name == collection[productKey].value);
  //   if (contentfulCollectionItem && contentfulCollectionItem.fields.comfortLevels) {
  //     contentfulCollectionItem.fields.comfortLevels.forEach((comfortLevel) => {
  //       comfortLevels.push(contentfulCollections.includes.Entry.find((link) => link.sys.id === comfortLevel.sys.id)!.fields);
  //     })
  //     return comfortLevels;
  //   }
  //   return undefined;
  // }

  return (
    <>
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
        <CollectionHeading heading="Toppers" />
        <div className="flex flex-row flex-wrap justify-start">
          {productNodes &&
            productNodes.map((product: ProductType, index: number) => (
              <ProductDetails
                product={product}
                collection={product.collections.nodes[0] as Collection}
                key={index}
              />
            ))}
        </div>
        {/* <div className="flex flex-row flex-wrap justify-start">
          {
            collections.map((collection, index) => (
              <CollectionDetails productType={productType} collection={collection as CollectionWithMetafields<Collection>} comfortLevels={getComfortLevels(collection as CollectionWithMetafields<Collection>)} key={index} />
            ))
          }
        </div> */}
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

const PRODUCTS_QUERY = `#graphql
  query productsByProductType(
    $query: String
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    products(
      first: 100,
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
