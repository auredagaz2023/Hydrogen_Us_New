import {Fragment, ReactNode, useEffect, useState} from 'react';
import {Menu, Transition} from '@headlessui/react';

type Props = {
  menuTitle: string | ReactNode;
  children: ReactNode;
};

export function DropdownMenu({menuTitle, children}: Props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const topOffset = windowWidth < 1280 ? '90px' : '140px';

  return (
    <Menu as={Fragment}>
      <Menu.Button className="uppercase">{menuTitle}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-350"
        enterFrom="transform opacity-0 h-0"
        enterTo="transform opacity-100 h-screen"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 h-screen"
        leaveTo="transform opacity-0 h-0"
      >
        <Menu.Items
          className={`fixed right-0 md:top-narrow-sticky xxl:top-wide-sticky w-screen h-screen-no-nav-mobile xl:h-screen-no-nav-desktop bg-white pb-10 max-w-menu-width ${
            menuTitle == 'SALES' ? 'hidden' : ''
          }`}
          style={{ top: topOffset }}
        >
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
