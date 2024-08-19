import {
  type MetaFunction,
  redirect,
  json,
  type ActionFunction,
  type LoaderArgs,
} from '@shopify/remix-oxygen';
import {Form, Link, useActionData} from '@remix-run/react';
import {useState} from 'react';
import {doLogin} from './login';
import type {CustomerCreatePayload} from '@shopify/hydrogen/storefront-api-types';

export async function loader({context, params}: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account` : '/account/');
  }
  return new Response(null);
}

type ActionData = {
  formError?: string;
  exist: boolean;
};

const badRequest = (data: ActionData) => json(data, {status: 400});

export const action: ActionFunction = async ({request, context, params}) => {
  const {session, storefront} = context;
  const formData = await request.formData();

  const email = formData.get('email');
  const name = formData.get('name');
  const cognome = formData.get('cognome');
  const password = formData.get('password');
  const confirmPwd = formData.get('confirm-password');
  const checkbox1 = formData.get('checkbox1');
  const checkbox2 = formData.get('checkbox2');

  if (
    !email ||
    !password ||
    !confirmPwd ||
    !name ||
    !cognome ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return badRequest({
      formError: 'Please fill all required fields.',
      exist: false,
    });
  }

  if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password,
    )
  ) {
    return badRequest({
      formError:
        'Password should contain at least one letter, one digit and one special character',
      exist: false,
    });
  }

  if (password !== confirmPwd) {
    return badRequest({
      formError: "Password doesn't not match!",
      exist: false,
    });
  }

  // if (!checkbox1 || !checkbox2) {
  if (!checkbox1) {
    return badRequest({
      formError: 'You have to agree terms to proceed!',
      exist: false,
    });
  }
  try {
    const data = await storefront.mutate<{
      customerCreate: CustomerCreatePayload;
    }>(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: {
          email,
          password,
          firstName: name,
          lastName: cognome,
        },
      },
    });

    if (!data?.customerCreate?.customer?.id) {
      /**
       * Something is wrong with the user's input.
       */
      throw new Error(data?.customerCreate?.customerUserErrors.join(', '));
    }

    const customerAccessToken = await doLogin(context, {email, password});
    session.set('customerAccessToken', customerAccessToken);
    return redirect(params.lang ? `${params.lang}/account` : '/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error: any) {
    if (storefront.isApiError(error)) {
      return badRequest({
        formError: 'Something went wrong. Please try again later.',
        exist: false,
      });
    }

    /**
     * The user did something wrong, but the raw error from the API is not super friendly.
     * Let's make one up.
     */
    return badRequest({
      formError: 'This email is already in use on this website!',
      exist: true,
    });
  }
};

export const meta: MetaFunction = () => {
  return {
    title: 'Register',
  };
};

export default function Register() {
  const actionData = useActionData<ActionData>();
  const [nativeEmailError, setNativeEmailError] = useState<null | string>(null);
  const [nativePasswordError, setNativePasswordError] = useState<null | string>(
    null,
  );

  return (
    <div className="px-3 sm:container py-12">
      <h1 className="mt-2 mb-6 xl:mb-12 text-subheading lg:text-[40px] text-dark-blue font-semibold">
        Create a new account
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-7/12 lg:w-1/2 xxl:w-5/12 pb-[90px]">
          {/* TODO: Add onSubmit to validate _before_ submission with native? */}
          <Form method="post" noValidate>
            {actionData?.formError && (
              <div className="flex flex-col items-center justify-center mb-6 bg-[#eefafe] text-dark-blue">
                <p className="m-4 text-[12px]">{actionData.formError}</p>
                {actionData?.exist && (
                  <p className="m-4 text-[12px]">
                    Please try another e-mail,{' '}
                    <Link to="/account/login" className="font-bold underline">
                      sign in
                    </Link>{' '}
                    or recover your account{' '}
                    <Link to="/account/recover" className="font-bold underline">
                      resetting your password.
                    </Link>
                  </p>
                )}
              </div>
            )}
            <div className="w-full mb-6">
              <label
                htmlFor="name"
                className="text-dark-blue text-14 font-bold"
              >
                Name <sup className="text-[#dc3545]">*</sup>
              </label>
              <input
                className="w-full py-[6px] px-3 text-14 text-dark-blue bg-f7 border-0 mt-2 focus-within:outline-0 focus-within:border focus-within:border-dark-blue focus:outline-0 focus:shadow-none"
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                aria-label="name"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="cognome"
                className="text-dark-blue text-14 font-bold"
              >
                Last name <sup className="text-[#dc3545]">*</sup>
              </label>
              <input
                className="w-full py-[6px] px-3 text-14 text-dark-blue bg-f7 border-0 mt-2 focus-within:outline-0 focus-within:border focus-within:border-dark-blue focus:outline-0 focus:shadow-none"
                id="cognome"
                name="cognome"
                type="cognome"
                autoComplete="cognome"
                aria-label="cognome"
              />
            </div>
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
                aria-label="Email address"
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
                htmlFor="password"
                className="text-dark-blue text-14 font-bold"
              >
                Password <sup className="text-[#dc3545]">*</sup>
              </label>
              <input
                className="w-full py-[6px] px-3 text-14 text-dark-blue bg-f7 border-0 mt-2 focus-within:outline-0 focus-within:border focus-within:border-dark-blue focus:outline-0 focus:shadow-none"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                aria-label="Password"
                minLength={8}
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
            <div className="w-full mb-6">
              <label
                htmlFor="confirm-password"
                className="text-dark-blue text-14 font-bold"
              >
                Confirm Password <sup className="text-[#dc3545]">*</sup>
              </label>
              <input
                className="w-full py-[6px] px-3 text-14 text-dark-blue bg-f7 border-0 mt-2 focus-within:outline-0 focus-within:border focus-within:border-dark-blue focus:outline-0 focus:shadow-none"
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                aria-label="confirm-password"
                minLength={8}
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
            <div className="mt-4 pt-4">
              <div className="mb-3 flex">
                <input
                  type="checkbox"
                  name="checkbox1"
                  id="checkbox1"
                  className="rounded-sm border-8c8c8c"
                />
                <label
                  htmlFor="checkbox1"
                  className="text-8c8c8c text-[11px] ml-2"
                >
                  I agree with Magniflex USA{' '}
                  <Link to="/privacy-policy" className="underline">
                    privacy terms
                  </Link>
                </label>
              </div>
              <div className="mb-3 flex">
                {/* <input
                  type="checkbox"
                  name="checkbox2"
                  id="checkbox2"
                  className="rounded-sm border-8c8c8c"
                /> */}
                <label
                  htmlFor="checkbox2"
                  className="text-8c8c8c text-[11px] ml-2"
                >
                  I give my consent to receive marketing communication from
                  Magniflex USA
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button
                className="font-bold text-white uppercase bg-dark-blue text-[12px] px-8 py-3"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="text-[11px] text-[#dc3545] mt-6">
              <sup>*</sup> Required fields
            </div>
            <div className="mt-12">
              <Link className="text-dark-blue text-[12px]" to="/account/login">
                &lt; back
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
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
