import {Link} from '~/components';
import {
  Cart as CartType,
  Product as ProductType,
  Collection,
} from '@shopify/hydrogen/storefront-api-types';
import ProductCardContent from './productCardContent';
import CollectionCardContent from './collectionCardContent';
import {Image} from '@shopify/hydrogen';
import {
  Await,
  useMatches,
  useFetcher,
  useNavigate,
  useNavigation,
} from '@remix-run/react';
import {Menu} from '@headlessui/react';
import {
  MdOutlineLocationOn,
  MdPermIdentity,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import {useEffect, useState} from 'react';
import Logo_Img from '../assets/dark_logo.png';
import {MobileNav} from './MobileNav';
import {ContentfulHomePromotion} from '~/routes/($locale).types';
import {DropdownMenu} from './DropdownMenu';
import {RxCross2} from 'react-icons/rx';
import {slugify} from '~/routes/($locale).news';
import {topMenuList, mainMenuList} from './Layout';

export function DesktopHeaderNew({openCart}: {openCart: () => void}) {
  const [root] = useMatches();
  const {load, data} = useFetcher();
  const [activeMenu, setActiveMenu] = useState<string>('');
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [homePromotion, setHomePromotion] = useState<
    ContentfulHomePromotion | undefined
  >(undefined);

  // const data = data;
  const handleSelectMenu = (productType:any) => {
    if (productType == 'Promo') {
      // navigate('/sales');
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

    const activePromotionsEndpoint = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?select=fields.promoInHomepage&access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=activePromotions&fields.name=mxusa-active-promotions`;
    (async () => {
      await fetch(activePromotionsEndpoint)
        .then((res) => res.json())
        .then((res) => {
          setHomePromotion(res as ContentfulHomePromotion);
        });
    })();
  }, []);

  useEffect(() => {
    if (!activeMenu) return;
    if (activeMenu == 'Collection') {
      load('/api/collections');
    } else if (activeMenu == 'Mattress' || activeMenu == 'Pillow') {
      load(`/api/getProductsByCategory?productType=${activeMenu}`);
    } else {
      load(`/api/getProductsByType?productType=${activeMenu}`);
    }
  }, [activeMenu]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden xxl:flex bg-dark-blue flex-row w-full items-center justify-end text-white uppercase text-xxs px-3 pt-3 pb-[14px]">
        {topMenuList.map(({menu, link}, index) => (
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
              <span
                className={`${
                  activeMenu == menuItem.productType ? 'selected-menu-item' : ''
                }  main-menu-item text-xs text-dark-blue cursor-pointer py-2 px-[23px] leading-[18px] 2xl:tracking-[0.48px] ${
                  menuItem.type == 'promo' && 'font-bold text-red-600'
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
                              {({close}) => (
                                <Link
                                  onClick={close}
                                  to={`category/${
                                    menuItem.handle || 'Mattress'
                                  }`}
                                  reloadDocument
                                >
                                  ALL COLLECTIONS &gt;
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
                          {activeMenu === 'Promo' && data?.promotions && (
                            <></>
                            // <div className="grid gird-cols-12 gap-[10px]">
                            //   <div className="col-span-9 grid grid-cols-9 gap-8">
                            //     {data.promotions.items
                            //       .reverse()
                            //       .map((promotion, index: number) => (
                            //         <div
                            //           key={index}
                            //           className="col-span-3 product-tab"
                            //         >
                            //           {/* <p className="text-gold mb-1">{promotion.fields.label}</p> */}
                            //           <div
                            //             className="relative"
                            //             style={{
                            //               paddingBottom: '80%',
                            //               width: '100%',
                            //               backgroundImage: `url(${
                            //                 data.promotions.includes.Asset.find(
                            //                   (asset) =>
                            //                     asset.sys.id ==
                            //                     promotion.fields.coverImage.sys
                            //                       .id,
                            //                 )?.fields.file.url || ''
                            //               })`,
                            //               backgroundPosition: 'center',
                            //               backgroundSize: 'cover',
                            //             }}
                            //           >
                            //             <div className="absolute top-5 w-40 bg-red-600 text-white text-center py-1">
                            //               Promo -{promotion.fields.discount}%
                            //             </div>
                            //           </div>
                            //           <h3 className="text-dark-blue text-left text-[11px] mt-2 font-semibold">
                            //             {promotion.fields.title}
                            //           </h3>
                            //           <div className="mt-3 text-left">
                            //             {promotion.fields.description.content.map(
                            //               (
                            //                 content: ContentfulParagraph,
                            //                 index: number,
                            //               ) => (
                            //                 <p
                            //                   className="text-limit pr-4"
                            //                   key={index}
                            //                 >
                            //                   {(
                            //                     content as ContentfulParagraph
                            //                   ).content.map((text, index) => (
                            //                     <span key={index}>
                            //                       {text.value}
                            //                     </span>
                            //                   ))}
                            //                 </p>
                            //               ),
                            //             )}
                            //           </div>
                            //         </div>
                            //       ))}
                            //   </div>
                            //   <div className="col-span-3"></div>
                            // </div>
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
            {/*<Link to="/account"> */}
            {/* <a href="https://magniflex-usa.myshopify.com/account"> */}
              <MdPermIdentity className="w-5 h-5 mx-2 lg:mx-3 text-dark-blue hover:opacity-70 cursor-pointer" />
            {/* </a> */}
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
