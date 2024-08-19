import {ActionArgs, LoaderArgs, json} from '@shopify/remix-oxygen';
import {ProductConnection} from '@shopify/hydrogen/storefront-api-types';
import {PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {ActionData} from '../account/__private/edit';

const badRequest = (data: ActionData) => json(data, {status: 400});

export async function action({
  request,
  context: {storefront},
  params,
}: ActionArgs) {
  const body = await request.formData();
  const tagsString = body.get('tags');
  const testIndex = body.get('test-index');

  if (!tagsString) {
    return badRequest({
      formError: 'Tags are not selected',
    });
  }

  const tags = JSON.parse(tagsString as string);
  let query = `tag:'${tags[0]}'`;
  for (let i = 1; i < tags.length; i++) {
    const tag = tags[i];
    query = query + ` AND tag:'${tag}'`;
  }

  const {products} = await storefront.query<{
    products: ProductConnection;
  }>(PRODUCTS_BY_TAGS_QUERY, {
    variables: {
      query,
    },
  });

  return json({
    products,
  });
}

const PRODUCTS_BY_TAGS_QUERY = `#graphql
    ${PRODUCT_CARD_FRAGMENT}
    query (
        $query: String
        $country: CountryCode
        $language: LanguageCode    
    ) @inContext(country: $country, language: $language) {
        products(first: 100, query: $query) {
            nodes {
                ...ProductCard
                collections(first: 1) {
                    nodes {
                        handle
                    }
                }
            }
        }
    }
`;
