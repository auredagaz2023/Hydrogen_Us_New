import {Link} from '@remix-run/react';
import {MoneyV2, Product} from '@shopify/hydrogen/storefront-api-types';
import {
  ContentfulComfortLevel,
  ContentfulProductSheet,
  ProductWithMetafields,
} from '~/lib/type';
import {RichText} from './Richtext';
import {Image} from '@shopify/hydrogen';
import {useEffect, useState} from 'react';
import {ContentfulDocument} from '~/routes/($locale).types';
import FadeIn from './FadeIn';

type TProps = {
  index: number;
  linkTo: string;
  product: ProductWithMetafields<Product>;
  productType: string;
  handle: string;
  selectedProduct: Product;
  minPrice: MoneyV2;
  closeModel: Function;
  changeProduct: (_product: Product) => void;
};

const CollectionProductCard = (props: TProps) => {
  const {
    index,
    linkTo,
    product,
    productType,
    handle,
    minPrice,
    selectedProduct,
    closeModel,
    changeProduct,
  } = props;
  const [comfortLevel, setComfortLevel] = useState<
    ContentfulComfortLevel | undefined
  >(undefined);
  const [productSheet, setProductSheet] = useState<
    ContentfulProductSheet | undefined
  >(undefined);

  useEffect(() => {
    const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
    const CONTENTFUL_ACCESS_TOKEN =
      'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';

    const productSheetEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.productId,fields.comfortLevel,fields.sleepStyle&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=productSheet&fields.productId=${product.productId.value}`;

    (async () => {
      await fetch(productSheetEndpoint)
        .then((res) => res.json())
        .then((res) => {
          const response = res as unknown as ContentfulProductSheet;

          const productComfortLevel = response.includes?.Entry.find(
            (entry) =>
              entry.sys.id === response.items[0].fields.comfortLevel.sys.id,
          );
          if (!productComfortLevel) setComfortLevel(undefined);
          else
            setComfortLevel(
              productComfortLevel.fields as ContentfulComfortLevel,
            );

          setProductSheet(response);
        });
    })();
  }, []);

  return (
    <>
    {
      handle == 'compare'  ?
        <>
          <td className='p-2 border border-slate-300 text-[#212529]'>
            <div className='flex flex-col justify-content-center items-center'>
              <h3 className='text-md mt-2 text-black font-bold text-center mb-[8px]'>{product.title}</h3>
              <Link
                to={linkTo}
                className={`flex border-[1px] border-174860 justify-content-center items-center px-[5px] py-[3px] text-174860 text-xs hover:bg-174860 hover:text-white ${
                  selectedProduct &&
                  product.handle === selectedProduct.handle &&
                  'bg-174860 text-white'
                }`}
                onClick={() => {
                  changeProduct(product as Product);
                  closeModel();
                }}
                reloadDocument
              >
                {selectedProduct &&
                  product.handle === selectedProduct.handle 
                  ?
                    <span className='uppercase'>Selected</span>
                  :
                    <span className='uppercase'>Select</span>
                }
                
                {product.handle !== selectedProduct.handle ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10 17.75C9.90147 17.7505 9.80383 17.7313 9.71282 17.6935C9.62181 17.6557 9.53926 17.6001 9.47001 17.53C9.32956 17.3894 9.25067 17.1988 9.25067 17C9.25067 16.8013 9.32956 16.6107 9.47001 16.47L13.94 12L9.47001 7.53003C9.33753 7.38785 9.26541 7.19981 9.26884 7.00551C9.27226 6.81121 9.35098 6.62582 9.48839 6.48841C9.6258 6.35099 9.81119 6.27228 10.0055 6.26885C10.1998 6.26543 10.3878 6.33755 10.53 6.47003L15.53 11.47C15.6705 11.6107 15.7494 11.8013 15.7494 12C15.7494 12.1988 15.6705 12.3894 15.53 12.53L10.53 17.53C10.4608 17.6001 10.3782 17.6557 10.2872 17.6935C10.1962 17.7313 10.0986 17.7505 10 17.75Z"
                        className="fill-174860 group-hover:fill-white"
                      />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 32 32"
                      enableBackground="new 0 0 32 32"
                      xmlSpace="preserve"
                    >
                      <polyline
                        fill="none"
                        stroke={
                          product.handle === selectedProduct.handle
                            ? '#FFF'
                            : '#174860'
                        }
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        points="28,8 16,20 11,15 "
                      />
                      <path
                        d="M26.7,13.5c0.2,0.8,0.3,1.6,0.3,2.5c0,6.1-4.9,11-11,11S5,22.1,5,16S9.9,5,16,5c3,0,5.7,1.2,7.6,3.1l1.4-1.4  C22.7,4.4,19.5,3,16,3C8.8,3,3,8.8,3,16s5.8,13,13,13s13-5.8,13-13c0-1.4-0.2-2.8-0.7-4.1L26.7,13.5z"
                        fill="#FFF"
                      />
                    </svg>
                  </span>
                )}
              </Link>
            </div>
          </td>
          <td className='p-2 border border-slate-300 text-center text-[#212529]'>
            <p>
              <strong>Height: </strong>
              {product.height.value} Inches
            </p>
            <p className="mt-2">{comfortLevel?.name}</p>
          </td>
          <td className='p-2 border border-slate-300 text-center text-[#212529]'>
            <RichText
              data={JSON.parse(product.benefits.value)}
            />
          </td>
          {/* <td>
            
          </td> */}
          <td className='p-2 border border-slate-300 text-center text-[#212529]'>
            <RichText data={JSON.parse(product.technology.value)} />
          </td>
        </>
      :
      <div
        className={`px-5 ${index != 0 && 'border-l border-174860'}`}
        key={index}
      >
        <div className="relative overflow-hidden">
          <FadeIn>
            {product.images.nodes.length > 5 ? (
              <Image data={product.images.nodes[5]} />
            ) : (
              <Image
                data={product.images.nodes[product.images.nodes.length - 1]}
              />
            )}
          </FadeIn>
          {handle == 'comfort' && comfortLevel && (
            <div className="absolute flex items-center -bottom-2 -left-2 rounded-full bg-white pt-1 pb-2 px-4">
              <div
                className="w-2 h-2 rounded-full mr-3"
                style={{background: comfortLevel.color}}
              ></div>
              <span className="text-174860 text-xs">{comfortLevel.name}</span>
            </div>
          )}
        </div>
        <FadeIn>
          <p className="text-lg text-174860 mt-5 font-bold">{product.title}</p>
        </FadeIn>
        <div className="my-6 py-6 border-t border-t-174860 border-b border-b-174860 text-174860 text-xs leading-5">
          {handle == 'comfort' && (
            <>
              {' '}
              {productType == 'Mattress' ? (
                <FadeIn>
                  <p>
                    <strong>Height: </strong>
                    {product.height.value} Inches
                  </p>
                  <p className="mt-2">{product.comfortDescription.value}</p>
                </FadeIn>
              ) : (
                <FadeIn>
                  {productSheet?.items[0]?.fields?.sleepStyle && (
                    <div className="grid grid-cols-3 gap-5">
                      {productSheet.items[0].fields.sleepStyle.map((item) => {
                        const sleepStyle = productSheet.includes.Entry.find(
                          (entry) => entry.sys.id == item.sys.id,
                        )?.fields as {
                          title: string;
                          description: ContentfulDocument;
                          picture: {
                            sys: {id: string};
                          };
                        };
                        const sleepStyleImage = productSheet.includes.Asset.find(
                          (asset) => asset.sys.id === sleepStyle.picture.sys.id,
                        )!;
                        return (
                          <img
                            src={sleepStyleImage.fields.file.url}
                            alt={`sleep style ${sleepStyle.title}`}
                          />
                        );
                      })}
                    </div>
                  )}
                </FadeIn>
              )}
            </>
          )}
          {handle == 'benefits' && (
            <FadeIn>
              <RichText
                data={JSON.parse(product.benefits.value)}
                className="truncate"
              />
            </FadeIn>
          )}
          {handle == 'technology' && (
            <FadeIn>
              <RichText data={JSON.parse(product.technology.value)} />
            </FadeIn>
          )}
        </div>
        <div className="text-174860 text-sm">
          Starting at{' '}
          <span className="text-blue font-bold">
            {minPrice.amount}
            {minPrice.currencyCode}
          </span>
        </div>
        <div className="mt-3">
          <Link
            to={linkTo}
            className={`group h-10 flex border border-174860 px-3 py-2 w-36 justify-between text-174860 text-sm hover:bg-174860 hover:text-white ${
              selectedProduct &&
              product.handle === selectedProduct.handle &&
              'bg-174860 text-white'
            }`}
            onClick={() => {
              changeProduct(product as Product);
              closeModel();
            }}
            reloadDocument
          >
            <span>Select</span>
            {product.handle !== selectedProduct.handle ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17.75C9.90147 17.7505 9.80383 17.7313 9.71282 17.6935C9.62181 17.6557 9.53926 17.6001 9.47001 17.53C9.32956 17.3894 9.25067 17.1988 9.25067 17C9.25067 16.8013 9.32956 16.6107 9.47001 16.47L13.94 12L9.47001 7.53003C9.33753 7.38785 9.26541 7.19981 9.26884 7.00551C9.27226 6.81121 9.35098 6.62582 9.48839 6.48841C9.6258 6.35099 9.81119 6.27228 10.0055 6.26885C10.1998 6.26543 10.3878 6.33755 10.53 6.47003L15.53 11.47C15.6705 11.6107 15.7494 11.8013 15.7494 12C15.7494 12.1988 15.6705 12.3894 15.53 12.53L10.53 17.53C10.4608 17.6001 10.3782 17.6557 10.2872 17.6935C10.1962 17.7313 10.0986 17.7505 10 17.75Z"
                    className="fill-174860 group-hover:fill-white"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 32 32"
                  enableBackground="new 0 0 32 32"
                  xmlSpace="preserve"
                >
                  <polyline
                    fill="none"
                    stroke={
                      product.handle === selectedProduct.handle
                        ? '#FFF'
                        : '#174860'
                    }
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    points="28,8 16,20 11,15 "
                  />
                  <path
                    d="M26.7,13.5c0.2,0.8,0.3,1.6,0.3,2.5c0,6.1-4.9,11-11,11S5,22.1,5,16S9.9,5,16,5c3,0,5.7,1.2,7.6,3.1l1.4-1.4  C22.7,4.4,19.5,3,16,3C8.8,3,3,8.8,3,16s5.8,13,13,13s13-5.8,13-13c0-1.4-0.2-2.8-0.7-4.1L26.7,13.5z"
                    fill="#FFF"
                  />
                </svg>
              </span>
            )}
          </Link>
        </div>
      </div>
    }
    </>
  );
};

export default CollectionProductCard;
