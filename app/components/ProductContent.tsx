import {Link} from '@remix-run/react';
import {CollectionLinks} from '~/components/CollectionLinks';
import {Image} from '@shopify/hydrogen';
import Slider from 'react-slick';

import imgReviewPlaceholder from '../assets/review-placeholder.jpg';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {
  ContentfulComfortLevel,
  ContentfulHowItWorks,
  ContentfulProductSheet,
  ContentfulProductSpecifications,
  GalleryEntry,
  ProductWithMetafields,
} from '~/lib/type';
import {Tab} from '@headlessui/react';
import {useEffect, useState} from 'react';
import {ContentfulDocument} from '~/routes/($locale).types';
import {ContentfulParagraph} from '~/routes/($locale).types';
import {ContentfulEmbeddedAsset} from '~/routes/($locale).types';
import CollectionImg from '../assets/icons/collection.png';
import CertificationImg from '../assets/icons/certifications.png';
import ThicknessImg from '../assets/icons/height.png';
import ExtraImg from '../assets/icons/extra.png';
import CoverImg from '../assets/icons/cover.png';
import ComfortImg from '../assets/icons/comfort-level.png';
import WarrantyImg from '../assets/icons/warranty.png';
import SupportImg from '../assets/icons/support.png';
import MaterialImg from '../assets/icons/materials.png';
import BenefitsImg from '../assets/icons/benefits.png';
import {RichText} from './Richtext';
import ContentfulRichTextDisplay from './CustomRichTextRenderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SimpleRichTextRenderer from './CustomRichTextRenderer';
import CustomRichTextRenderer from './CustomRichTextRenderer';

export function ProductContent({
  product,
  collectionID,
}: {
  product: ProductWithMetafields<Product>;
  collectionID?: string;
}) {
  const [howItWorks, setHowItWorks] = useState<string | undefined>(undefined);
  const [productSheet, setProductSheet] = useState<
    ContentfulProductSheet | undefined
  >(undefined);
  const [specifications, setSpecifications] = useState<
    ContentfulProductSpecifications | undefined
  >(undefined);
  const [comfortLevel, setComfortLevel] = useState<
    ContentfulComfortLevel | undefined
  >(undefined);
  const [galleryImages, setGalleryImages] = useState<
    {title: string; file: {url: string}}[] | undefined
  >(undefined);
  const [galleryIndex, setGalleryIndex] = useState<number>(1);

  const ALPHABETS = 'ABCDEFGHIJKLMNOP';

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
    const CONTENTFUL_ACCESS_TOKEN =
      'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';

    const productSheetEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=productSheet&fields.productId=${product.productId.value}`;

    (async () => {
      if (collectionID) {
        const howItWorksEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.youtubeVideo,fields.name&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=howItWorksElement&fields.name=${collectionID}`;
        await fetch(howItWorksEndpoint)
          .then((res) => res.json())
          .then((res) => {
            const response = res as unknown as ContentfulHowItWorks;
            if (response.items.length > 0) {
              setHowItWorks(response.items[0].fields.youtubeVideo);
            } else {
              setHowItWorks(undefined);
            }
          });
      }

      await fetch(productSheetEndpoint)
        .then((res) => res.json())
        .then((res) => {
          const response = res as unknown as ContentfulProductSheet;
          console.log('response!!!', response)
          setProductSheet(response);
          const productSpecifications = response.includes?.Entry.find(
            (entry) =>
              entry.sys.id === response.items[0].fields.specifications.sys.id,
          );
          if (!productSpecifications) setSpecifications(undefined);
          else
            setSpecifications(
              productSpecifications.fields as ContentfulProductSpecifications,
            );

          const productComfortLevel = response.includes?.Entry.find(
            (entry) =>
              entry.sys.id === response.items[0].fields.comfortLevel.sys.id,
          );
          if (!productComfortLevel) setComfortLevel(undefined);
          else
            setComfortLevel(
              productComfortLevel.fields as ContentfulComfortLevel,
            );

          const galleryEntry = response.includes?.Entry.find(
            (entry) => entry.sys.id === response.items[0].fields.gallery.sys.id,
          );
          if (galleryEntry) {
            const galleryImages = (galleryEntry as unknown as GalleryEntry)
              .fields.images;
            setGalleryImages(
              response.includes?.Asset.filter((asset) =>
                galleryImages.some(
                  (galleryImage) => galleryImage.sys.id === asset.sys.id,
                ),
              ).map((asset) => {
                return {
                  title: asset.fields.title,
                  file: asset.fields.file,
                };
              }),
            );
          } else {
            setGalleryImages(undefined);
          }
        });
    })();
  }, [product]);

  return (
    <div className="px-5 md:container py-16 md:py-24 lg:py-28">
      <div className="grid grid-cols-12 mb-5 lg:mb-16">
        <div className="lg:text-center col-span-12 lg:col-span-4">
          <h3 className="pb-3 lg:pb-10 text-174860 text-2xl font-semibold px-4">
            {product.title}
          </h3>
          {product.images.nodes[0] && (
            <Image
              className="inline-block w-[320px] lg:w-full"
              sizes="320 800"
              data={product.images.nodes[0]}
            />
          )}
        </div>
        <div className="col-span-12 lg:col-start-6 lg:col-span-6 pt-8">
          {product.headline && (
            <h5 className="text-[#174860] font-semibold pb-8 text-xl">
              {product.headline.value}
            </h5>
          )}
          {/* <p className="text-black text-sm">{product.description}</p> */}
          <div
            className="prose border-t border-gray-200 pt-6 text-black text-md text-[16px]"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          ></div>
        </div>
      </div>
      {/* {product.productType === 'Pillow' && ( */}
      {(
        <div className="max-w-5xl mx-auto my-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 justify-start items-start mt-8">
            <div>
              <div className="text-174860 text-md font-semibold uppercase mb-4">
                technology
              </div>
              <div className="text-174860 text-sm">
                <RichText data={JSON.parse(product.technology.value)} />
              </div>
            </div>
            <div>
              <div className="text-174860 text-md font-semibold uppercase mb-4">
                shape and size
              </div>
              <div className="text-174860 text-sm">
                <RichText data={JSON.parse(product.shapeAndSize.value)} />
              </div>
            </div>
            {product.productType === 'Pillow' && comfortLevel && (
              <>
                <div>
                  <div className="text-174860 text-md font-semibold uppercase mb-4">
                    comfort level
                  </div>
                  <div className="text-174860 text-sm flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{background: comfortLevel?.color}}
                    ></div>
                    <span>{comfortLevel?.name}</span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-8">
            {productSheet && productSheet?.items[0]?.fields?.sleepStyle && (
              <>
                <div className="text-174860 text-md font-semibold uppercase mb-4">
                  A great pillow for
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {productSheet.items[0].fields.sleepStyle.map(
                    (item, index) => {
                      const sleepStyle = productSheet.includes.Entry.find(
                        (entry) => entry.sys.id === item.sys.id,
                      )!.fields as {
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
                        <div key={index}>
                          <img
                            src={sleepStyleImage.fields.file.url}
                            alt={`sleep style ${sleepStyle.title}`}
                            className="w-[240px] md:w-full"
                          />
                          <p className="text-blue-600 text-smm font-semibold mt-2 md:mt-8">
                            {sleepStyle.title}
                          </p>
                          <div className="mt-3">
                            {sleepStyle.description.content
                              .filter(
                                (content) => content.nodeType === 'paragraph',
                              )
                              .map(
                                (
                                  content:
                                    | ContentfulParagraph
                                    | ContentfulEmbeddedAsset,
                                  index: number,
                                ) => (
                                  <p
                                    className="text-gray-800 text-xs"
                                    key={index}
                                  >
                                    {(
                                      content as ContentfulParagraph
                                    ).content.map((text, index) => (
                                      <span key={index}>{text.value}</span>
                                    ))}
                                  </p>
                                ),
                              )}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <Tab.Group as="div">
        <Tab.List
          as="div"
          className="flex justify-between items-center px-5 md:px-24 lg:px-40 flex-wrap"
        >
          {howItWorks && (
            <Tab
              as="div"
              className="text-center text-174860 uppercase text-sm cursor-pointer outline-none basis-1/2 lg:basis-1/4 grow-0 shrink-0 flex justify-center items-center"
            >
              <span className="py-2 mb-2 lg:py-4 ui-selected:border-b-B09987 ui-selected:font-semibold ui-selected:border-b-2">
                How it works
              </span>
            </Tab>
          )}
          <Tab
            as="div"
            className="text-center text-174860 uppercase text-sm cursor-pointer outline-none basis-1/2 lg:basis-1/4 grow-0 shrink-0 flex justify-center items-center"
          >
            <span className="py-2 mb-2 lg:py-4 ui-selected:border-b-B09987 ui-selected:font-semibold ui-selected:border-b-2">
              Structure
            </span>
          </Tab>
          <Tab
            as="div"
            className="text-center text-174860 uppercase text-sm cursor-pointer outline-none basis-1/2 lg:basis-1/4 grow-0 shrink-0 flex justify-center items-center"
          >
            <span className="py-2 mb-2 lg:py-4 ui-selected:border-b-B09987 ui-selected:font-semibold ui-selected:border-b-2">
              {product?.productType=='Beds and bases' ? 'Specifications' : 'Materials'}
            </span>
          </Tab>
          <Tab
            as="div"
            className="text-center text-174860 uppercase text-sm cursor-pointer outline-none basis-1/2 lg:basis-1/4 grow-0 shrink-0 flex justify-center items-center"
          >
            <span className="py-2 mb-2 lg:py-4 ui-selected:border-b-B09987 ui-selected:font-semibold ui-selected:border-b-2">
              Features
            </span>
          </Tab>
        </Tab.List>
        <Tab.Panels as="div">
          {howItWorks && (
            <Tab.Panel as="div">
              <video>
                <source src={howItWorks} />
              </video>
            </Tab.Panel>
          )}
          <Tab.Panel as="div" className="bg-f7 grid grid-cols-12 py-5">
            <div className="col-span-12 order-3 lg:col-span-7 lg:order-1 grid grid-cols-1 sm:grid-cols-2">
              {productSheet &&
                productSheet.items[0]?.fields.structure.map(
                  (structure, index) => {
                    const structureEntry = productSheet.includes.Entry.find(
                      (entry) => entry.sys.id === structure.sys.id,
                    );
                    const structureFields = structureEntry!.fields as {
                      name: string;
                      title: string;
                      description: ContentfulDocument;
                    };
                    const title = structureFields.title;
                    return (
                      <div className="px-10 py-4 sm:py-8" key={index}>
                        <div className="text-174860 text-lg md:text-2xl font-medium pb-2 relative">
                          {ALPHABETS[index]}{' '}
                          <span className="w-40 h-px border-174860 absolute bottom-6 left-9 border"></span>
                        </div>
                        <h3 className="text-xl text-174860 md:text-3xl font-semibold pb-2">
                          {title}
                        </h3>
                        {structureFields.description.content
                          .filter((content) => content.nodeType === 'paragraph')
                          .map(
                            (
                              content:
                                | ContentfulParagraph
                                | ContentfulEmbeddedAsset,
                              index: number,
                            ) => (
                              <p className="text-174860 text-sm" key={index}>
                                {(content as ContentfulParagraph).content.map(
                                  // (text, index: number) => (
                                  //   <span key={index}>{text.value}</span>
                                  // ),
                                  (text:any, index: number) => (
                                    <span key={index} className={`${text?.marks?.[0]?.type=='bold' ? 'font-bold' : ''}`}>{text.value}</span>
                                  ),
                                )}
                              </p>
                            ),
                          )}
                      </div>
                    );
                  },
                )}
            </div>
            <div className="col-span-12 order-2 lg:col-span-5">
              {productSheet && (
                <img
                  src={
                    productSheet.includes?.Asset.find(
                      (asset) =>
                        asset.sys.id ===
                        productSheet.items[0]?.fields.structureImage.sys.id,
                    )?.fields.file.url
                  }
                  className="w-full h-auto"
                  alt="product structure image"
                />
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel
            as="div"
            className="bg-f7 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 py-8 gap-8 lg:gap-12"
          >
            {productSheet &&
              (product.productType!='Beds and bases' ?
              productSheet.items[0]?.fields?.materials?.map(
                (material, index) => {
                  const productMaterial = productSheet.includes.Entry.find(
                    (entry) => entry.sys.id === material.sys.id,
                  );
                  const materialFields = productMaterial!.fields as {
                    name: string;
                    description: ContentfulDocument;
                    image: {
                      sys: {id: string};
                    };
                  };
                  const materialImage = productSheet.includes?.Asset.find(
                    (asset) => asset.sys.id === materialFields.image.sys.id,
                  )?.fields.file.url;

                  return (
                    <div key={index} className="text-174860">
                      <p className="text-xl mb-5">{materialFields.name}</p>
                      {materialImage && (
                        <img
                          src={materialImage}
                          alt={`material ${index}`}
                          className="mb-4 w-[240px] sm:w-full"
                        />
                      )}
                      <div>
                        {materialFields.description.content
                          .filter((content) => content.nodeType === 'paragraph')
                          .map(
                            (
                              content:
                                | ContentfulParagraph
                                | ContentfulEmbeddedAsset,
                              index: number,
                            ) => (
                              <p className="text-174860 text-sm" key={index}>
                                {(content as ContentfulParagraph).content.map(
                                  (text, index) => (
                                    <span key={index}>{text.value}</span>
                                  ),
                                )}
                              </p>
                            ),
                          )}
                      </div>
                    </div>
                  );
                },
              )
              :
              <>
              {
                <CustomRichTextRenderer content={productSheet?.items?.[0]?.fields?.specificationsText}/>
              }
                {/* {productSheet?.items?.[0]?.fields?.specificationsText?.content && <ContentfulRichTextDisplay content={productSheet?.items?.[0]?.fields?.specificationsText?.content}/>} */}
              </>
              )
            }
          </Tab.Panel>
          <Tab.Panel
            as="div"
            className="bg-f7 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5"
          >
            {specifications && (
              <>
                <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={CollectionImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />                  
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      collection
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.collection}
                    </p>
                  </div>
                </div>
                {/* <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={CertificationImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      certifications
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.certifications?.join(', ')}
                    </p>
                  </div>
                </div> */}
                {/* <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={ComfortImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      Comfort Level
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.comfort}
                    </p>
                  </div>
                </div> */}
                <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={MaterialImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      Materials
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.materials?.join(', ')}
                    </p>
                  </div>
                </div>
                <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={BenefitsImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      Benefits
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.benefits?.join(', ')}
                    </p>
                  </div>
                </div>
                <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={WarrantyImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      Warranty
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.warranty}
                    </p>
                  </div>
                </div>

                <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={ThicknessImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      Thickness
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.height}
                    </p>
                  </div>
                </div>
                <div className="border-b border-b-border flex px-[20px]">
                  <img
                    src={ExtraImg}
                    alt="specification collection"
                    className="w-[25px] h-[25px] mr-[16px]"
                  />
                  <div className="pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      extras
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.extras?.join(', ')}
                    </p>
                  </div>
                </div>                                
                {/* <div className="border-b border-b-border flex px-2">
                  <img
                    src={SupportImg}
                    alt="specification collection"
                    className="w-8 h-8 mr-5"
                  />
                  <div className="pt-2 pb-3 md:pb-6">
                    <p className="uppercase text-174860 text-xs my-0 font-bold">
                      Support
                    </p>
                    <p className="text-b09987 text-xs mt-2">
                      {specifications.support}
                    </p>
                  </div>
                </div> */}
                
                
              </>
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {(product.productType === 'Pillow' ||
        product.productType === 'Mattress') &&
        galleryImages && (
          <div className="my-12 relative" id="productGallery">
            <Slider
              {...settings}
              afterChange={(currentSlide) => setGalleryIndex(currentSlide)}
            >
              {galleryImages.map((galleryImage, index: number) => (
                <div>
                  <div
                    className="pb-[130%] sm:pb-[100%] md:pb-[70%] lg:pb-[60%] bg-cover bg-center"
                    style={{backgroundImage: `url('${galleryImage.file.url}')`}}
                  >
                    {' '}
                  </div>
                </div>
              ))}
            </Slider>
            <span className="gallery-pagination">
              {`00${galleryIndex + 1}`.slice(-2)} |{' '}
              {`00${galleryImages.length}`.slice(-2)}
            </span>
          </div>
        )}
      <CollectionLinks />

      {collectionID && collectionID === 'mx-magnistretch' && (
        <div className="min-h-banner max-h-banner h-screen bg-[url('../assets/testimonial-chiellini.jpg')] bg-cover bg-center relative">
          <div className="w-2/5 bg-174860/[.7] absolute right-0 text-white h-full flex place-items-center">
            <div className="p-12">
              <p className="text-3xl font-semibold pb-12 pr-8">
                “Sleeping is already a pleasure, doing it by stretching your
                back makes waking up a wonder, too. If you try it, you never go
                back.”
              </p>
              <div className="w-72 h-px border-white border"></div>
              <p className="text-3xl font-semibold pt-12 pb-4 pr-8">
                Champions choose MagniStretch.
              </p>
              <p>
                MagniStretch technology promotes stretching of the back
                overnight, which is why it is chosen by the likes of Giorgio
                Chiellini and Stefano Tonut.
              </p>
            </div>
          </div>
        </div>
      )}

      {/*<div className="bg-f7 my-12 py-24">
        <div className="px-3 md:container">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="font-semibold mb-5 lg:mb-0 text-[28px] lg:text-5xl text-174860">
              Reviews
            </h3>
            <div className="mr-16">
              <div className="uppercase border px-9 py-3 text-xs font-semibold text-174860 border-174860 cursor-pointer hover:bg-2f88b1 hover:text-white hover:border-2f88b1 text-center mb-2">
                See all reviews
              </div>
              <div className="uppercase border px-9 py-3 text-xs font-semibold text-174860 border-174860 cursor-pointer hover:bg-2f88b1 hover:text-white hover:border-2f88b1 text-center">
                Leave a review
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white text-xs p-8">
              <img src={imgReviewPlaceholder} alt="image" />
              <br />
              <p className="pb-4">
                <strong>Nome e Cognome</strong>
                <br />
                <span className="text-secondary">ha recensito</span>{' '}
                <strong>Magnistretch</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white text-xs p-8">
              <img src={imgReviewPlaceholder} alt="image" />
              <br />
              <p className="pb-4">
                <strong>Nome e Cognome</strong>
                <br />
                <span className="text-secondary">ha recensito</span>{' '}
                <strong>Magnistretch</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white text-xs p-8">
              <img src={imgReviewPlaceholder} alt="image" />
              <br />
              <p className="pb-4">
                <strong>Nome e Cognome</strong>
                <br />
                <span className="text-secondary">ha recensito</span>{' '}
                <strong>Magnistretch</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white text-xs p-8">
              <img src={imgReviewPlaceholder} alt="image" />
              <br />
              <p className="pb-4">
                <strong>Nome e Cognome</strong>
                <br />
                <span className="text-secondary">ha recensito</span>{' '}
                <strong>Magnistretch</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
