import {Collection} from '@shopify/hydrogen/storefront-api-types';

import {ProductDetailCard} from '~/components/ProductDetailCard';
import {CollectionLinks} from '~/components/CollectionLinks';
import {TestMattressWidget} from '~/components/TestMattressWidget';
import {CollectionWithMetafields} from '~/lib/type';

export default function ProductCardContent({productData}) {
  const getComfortLevels = (
    collection: CollectionWithMetafields<Collection>,
  ) => {
    const comfortLevels: {
      name: string;
      color: string;
    }[] = [];
    let productKey: 'mattressId' | 'pillowId' | 'topperId' | 'accessoryId';
    switch (productData?.productType) {
      case 'Mattress':
        productKey = 'mattressId';
        break;

      case 'Pillow':
        productKey = 'pillowId';
        break;

      case 'Topper':
        productKey = 'topperId';
        break;
      
      case 'Accessories':
        productKey = 'accessoryId';
        break;
  
      default:
        productKey = 'mattressId';
        break;
    }

    const contentfulCollectionItem =
      productData.contentfulCollections?.items?.find(
        (item) => item.fields.name == collection[productKey]?.value,
      );
    if (
      contentfulCollectionItem &&
      contentfulCollectionItem.fields.comfortLevels
    ) {
      contentfulCollectionItem.fields.comfortLevels.forEach((comfortLevel) => {
        const item = productData.contentfulCollections?.includes?.Entry?.find(
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

  return (
    <>
      <div className="p-4">
        <div className="">
          {productData?.productType == 'Accessories' ?
            <div className='w-[75%]'>
              <div className='text-[13px] text-[#174860] text-left font-bold mb-[20px]'>Mattress protectors</div>
              <div className="col-span-3 gap-4 grid grid-cols-3">
                {productData.collections?.slice(0,3)?.map((collection:any, index:number) => (
                  <ProductDetailCard
                    productType={productData.productType}
                    collection={
                      collection as CollectionWithMetafields<Collection>
                    }
                    comfortLevels={getComfortLevels(
                      collection as CollectionWithMetafields<Collection>,
                    )}
                    key={index}
                    className="col-span-1"
                  />
                ))}
              </div>
              <div className='text-left text-[13px] text-[#174860] font-bold mt-[20px] mb-[20px]' style={{color:'#174860!important'}}>Bed Sheets</div>
              <div className="col-span-3 gap-4 grid grid-cols-3">
                {productData.collections?.slice(3,6)?.map((collection:any, index:number) => (
                  <ProductDetailCard
                    productType={productData.productType}
                    collection={
                      collection as CollectionWithMetafields<Collection>
                    }
                    comfortLevels={getComfortLevels(
                      collection as CollectionWithMetafields<Collection>,
                    )}
                    key={index}
                    className="col-span-1"
                  />
                ))}
              </div>  
            </div>
            :
            <div className='grid grid-cols-4'>
              <div className="col-span-3 gap-4 grid grid-cols-3">
                {Object.keys(productData).length > 1 &&
                  productData.collections?.map((collection:any, index:number) => (
                    <ProductDetailCard
                      productType={productData.productType}
                      collection={
                        collection as CollectionWithMetafields<Collection>
                      }
                      comfortLevels={getComfortLevels(
                        collection as CollectionWithMetafields<Collection>,
                      )}
                      key={index}
                      className="col-span-1"
                    />
                  ))}
              </div>
              <div className="col-span-1">
                {productData && productData.productType == 'Mattress' && (
                  <div className="h-full flex flex-col align-center justify-end pl-8 pr-8">
                    <h2 className="w-full mb-8 text-lg text-[#258dca] text-clip text-left">
                      Find the perfect mattress for you.
                    </h2>
                    <div className="w-full flex justify-between text-gray-500">
                      <span>BEGIN TEST</span>
                      <span>&gt;</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          }
          {/* <div className=" col-span-1 flex items-center align-bottom p-6"></div> */}
        </div>
      </div>
      {/* {productData?.productType == 'Mattress' && (
        <>
          <CollectionLinks />
          <TestMattressWidget />
        </>
      )} */}
    </>
  );
}
