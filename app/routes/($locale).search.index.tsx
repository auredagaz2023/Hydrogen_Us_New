import {Link, useLoaderData} from '@remix-run/react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {RxChevronDown, RxMagnifyingGlass, RxTrash} from 'react-icons/rx';
import AnimateHeight from 'react-animate-height';
import {useState} from 'react';
import {
  Product,
  ProductConnection,
} from '@shopify/hydrogen/storefront-api-types';
import {Image, flattenConnection} from '@shopify/hydrogen';
import {ProductWithMetafields} from '~/lib/type';
import {BsFilter} from 'react-icons/bs';
import {slugify} from './($locale).news.index';

export const handle = {
  seo: {
    title: 'Search and filter the product at Magniflex website',
    titleTemplate: 'Search and filter the product at Magniflex website',
    description: '',
    handle: '@shopify',
    url: `https://magniflex.us/search`,
  },
};

const PRICE_RANGES = ['Up to $1000', 'Up to $2000', 'No budget limit'];

export async function loader({params, request, context}: LoaderArgs) {
  const {products} = await context.storefront.query<{
    products: ProductConnection;
  }>(PRODUCTS_QUERY, {
    variables: {
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  const productNodes = flattenConnection(products);

  const categories: string[] = [];
  productNodes.forEach((product) => {
    const category = (product as ProductWithMetafields<Product>).productCategory
      .value;
    if (!categories.includes(category)) categories.push(category);
  });

  return json({
    products: productNodes,
    categories: categories,
  });
}

export default function Search() {
  const {products, categories} = useLoaderData<typeof loader>();
  const [keyword, setKeyword] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [disclosure, setDisclosure] = useState<
    'category' | 'price_range' | undefined
  >(undefined);

  const handleDisclosure = (handle: 'category' | 'price_range') => {
    if (handle === disclosure) setDisclosure(undefined);
    else setDisclosure(handle);
  };

  const handleFilter = (
    value: string,
    filterType: 'category' | 'price_range',
  ) => {
    let _categories: string[] = [...selectedCategories];
    let _priceRanges: string[] = [...selectedPriceRange];
    if (filterType === 'category') {
      if (_categories.includes(value)) {
        const index = _categories.indexOf(value);
        _categories = [
          ..._categories.slice(0, index),
          ..._categories.slice(index + 1),
        ];
      } else {
        _categories = [..._categories, value];
      }
    }
    if (filterType === 'price_range') {
      if (_priceRanges.includes(value)) {
        const index = _priceRanges.indexOf(value);
        _priceRanges = [
          ..._priceRanges.slice(0, index),
          ..._priceRanges.slice(index + 1),
        ];
      } else {
        _priceRanges = [..._priceRanges, value];
      }
    }
    setSelectedCategories(_categories);
    setSelectedPriceRange(_priceRanges);

    filterProducts(_categories, _priceRanges, keyword);
  };

  const handleSearch = (value: string) => {
    setKeyword(value);
    filterProducts(selectedCategories, selectedPriceRange, value);
  };

  const handleRemoveFilter = () => {
    setSelectedCategories([]);
    setSelectedPriceRange([]);
    setKeyword('');
    filterProducts([], [], '');
  };

  const filterProducts = (
    _categories: string[],
    _priceRanges: string[],
    _keyword: string,
  ) => {
    const categoryFiltered = products.filter(
      (product) =>
        _categories.length === 0 ||
        _categories.includes(
          (product as ProductWithMetafields<Product>).productCategory.value,
        ),
    );
    const priceRangeFiltered = categoryFiltered.filter((product) => {
      let priceLimit = 0;
      if (_priceRanges.length === 0 || _priceRanges.includes('No budget limit'))
        return true;
      else if (_priceRanges.includes('Up to $2000')) priceLimit = 2000;
      else priceLimit = 1000;

      return product.variants.nodes.some(
        (variant) => parseFloat(variant.price.amount) < priceLimit,
      );
    });
    const filtered = priceRangeFiltered.filter((product) => {
      if (!_keyword || _keyword === '') return true;
      else {
        const _product = product as ProductWithMetafields<Product>;
        return (
          _product.title.toLowerCase().indexOf(_keyword.toLowerCase()) > -1 ||
          _product.description?.toLowerCase().indexOf(_keyword.toLowerCase()) >
            -1 ||
          _product.technology?.value
            .toLowerCase()
            .indexOf(_keyword.toLowerCase()) > -1 ||
          _product.headline?.value
            .toLowerCase()
            .indexOf(_keyword.toLowerCase()) > -1 ||
          _product.comfortDescription?.value
            .toLowerCase()
            .indexOf(_keyword.toLowerCase()) > -1 ||
          _product.benefits?.value
            .toLowerCase()
            .indexOf(_keyword.toLowerCase()) > -1
        );
      }
    });
    setFilteredProducts(filtered);
  };

  const getPDPLink = (product: Product): string => {
    const collection = product.collections.nodes.find(
      (col) => col.title.indexOf('test') === -1,
    );

    let cardLink = '';
    switch (product.productType) {
      case 'Mattress':
        cardLink = `/mattresses/${collection?.handle}`;
        break;

      case 'Pillow':
        cardLink = `/pillows/${collection?.handle}`;
        break;

      case 'Topper':
        cardLink = `/toppers`;
        break;

      case 'Beds and Bases':
        cardLink = `/bed-bases`;
        break;

      default:
        break;
    }
    return `${cardLink}/${slugify(product.title)}`;
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch">
      <div className="w-full bg-f7 lg:w-80 shrink-0 py-6 lg:h-screen relative px-10 lg:sticky lg:top-[118px]">
        <div className="lg:py-10">
          <div className="relative mb-10">
            <input
              type="text"
              className="w-full text-sm h-8 bg-transparent"
              placeholder="SEARCH"
              value={keyword}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="absolute top-0 right-0 h-full w-8 flex justify-center items-center">
              <RxMagnifyingGlass className="w-4 h-4" />
            </button>
          </div>
          <div className="block lg:hidden">
            <button
              className="w-full flex justify-start pb-3 items-center font-light text-sm"
              onClick={() => setShowFilter(!showFilter)}
            >
              <span>Filer</span>
              <BsFilter className="w-6 h-6" />
            </button>
            <AnimateHeight duration={300} height={showFilter ? 'auto' : 0}>
              <div className="category-dropdown border-b border-t border-E4E4E4 py-2">
                <button
                  className="w-full flex justify-between items-center font-light text-sm"
                  onClick={() => handleDisclosure('category')}
                >
                  <span>Category</span>
                  <RxChevronDown
                    className={`${
                      disclosure === 'category' ? 'rotate-180 transform' : ''
                    } h-6 w-6`}
                  />
                </button>
                <AnimateHeight
                  id="category-dropdown"
                  className="custom-dropdown"
                  duration={300}
                  height={disclosure === 'category' ? 'auto' : 0}
                >
                  {categories.map((category, index) => (
                    <div
                      className="flex items-center gap-2 mt-2 relative"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        name="category"
                        id={category}
                        className="rounded-full bg-white border border-E4E4E4 checked:border"
                        onChange={() => handleFilter(category, 'category')}
                        checked={selectedCategories.includes(category)}
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </AnimateHeight>
              </div>
              <div className="price-range-dropdown border-b border-E4E4E4 py-2">
                <button
                  className="w-full flex justify-between items-center font-light text-sm"
                  onClick={() => handleDisclosure('price_range')}
                >
                  <span>Price range</span>
                  <RxChevronDown
                    className={`${
                      disclosure === 'price_range' ? 'rotate-180 transform' : ''
                    } h-6 w-6`}
                  />
                </button>
                <AnimateHeight
                  id="price-range-dropdown"
                  className="custom-dropdown"
                  duration={300}
                  height={disclosure === 'price_range' ? 'auto' : 0}
                >
                  {PRICE_RANGES.map((priceRange, index) => (
                    <div
                      className="flex items-center gap-2 mt-2 relative"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        name="priceRange"
                        id={priceRange.toLowerCase().replaceAll(' ', '_')}
                        className="rounded-full bg-white border border-E4E4E4 checked:border"
                        onChange={() => handleFilter(priceRange, 'price_range')}
                        checked={selectedPriceRange.includes(priceRange)}
                      />
                      <label
                        htmlFor={priceRange.toLowerCase().replaceAll(' ', '_')}
                      >
                        {priceRange}
                      </label>
                    </div>
                  ))}
                </AnimateHeight>
              </div>
              <div
                className="mt-3 text-red-500 flex items-center text-xs gap-2 cursor-pointer"
                onClick={() => handleRemoveFilter()}
              >
                <span>Remove all filters</span> <RxTrash className="w-4 h-4" />
              </div>
            </AnimateHeight>
          </div>
          <div className="hidden lg:block">
            <div className="category-dropdown border-b border-t border-E4E4E4 py-2">
              <button
                className="w-full flex justify-between items-center font-light text-sm"
                onClick={() => handleDisclosure('category')}
              >
                <span>Category</span>
                <RxChevronDown
                  className={`${
                    disclosure === 'category' ? 'rotate-180 transform' : ''
                  } h-6 w-6`}
                />
              </button>
              <AnimateHeight
                id="category-dropdown"
                className="custom-dropdown"
                duration={300}
                height={disclosure === 'category' ? 'auto' : 0}
              >
                {categories.map((category, index) => (
                  <div
                    className="flex items-center gap-2 mt-2 relative"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      name="category"
                      id={category}
                      className="rounded-full bg-white border border-E4E4E4 checked:border"
                      onChange={() => handleFilter(category, 'category')}
                      checked={selectedCategories.includes(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </AnimateHeight>
            </div>
            <div className="price-range-dropdown border-b border-E4E4E4 py-2">
              <button
                className="w-full flex justify-between items-center font-light text-sm"
                onClick={() => handleDisclosure('price_range')}
              >
                <span>Price range</span>
                <RxChevronDown
                  className={`${
                    disclosure === 'price_range' ? 'rotate-180 transform' : ''
                  } h-6 w-6`}
                />
              </button>
              <AnimateHeight
                id="price-range-dropdown"
                className="custom-dropdown"
                duration={300}
                height={disclosure === 'price_range' ? 'auto' : 0}
              >
                {PRICE_RANGES.map((priceRange, index) => (
                  <div
                    className="flex items-center gap-2 mt-2 relative"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      name="priceRange"
                      id={priceRange.toLowerCase().replaceAll(' ', '_')}
                      className="rounded-full bg-white border border-E4E4E4 checked:border"
                      onChange={() => handleFilter(priceRange, 'price_range')}
                      checked={selectedPriceRange.includes(priceRange)}
                    />
                    <label
                      htmlFor={priceRange.toLowerCase().replaceAll(' ', '_')}
                    >
                      {priceRange}
                    </label>
                  </div>
                ))}
              </AnimateHeight>
            </div>
            <div
              className="mt-3 text-red-500 flex items-center text-xs gap-2 cursor-pointer"
              onClick={() => handleRemoveFilter()}
            >
              <span>Remove all filters</span> <RxTrash className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto lg:grow px-10 py-10">
        <h3 className="text-[28px] md:text-2xl lg:text-4xl text-dark-blue font-semibold">
          Search results ({filteredProducts.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mt-5">
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <div
                style={{
                  paddingBottom: '50%',
                  backgroundImage: `url(${product.images.nodes[0].url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="mt-3 border-b border-gray-300 pb-2">
                <span className="text-xs">
                  {
                    (product as ProductWithMetafields<Product>).productCategory
                      .value
                  }
                </span>
                <p className="mt-1 text-dark-blue text-xl font-semibold">
                  {product.title}
                </p>
              </div>
              <div className="text-sm pt-2 h-32 overflow-hidden">
                {' '}
                {product.description}
              </div>
              <div className="border-t border-gray-300 mt-2">
                <Link
                  to={getPDPLink(product)}
                  state={{product: product}}
                  className="inline-block mt-5 text-dark-blue text-sm uppercase py-2 px-8 border border-dark-blue font-semibold transition-all ease-in-out hover:bg-[#2f88b1] hover:border-[#2f88b1] hover:text-white"
                >
                  select
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const PRODUCTS_QUERY = `#graphql
    query getAllProducts(
        $country: CountryCode
        $language: LanguageCode    
    ) @inContext(country: $country, language: $language) {
        products(
            first: 100
        ) {
            nodes {
                handle
                title
                description
                productType
                images(first: 1) {
                    nodes {
                        width
                        height
                        altText
                        url
                    }
                }
                collections(first: 10) {
                    nodes {
                        handle
                        title
                    }
                }
                technology: metafield(namespace: "custom", key: "technology") {
                    value
                }
                headline: metafield(namespace: "custom", key: "headline") {
                    value
                }
                productCategory: metafield(namespace: "custom", key: "product_category") {
                    value
                }
                benefits: metafield(namespace: "custom", key: "benefits") {
                    value
                }
                comfortDescription: metafield(namespace: "custom", key: "comfort_description") {
                    value
                }
                variants(first: 100) {
                    nodes {
                        price {
                            amount
                            currencyCode
                        }
                    }
                }
            }
        }
    }
`;
