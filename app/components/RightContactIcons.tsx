import {MdOutlineMessage} from 'react-icons/md';
import {RiHeadphoneLine} from 'react-icons/ri';
import {RxCross2} from 'react-icons/rx';

export function RightContactIcons() {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-center">
      <button>
        <RxCross2 className="w-4 h-4 text-dark-blue" />
      </button>
      <a
        href="#"
        className="w-10 h-10 bg-dark-blue rounded-full flex justify-center items-center mt-2"
      >
        <RiHeadphoneLine className="w-5 h-5 text-white" />
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-dark-blue rounded-full flex justify-center items-center mt-2"
      >
        <MdOutlineMessage className="w-5 h-5 text-white" />
      </a>
    </div>
  );
}
