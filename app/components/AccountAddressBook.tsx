import {Form} from '@remix-run/react';
import type {
  Customer,
  MailingAddress,
} from '@shopify/hydrogen/storefront-api-types';
import {Button, Link, Text} from '~/components';

export function AccountAddressBook({
  customer,
  addresses,
}: {
  customer: Customer;
  addresses: MailingAddress[];
}) {
  return (
    <>
      <div className="grid w-full gap-4 md:gap-8">
        <div>
          {!addresses?.length && (
            <Text className="mb-1" width="narrow" as="p" size="copy">
              You haven&apos;t saved any addresses yet.
            </Text>
          )}
          {/* <div className="w-48">
            <Button
              to="address/add"
              className="mt-2 text-sm w-full mb-6"
            >
              Add an Address
            </Button>
          </div> */}
          {Boolean(addresses?.length) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {customer.defaultAddress && (
                <Address address={customer.defaultAddress} defaultAddress />
              )}
              {addresses
                .filter((address) => address.id !== customer.defaultAddress?.id)
                .map((address) => (
                  <Address key={address.id} address={address} />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Address({
  address,
  defaultAddress,
}: {
  address: MailingAddress;
  defaultAddress?: boolean;
}) {
  return (
    <div className="py-6 lg:py-8 flex flex-col relative">
      {defaultAddress && (
        <div className="mb-3 flex flex-row absolute top-0 left-0 translate-y-100">
          <span className="py-1 text-xs font-medium rounded-full text-gold text-[12px]">
            Default
          </span>
        </div>
      )}
      <ul className="flex-1 flex-row text-dark-blue text-14">
        {(address.firstName || address.lastName) && (
          <li className='mb-2'>
            {'' +
              (address.firstName && address.firstName + ' ') +
              address?.lastName}
          </li>
        )}
        {address.formatted &&
          address.formatted.map((line: string) => <li key={line}>{line}</li>)}
      </ul>

      <div className="flex flex-row font-medium mt-6 items-baseline">
        <Link
          to={`/account/address/${encodeURIComponent(address.id)}`}
          className="text-left underline text-sm font-bold text-dark-blue"
          prefetch="intent"
        >
          Edit address
        </Link>
        {/* <Form action="address/delete" method="delete">
          <input type="hidden" name="addressId" value={address.id} />
          <button className="text-left text-primary/50 ml-6 text-sm">
            Remove
          </button>
        </Form> */}
      </div>
    </div>
  );
}
