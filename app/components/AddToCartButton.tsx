import type {CartLineInput} from '@shopify/hydrogen/storefront-api-types';
import {useFetcher, useMatches} from '@remix-run/react';
import {Button} from '~/components';
import {CartAction} from '~/lib/type';
import {Suspense,useState} from 'react'
import {Await} from '@remix-run/react';

export function AddToCartButton({
  children,
  lines,
  className = '',
  variant = 'primary',
  width = 'full',
  analytics,
  ...props
}: {
  children: React.ReactNode;
  lines: CartLineInput[];
  className?: string;
  variant?: 'primary' | 'secondary' | 'inline';
  width?: 'auto' | 'full';
  analytics?: unknown;
  [key: string]: any;
}) {
  const [root] = useMatches();
  const selectedLocale = root?.data?.selectedLocale;
  const fetcher = useFetcher();

  return (
    <>
      <fetcher.Form method="post" action='/cart'>
        <input type="hidden" name="cartAction" value={CartAction.ADD_TO_CART} />
        <input type="hidden" name="countryCode" value={selectedLocale.country} />
        <input type="hidden" name="lines" value={JSON.stringify(lines)} />
        <input type="hidden" name="analytics" value={JSON.stringify(analytics)} />
        {/* <Suspense>
          <Await resolve={root.data?.cart}>
            {(cartData) => {
              // console.log('cartData', cartData)
              // console.log('lines', lines)
              // console.log('lineId', cartData.lines.edges.filter((edge:any)=>{return (edge.node.merchandise.id==lines[0]?.merchandiseId && edge.node.cost.totalAmount.amount!='0.0')})[0]?.node.id)
              // console.log('qauntity', cartData.lines.edges.filter((edge:any)=>{return (edge.node.merchandise.id==lines[0]?.merchandiseId && edge.node.cost.totalAmount.amount!='0.0')})[0].node.quantity+lines[0]?.quantity)
              // const node = cartData.lines.edges.filter((edge:any)=>{return (edge.node.merchandise.id==lines[0]?.merchandiseId && edge.node.cost.totalAmount.amount!='0.0')})[0]?.node;
              // const updateLines = {id:node?.id, quantity:node?.quantity+lines[0].quantity}
              // console.log('updateLines',JSON.parse(JSON.stringify(updateLines)))
              // return <input type='hidden' name='updateLines' value={JSON.stringify(updateLines)} />;
              if (cartData && lines && lines.length > 0) {
                const matchingLine = cartData.lines.edges.find((edge:any) => {
                  return (
                    edge.node.merchandise.id === lines[0]?.merchandiseId &&
                    edge.node.cost.totalAmount.amount !== '0.0'
                  );
                });
                console.log('matchingLine',matchingLine);
                if (matchingLine) {
                  const updatedQuantity = matchingLine.node.quantity + lines[0]?.quantity;
                  const updateLines = { id: matchingLine.node.id, quantity: updatedQuantity };
                  console.log('updatelines', updateLines)
                  return <input type='hidden' name='updateLines' value={JSON.stringify(updateLines)} />;
                }
              }
              return null; // or handle the absence of matching lines in the cart
            }}
          </Await>
        </Suspense> */}
        <Button
          as="button"
          type="submit"
          width={width}
          variant={variant}
          className={className}
          {...props}
        >
          {children}
        </Button>
      </fetcher.Form>
      <div className='text-center pt-1'>
        <a href="/shipping-methods" className='text-gray-400 text-xs underline'>Free Shipping</a>
        &nbsp;&nbsp;
        <a href="/warranty" className='text-gray-400 text-xs underline'>Warranty and return policy</a>
      </div>
    </>
  );
}
