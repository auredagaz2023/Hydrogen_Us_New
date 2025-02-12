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

    const productSheetEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.productId,fields.comfortLevel,fields.sleepStyle,fields.structure,fields.gallery,fields.structureImage,fields.materials,fields.specifications&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=productSheet&fields.productId=${product.productId.value}`;

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

  console.log('product!!!', product)
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
      <CollectionLinks />     
    </div>
  );
}
