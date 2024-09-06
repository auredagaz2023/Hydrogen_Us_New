import {json, redirect, type ActionFunction} from '@shopify/remix-oxygen';
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useOutletContext,
  useParams,
  // useTransition,
} from '@remix-run/react';
import {flattenConnection} from '@shopify/hydrogen';
import type {
  MailingAddressInput,
  CustomerAddressUpdatePayload,
  CustomerAddressDeletePayload,
  CustomerDefaultAddressUpdatePayload,
  CustomerAddressCreatePayload,
} from '@shopify/hydrogen/storefront-api-types';
import invariant from 'tiny-invariant';
import {Button, Text} from '~/components';
import {assertApiErrors, getInputStyleClasses, usePrefixPathWithLocale} from '~/lib/utils';
import type {AccountOutletContext} from '../edit';

interface ActionData {
  formError?: string;
}

const badRequest = (data: ActionData) => json(data, {status: 400});

export const handle = {
  renderInModal: false,
};

export const action: ActionFunction = async ({request, context, params}) => {
  const {storefront, session} = context;
  const formData = await request.formData();

  const customerAccessToken = await session.get('customerAccessToken');
  invariant(customerAccessToken, 'You must be logged in to edit your account.');

  const addressId = formData.get('addressId');
  invariant(typeof addressId === 'string', 'You must provide an address id.');

  if (request.method === 'DELETE') {
    try {
      const data = await storefront.mutate<{
        customerAddressDelete: CustomerAddressDeletePayload;
      }>(DELETE_ADDRESS_MUTATION, {
        variables: {customerAccessToken, id: addressId},
      });

      assertApiErrors(data.customerAddressDelete);

      return redirect(params.lang ? `${params.lang}/account?page=addresses` : '/account?page=addresses');
    } catch (error: any) {
      return badRequest({formError: error.message});
    }
  }

  const address: MailingAddressInput = {};

  const keys: (keyof MailingAddressInput)[] = [
    'lastName',
    'firstName',
    'address1',
    'address2',
    'city',
    'province',
    'country',
    'zip',
    'phone',
    'company',
  ];

  for (const key of keys) {
    const value = formData.get(key);
    if (typeof value === 'string') {
      address[key] = value;
    }
  }

  const defaultAddress = formData.get('defaultAddress');

  if (addressId === 'add') {
    try {
      const data = await storefront.mutate<{
        customerAddressCreate: CustomerAddressCreatePayload;
      }>(CREATE_ADDRESS_MUTATION, {
        variables: {customerAccessToken, address},
      });

      assertApiErrors(data.customerAddressCreate);

      const newId = data.customerAddressCreate?.customerAddress?.id;
      invariant(newId, 'Expected customer address to be created');

      if (defaultAddress) {
        const data = await storefront.mutate<{
          customerDefaultAddressUpdate: CustomerDefaultAddressUpdatePayload;
        }>(UPDATE_DEFAULT_ADDRESS_MUTATION, {
          variables: {customerAccessToken, addressId: newId},
        });

        assertApiErrors(data.customerDefaultAddressUpdate);
      }

      return redirect(params.lang ? `${params.lang}/account?page=addresses` : '/account?page=addresses');
    } catch (error: any) {
      return badRequest({formError: error.message});
    }
  } else {
    try {
      const data = await storefront.mutate<{
        customerAddressUpdate: CustomerAddressUpdatePayload;
      }>(UPDATE_ADDRESS_MUTATION, {
        variables: {
          address,
          customerAccessToken,
          id: decodeURIComponent(addressId),
        },
      });

      assertApiErrors(data.customerAddressUpdate);

      if (defaultAddress) {
        const data = await storefront.mutate<{
          customerDefaultAddressUpdate: CustomerDefaultAddressUpdatePayload;
        }>(UPDATE_DEFAULT_ADDRESS_MUTATION, {
          variables: {
            customerAccessToken,
            addressId: decodeURIComponent(addressId),
          },
        });

        assertApiErrors(data.customerDefaultAddressUpdate);
      }

      return redirect(params.lang ? `${params.lang}/account?page=addresses` : '/account?page=addresses');
    } catch (error: any) {
      return badRequest({formError: error.message});
    }
  }
};

export default function EditAddress() {
  const {id: addressId} = useParams();
  const isNewAddress = addressId === 'add';
  const actionData = useActionData<ActionData>();
  const { state } = useNavigation()
  // const transition = useTransition();
  const {customer} = useOutletContext<AccountOutletContext>();
  const addresses = flattenConnection(customer.addresses);
  const defaultAddress = customer.defaultAddress;
  /**
   * When a refresh happens (or a user visits this link directly), the URL
   * is actually stale because it contains a special token. This means the data
   * loaded by the parent and passed to the outlet contains a newer, fresher token,
   * and we don't find a match. We update the `find` logic to just perform a match
   * on the first (permanent) part of the ID.
   */
  const normalizedAddress = decodeURIComponent(addressId ?? '').split('?')[0];
  const address = addresses.find((address) =>
    address.id!.startsWith(normalizedAddress),
  );

  return (
    <div className='w-full flex flex-wrap justify-center lg:justify-between'>
      <aside className="w-full lg:w-3/12 py-4 lg:py-12 bg-[#f7f7f7]">
        <div className="sticky top-[118px] pt-2 lg:pt-6 sm:px-12 md:mx-6 lg:mx-0 bg-[#f7f7f7] px-3">
          <ul>
            <Link
              className={`py-2 lg:py-6 block border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer`}
              to={`/account`}
            >
              My account
            </Link>
            <Link
              className={`py-2 lg:py-6 block border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer`}
              to={`/account?page=orders`}
            >
              My orders
            </Link>
            <Link
              className={`py-2 lg:py-6 block border-b border-[#dee2e6] uppercase text-dark-blue text-[13px] cursor-pointer font-bold`}
              to={`/account?page=addresses`}
            >
              My Addresses
            </Link>
          </ul>
          <Form method="post" action={usePrefixPathWithLocale('/account/logout')} className=" text-right">
            <button type="submit" className="text-dark-blue text-14 pt-2 lg:pt-6 mb-0">
              Sign out
            </button>
          </Form>
        </div>
      </aside>
      <div className="w-full sm:w-10/12 px-3 lg:w-7/12 py-12 lg:my-6 mx-auto">
        <h1 className="mt-2 mb-6 text-subheading lg:text-[40px] text-dark-blue font-semibold">My addresses</h1>
        <div className="max-w-lg">
          <Form method="post" className='flex flex-wrap'>
            <input
              type="hidden"
              name="addressId"
              value={address?.id ?? addressId}
            />
            {actionData?.formError && (
              <div className="flex items-center justify-center mb-6 bg-red-100 rounded">
                <p className="m-4 text-sm text-red-900">{actionData.formError}</p>
              </div>
            )}
            <div className="mt-8 px-2 w-1/2">
              <label htmlFor="firstName" className='block text-dark-blue text-[13px] mb-2 font-bold'>Name</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="firstName"
                name="firstName"
                required
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                aria-label="First name"
                defaultValue={address?.firstName ?? ''}
              />
            </div>
            <div className="mt-8 px-2 w-1/2">
              <label htmlFor="lastName" className='block text-dark-blue text-[13px] mb-2 font-bold'>Last name</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="lastName"
                name="lastName"
                required
                type="text"
                autoComplete="family-name"
                placeholder="Last name"
                aria-label="Last name"
                defaultValue={address?.lastName ?? ''}
              />
            </div>
            <div className="mt-8 px-2 w-full">
              <label htmlFor="company" className='block text-dark-blue text-[13px] mb-2 font-bold'>Company</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company"
                aria-label="Company"
                defaultValue={address?.company ?? ''}
              />
            </div>
            <div className="mt-8 px-2 w-full">
              <label htmlFor="address1" className='block text-dark-blue text-[13px] mb-2 font-bold'>Address</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="address1"
                name="address1"
                type="text"
                autoComplete="address-line1"
                placeholder="Street name ...*"
                required
                aria-label="Address line 1"
                defaultValue={address?.address1 ?? ''}
              />
            </div>
            <div className="mt-8 px-2 w-full">
              <label htmlFor="address2" className='block text-dark-blue text-[13px] mb-2 font-bold'>Apartment, suite, etc.</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="address2"
                name="address2"
                type="text"
                autoComplete="address-line2"
                placeholder="Address line 2"
                aria-label="Address line 2"
                defaultValue={address?.address2 ?? ''}
              />
            </div>
            <div className="mt-8 px-2 w-1/2">
              <label htmlFor="city" className='block text-dark-blue text-[13px] mb-2 font-bold'>City</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="city"
                name="city"
                type="text"
                required
                autoComplete="address-level2"
                placeholder="City"
                aria-label="City"
                defaultValue={address?.city ?? ''}
              />
            </div>
            <div className="mt-8 px-2 w-1/2">
              <label htmlFor="province" className='block text-dark-blue text-[13px] mb-2 font-bold'>State</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="province"
                name="province"
                type="text"
                autoComplete="address-level1"
                placeholder="State / Province"
                required
                aria-label="State"
                defaultValue={address?.province ?? ''}
              />
            </div>
            <div className="mt-8 px-2 w-1/2">
              <label htmlFor="zip" className='block text-dark-blue text-[13px] mb-2 font-bold'>Zip code</label>
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="zip"
                name="zip"
                type="text"
                autoComplete="postal-code"
                placeholder="Zip / Postal Code"
                required
                aria-label="Zip"
                defaultValue={address?.zip ?? ''}
              />
            </div>
            <input
              id="country"
              name="country"
              type="hidden"
              autoComplete="country-name"
              placeholder="Country"
              required
              value="United States"
              aria-label="Country"
              defaultValue={address?.country ?? ''}
            />
            {/* <div className="mt-4">
              <input
                className={`bg-light-gray text-dark-blue w-full border-0 text-sm px-2 py-1`}
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone"
                aria-label="Phone"
                defaultValue={address?.phone ?? ''}
              />
            </div> */}
            <div className="mt-6 px-2 w-full">
              <input
                type="checkbox"
                name="defaultAddress"
                id="defaultAddress"
                defaultChecked={defaultAddress?.id === address?.id}
                className="border-gray-500 rounded-sm cursor-pointer border-1"
              />
              <label
                className="inline-block ml-2 text-sm cursor-pointer"
                htmlFor="defaultAddress"
              >
                Set as default address
              </label>
            </div>
            <div className="w-full flex mt-8 items-center">
              <div>
                <Button
                  className="w-full focus:shadow-outline px-8 py-3 bg-dark-blue text-white text-[13px]"
                  type="submit"
                  disabled={state !== 'idle'}
                >
                  {state !== 'idle' ? 'Saving' : 'Save address'}
                </Button>
              </div>
              <div>
                <Button
                  to="/account?page=addresses"
                  className="underline text-[13px] text-dark-blue"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

const UPDATE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
  ) {
    customerAddressUpdate(
      address: $address
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const DELETE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`;

const UPDATE_DEFAULT_ADDRESS_MUTATION = `#graphql
  mutation customerDefaultAddressUpdate(
    $addressId: ID!
    $customerAccessToken: String!
  ) {
    customerDefaultAddressUpdate(
      addressId: $addressId
      customerAccessToken: $customerAccessToken
    ) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CREATE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
  ) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
