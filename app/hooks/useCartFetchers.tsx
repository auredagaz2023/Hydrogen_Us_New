// import {useFetchers} from '@remix-run/react';

// export function useCartFetchers(actionName: string) {
//   const fetchers = useFetchers();
//   const cartFetchers = [];

//   for (const fetcher of fetchers) {
//     const formData = fetcher.submission?.formData;
//     console.log('formdata', fetcher)
//     if (formData && formData.get('cartAction') === actionName) {
//       cartFetchers.push(fetcher);
//     }
//   }
//   return cartFetchers;
// }
import {useFetchers} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';

export function useCartFetchers(actionName: string) {
  const fetchers = useFetchers();
  const cartFetchers = [];

  for (const fetcher of fetchers) {
    if (fetcher.formData) {
      const formInputs = CartForm.getFormInput(fetcher.formData).inputs;
      if (formInputs.cartAction === actionName) {
        cartFetchers.push(fetcher);
      }
    }
  }
  return cartFetchers;
}
