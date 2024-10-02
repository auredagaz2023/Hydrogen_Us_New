import {Fragment, useEffect, useState} from 'react';
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {MdOutlineLocationOn, MdOutlineDensityMedium} from 'react-icons/md';
import {DropdownMenu} from './DropdownMenu';
import product_image from '../assets/products/a1.jpg';
import {useFetcher} from '@remix-run/react';
import {
  Product as ProductType,
  Collection,
} from '@shopify/hydrogen/storefront-api-types';
import {slugify} from '~/routes/($locale).news';
import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';

import {topMenuList} from '~/components/Layout';

export function MobileNav() {
  const [activeMenu, setActiveMenu] = useState<string>('');
  const mobileNavList = [
    {
      title: 'COLLECTIONS',
      link: '/collections',
      disabled: false,
      productType: 'Mattress',
    },
    {
      title: 'MATTRESSES',
      link: '/mattresses',
      disabled: false,
      productType: 'Mattress',
    },
    {
      title: 'BED AND BASES',
      link: '/bed-bases',
      disabled: false,
      productType: 'Beds and Bases',
    },
    {
      title: 'TOPPERS',
      link: '/toppers',
      disabled: false,
      productType: 'Topper',
    },
    {
      title: 'PILLOWS',
      link: '/pillows',
      disabled: false,
      productType: 'Pillows',
    },
    {
      title: 'SALES',
      link: '/sales',
      disabled: false,
      productType: 'Promos',
    },

    {
      title: 'magniflex',
      disabled: false,
    },
  ];
  const {load, data} = useFetcher();
  const productData = data;

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
    // load(`/api/getProductsByType?productType=${activeMenu}`);
  }, [activeMenu]);

  return (
    <div className="">
      <DropdownMenu
        menuTitle={
          <MdOutlineDensityMedium className="w-5 h-5 text-dark-blue hover:opacity-70 cursor-pointer" />
        }
      >
        {mobileNavList.map((navItem, index) => (
          <Menu.Item key={index}>
            <Disclosure>
              {({open}) => (
                <>
                  <Disclosure.Button as="div">
                    {navItem.link ? (
                      <a href={navItem.link}>
                        <p
                          className={`${
                            open ? 'font-semibold bg-gray-300' : ''
                          } ${
                            navItem.title != 'SALES'
                              ? 'text-dark-blue'
                              : 'text-red-500'
                          } text-md uppercase py-3 px-6 border-b border-b-gray-200`}
                          onClick={() => {
                            setActiveMenu(navItem.productType);
                            document.body.classList.add('no-scroll');
                          }}
                        >
                          {navItem.title}
                        </p>
                      </a>
                    ) : (
                      <p
                        className={`${
                          open ? 'font-semibold bg-gray-300' : ''
                        } ${
                          navItem.title != 'SALES'
                            ? 'text-dark-blue'
                            : 'text-red-300'
                        } text-md uppercase py-3 px-6 border-b border-b-gray-200`}
                        onClick={() => {
                          setActiveMenu(navItem.productType);
                          document.body.classList.add('no-scroll');
                        }}
                      >
                        {navItem.title}
                      </p>
                    )}
                  </Disclosure.Button>
                  {!navItem.disabled && (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-350"
                      enterFrom="transform opacity-0 h-0"
                      enterTo="transform opacity-100 h-fit"
                      leave="transition ease-in duration-100"
                      leaveFrom="transform opacity-100 h-fit"
                      leaveTo="transform opacity-0 h-0"
                    >
                      <Disclosure.Panel as="div" className="m-0 p-0">
                        {/* <div className="p-3"> */}
                        <div className="flex flex-wrap">
                          <div className="p-0 w-full xl:w-5/12">
                            {navItem.title !== 'magniflex' ? (
                              <div className="hidden"></div>
                            ) : (
                              //   <div role="status" className='text-center'>
                              //     <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              //         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              //         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                              //     </svg>
                              //     <span class="sr-only">Loading...</span>
                              // </div>
                              // <div className="p-3 grid grid-cols-2 gap-2 overflow-scroll h-screen">
                              //   {productData?.productNodes &&
                              //     productData?.productNodes.map(
                              //       (product: ProductType) => {
                              //         return (
                              //           <Link
                              //             to={getCardLink(
                              //               product.collections.nodes[0],
                              //               product,
                              //             )}
                              //             key={product.handle}
                              //             reloadDocument
                              //           >
                              //             <div className="group flex flex-col text-left relative pb-2">
                              //               {product.featuredImage && (
                              //                 <Image
                              //                   className="w-full aspect-video object-cover"
                              //                   data={product.featuredImage}
                              //                 />
                              //               )}
                              //               <p className="mt-2 text-[11px] text-[#174860] font-semibold uppercase">
                              //                 {product.title}
                              //               </p>
                              //               <p className="mt-1 text-ellipsis overflow-hidden max-h-[33px] text-[11px] text-[#B09987] font-semibold">
                              //                 {product.description}
                              //               </p>
                              //               <div className="group-hover:block hidden absolute bottom-0 w-full border border-[#174860]"></div>
                              //             </div>
                              //           </Link>
                              //         );
                              //       },
                              //     )}
                              // </div>
                              <div className="pl-2 pr-2 mt-1 mb-3 py-2">
                                <ul
                                  className="px-6"
                                  style={{paddingTop: '10px'}}
                                >
                                  {topMenuList.map((menuItem: Map) => {
                                    return (
                                      <li style={{paddingBottom: '10px'}}>
                                        <a href={menuItem.link}>
                                          {menuItem.menu}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* </div> */}
                      </Disclosure.Panel>
                    </Transition>
                  )}
                </>
              )}
            </Disclosure>
          </Menu.Item>
        ))}
        <Menu.Item>
          <Link to="store-locator">
            <div className="w-full">
              <div className="flex">
                <div className="w-full my-2 px-6 py-4 w-7/12 border border-gray-200">
                  <div className="flex items-center gap-1">
                    <MdOutlineLocationOn className="w-6 h-6 text-dark-blue" />
                    <p className="text-md text-dark-blue uppercase">
                      STORE LOCATOR
                    </p>
                  </div>
                </div>
                {/*
              <div className="grow border border-gray-200 flex justify-center items-center">
                <button className="border border-dark-blue px-4 py-1 uppercase text-8">
                  ITALIANO
                </button>
              </div>
              */}
              </div>
            </div>
          </Link>
        </Menu.Item>
      </DropdownMenu>
    </div>
  );
}
