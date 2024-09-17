import {Collection, Product} from '@shopify/hydrogen/storefront-api-types';
import {Image} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {CollectionWithMetafields, ProductWithMetafields} from '~/lib/type';
import {slugify} from '~/routes/($locale).news';

export function ProductDetailCard({
  collection,
  productType,
  comfortLevels,
}: {
  collection: CollectionWithMetafields<Collection>;
  productType?: string;
  comfortLevels?: {
    name: string;
    color: string;
  }[];
}) {
  let coverImageKey:
    | 'mattressCoverImage'
    | 'pillowCoverImage'
    | 'topperCoverImage';
  let summaryKey: 'mattressSummary' | 'pillowSummary' | 'topperSummary';

  switch (productType) {
    case 'Mattress':
      coverImageKey = 'mattressCoverImage';
      summaryKey = 'mattressSummary';
      break;

    case 'Pillow':
      coverImageKey = 'pillowCoverImage';
      summaryKey = 'pillowSummary';
      break;

    case 'Topper':
      coverImageKey = 'topperCoverImage';
      summaryKey = 'topperSummary';
      break;

    default:
      coverImageKey = 'mattressCoverImage';
      summaryKey = 'mattressSummary';
      break;
  }

  let productDiscount: number = 0;
  collection.products.nodes
    .filter(
      (product) =>
        !productType || (productType && productType == product.productType),
    )
    .forEach((product: Product, index: number) => {
      const discountPercent = (product as ProductWithMetafields<Product>)
        .discountPercent;
      if (discountPercent && discountPercent.value > productDiscount) {
        productDiscount = discountPercent.value;
      }
    });

  if (collection.title.includes('test')) return null;

  const getCardLink = (collection: Collection) => {
    let cardLink = '';
    switch (productType) {
      case 'Mattress':
        cardLink = `/mattresses/${collection.handle}`;
        break;

      case 'Pillow':
        cardLink = `/pillows/${collection.handle}`;
        break;

      case 'Topper':
        cardLink = `/toppers`;
        break;

      case 'Beds and Bases':
        cardLink = `/bed-bases`;
        break;

      default:
        break;
    }

    return `${cardLink}/${slugify(
      collection.products.nodes.find(
        (product) => product.productType === productType,
      )?.title || '',
    )}`;
  };

  return (
    <div className="flex flex-col w-full product-tab">
      <Link to={getCardLink(collection)} reloadDocument>
        <div className="relative">
          {collection[coverImageKey] && (
            <Image
              className="w-full h-full object-cover"
              data={collection[coverImageKey].reference.image}
              sizes="700"
              widths={[700]}
            />
          )}
          {productDiscount > 0 && (
            <div className="absolute left-0 top-5 bg-red-600 text-white flex justify-end w-40 uppercase px-4">
              Promo -{productDiscount}%
            </div>
          )}
        </div>

        <h3 className="text-dark-blue text-left text-[11px] mt-2 uppercase font-semibold">
          {collection.title}
        </h3>

        {collection[summaryKey] && (
          <p className="mt-3 text-left text-limit pr-4">
            {collection[summaryKey].value}
          </p>
        )}
      </Link>
    </div>
  );
}
