import {
  type EnhancedMenu,
  type EnhancedMenuItem,
  useIsHomePath,
} from '~/lib/utils';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconAccount,
  IconBag,
  IconSearch,
  Heading,
  IconMenu,
  IconCaret,
  Section,
  CountrySelector,
  Cart,
  CartLoading,
  Link,
} from '~/components';
import {
  Cart as CartType,
  Product as ProductType,
  Collection,
} from '@shopify/hydrogen/storefront-api-types';

import { ContentfulParagraph } from '~/routes/($locale).types';

import ProductCardContent from './productCardContent';
import CollectionCardContent from './collectionCardContent';

import { Image } from '@shopify/hydrogen';
// import {CollectionWithMetafields, ProductWithMetafields} from '~/lib/type';

import {
  useParams,
  Form,
  Await,
  useMatches,
  useFetcher,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from '@remix-run/react';
import { useWindowScroll } from 'react-use';
import { Disclosure, Menu } from '@headlessui/react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import {
  MdOutlineLocationOn,
  MdPermIdentity,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { BsChevronRight } from 'react-icons/bs';
import {
  FormEvent,
  SetStateAction,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import Logo_Img from '../assets/magniflex-logo-pos.svg';
import Footer_logo_img from '../assets/magniflex-logo-neg.svg';

import { useIsHydrated } from '~/hooks/useIsHydrated';
import { useCartFetchers } from '~/hooks/useCartFetchers';
import type { LayoutData } from '../root';
import { MobileNav } from './MobileNav';
import { ContentfulHomePromotion } from '~/routes/($locale).types';
import { DropdownMenu } from './DropdownMenu';
import { RxCross2 } from 'react-icons/rx';
import { slugify } from '~/routes/($locale).news';

const HUBSPOT_PORTAL_ID = '26099639';
const HUBSPOT_FORM_GUID = '4971e4aa-85a8-4d54-8180-4c3f2806579c';
const GTM_ID = 'GTM-56RM3Q5';

export function Layout({
  children,
  layout,
}: {
  children: React.ReactNode;
  layout: LayoutData;
}) {

  const match = useMatches();
  const path = match[match.length - 1].pathname;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {path != '/presidents-sale' && path != '/magnicool-promo' && path != '/outlast-promo' &&
          <Header
            title={layout?.shop.name ?? 'Hydrogen'}
            menu={layout?.headerMenu}
          />
        }
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>

      {path != '/closeout' && path != '/presidents-sale' && path != '/magnicool-promo' && path != '/outlast-promo' && <FooterNew />}
    </>
  );
}

function Header({ title, menu }: { title: string; menu?: EnhancedMenu }) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeaderNew openCart={openCart} />
      {/* <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      /> */}
      {/* <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      /> */}
    </>
  );
}

function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} type="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({
  isOpen,
  onClose,
  menu,
}: {
  isOpen: boolean;
  onClose: () => void;
  menu: EnhancedMenu;
}) {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      type="Menu"
      openFrom="left"
      heading="Menu"
    >
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({
  menu,
  onClose,
}: {
  menu: EnhancedMenu;
  onClose: () => void;
}) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({ isActive }) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
    </nav>
  );
}

function MobileHeader({
  title,
  isHome,
  openCart,
  openMenu,
}: {
  title: string;
  isHome: boolean;
  openCart: () => void;
  openMenu: () => void;
}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
        } flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}
    >
      <div className="flex items-center justify-start w-full gap-4">
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconMenu />
        </button>
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8"
          >
            <IconSearch />
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <Heading className="font-bold text-center" as={isHome ? 'h1' : 'h2'}>
          {title}
        </Heading>
      </Link>

      <div className="flex items-center justify-end w-full gap-4">
        <a href="https://shopify.com/72109392161/account">
          <MdPermIdentity className="w-5 h-5 mx-2 lg:mx-3 text-dark-blue hover:opacity-70 cursor-pointer" />
        </a>
        {/* <Link
          to="/account"
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconAccount />
        </Link> */}
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

export const topMenuList = [
  { menu: 'OUR ESSENCE', link: '/our-essence' },
  { menu: 'A RECHARGE OF WELL-BEING', link: '/recharge-well-being' },
  { menu: 'INNOVATION AND TECHNOLOGY', link: '/innovation-and-technologies' },
  { menu: 'SUSTAINABILITY', link: '/sustainability' },
  { menu: '5 STARS LUXURY SLEEP', link: '/5-star-luxury-sleep' },
  { menu: 'CERTIFICATIONS', link: '/certifications' },
  //{menu: 'NEWS', link: '/news'},
  { menu: 'CONTACT US', link: '/contacts' },
];
export const mainMenuList = [
  {
    title: 'SALES',
    handle: 'sales',
    productType: 'Promo',
    type: 'promo',
  },
  {
    title: 'COLLECTIONS',
    handle: 'collections',
    productType: 'Collection',
  },
  {
    title: 'MATTRESSES',
    handle: 'mattresses',
    productType: 'Mattress',
  },
  {
    title: 'BEDS AND BASES',
    handle: 'bed-bases',
    productType: 'Beds and Bases',
  },
  {
    title: 'TOPPERS',
    handle: 'toppers',
    productType: 'Topper',
  },
  {
    title: 'PILLOWS',
    handle: 'pillows',
    productType: 'Pillow',
  },
  {
    title: 'BEDDING',
    handle: 'accessories',
    productType: 'Accessories',
  },
];

function DesktopHeaderNew({ openCart }: { openCart: () => void }) {
  const [root] = useMatches();
  const { load, data } = useFetcher();
  const [activeMenu, setActiveMenu] = useState<string>('');
  const navigate = useNavigate();
  // const navigation = useNavigation()
  const [homePromotion, setHomePromotion] = useState<
    ContentfulHomePromotion | undefined
  >(undefined);

  const handleSelectMenu = (productType: SetStateAction<string>) => {
    if (productType == 'Promo') {
      navigate('/sales');
      setActiveMenu('');
    } else {
      setActiveMenu(productType);
    }
  };

  const getCardLink = (collection: Collection, product: ProductType) => {
    let cardLink = '';
    switch (product.productType) {
      case 'Mattress':
        cardLink = `/mattresses/${collection.handle}`;
        break;

      case 'Pillow':
        cardLink = `/pillows/${collection.handle}`;
        break;

      case 'Topper':
        cardLink = `/toppers/details`;
        break;

      case 'Beds and Bases':
        cardLink = `/bed-bases/details`;
        break;

      default:
        break;
    }

    return `${cardLink}?product=${slugify(product.title)}`;
  };

  useEffect(() => {
    const CONTENTFUL_SPACE_ID = '7xbaxb2q56jj';
    const CONTENTFUL_ACCESS_TOKEN =
      'yGGCia7N7dHraGe5fsBZkSHsms6QExEKbWy0XdKIn9g';

    const activePromotionsEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.promoInHomepage,fields.saleRedirectLink&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=activePromotions&fields.name=mxusa-active-promotions`;
    (async () => {
      await fetch(activePromotionsEndpoint)
        .then((res) => res.json())
        .then((res: any) => {
          setHomePromotion(res as ContentfulHomePromotion);
        });
    })();

    if (GTM_ID) {
      const script = document.createElement('script');
      const noscript = document.createElement('noscript');

      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;

      document.head.appendChild(script);
      document.body.appendChild(noscript);
    }
  }, []);

  useEffect(() => {
    if (!activeMenu) return;
    if (activeMenu == 'Collection') {
      load('/api/collections');
    } else if (activeMenu == 'Mattress' || activeMenu == 'Pillow') {
      load(`/api/getProductsByCategory?productType=${activeMenu}`);
    } else if (activeMenu == 'Accessories') {
      load(`/api/accessories`);
    } else {
      load(`/api/getProductsByType?productType=${activeMenu}`);
    }
  }, [activeMenu]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden xxl:flex bg-dark-blue flex-row w-full items-center justify-end text-white uppercase text-xxs px-3 pt-3 pb-[14px]">
        {topMenuList.map(({ menu, link }, index) => (
          <Link
            to={link}
            key={index}
            className="text-white hover:text-white-hover cursor-pointer px-3 py-[5px] leading-[14px] 2xl:tracking-[0.48px] 2xl:px-[16px]"
          >
            {menu}
          </Link>
        ))}
      </div>
      <div className="w-full bg-white px-3 md:px-6 py-3 border-b border-[#e9ecef]">
        <div className="flex flex-wrap px-0 lg:px-2 xl:px-6">
          <Link to={`/`} className="w-5/12 md:w-3/12 lg:w-2/12 max-w-xxs">
            <img src={Logo_Img} alt="site log img" className="h-[65px]" />
          </Link>
          <div className="hidden menu-list xl:block grow self-center justify-self-end text-right">
            {mainMenuList.map((menuItem, index) => (
              // <span
              //   className={`${
              //     activeMenu == menuItem.productType ? 'selected-menu-item' : ''
              //   }  main-menu-item text-xs text-dark-blue cursor-pointer py-2 px-[23px] leading-[18px] 2xl:tracking-[0.48px] ${
              //     menuItem.type == 'promo' && 'font-bold text-red-600'
              //   }`}
              //   key={index}
              //   onClick={() => handleSelectMenu(menuItem.productType)}
              // >
              <span
                className={`main-menu-item text-xs text-dark-blue cursor-pointer py-2 px-[23px] leading-[18px] 2xl:tracking-[0.48px] ${menuItem.type == 'promo' && 'font-bold text-red-600'
                  }`}
                key={index}
                onClick={() => handleSelectMenu(menuItem.productType)}
              >
                <DropdownMenu menuTitle={menuItem.title}>
                  <div className="pt-2 pb-20 overflow-scroll h-[calc(100vh-112px)]">
                    <Menu.Item
                      as="div"
                      className="flex justify-end items-center"
                    >
                      <RxCross2 className="w-5 h-5 text-dark-blue" />
                    </Menu.Item>
                    <div className="w-full py-4 px-12">
                      <h5 className="hidden lg:flex mb-2 text-dark-blue lg:justify-between lg:items-center">
                        <span className="text-xl capitalize">
                          {/* {menuItem.title} */}
                        </span>
                        <div className="w-full grid grid-cols-4">
                          <div className="col-span-3 flex justify-end">
                            <Menu.Item
                              as="span"
                              className="text-gold font-semibold text-xxs"
                            >
                              {({ close }) => (
                                <Link
                                  onClick={close}
                                  to={`category/${menuItem.handle || 'Mattress'
                                    }`}
                                  reloadDocument
                                >
                                  {menuItem.productType == 'Collection' ? (
                                    <span>ALL COLLECTIONS &gt;</span>
                                  ) : (
                                    menuItem.productType == 'Accessories' ?
                                      <></>
                                      :
                                      <span>All MODELS &gt;</span>
                                  )}
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </h5>
                      {data && (
                        <div className="flex gap-2 flex-wrap">
                          {(activeMenu == 'Pillow' ||
                            activeMenu == 'Mattress') && (
                              <ProductCardContent
                                productData={data}
                                className="product-tab"
                              />
                            )}
                          {(activeMenu == 'Topper' ||
                            activeMenu == 'Beds and Bases') &&
                            data?.productNodes && (
                              <div className="grid grid-cols-4">
                                <div className="col-span-3 gap-4 grid grid-cols-3">
                                  {data?.productNodes.map(
                                    (product: ProductType) => {
                                      return (
                                        <Link
                                          to={getCardLink(
                                            product.collections.nodes[0],
                                            product,
                                          )}
                                          key={product.handle}
                                          reloadDocument
                                          className="col-span-1 product-tab"
                                        >
                                          <div className="flex flex-col w-full">
                                            {product.featuredImage && (
                                              <Image
                                                className="w-full h-[160px] object-cover"
                                                data={product.featuredImage}
                                              />
                                            )}
                                            <p className="text-dark-blue text-left text-[11px] mt-2 font-semibold uppercase">
                                              {product.title}
                                            </p>
                                            <p className="mt-3 text-left text-limit pr-4">
                                              {product.description}
                                            </p>
                                            {/* <div className="group-hover:block hidden absolute bottom-0 w-full border border-[#174860]"></div> */}
                                          </div>
                                        </Link>
                                      );
                                    },
                                  )}
                                </div>
                              </div>
                            )}
                          {activeMenu == 'Collection' && (
                            <CollectionCardContent productData={data} />
                          )}
                          {activeMenu == 'Accessories' && (
                            <ProductCardContent
                              productData={data}
                              className="product-tab"
                            />
                          )}
                          {activeMenu === 'Promo' && data?.promotions && (
                            // <></>
                            <div className="grid gird-cols-12 gap-[10px]">
                              <div className="col-span-9 grid grid-cols-9 gap-8">
                                {data.promotions.items
                                  .reverse()
                                  .map((promotion, index: number) => (
                                    <div
                                      key={index}
                                      className="col-span-3 product-tab"
                                    >
                                      {/* <p className="text-gold mb-1">{promotion.fields.label}</p> */}
                                      <div
                                        className="relative"
                                        style={{
                                          paddingBottom: '80%',
                                          width: '100%',
                                          backgroundImage: `url(${data.promotions.includes.Asset.find(
                                            (asset) =>
                                              asset.sys.id ==
                                              promotion.fields.coverImage.sys
                                                .id,
                                          )?.fields.file.url || ''
                                            })`,
                                          backgroundPosition: 'center',
                                          backgroundSize: 'cover',
                                        }}
                                      >
                                        <div className="absolute top-5 w-40 bg-red-600 text-white text-center py-1">
                                          Promo -{promotion.fields.discount}%
                                        </div>
                                      </div>
                                      <h3 className="text-dark-blue text-left text-[11px] mt-2 font-semibold">
                                        {promotion.fields.title}
                                      </h3>
                                      <div className="mt-3 text-left">
                                        {promotion.fields.description.content.map(
                                          (
                                            content: ContentfulParagraph,
                                            index: number,
                                          ) => (
                                            <p
                                              className="text-limit pr-4"
                                              key={index}
                                            >
                                              {(
                                                content as ContentfulParagraph
                                              ).content.map((text, index) => (
                                                <span key={index}>
                                                  {text.value}
                                                </span>
                                              ))}
                                            </p>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  ))}
                              </div>
                              <div className="col-span-3"></div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </DropdownMenu>
              </span>
            ))}
          </div>
          <div className="w-7/12 md:w-9/12 lg:w-2/12 flex flex-row items-center justify-end">
            <Link to={'/store-locator'}>
              <MdOutlineLocationOn className="w-5 h-5 mx-2 lg:mx-3 text-dark-blue hover:opacity-70 cursor-pointer" />
            </Link>
            <Link to={'/search'}>
              <MdOutlineSearch className="w-5 h-5 mx-2 lg:mx-3 text-dark-blue hover:opacity-70 cursor-pointer" />
            </Link>
            {/* <Link to="/account"> */}
            <a href="https://magniflex-usa.myshopify.com/account">
              <MdPermIdentity className="w-5 h-5 mx-2 lg:mx-3 text-dark-blue hover:opacity-70 cursor-pointer" />
            </a>
            {/* </Link> */}
            <span className="relative">
              <MdOutlineShoppingCart
                className="w-5 h-5 mx-2 lg:mx-3 text-dark-blue hover:opacity-70 cursor-pointer"
                onClick={() => openCart()}
              />
              <Await resolve={root.data?.cart}>
                {(cart) => {
                  return (
                    <span className="absolute -top-1 right-1 bg-red-600 rounded-full text-white w-3 h-3 text-[9px] leading-3 text-center">
                      {(cart as CartType)?.totalQuantity || 0}
                    </span>
                  );
                }}
              </Await>
            </span>
            <span className="flex items-center mx-2 xl:hidden">
              <MobileNav />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopHeader({
  isHome,
  menu,
  openCart,
  title,
}: {
  isHome: boolean;
  openCart: () => void;
  menu?: EnhancedMenu;
  title: string;
}) {
  const params = useParams();
  const { y } = useWindowScroll();
  return (
    <header
      role="banner"
      className={`${isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
        } ${!isHome && y > 50 && ' shadow-lightHeader'
        } hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
    >
      <div className="flex gap-12">
        <Link className="font-bold" to="/" prefetch="intent">
          {title}
        </Link>
        <nav className="flex gap-8">
          {/* Top level menu items */}
          {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({ isActive }) =>
                isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1">
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="flex items-center gap-2"
        >
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
          >
            <IconSearch />
          </button>
        </Form>
        {/* <Link
          to="/account"
          className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
        > */}
        <a
          href="https://shopify.com/72109392161/account"
          className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
        >
          <IconAccount />
        </a>
        {/* </Link> */}
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function CartCount({
  isHome,
  openCart,
}: {
  isHome: boolean;
  openCart: () => void;
}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({
  openCart,
  dark,
  count,
}: {
  count: number;
  dark: boolean;
  openCart: () => void;
}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag />
        <div
          className={`${dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
            } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

function FooterNew() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value ?? '';
    if (!email) return;

    setLoading(true);
    setError(undefined);

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [{ name: 'email', value: email }],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        },
      );

      if (response.ok) {
        setSuccess(true);
        if (emailRef.current) emailRef.current.value = '';
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message ?? 'Submission failed. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-dark-blue pt-12">
      <div className="px-3 sm:container py-12">
        <div className="flex flex-wrap">
          <div className="px-3 w-full md:w-1/2 lg:w-1/4 py-4">
            <p className="text-gold text-bold text-text lg:text-xl mb-6">
              Products
            </p>
            <ul className="text-xs text-white uppercase columns-2">
              <li className="mb-4">
                <Link to="/collections">COLLECTIONS</Link>
              </li>
              <li className="mb-4">
                <Link to="/mattresses">MATTRESSES</Link>
              </li>
              <li className="mb-4">
                <Link to="/pillows">PILLOWS</Link>
              </li>
              <li className="mb-4">
                <Link to="/bed-bases">BEDS AND BASES</Link>
              </li>
              <li className="mb-4">
                <Link to="/sales">SALES</Link>
              </li>
            </ul>
          </div>
          <div className="px-3 w-full md:w-1/2 lg:w-5/12 py-4 lg:border-l lg:border-l-white lg:pl-16">
            <p className="text-gold text-bold text-text lg:text-xl mb-6">
              Company
            </p>
            <ul className="text-xs text-white uppercase columns-2">
              <li className="mb-4">
                <Link to="/our-essence">OUR ESSENCE</Link>
              </li>
              <li className="mb-4">
                <Link to="/recharge-well-being">A RECHARGE OF WELL-BEING</Link>
              </li>
              <li className="mb-4">
                <Link to="/innovation-and-technologies">
                  INNOVATION AND TECHNOLOGY
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/sustainability">SUSTAINABILITY</Link>
              </li>
              <li className="mb-4">
                <Link to="/5-star-luxury-sleep">5 STARS LUXURY SLEEP</Link>
              </li>
              <li className="mb-4">
                <Link to="/certifications">CERTIFICATIONS</Link>
              </li>
              {/* <li className="mb-4">
                <Link to="/news">NEWS</Link>
              </li> */}
            </ul>
          </div>
          <div className="px-3 w-full md:w-1/2 lg:w-1/3 py-4 lg:border-l lg:border-l-white lg:pl-16">
            <p className="text-gold text-bold text-text lg:text-xl mb-6">
              Contact us
            </p>
            <ul className="text-xs text-white uppercase columns-1">
              <li className="mb-4">
                <Link to="/contacts">CONTACT US</Link>
              </li>
              <li className="mb-4">
                <Link to="/warranty">WARRANTY</Link>
              </li>
              <li className="mb-4">
                <Link to="/store-locator">STORE LOCATOR</Link>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-3">
              <a href="https://www.facebook.com/MagniflexUS">
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <FaFacebookF className="text-dark-blue" />
                </span>
              </a>
              <a href="https://www.instagram.com/magniflex_north_america">
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <AiOutlineInstagram className="text-dark-blue" />
                </span>
              </a>
              <a href="https://www.youtube.com/@MagniflexUSA">
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <FaYoutube className="text-dark-blue" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 sm:container py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-3/12 px-3 pr-0">
            <img
              src={Footer_logo_img}
              alt="footer logo image"
              className="w-full max-w-footer-logo"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 pr-3 pt-6 lg:pl-16">
            <p className="pt-6 leading-relaxed text-xxs text-white tracking-footer-wide">
              Manufactured by Magniflex USA Ltd., Inc.
              <br />
              3050 Biscayne Blvd, Ste 200 Miami, FL 33137 - USA
              <br />
              Toll free number <a href='tel:+1-888-381-8481'>+1-888-381-8481</a>
              <br />
              <a href='mailto:orders@magniflex.us'>orders@magniflex.us</a>
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-4/12 pr-3 pt-3 lg:pl-16">
            <strong className="text-text lg:text-xl text-gold">
              Newsletter
            </strong>
            {success ? (
              <p className="text-xxs text-gold mb-4 mt-6">
                Thanks for your subscribing our newsletter.
              </p>
            ) : (
              <p className="text-xxs text-white mb-4 mt-6">
                KEEP UP WITH THE NEWS FROM MAGNIFLEX
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row mb-3">
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  className="border border-white text-sm leading-normal h-12 px-6 bg-transparent text-white placeholder:text-white text-center grow"
                  placeholder="E-mail"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="border grow-0 shrink-0 border-white border-l-0 flex justify-center items-center basis-20 disabled:opacity-50"
                >
                  <BsChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
              {error && (
                <p className="text-xxs text-red-400 mt-1">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

// function Footer({menu}: {menu?: EnhancedMenu}) {
//   const isHome = useIsHomePath();
//   const itemsCount = menu
//     ? menu?.items?.length + 1 > 4
//       ? 4
//       : menu?.items?.length + 1
//     : [];

//   return (
//     <Section
//       divider={isHome ? 'none' : 'top'}
//       as="footer"
//       role="contentinfo"
//       className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
//         bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
//     >
//       <FooterMenu menu={menu} />
//       <CountrySelector />
//       <div
//         className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
//       >
//         &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
//         Licensed Open Source project.
//       </div>
//     </Section>
//   );
// }

const FooterLink = ({ item }: { item: EnhancedMenuItem }) => {
  if (item.to.startsWith('http')) {
    return (
      <a href={item.to} target={item.target} rel="noopener noreferrer">
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.to} target={item.target} prefetch="intent">
      {item.title}
    </Link>
  );
};

function FooterMenu({ menu }: { menu?: EnhancedMenu }) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      {(menu?.items || []).map((item: EnhancedMenuItem) => (
        <section key={item.id} className={styles.section}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-left md:cursor-default">
                  <Heading className="flex justify-between" size="lead" as="h3">
                    {item.title}
                    {item?.items?.length > 0 && (
                      <span className="md:hidden">
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </span>
                    )}
                  </Heading>
                </Disclosure.Button>
                {item?.items?.length > 0 ? (
                  <div
                    className={`${open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                      } overflow-hidden transition-all duration-300`}
                  >
                    <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                      <Disclosure.Panel static>
                        <nav className={styles.nav}>
                          {item.items.map((subItem) => (
                            <FooterLink key={subItem.id} item={subItem} />
                          ))}
                        </nav>
                      </Disclosure.Panel>
                    </Suspense>
                  </div>
                ) : null}
              </>
            )}
          </Disclosure>
        </section>
      ))}
    </>
  );
}
