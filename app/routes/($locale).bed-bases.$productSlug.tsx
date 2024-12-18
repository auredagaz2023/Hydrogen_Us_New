import {type ReactNode, useRef, Suspense, useMemo, useState} from 'react';
import {Disclosure, Listbox} from '@headlessui/react';
import {defer, redirect, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  useLoaderData,
  Await,
  useSearchParams,
  useLocation,
  // useTransition,
} from '@remix-run/react';
import {
  AnalyticsPageType,
  Money,
  ShopifyAnalyticsProduct,
  //ShopPayButton,
  flattenConnection,
  Image,
  type SeoHandleFunction,
  type SeoConfig,
} from '@shopify/hydrogen';
import {
  Heading,
  IconCaret,
  IconCheck,
  IconClose,
  ProductGallery,
  ProductSwimlane,
  Section,
  Skeleton,
  Text,
  Link,
  AddToCartButton,
} from '~/components';
import {ProductContent} from '~/components/ProductContent';
import WorldMap from '~/components/worldmap';
import {getExcerpt} from '~/lib/utils';
import invariant from 'tiny-invariant';
import clsx from 'clsx';
import type {
  ProductVariant,
  SelectedOptionInput,
  Product as ProductType,
  Shop,
  ProductConnection,
  MediaConnection,
  MediaImage,
  Image as ImageType,
} from '@shopify/hydrogen/storefront-api-types';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import type {ProductWithMetafields, Storefront} from '~/lib/type';
import type {Product} from 'schema-dts';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types/index';
import {BsChevronDown} from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {RxMinusCircled, RxPlusCircled} from 'react-icons/rx';

const seo: SeoHandleFunction<typeof loader> = ({data}) => {
  const media = flattenConnection<MediaConnection>(data.product.media).find(
    (media) => media.mediaContentType === 'IMAGE',
  ) as MediaImage | undefined;

  return {
    title: data?.product?.seo?.title ?? data?.product?.title,
    media: media?.image,
    description:
      data?.product?.seo?.description ??
      data?.product?.description.slice(0, 149),
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      brand: data?.product?.vendor,
      name: data?.product?.title,
    },
  } satisfies SeoConfig<Product>;
};

export const handle = {
  seo,
};

export async function loader({params, request, context}: LoaderArgs) {
  const url = new URL(request.url);
  // const productHandle = url.searchParams.get('product');
  const {productSlug} = params;

  // const {productHandle} = params;
  invariant(productSlug, 'Missing productHandle param, check route filename');
  const redirectUrl = `https://magniflex.us/bed-bases/details?product=${productSlug}`
  return redirect(redirectUrl)
}
