import {
  json,
  redirect,
  type MetaFunction,
  type ActionFunction,
  type AppLoadContext,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {Form, useActionData, useLoaderData} from '@remix-run/react';
import {useState} from 'react';
import {getInputStyleClasses} from '~/lib/utils';
import {Link} from '~/components';
import type {CustomerAccessTokenCreatePayload} from '@shopify/hydrogen/storefront-api-types';

export const handle = {
  isPublic: true,
};

export async function loader({context, params}: LoaderFunctionArgs) {
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
  return [{title: `Login`}];
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
        Invalid Token. Go to <a href="/account/login">login</a> page.
      </h1>
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
