import {
  MoneyV2,
  Product,
  Collection,
} from '@shopify/hydrogen/storefront-api-types';
import {Image, Money} from '@shopify/hydrogen';
import CollectionReviewImage from '../assets/category-review-placeholder.jpg';
import {Link} from '@remix-run/react';
import {ProductWithMetafields} from '~/lib/type';
import {slugify} from '~/routes/($locale).news';

export function CollectionsProductDetails({
  product,
  collection,
  collectionHandle,
  comfortLevels,
}: {
  collection: Collection;
  collectionHandle: any,
  product: Product;
  comfortLevels?: {
    name: string;
    color: string;
  }[];
}) {
  const vtPrices: MoneyV2[] = [];
  product.variants.nodes.forEach((variant) => {
    vtPrices.push(variant.price);
  });
  const minVtPrice = vtPrices.sort(
    (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
  )[0];

  const getProductType = (product: Product) => {
    return product.productType;
  };

  const getCardLink = (collection: Collection, product: Product) => {
    let cardLink = '/mattresses/'+collectionHandle;
    // switch (product.productType) {
    //   case 'Mattress':
    //     cardLink = `/mattresses`;
    //     break;

    //   case 'Pillow':
    //     cardLink = `/pillows`;
    //     break;

    //   case 'Topper':
    //     cardLink = `/toppers/details`;
    //     break;

    //   case 'Beds and Bases':
    //     cardLink = `/bed-bases/details`;
    //     break;

    //   default:
    //     break;
    // }

    return `${cardLink}?product=${slugify(product.title)}`;
  };

  return (
    <div className="w-full px-3 xl:px-6 md:w-1/2 lg:w-4/12 mt-6 mb-12">
      <div className="collection-image w-full aspect-[10/7] relative">
        {product.featuredImage && (
          <Link to={getCardLink(collection, product)}>
            <Image
              className="w-full h-full object-cover"
              data={product.featuredImage}
              sizes="700"
              widths={[700]}
            />
          </Link>
        )}
        {(product as ProductWithMetafields<Product>).discountPercent &&
          (product as ProductWithMetafields<Product>).discountPercent.value >
            0 && (
            <div className="absolute left-0 top-5 bg-red-600 text-white flex justify-end w-40 uppercase px-4">
              Promo -{' '}
              {
                (product as ProductWithMetafields<Product>).discountPercent
                  .value
              }
              %
            </div>
          )}
        {(product as ProductWithMetafields<Product>).saveUpTo && (
          <div className="absolute left-0 top-5 bg-red-600 text-white flex justify-end w-20 uppercase px-4">
            Sale
          </div>
        )}
      </div>
      <div className="collection-data px-2 py-6 xl:p-6">
        <Link
          to={getCardLink(collection, product)}
          className="block xl:h-[85px] collection-title text-cusSubheading font-semibold xl:text-28 text-dark-blue uppercase hover:text-[#b09987]"
        >
          {product.title}
        </Link>
        {product.productType === 'Mattress' && comfortLevels && (
          <div className="collection-attributes border-t border-b py-2 mt-2 mb-2 grid grid-cols-2">
            {comfortLevels &&
              comfortLevels.map((comfortLevel, index) => (
                <div
                  className="attr flex flex-row text-dark-blue text-xxs pl-4 relative py-2px pr-1 items-center uppercase"
                  key={index}
                >
                  <span
                    className="min-w-[8px] w-2 h-2 block rounded-full mr-3"
                    style={{backgroundColor: comfortLevel.color}}
                  ></span>
                  <span>{comfortLevel.name}</span>
                </div>
              ))}
          </div>
        )}
        <div className="collection-description mt-5 mt-2 mb-5 text-[#212529] text-[14px] overflow-hidden">
          {product?.shortDescriptions?.value || ''}
        </div>
        {minVtPrice && (
          <div className="collection-price border-t border-border pt-4 mb-2 mt-2 text-dark-blue text-sm font-semibold flex">
            
            {(product as ProductWithMetafields<Product>).discountPercent &&
            (product as ProductWithMetafields<Product>).discountPercent.value >
              0 ? (
              <>
                Starting at&nbsp;&nbsp;
                <s>
                  <Money data={minVtPrice} />
                </s>
                <span className="text-red-600 text-sm ml-2">
                  <Money
                    data={{
                      ...minVtPrice,
                      amount: (
                        (parseInt(minVtPrice.amount) *
                          (100 -
                            (product as ProductWithMetafields<Product>)
                              .discountPercent.value)) /
                        100
                      ).toString(),
                    }}
                  />
                </span>
              </>
            ) 
            : 
            (
              <div>
                <div className='flex'>
                  Starting at&nbsp;&nbsp;
                  <Money data={minVtPrice} />
                </div>
                {(product as ProductWithMetafields<Product>)?.saveUpTo && <div className='text-red-600'>{`Save up to ${(product as ProductWithMetafields<Product>).saveUpTo.value}`}</div>}
              </div>
            )}
          </div>
        )}
        <div className="collection-actions flex flex-row justify-end items-center mt-4">
          <Link
            to={getCardLink(collection, product)}
            className="text-dark-blue text-sm uppercase py-2 px-8 border border-dark-blue font-semibold transition-all ease-in-out hover:bg-[#2f88b1] hover:border-[#2f88b1] hover:text-white"
          >
            {(product as ProductWithMetafields<Product>)?.discountPercent || (product as ProductWithMetafields<Product>)?.saveUpTo ? 'Buy now' : 'Discover'}
          </Link>
        </div>
      </div>
    </div>
  );
}
