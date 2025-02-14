import {Link} from '@remix-run/react';
import {CollectionLinks} from '~/components/CollectionLinks';
import {Image} from '@shopify/hydrogen';
import Slider from 'react-slick';;

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

const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
const CONTENTFUL_ACCESS_TOKEN =
  'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '-30px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
      }}
    >
      <span className='font-bold text-[30px]'>&lt;</span>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '-30px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
      }}
    >
      <span className='font-bold text-[30px]'>&gt;</span>
    </div>
  );
};

export function AccessoriesProductContent({
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
  const [videoGalleries, setVideoGalleries]= useState<any[]>([]);
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
    arrows: true,
    fade: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  useEffect(() => {
    // const client = createClient({
    //   space: CONTENTFUL_SPACE_ID,
    //   accessToken: CONTENTFUL_ACCESS_TOKEN,
    //   environment: 'master'
    // })

    // const fetchSpecifications = async () => {
    //   try {
    //     const response = await client.getEntries({
    //       content_type: 'specifications', // Content type
    //       'fields.name': product.productId.value, // Filter by name
    //     });
    //     // setSpecifications(response?.items?.[0]?.fields)

    //     console.log('Fetched Data:', response);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchSpecifications()

    const specificationsEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=specifications&fields.name=${product.productId.value}`;
    const videoGalleryEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=videoGallery&fields.name=${product.productId.value}`;

    (async () => {
      // if (collectionID) {
      //   const howItWorksEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.youtubeVideo,fields.name&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=howItWorksElement&fields.name=${collectionID}`;
      //   await fetch(howItWorksEndpoint)
      //     .then((res) => res.json())
      //     .then((res) => {
      //       const response = res as unknown as ContentfulHowItWorks;
      //       if (response.items.length > 0) {
      //         setHowItWorks(response.items[0].fields.youtubeVideo);
      //       } else {
      //         setHowItWorks(undefined);
      //       }
      //     });
      // }

      await fetch(specificationsEndpoint)
        .then((res) => res.json())
        .then((res) => {
          const response = res as unknown as ContentfulProductSheet;
          setSpecifications(response?.items?.[0]?.fields)
        });
      await fetch(videoGalleryEndpoint)
        .then((res) => res.json())
        .then((res:any) => {
          setVideoGalleries(res?.includes?.Asset?.map(asset => asset?.fields))
          console.log('res gallery', res?.includes?.Asset?.map(asset => asset?.fields))
        })
    })();
  }, [product]);

  return (
    <div className="px-5 md:container py-16 md:pt-0 md:pb-24 lg:pb-28 lg:px-23">
      <div className="grid grid-cols-12 mb-5 lg:mb-16">
        <div className="lg:text-center col-span-12 lg:col-span-4">          
          {product.images.nodes[0] && (
            <Image
              className="inline-block w-[320px] lg:w-full lg:pl-20 object-contain"
              data={product.images.nodes[0]}
            />
          )}
        </div>
        <div className="col-span-12 lg:col-start-6 lg:col-span-8 pt-8">
          {product.productType === 'Mattress' && product.headline && (
            <h5 className="text-[#022d83] font-semibold pb-8 text-[24px]">
              {product.headline.value}
            </h5>
          )}
          <div
            className="prose border-t border-gray-200 pt-6 text-[#022d8e] text-[20px]"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          ></div>
          <div className="max-w-5xl mx-auto my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 justify-start items-start mt-8">
              <div>
                <div className="text-[#406080] text-[20px] font-semibold uppercase mb-4">
                  technology
                </div>
                <div className="text-174860 text-[16px]">
                  <RichText data={JSON.parse(product.technology.value)} />
                </div>
              </div>
              <div>
                <div className="text-[#1c1072] text-[20px] font-semibold uppercase mb-4">
                  Benefits
                </div>
                <div className="text-174860 text-[16px]">
                  <RichText data={JSON.parse(product.benefits.value)} />
                </div>
              </div>   
            </div>
          </div>
        </div>
      </div>
      <div
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
            <div className="border-b border-b-border flex px-[20px]">
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
            </div>
            <div className="border-b border-b-border flex px-[20px]">
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
            </div>
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
      </div>
      <>
      {videoGalleries &&
        <div className="my-12 mx-6 relative" id="productGallery">
          <Slider
            {...settings}
            afterChange={(currentSlide) => setGalleryIndex(currentSlide)}
          >
            {videoGalleries.map((videoGallery, index: number) => (
              <div>
                <video className='w-full' autoPlay loop muted alt="img1" >
                  <source 
                    src={videoGallery.file.url}
                    type="video/mp4"
                  />
                </video>
              </div>
            ))}
          </Slider>
          <span className="gallery-pagination">
            {`00${galleryIndex + 1}`.slice(-2)} |{' '}
            {`00${videoGalleries.length}`.slice(-2)}
          </span>
        </div>
      }
      </>
      <CollectionLinks />     
    </div>
  );
}
