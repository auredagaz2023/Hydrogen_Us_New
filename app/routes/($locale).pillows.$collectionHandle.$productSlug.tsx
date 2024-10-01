import {
  AnalyticsPageType,
  flattenConnection,
  Money,
  SeoHandleFunction,
} from '@shopify/hydrogen';
import {json, LoaderArgs} from '@shopify/remix-oxygen';
import {
  Collection as CollectionType,
  Image as ImageType,
  Product,
  ProductVariant,
} from '@shopify/hydrogen/storefront-api-types';
import invariant from 'tiny-invariant';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {
  Link,
  useLoaderData,
  useSearchParams,
} from '@remix-run/react';
import {useEffect, useRef, useState} from 'react';
import {Image} from '@shopify/hydrogen';
import {Disclosure, Popover} from '@headlessui/react';
import {BsChevronDown} from 'react-icons/bs';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types/index';
import {Text} from '~/components';
import {AddToCartButton} from '~/components/AddToCartButton';
import {ProductContent} from '~/components/ProductContent';
import WorldMap from '~/components/worldmap';
import {CollectionWithMetafields, ProductWithMetafields} from '~/lib/type';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CollectionProductCard from '~/components/CollectionProductCard';
import {slugify} from '~/routes/($locale).news';
import {RxMinusCircled, RxPlusCircled} from 'react-icons/rx';
import FadeIn from '~/components/FadeIn';

const contentfulEndpoint = `https://cdn.contentful.com/spaces/7xbaxb2q56jj/entries/6CZ0VtYrPTikwSp1XmXPXM?access_token=yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g`;

const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
const CONTENTFUL_ACCESS_TOKEN = 'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';
const activePromotionsEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=activePromotions&fields.name=mxusa-active-promotions`;


const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data?.collection?.seo?.title,
  description: data?.collection?.seo?.description,
  titleTemplate: '%s | Collection',
  media: {
    type: 'image',
    url: data?.collection?.image?.url,
    height: data?.collection?.image?.height,
    width: data?.collection?.image?.width,
    altText: data?.collection?.image?.altText,
  },
});

export const handle = {
  seo,
};

export async function loader({params, request, context}: LoaderArgs) {
  const {productSlug, collectionHandle} = params;

  invariant(productSlug, 'Missing productSlug param');
  invariant(collectionHandle, 'Missing collectionHandle param');

  const {collection} = await context.storefront.query<{
    collection: CollectionWithMetafields<CollectionType>;
  }>(COLLECTION_QUERY, {
    variables: {
      handle: collectionHandle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!collection) {
    throw new Response(null, {status: 404});
  }

  const product = collection.products.nodes.find(
    (p) => slugify(p.title) === productSlug,
  );

  if (!product) {
    throw new Response(null, {status: 404});
  }

  return json({
    productType: 'Pillow',
    collectionHandle,
    collection,
    product,
    analytics: {
      pageType: AnalyticsPageType.collection,
      collectionHandle,
      resourceId: collection.id,
    },
  });
}

export default function CollectionProducts() {
  const {collection, product, collectionHandle, productType} =
    useLoaderData<typeof loader>();

  const products = collection.products.nodes;
  const featuredImage = products[0].featuredImage;
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    product as Product,
  );
  const [selectedImage, setSelectedImage] = useState<ImageType>(
    featuredImage || products[0].images.nodes[0],
  );
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariant | undefined
  >(undefined);
  const [homePromotion, setHomePromotion] = useState<any>(undefined);
  const [quantity, setQuantity] = useState<number>(1);
  const [productImagesSwiper, setProductImagesSwiper] = useState<
    SwiperType | undefined
  >(undefined);
  const [handle, setHandle] = useState<string | undefined>(undefined);

  const [promoLabel, setPromoLabel] = useState('');

  const refDisclosureButton = useRef<HTMLButtonElement>(null);

  const changeProduct = (_product: Product) => {
    setSelectedProduct(_product);
    setSelectedImage(
      _product.featuredImage
        ? _product.featuredImage
        : _product.images.nodes[0],
    );
    setSelectedVariant(undefined)
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onClickNavigation = (navImage: ImageType, index: number) => {
    setSelectedImage(navImage);
    productImagesSwiper?.slideTo(index);
  };

  useEffect(() => {
    setSelectedVariant(selectedProduct?.variants?.nodes[0]);
    (async () => {
      await fetch(contentfulEndpoint)
        .then((res) => {
          return res.json();
        })
        .then((res: any) => {
          setPromoLabel(res.fields.pillowPromoLabel);
        })
        .catch((err) => {});
    })();
   (async () => {
      await fetch(activePromotionsEndpoint)
        .then((res) => res.json())
        .then((res:any) => {
          setHomePromotion(res as any);
          if(productType=='Pillow' && res?.items[0].fields.pillowPromoLabelExclude?.filter((item:string)=>(item.toLowerCase()==product.title.toLowerCase()))?.length==0)
          {
            setQuantity(res.items[0].fields.pillowDefaultQuantity);
          }        
        });
    })();
  }, []);

  return (
    <div className="w-full pb-6 flex flex-wrap justify-between">
      <div className="w-full lg:w-9/12">
        <div className="product-image w-full relative h-[350px] sm:h-[480px] md:h-[500px] lg:h-auto aspect-[100/55]">
          <Swiper
            slidesPerView={1}
            loop
            onInit={(ev) => setProductImagesSwiper(ev)}
          >
            <FadeIn>
              {selectedProduct.images.nodes.map(
                (productImage: ImageType, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-[350px] sm:h-[480px] md:h-[500px] lg:h-auto aspect-[100/55]">
                      <Image
                        className="w-full h-full object-cover"
                        data={productImage}
                        sizes="1500"
                        widths={[
                          350, 460, 580, 660, 780, 900, 1100, 1240, 1360, 1440,
                        ]}
                      />
                    </div>
                  </SwiperSlide>
                ),
              )}
            </FadeIn>
          </Swiper>
          {(selectedProduct as ProductWithMetafields<Product>)
            .discountPercent && (
            <div className="absolute left-0 top-10 flex justify-end bg-red-600 text-white w-48 px-2 py-2 z-10">
              Promo -
              {
                (selectedProduct as ProductWithMetafields<Product>)
                  .discountPercent.value
              }
              %
            </div>
          )}
          {(selectedProduct as ProductWithMetafields<Product>)
            .saveUpTo && (
            <div className="absolute left-0 top-10 flex justify-end bg-red-600 text-white px-[25px] py-2 z-10">
              SALE
            </div>
          )}
          <div
            className={`${
              (selectedProduct as ProductWithMetafields<Product>)
                .discountPercent || (selectedProduct as ProductWithMetafields<Product>)
                .saveUpTo
                ? 'top-[90px]'
                : 'top-[25px]'
            } imageNavigation absolute left-5 w-10 md:w-16 z-10`}
          >
            <FadeIn>
              {selectedProduct.images.nodes.map(
                (navImage: ImageType, index: number) => (
                  <Image
                    key={index}
                    data={navImage}
                    sizes="60"
                    widths={[60]}
                    alt={
                      navImage.altText ||
                      `${selectedProduct.handle}-nav-image-${index}`
                    }
                    onClick={() => onClickNavigation(navImage, index)}
                    className={`${
                      navImage == selectedImage
                        ? 'border border-dark-blue'
                        : 'border-0'
                    } cursor-pointer mb-2`}
                  />
                ),
              )}
            </FadeIn>
          </div>
          <div className="product-menu-bottom absolute right-0 left-0 bottom-0 bg-white z-10">
            {(products as ProductWithMetafields<Product>[]).filter(
              (product) => {
                if (!productType) return true;
                else return product.productType == productType;
              },
            ).length > 1 ? (
              <div className="flex">
                <div
                  onClick={() => {
                    setHandle(
                      handle && handle === 'comfort' ? undefined : 'comfort',
                    );
                    // if (
                    //   refDisclosureButton.current?.getAttribute(
                    //     'aria-expanded',
                    //   ) == 'true'
                    // ) {
                    //   refDisclosureButton.current?.click();
                    // }
                  }}
                  className={`grow flex justify-between items-center p-2 md:px-4 md:py-5 break-all text-174860 text-10 md:text-xs font-semibold uppercase border border-border cursor-pointer ${
                    handle === 'comfort' && 'bg-174860 text-white'
                  }`}
                >
                  <span>comfort</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                      fill={`${handle == 'comfort' ? '#FFF' : '#174860'}`}
                    />
                  </svg>
                </div>
                {productType == 'Mattress' && (
                  <>
                    <div
                      onClick={() => {
                        setHandle(
                          handle && handle === 'benefits'
                            ? undefined
                            : 'benefits',
                        );
                        // if (
                        //   refDisclosureButton.current?.getAttribute(
                        //     'aria-expanded',
                        //   ) == 'true'
                        // ) {
                        //   refDisclosureButton.current?.click();
                        // }
                      }}
                      className={`grow flex justify-between items-center p-2 md:px-4 md:py-5 break-all text-174860 text-10 md:text-xs font-semibold uppercase border border-border cursor-pointer ${
                        handle === 'benefits' && 'bg-174860 text-white'
                      }`}
                    >
                      <span>benefits</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                          fill={`${handle == 'benefits' ? '#FFF' : '#174860'}`}
                        />
                      </svg>
                    </div>
                  </>
                )}
                {productType == 'Mattress' && (
                  <>
                    <div
                      onClick={() => {
                        setHandle(
                          handle && handle === 'technology'
                            ? undefined
                            : 'technology',
                        );
                        // if (
                        //   refDisclosureButton.current?.getAttribute(
                        //     'aria-expanded',
                        //   ) == 'true'
                        // ) {
                        //   refDisclosureButton.current?.click();
                        // }
                      }}
                      className={`grow flex justify-between items-center p-2 md:px-4 md:py-5 break-all text-174860 text-10 md:text-xs font-semibold uppercase border border-border cursor-pointer ${
                        handle === 'technology' && 'bg-174860 text-white'
                      }`}
                    >
                      <span>technology</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                          fill={`${
                            handle == 'technology' ? '#FFF' : '#174860'
                          }`}
                        />
                      </svg>
                    </div>
                  </>
                )}
                {productType == 'Mattress' && (
                  <>
                    <div
                      onClick={() => {
                        setHandle(
                          handle && handle === 'comparison'
                            ? undefined
                            : 'comparison',
                        );

                        // if (
                        //   refDisclosureButton.current?.getAttribute(
                        //     'aria-expanded',
                        //   ) == 'true'
                        // ) {
                        //   refDisclosureButton.current?.click();
                        // }
                      }}
                      className={`grow flex justify-between items-center p-2 md:px-4 md:py-5 break-all text-174860 text-10 md:text-xs font-semibold uppercase border border-border cursor-pointer ${
                        handle === 'comparison' && 'bg-174860 text-white'
                      }`}
                    >
                      <span>comparison</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                          fill={`${
                            handle == 'comparison' ? '#FFF' : '#174860'
                          }`}
                        />
                      </svg>
                    </div>
                  </>
                )}
                <AnchorLink
                  href="#productDetails"
                  className={`grow hidden md:flex justify-between items-center p-2 md:px-4 md:py-5 break-all text-174860 text-10 md:text-xs font-semibold uppercase border border-border cursor-pointer`}
                  offset={100}
                >
                  <span>Discover more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                      fill="#174860"
                    />
                  </svg>
                </AnchorLink>
              </div>
            ) : (
              <div className="w-full flex justify-center border border-border cursor-pointer">
                <AnchorLink
                  href="#productDetails"
                  className={`grow hidden md:flex justify-between items-center p-2 md:px-4 md:py-5 break-all text-174860 text-10 md:text-xs font-semibold uppercase`}
                  offset={100}
                >
                  <span>Discover more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
                      fill="#174860"
                    />
                  </svg>
                </AnchorLink>
              </div>
            )}
            {
              handle && (
                <div className="absolute left-0 right-0 bottom-full px-10 py-12 grid grid-cols-3 bg-white">
                  {(products as ProductWithMetafields<Product>[])
                    .filter((product) => {
                      if (!productType) return true;
                      else return product.productType == productType;
                    })
                    .map((product, index) => {
                      const minPrice = product.variants.nodes.sort(
                        (a, b) =>
                          parseFloat(a.price.amount) -
                          parseFloat(b.price.amount),
                      )[0].price;
                      return (
                        <CollectionProductCard
                          key={index}
                          index={index}
                          minPrice={minPrice}
                          product={product}
                          productType={productType}
                          handle={handle}
                          selectedProduct={selectedProduct}
                          changeProduct={changeProduct}
                          linkTo={`/pillows/${collectionHandle}/${slugify(
                            product.title,
                          )}`}
                          closeModel={() => setHandle(undefined)}
                        />
                      );
                    })}
                </div>
              )
              // <CollectionProductCard
              //   products={products as ProductWithMetafields<Product>[]}
              //   productType={productType || undefined}
              //   productType={productType}
              //   handle={handle}
              //   selectedProduct={selectedProduct}
              //   changeProduct={changeProduct}
              // />
            }
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/12 bg-white lg:border-l-[30px] lg:border-[#f7f7f7] pb-3">
        <FadeIn>
          { 
          productType=='Pillow' && homePromotion?.items[0].fields?.pillowPromoLabelExclude?.filter((item:string)=>(item.toLowerCase()==product.title.toLowerCase()))?.length==0  &&
            <div className='w-full flex justify-left px-5 pt-4'>
              <h1 className='w-fit text-white text-xxs bg-red-600 rounded-3xl px-4 py-1'>{homePromotion?.items[0].fields.pillowPromoTopLabel}</h1>
            </div>
          }
          <h1 className="product-title text-cusSubheading text-dark-blue font-semibold lg:text-[25px] mb-[10px] p-5">
            {selectedProduct.title}
          </h1>
        </FadeIn>
        {/* Model picker */}
        <Disclosure
          as="div"
          className="p-5 border-t border-[#dee2e6]"
          defaultOpen
        >
          {({open}) => (
            <>
              <Disclosure.Button
                ref={refDisclosureButton}
                className="flex w-full justify-between text-[13px] text-dark-blue"
              >
                <span>Choose your model</span>
                <BsChevronDown
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="pt-3">
                {(products as Product[])
                  .filter((product: Product) => {
                    if (!productType) return true;
                    else {
                      return product.productType == productType;
                    }
                  })
                  .map((product: Product, index: number) => {
                    const productImage = product.featuredImage
                      ? product.featuredImage
                      : product.images.nodes[0];
                    const minPrice = product.variants.nodes.sort(
                      (a, b) =>
                        parseFloat(a.price.amount) - parseFloat(b.price.amount),
                    )[0].price;
                    return (
                      // <Disclosure.Button
                      //   as={Link}
                      <Link
                        to={`/pillows/${collectionHandle}/${slugify(
                          product.title,
                        )}`}
                        key={index}
                        className={`${
                          selectedProduct.handle == product.handle
                            ? 'bg-[#e9eced]'
                            : ''
                        } border rounded-xs border-[#e9eced] mt-2 flex items-center cursor-pointer relative`}
                        onClick={() => {
                          changeProduct(product);
                          setHandle(undefined);
                        }}
                      >
                        <div
                          className="w-20 bg-cover bg-center self-stretch"
                          style={{
                            backgroundImage: `url("${productImage.url}")`,
                          }}
                        ></div>
                        <div className="grow pl-5 hover:text-[#b09987] py-1">
                          <p className="text-xs font-bold uppercase">
                            {product.title}
                          </p>
                          {
                            (product as ProductWithMetafields<Product>).saveUpTo ?
                            <>
                              <p className='text-[11px] text-red-600'>
                                {`Save up to ${(product as ProductWithMetafields<Product>)
                                  .saveUpTo?.value
                                }`}
                              </p>
                              <br/>
                            </>
                            :
                            <p className="text-[11px]">
                              Starting at&nbsp;&nbsp;
                              {(product as ProductWithMetafields<Product>)
                                .discountPercent ? (
                                <div className='flex flex-wrap justify-between'>
                                  <span className="text-blue">
                                    <Money
                                      data={{
                                        ...minPrice,
                                        amount: (
                                          (parseInt(minPrice.amount) *
                                            (100 -
                                              (
                                                product as ProductWithMetafields<Product>
                                              ).discountPercent.value)) /
                                          100
                                        ).toString(),
                                      }}
                                    />
                                  </span>
                                  <span className='text-red-600 font-bold pr-[10px]'>{`PROMO ${(product as ProductWithMetafields<Product>).discountPercent.value}%`}</span>
                                </div>
                              ) : (
                                <Money data={minPrice} />
                              )}
                            </p>
                          }
                          {/* <p className="text-[11px]">
                            Starting at&nbsp;&nbsp;
                            {(product as ProductWithMetafields<Product>)
                              .discountPercent ? (
                              <>
                                <span className="text-red-600">
                                  <Money
                                    data={{
                                      ...minPrice,
                                      amount: (
                                        (parseInt(minPrice.amount) *
                                          (100 -
                                            (
                                              product as ProductWithMetafields<Product>
                                            ).discountPercent.value)) /
                                        100
                                      ).toString(),
                                    }}
                                  />
                                </span>
                              </>
                            ) : (
                              <Money data={minPrice} />
                            )}
                          </p> */}
                        </div>
                        {/* {(product as ProductWithMetafields<Product>)
                          .discountPercent && (
                          <div className="absolute top-0 left-0 bg-red-600 text-white px-2 uppercase text-8">
                            promo
                          </div>
                        )} */}
                        {/* </Disclosure.Button> */}
                      </Link>
                    );
                  })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* Variant picker */}
        <Disclosure as="div" className="p-5 border-t border-[#dee2e6]">
          {({open}) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-[13px] text-dark-blue">
                <span>
                  {selectedVariant
                    ? selectedVariant.selectedOptions[0].value
                    : 'Select your size'}
                  <br />
                  <a href="#" className="text-8c8c8c text-xxs">
                    Sizes guide
                  </a>
                </span>
                <BsChevronDown
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="pt-3">
                {({close}) => (
                  <>
                    {flattenConnection(selectedProduct.variants).map(
                      (variant: ProductVariant, index: number) => {
                        return (
                          <Disclosure.Button
                            as="div"
                            className="flex items-center mb-4"
                            key={index}
                            onClick={() => {
                              setSelectedVariant(variant);
                              // setHandle(undefined);
                              // close();
                            }}
                          >
                            <input
                              checked={variant == selectedVariant}
                              id="default-radio-1"
                              type="radio"
                              value=""
                              name="default-radio"
                              className="w-4 h-4 text-[#181a1b] bg-gray-100 border-gray-300 focus:text-[#181818] dark:text-red-200"
                            />
                            {/* <label className="radio-label ml-2 text-sm font-medium dark:text-gray-300">
                              {variant.selectedOptions[0].value}
                            </label> */}
                            {
                              <label className="radio-label ml-2 text-sm font-medium dark:text-gray-300">
                                {
                                  variant.compareAtPrice ? 
                                  <>
                                    {variant.selectedOptions[0].value } <span className='text-red-600'>&nbsp;&nbsp;&nbsp;Save ${(parseFloat(variant.compareAtPrice.amount)-parseFloat(variant.price.amount)).toFixed(2)}</span>
                                  </> :
                                  <>
                                    {variant.selectedOptions[0].value }
                                  </>
                                }
                              </label>
                            }
                          </Disclosure.Button>
                        );
                        // return (
                        //   <div
                        //     key={index}
                        //     className={`${
                        //       selectedVariant == variant ? 'bg-[#e9eced]' : ''
                        //     } border rounded-xs border-[#e9eced] mt-2 flex items-center cursor-pointer`}
                        //     onClick={() => {
                        //       setSelectedVariant(variant);
                        //       close();
                        //     }}
                        //   >
                        //     <div className="grow pl-5 text-dark-blue text-[10px]">
                        //       {variant.selectedOptions[0].value}
                        //     </div>
                        //   </div>
                        // );
                      },
                    )}
                  </>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="product-quantity p-5 border-t border-b border-[#dee2e6] uppercase flex justify-between items-center text-[13px] text-dark-blue">
          <span>Quantity</span>
          <div className="qty-form flex items-center">
            <button onClick={() => decreaseQty()}>
              <RxMinusCircled className="w-5 h-5 text-dark-blue" />
            </button>
            <input
              type="text"
              name="qty"
              className="w-10 border-0 p-0 text-center text-lg"
              value={quantity}
              onChange={() => {}}
            />
            <button onClick={() => increaseQty()}>
              <RxPlusCircled className="w-5 h-5 text-dark-blue" />
            </button>
          </div>
        </div>
        {selectedVariant && (
          <div className="product-price p-5 text-dark-blue text-cusSubheading lg:text-[20px]">
            {(selectedProduct as ProductWithMetafields<Product>)
              .discountPercent ? (
              <>
                <span className="font-bold text-red-600 text-sm">
                  PROMO&nbsp;
                  {
                    (selectedProduct as ProductWithMetafields<Product>)
                      .discountPercent.value
                  }
                  %
                </span>
                <div className='flex flex-wrap justify-between'>
                  <s>
                    <Money data={selectedVariant.price} />
                  </s>
                  <span className="text-lg text-red-600">
                    <Money
                      data={{
                        ...selectedVariant.price,
                        amount: (
                          (parseInt(selectedVariant.price.amount) *
                            (100 -
                              (selectedProduct as ProductWithMetafields<Product>)
                                .discountPercent.value)) /
                          100
                        ).toString(),
                      }}
                    />
                  </span>
                </div>
              </>
            ) : 
            (
              selectedVariant?.compareAtPrice
                ? (
                 <>
                   {selectedVariant.compareAtPrice && <Money className='text-red-600 line-through' data={selectedVariant.compareAtPrice} />} 
                   <Money data={selectedVariant.price} />
                 </>
               ) : (
                 <Money data={selectedVariant.price} />
               )
             
              // <Money data={selectedVariant.price} />
            )}
            {(selectedProduct as ProductWithMetafields<Product>)
              .discountPercent && (
              <span className="text-red-600 ml-8">
                -
                {
                  (selectedProduct as ProductWithMetafields<Product>)
                    .discountPercent.value
                }
                %
              </span>
            )}
          </div>
        )}
        {!selectedVariant && (
          <div className="text-dark-blue text-md mt-12 px-5">
            Select your size to show product price
          </div>
        )}
        {promoLabel && homePromotion?.items[0].fields?.pillowPromoLabelExclude?.filter((item:string)=>(item.toLowerCase()==product.title.toLowerCase()))?.length==0 && (
          <div className='flex items-center pt-3'>
            <div className="text-red-600 pt-2 text-md px-5">{promoLabel && homePromotion?.items[0].fields?.pillowPromoLabel}</div>
            <img width={100} src={homePromotion?.includes.Asset[2].fields.file.url} alt="" />
          </div>
        )}
        <div className="product-actions px-5">
          {/* <button className="bg-light-blue py-3 w-full text-white text-xs hover:bg-btn-hover">BOK YOUR IN-STORE TRIAL</button> */}
          {selectedVariant ? (
            <>
              {selectedVariant.availableForSale && (
                <AddToCartButton
                  lines={[
                    {
                      merchandiseId: selectedVariant.id,
                      quantity: quantity,
                    },
                  ]}
                  className="bg-dark-blue border border-dark-blue py-3 w-full text-white text-xs uppercase mt-2 hover:bg-white hover:text-dark-blue"
                  data-test="add-to-cart"
                >
                  <Text
                    as="span"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>ADD TO CART</span>
                  </Text>
                </AddToCartButton>
              )}

              {!selectedVariant.availableForSale && (
                <h3>Out of Stock</h3>
                // <p className="text-xxs py-2">
                //   Currently out of stock. The product will be delivered within
                //   10 days.
                // </p>
              )}
              {/* {selectedVariant.availableForSale ? (
                <AddToCartButton
                  lines={[
                    {
                      merchandiseId: selectedVariant.id,
                      quantity: 1,
                    },
                  ]}
                  className="bg-dark-blue border border-dark-blue py-3 w-full text-white text-xs uppercase mt-2 hover:bg-white hover:text-dark-blue"
                  data-test="add-to-cart"
                >
                  <Text
                    as="span"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>ADD TO CART</span>
                  </Text>
                </AddToCartButton>
              ) : (
                <button
                  className="bg-dark-blue py-3 w-full text-white text-xs mt-2 disabled:opacity-70"
                  disabled
                >
                  ADD TO CART
                </button>
              )} */}
            </>
          ) : (
            <button
              className="bg-dark-blue py-3 w-full text-white text-xs mt-2 disabled:opacity-70"
              disabled
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
      <div
        className="lg:px-0 px-0 w-full border-t-[30px] border-[#f7f7f7]"
        id="productDetails"
      >
        <ProductContent
          product={selectedProduct as ProductWithMetafields<Product>}
          collectionID={collection.collectionId.value}
        />
        <WorldMap keyframe={''} />
      </div>
    </div>
  );
}

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
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
      collectionId: metafield(namespace: "custom", key: "collection_id") {
        value
      }
      pillowId: metafield(namespace: "custom", key: "pillow_id") {
        value
      }
      pillowSummary: metafield(namespace: "custom", key: "pillow_summary") {
        value
      }
      pillowCoverImage: metafield(namespace: "custom", key: "pillow_cover_image") {
        value
      }
      topperId: metafield(namespace: "custom", key: "topper_id") {
        value
      }
      topperSummary: metafield(namespace: "custom", key: "topper_summary") {
        value
      }
      topperCoverImage: metafield(namespace: "custom", key: "topper_cover_image") {
        value
      }
      products(
        first: 100
      ) {
        nodes {
          ...ProductCard
          discountPercent: metafield(namespace: "custom", key: "discount_percent") {
            value
          }
          saveUpTo: metafield(namespace: "custom", key: "save_up_to") {
            value
          }
          technology: metafield(namespace: "custom", key: "technology") {
            value
          }
          benefits: metafield(namespace: "custom", key: "benefits") {
            value
          }
          height: metafield(namespace: "custom", key: "height") {
            value
          }
          comfortDescription: metafield(namespace: "custom", key: "comfort_description") {
            value
          }
          shapeAndSize: metafield(namespace: "custom", key: "shape_and_size") {
            value
          }
          headline: metafield(namespace: "custom", key: "headline") {
            value
          }
          productId: metafield(namespace: "custom", key: "product_id") {
            value
          }
        }
      }
    }
  }
`;
