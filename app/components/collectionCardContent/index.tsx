import type {Collection, Product} from '@shopify/hydrogen/storefront-api-types';
import {CollectionWithMetafields, ProductWithMetafields} from '~/lib/type';
import {Image} from '@shopify/hydrogen';
import {Link} from '~/components';

export const handle = {
  seo: {
    title: 'All Collections',
  },
};

export default function CollectionCardContent({productData}) {
  return (
    <>
      <div className="p-4 grid grid-cols-4">
        <div className="col-span-3 gap-4 grid grid-cols-3 ">
          {Object.keys(productData).filter((key) => {
            key == 'collections';
          }) &&
            Object.keys(productData).length == 1 &&
            productData.collections?.nodes.map((collection, index) => (
              <div className="col-span-1">
                <CollectionCard
                  collection={
                    collection as CollectionWithMetafields<Collection>
                  }
                  key={index}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

function CollectionCard({
  collection,
}: {
  collection: Collection;
  loading?: HTMLImageElement['loading'];
}) {
  let productDiscount: number = 0;
  collection.products.nodes.forEach((product: Product, index: number) => {
    const discountPercent = (product as ProductWithMetafields<Product>)
      .discountPercent;
    if (discountPercent && discountPercent.value > productDiscount)
      productDiscount = discountPercent.value;
  });

  if (collection.title.includes('test')) return null;

  return (
    <div className="w-full flex flex-col product-tab">
      <Link to={`/collections/${collection.handle}`} reloadDocument>
        <div className="relative">
          {collection.image && (
            <Image
              className="w-full h-[160px] object-cover"
              data={collection.image}
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
        <div className="text-dark-blue text-left text-[11px] mt-2 font-semibold uppercase">
          {/* <Link
          to={`/collections/${collection.handle}`}
          className="text-dark-blue text-left text-[11px] mt-2 font-semibold"
        > */}
          {collection.title}
          {/* </Link> */}
        </div>
        <div className="mt-3 text-left text-limit pr-4">
          {collection.description}
        </div>
      </Link>
    </div>
  );
}
