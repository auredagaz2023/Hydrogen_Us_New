import { useEffect, useState } from 'react';
import {
  Collection,
  MoneyV2,
  Product,
} from '@shopify/hydrogen/storefront-api-types';
import {Image, Money} from '@shopify/hydrogen';

import {Link} from '@remix-run/react';
import {CollectionWithMetafields, ProductWithMetafields} from '~/lib/type';
import {slugify} from '~/routes/($lang)/news';

// import MagniCoolIcon from '../assets/Pillows/Layer on pillows/Desktop L700px/icon-01-magnicool.png'
// import ClassicoIcon from '../assets/Pillows/Layer on pillows/Desktop L700px/icon-02-classico.png'
// import MagnificoIcon from '../assets/Pillows/Layer on pillows/Desktop L700px/icon-03-magnifico.png'
// import SuperioreIcon from '../assets/Pillows/Layer on pillows/Desktop L700px/icon-04-superiore.png'

export function CollectionDetails({
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

  const vtPrices: MoneyV2[] = [];
  collection.products.nodes.forEach((product) => {
    if (productType && product.productType === productType) {
      product.variants.nodes.forEach((variant) => {
        vtPrices.push(variant.price);
      });
    }
  });
  const minVtPrice = vtPrices.sort(
    (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
  )[0];

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
    <div className="w-full px-3 xl:px-6 md:w-1/2 lg:w-4/12 mt-6 mb-12 ">
      <div className="collection-image w-full aspect-[10/7] relative">
        {collection[coverImageKey] && (
          <Link to={getCardLink(collection)}>
            <Image
              className="w-full h-full object-cover"
              data={collection[coverImageKey].reference.image}
              sizes="700"
              widths={[700]}
            />
            {/* { productType=='Pillow' && collection.title.toLowerCase()=='magnicool' &&
              <img
                className="absolute w-full h-full object-cover top-0 left-0"
                src={MagniCoolIcon}
              />
            }
            { productType=='Pillow' && collection.title.toLowerCase()=='classico' &&
              <img
                className="absolute w-full h-full object-cover top-0 left-0"
                src={ClassicoIcon}
              />
            }
            { productType=='Pillow' && collection.title.toLowerCase()=='magnifico' &&
              <img
                className="absolute w-full h-full object-cover top-0 left-0"
                src={MagnificoIcon}
              />
            }
            { productType=='Pillow' && collection.title.toLowerCase()=='superiore' &&
              <img
                className="absolute w-full h-full object-cover top-0 left-0"
                src={SuperioreIcon}
              />
            } */}
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
          to={getCardLink(collection)}
          className="block collection-title text-cusSubheading font-semibold xl:text-28 xl:h-[85px] text-dark-blue uppercase hover:text-[#b09987]"
        >
          {collection.title}
        </Link>
        <div className="collection-attributes border-t border-border pt-2 mt-2 mb-2 grid grid-cols-2 h-12">
          {comfortLevels &&
            comfortLevels.map((comfortLevel, index) => (
              <div
                className="attr flex flex-row text-dark-blue text-xxs pl-4 relative py-2px pr-1 items-center uppercase"
                key={index}
              >
                <span
                  className="w-2 h-2 block rounded-full mr-3"
                  style={{backgroundColor: comfortLevel.color}}
                ></span>
                <span>{comfortLevel.name}</span>
              </div>
            ))}
        </div>
        {collection[summaryKey] && (
          <div className="collection-description border-t border-border pt-5 mt-2 mb-5 text-[#212529] text-[14px] h-[7.5rem] overflow-hidden">
            {collection[summaryKey].value}
          </div>
        )}
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
                        (parseInt(minVtPrice.amount) *
                          (100 - productDiscount)) /
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
            to={getCardLink(collection)}
            className="text-dark-blue text-sm uppercase py-2 px-8 border border-dark-blue font-semibold transition-all ease-in-out hover:bg-[#2f88b1] hover:border-[#2f88b1] hover:text-white"
          >
            Discover
            {/* {
              (productType=='Pillow' && (collection.title.toLowerCase()=='magnicool'  ||
              // collection.title.toLowerCase()=='classico'    ||
              collection.title.toLowerCase()=='magnifico'   ||
              collection.title.toLowerCase()=='superiore'))  ? 'BUY 1 GET 1 FREE' : 'Discover'
             } */}
          </Link>
        </div>
      </div>
    </div>
  );
}
