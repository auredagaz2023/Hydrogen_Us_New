import {
  SeoHandleFunction,
} from '@shopify/hydrogen';
import {LoaderArgs, redirect} from '@shopify/remix-oxygen';

import invariant from 'tiny-invariant';

const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data?.product?.seo?.title,
  description: data?.product?.seo?.description,
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
  const url = new URL(request.url);
  // const productSlug = url.searchParams.get('product');
  const {collectionHandle, productSlug} = params;
  let product = productSlug
  if (collectionHandle=='magnifico') {
    if (productSlug=='cotton-lux') {
      product = 'toscana-cotton-lux'
    } else if (productSlug=='toscana-grande-12') {
      product = 'toscana-cotton-grande-dual-12'
    }
  } else if (collectionHandle=='magnicool' && productSlug=='magnicool-12-gel') {
    product = 'magnicool-gel-12'
  }
  // const product = (productSlug=='toscana-grande-12' && collectionHandle=='magnifico') ? 'toscana-cotton-grande-dual-12' : productSlug
  invariant(productSlug, 'Missing productSlug param');
  invariant(collectionHandle, 'Missing collectionHandle param');
  const redirectUrl = `https://magniflex.us/mattresses/${collectionHandle}?product=${product}`;
  return redirect(redirectUrl)
}
