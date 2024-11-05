import {Fragment, ReactNode, useEffect, useState} from 'react';
import {Menu, Transition} from '@headlessui/react';

type Props = {
  menuTitle: string | ReactNode;
  children: ReactNode;
};

export function DropdownMenu({menuTitle, children}: Props) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
      // Function to update the window width
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      // Set the initial window width when the component mounts
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  // Determine the top offset based on the current window width
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
