import type {Customer} from '@shopify/hydrogen/storefront-api-types';
import {Link} from '~/components';

export function AccountDetails({customer}: {customer: Customer}) {
  const {firstName, lastName, email, phone} = customer;

  return (
    <>
      <div className="mb-6">
        <div className="w-full mb-4 pb-2 border-b border-[#dee2e6]">
          <strong className='text-[15px]'>Account information</strong>
        </div>
        <div className="w-full mb-8">
          <p className="text-[15px] mb-4">
            {firstName || lastName
              ? (firstName ? firstName + ' ' : '') + lastName
              : 'Add name'}{' '}
          </p>
          <p className="text-[15px] mb-4">
            {email}
          </p>
          {/* <p className="mb-4">
            <Link
                prefetch="intent"
                className="text-mod-link text-gold"
                to="/account/edit"
              >
                edit
            </Link>
          </p> */}
        </div>
        <div className="w-full mb-8"></div>
        {/* <div className="lg:p-8 p-6 border border-gray-200 rounded">
          <div className="flex">
            <h3 className="font-bold text-base flex-1">Profile & Security</h3>
          </div>
          <div className="mt-4 text-sm text-primary/50">Name</div>
          <p className="mt-1">
            {firstName || lastName
              ? (firstName ? firstName + ' ' : '') + lastName
              : 'Add name'}{' '}
          </p>

          <div className="mt-4 text-sm text-primary/50">Contact</div>
          <p className="mt-1">{phone ?? 'Add mobile'}</p>

          <div className="mt-4 text-sm text-primary/50">Email address</div>
          <p className="mt-1">{email}</p>

          <div className="mt-4 text-sm text-primary/50">Password</div>
          <p className="mt-1">**************</p>
        </div> */}
      </div>
    </>
  );
}
