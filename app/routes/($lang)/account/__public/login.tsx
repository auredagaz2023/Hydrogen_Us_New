import {
  json,
  redirect,
  type MetaFunction,
  type ActionFunction,
  type AppLoadContext,
  type LoaderArgs,
} from '@shopify/remix-oxygen';
import {Form, useActionData, useLoaderData} from '@remix-run/react';
import {useState} from 'react';
import {getInputStyleClasses} from '~/lib/utils';
import {Link} from '~/components';
import type {CustomerAccessTokenCreatePayload} from '@shopify/hydrogen/storefront-api-types';

export const handle = {
  isPublic: true,
};

export async function loader({context, params}: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account` : '/account');
  }

  // TODO: Query for this?
  return json({shopName: 'Hydrogen'});
}

type ActionData = {
  formError?: string;
};

const badRequest = (data: ActionData) => json(data, {status: 400});

export const action: ActionFunction = async ({request, context, params}) => {
  const formData = await request.formData();

  const email = formData.get('email');
  const password = formData.get('password');

  if (
    !email ||
    !password ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return badRequest({
      formError: 'Please provide both an email and a password.',
    });
  }

  const {session, storefront} = context;

  try {
    const customerAccessToken = await doLogin(context, {email, password});
    session.set('customerAccessToken', customerAccessToken);

    return redirect(params.lang ? `/${params.lang}/account` : '/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error: any) {
    if (storefront.isApiError(error)) {
      return badRequest({
        formError: 'Something went wrong. Please try again later.',
      });
    }

    /**
     * The user did something wrong, but the raw error from the API is not super friendly.
     * Let's make one up.
     */
    return badRequest({
      formError:
        'Sorry. We did not recognize either your email or password. Please try to sign in again or create a new account.',
    });
  }
};

export const meta: MetaFunction = () => {
  return {
    title: 'Login',
  };
};

export default function Login() {
  const {shopName} = useLoaderData<typeof loader>();
  const actionData = useActionData<ActionData>();
  const [nativeEmailError, setNativeEmailError] = useState<null | string>(null);
  const [nativePasswordError, setNativePasswordError] = useState<null | string>(
    null,
  );

  return (
    <div className="px-3 sm:container py-12">
      <h1 className="mt-2 mb-6 xl:mb-12 text-subheading lg:text-[40px] text-dark-blue font-semibold">
        Account login
      </h1>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-7/12 lg:w-1/2 xxl:w-5/12 pb-[90px]">
          <div className="mb-4">
            <span className="block border-b border-b-[#dee2e6] pb-2 text-14 text-8c8c8c">
              Login
            </span>
          </div>
          <div className="text-dark-blue text-14 mb-4 md:mb-12">
            If you have already an account, use your email address to login
          </div>
          {/* TODO: Add onSubmit to validate _before_ submission with native? */}
          <Form method="post" noValidate>
            {actionData?.formError && (
              <div className="flex items-center justify-center mb-6 bg-[#eefafe] text-[#ff3823]">
                <p className="m-4 text-[12px]">{actionData.formError}</p>
              </div>
            )}
            <div className="w-full mb-6">
              <label
                htmlFor="email"
                className="text-dark-blue text-14 font-bold"
              >
                Email <sup className="text-[#dc3545]">*</sup>
              </label>
              <input
                className="w-full py-[6px] px-3 text-14 text-dark-blue bg-f7 border-0 mt-2 focus-within:outline-0 focus-within:border focus-within:border-dark-blue focus:outline-0 focus:shadow-none"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-label="Email address"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  setNativeEmailError(
                    event.currentTarget.value.length &&
                      !event.currentTarget.validity.valid
                      ? 'Invalid email address'
                      : null,
                  );
                }}
              />
              {nativeEmailError && (
                <p className="text-red-500 text-xs">
                  {nativeEmailError} &nbsp;
                </p>
              )}
            </div>

            <div className="w-full mb-6">
              <label
                htmlFor="email"
                className="text-dark-blue text-14 font-bold"
              >
                Password<sup className="text-[#dc3545]">*</sup>
              </label>
              <input
                className="w-full py-[6px] px-3 text-14 text-dark-blue bg-f7 border-0 mt-2 focus-within:outline-0 focus-within:border focus-within:border-dark-blue focus:outline-0 focus:shadow-none"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                aria-label="Password"
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  if (
                    event.currentTarget.validity.valid ||
                    !event.currentTarget.value.length
                  ) {
                    setNativePasswordError(null);
                  } else {
                    setNativePasswordError(
                      event.currentTarget.validity.valueMissing
                        ? 'Please enter a password'
                        : 'Passwords must be at least 8 characters',
                    );
                  }
                }}
              />
              {nativePasswordError && (
                <p className="text-red-500 text-xs">
                  {' '}
                  {nativePasswordError} &nbsp;
                </p>
              )}
            </div>
            <div className="flex items-center justify-start mb-6">
              <button
                className="font-bold text-white uppercase bg-dark-blue text-[12px] px-8 py-3"
                type="submit"
              >
                Login
              </button>
              <Link
                to="/account/recover"
                className="pl-12 text-[11px] text-8c8c8c"
              >
                Forgot password?
              </Link>
            </div>
            <div className="text-[11px] text-[#dc3545]">
              <sup>*</sup> Required fields
            </div>
          </Form>
        </div>
        <div className="w-full md:w-4/12 mb-12">
          <div className="mb-4">
            <span className="block border-b border-b-[#dee2e6] pb-2 text-14 text-8c8c8c">
              Not registered yet?
            </span>
          </div>
          <div className="text-dark-blue text-14 mb-4 md:mb-12">
            Create an account to access many benefits: quick checkout, multiple
            shipping addresses, order management and much more!
          </div>
          <Link
            to="/account/register"
            className="font-bold text-white uppercase bg-dark-blue text-[12px] px-8 py-3"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

const LOGIN_MUTATION = `#graphql
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

export async function doLogin(
  {storefront}: AppLoadContext,
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
) {
  const data = await storefront.mutate<{
    customerAccessTokenCreate: CustomerAccessTokenCreatePayload;
  }>(LOGIN_MUTATION, {
    variables: {
      input: {
        email,
        password,
      },
    },
  });

  if (data?.customerAccessTokenCreate?.customerAccessToken?.accessToken) {
    return data.customerAccessTokenCreate.customerAccessToken.accessToken;
  }

  /**
   * Something is wrong with the user's input.
   */
  throw new Error(
    data?.customerAccessTokenCreate?.customerUserErrors.join(', '),
  );
}
