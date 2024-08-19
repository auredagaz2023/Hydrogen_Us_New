import {Link} from '@remix-run/react';

export function CollectionLinks() {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center bg-f7 py-12 lg:py-24">
      <div className="sm:container grid grid-cols-2 md:grid-cols-5">
        <div className="border-E4E4E4 border-r border-b md:border-b-0 px-4 md:px-12 pb-8 md:pb-0">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="-2 -0.5 16 16"
              enableBackground="new -2 -0.5 16 16"
              xmlSpace="preserve"
            >
              <path
                fill="#174860"
                d="M6,14.727l-0.405-0.516c-3.257-4.156-4.84-7.088-4.84-8.966C0.755,2.353,3.108,0,6,0 	s5.244,2.353,5.244,5.245c0,1.877-1.582,4.81-4.839,8.966L6,14.727z M6,1.029c-2.325,0-4.215,1.891-4.215,4.215	c0,1.543,1.417,4.169,4.215,7.808c2.796-3.641,4.214-6.265,4.214-7.808C10.215,2.92,8.324,1.029,6,1.029z"
              />
              <circle fill="#174860" cx="6" cy="4.895" r="2.23" />
            </svg>
          </span>
          <div className="text-174860 font-semibold text-lg md:text-base my-4">
            Find the nearest store
          </div>
          <Link
            to={`/store-locator`}
            className="hover:underline decoration-[#174860] relative flex justify-between"
          >
            <div className="text-B09987 font-semibold text-sm">Find</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="15px"
              height="15px"
              viewBox="0 0 36 36"
              enableBackground="new 0 0 36 36"
              xmlSpace="preserve"
            >
              <polygon
                fill="#174860"
                points="10.575,0.538 9.161,1.952 24.718,17.508 8.454,33.771 9.868,35.186 27.546,17.508 "
              />
            </svg>
          </Link>
        </div>

        <div className="border-E4E4E4 md:border-r border-b md:border-b-0 px-4 md:px-12 pb-8 md:pb-0">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              enableBackground="new 0 0 40 40"
              xmlSpace="preserve"
              fill="#174860"
            >
              <path d="M25.4 22.3c-.7-1.1-1.8-1.8-3.1-2.1l-3.3-.6-.4-.5c.3-.3.5-.7.6-1.2s-.1-1-.4-1.5l-6.6-8.7H19a.65.65 0 0 1 .6.6v5.6c0 .5.3 1.1.8 1.3.5.3 1 .3 1.5.1l2-1 2 1c.5.2 1.1.2 1.5-.1.5-.3.8-.8.8-1.3V9.2c0-.4-.4-.8-.8-.8s-.8.4-.8.8v4.9L24.3 13a.91.91 0 0 0-1 0L21 14.1V8.5c0-.6-.2-1.1-.6-1.5s-1-.6-1.5-.6h-8l-.7-1c-.4-.5-1-.9-1.7-1-.6-.1-1.3.1-1.8.5L1.4 9c-.5.4-.9 1-1 1.7a2.27 2.27 0 0 0 .5 1.8l8.6 11.2c.3.4.8.7 1.3.8h.3c.2 0 .4 0 .6-.1l2.6 8.8c.1.3.2.6.4.9h-4c-.2 0-.5-.1-.6-.3-.2-.2-.3-.4-.3-.6v-7.6c0-.4-.4-.8-.8-.8s-.8.4-.8.8v7.6c0 .7.3 1.3.7 1.7a2.34 2.34 0 0 0 1.7.7h14c.6 0 1.2-.3 1.5-.8.4-.5.5-1.1.3-1.7l-1.6-4.7c.7.1 1.3.1 2-.1.6-.1 1.1-.6 1.3-1.2s0-1.3-.4-1.7l-2.3-3.1zm-14.2.5c-.1.1-.2.1-.3.1s-.2-.1-.3-.1L2.1 11.5c-.1-.2-.2-.4-.1-.6h0c0-.2.2-.5.3-.6l5.4-4.1c.1-.2.3-.2.5-.2h.1c.3 0 .5.1.7.3l8.5 11.2c.1.2.1.4-.1.5l-6.2 4.8zm15.4 3.9c0 .1-.1.1-.1.1-1.5.4-2.3-.4-2.4-.4-.3-.2-.7-.3-1-.1s-.4.6-.3.9l2.1 6.4v.3c-.1.1-.2.1-.3.1h-.7l-.7-2.3c-.1-.4-.6-.7-1-.5-.4.1-.7.6-.5 1l.6 1.9h-.8l-.8-2.6h0c-.2-.3-.5-.4-.9-.3s-.7.6-.5 1l.6 1.9H19l-.7-2.3c-.1-.4-.6-.7-1-.5-.4.1-.7.6-.5 1l.6 1.9c-.3 0-.6-.2-.9-.4s-.6-.6-.7-1L13 23.5l4.3-3.3.6.7c.1.1.3.2.5.3l3.6.7c.8.2 1.6.7 2.1 1.4l2.5 3.2v.2zM37.1 6H22.5c-.4 0-.8.4-.8.8s.4.8.8.8h14.6c.2 0 .5.1.6.3.2.1.3.3.3.6v24.7c0 .2-.1.5-.3.6-.2.2-.4.3-.6.3h-8.9c-.4 0-.8.4-.8.8s.4.8.8.8h8.9c.7 0 1.3-.3 1.8-.7.5-.5.7-1.1.7-1.8V8.5c0-.7-.3-1.3-.7-1.8-.5-.5-1.1-.7-1.8-.7z" />
            </svg>
          </span>
          <div className="text-174860 font-semibold text-lg md:text-base my-4">
            Free shipping across US
          </div>
          <Link
            to={`/shipping-methods`}
            className="relative flex justify-between"
          >
            <div className="hover:underline decoration-[#174860] text-B09987 font-semibold text-sm">
              Discover more
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="15px"
              height="15px"
              viewBox="0 0 36 36"
              enableBackground="new 0 0 36 36"
              xmlSpace="preserve"
            >
              <polygon
                fill="#174860"
                points="10.575,0.538 9.161,1.952 24.718,17.508 8.454,33.771 9.868,35.186 27.546,17.508 "
              />
            </svg>
          </Link>
        </div>

        <div className="border-E4E4E4 border-r px-4 md:px-12 hidden md:block">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              enableBackground="new 0 0 40 40"
              xmlSpace="preserve"
              fill="#174860"
            >
              <path
                d="M40 15.8l-.3-.6-4.6-7.7c-.4-.7-1.3-1.2-2.2-1.2h-7.4v-2c0-1-.8-1.9-1.8-1.9H3.5c-1 0-1.8.8-1.8 1.9v20.5c0 1 .8 1.9 1.8 1.9h1.9c.4 2.1 2.3 3.7 4.5 3.7s4.1-1.6 4.5-3.7h13.1c.4 2.1 2.3 3.7 4.5 3.7s4.1-1.6 4.5-3.7h1.9c.6 0 1.2-.3 1.5-.8V15.8zM10 28.5c-1.5 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8c1.5 0 2.8 1.2 2.8 2.8-.1 1.5-1.3 2.8-2.8 2.8zm13.8-3.7h-9.3c-.4-2.1-2.3-3.7-4.5-3.7s-4.1 1.6-4.5 3.7h-2V4.3h20.2v20.5zm8.2 3.7c-1.5 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8c1.5 0 2.8 1.2 2.8 2.8 0 1.5-1.2 2.8-2.8 2.8zm6.5-3.7h-1.9c-.4-2.1-2.3-3.7-4.5-3.7s-4.1 1.6-4.5 3.7h-1.9V8H33c.2 0 .5.2.6.3l.9 1.5h-3.4a1.79 1.79 0 0 0-1.8 1.8v5.6a1.79 1.79 0 0 0 1.8 1.8h7.4v5.8zm0-7.5h-7.4v-5.6h4.4l2.6 4.3c.2.4.4 1 .4 1.3h0z"
                fill="#174860"
              />
            </svg>
          </span>
          <div className="text-174860 font-semibold text-lg md:text-base my-4">
            Check shipping options
          </div>
          <Link
            to={`/shipping-methods`}
            className="hover:underline decoration-[#174860] relative flex justify-between"
          >
            <div className="text-B09987 font-semibold text-sm">
              Discover more
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="15px"
              height="15px"
              viewBox="0 0 36 36"
              enableBackground="new 0 0 36 36"
              xmlSpace="preserve"
            >
              <polygon
                fill="#174860"
                points="10.575,0.538 9.161,1.952 24.718,17.508 8.454,33.771 9.868,35.186 27.546,17.508 "
              />
            </svg>
          </Link>
        </div>

        <div className="border-E4E4E4 border-r px-4 md:px-12 pt-8 md:pt-0">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              enableBackground="new 0 0 40 40"
              xmlSpace="preserve"
              fill="#174860"
            >
              <path
                d="M40 18.9c-.2-.6-.4-1.1-.8-1.6a4.61 4.61 0 0 0-2.6-1.5l-.1-.1V7.9c0-1.6-.6-3.1-1.8-4.2C33.6 2.6 32.1 2 30.5 2H10.9c-1.6 0-3.1.6-4.2 1.7-1.2 1.1-1.8 2.6-1.8 4.2v7.6c-.1.1-.1.3-.2.4-1 .2-1.8.8-2.5 1.5-.6.8-1 1.7-1 2.7v8.2c0 .6.2 1.2.7 1.6.4.4 1 .7 1.6.7h2.2c.5 0 .9-.2 1.3-.4.4-.3.7-.7.8-1.1.2-.7.7-1.3 1.2-1.7.6-.4 1.3-.6 2-.6h19.2c.7 0 1.4.2 2 .6s1 1 1.2 1.7c.1.5.4.8.8 1.1s.8.4 1.3.4h2.2c.6 0 1.2-.2 1.6-.7a3.04 3.04 0 0 0 .5-.7V18.9zM6.9 7.9c0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2h0 19.7c1.1 0 2.1.4 2.8 1.2.8.7 1.2 1.8 1.2 2.8v5.5c-2-1.7-4.6-2.5-7.3-2.2-2.6.3-5 1.6-6.6 3.7a9.44 9.44 0 0 0-6.5-3.7c-2.6-.3-5.2.5-7.2 2.1V7.9zm27.2 7.8H22.5c1.5-1.7 3.6-2.6 5.8-2.6 2.3 0 4.4 1 5.8 2.6zm-15.3 0H7.2c1.5-1.7 3.6-2.6 5.8-2.6s4.3 1 5.8 2.6zm19.1 12.9h-2.2c-.1 0-.2-.1-.2-.2-.3-1.1-1-2-2-2.7-.9-.7-2-1-3.2-1H11.1c-1.1 0-2.3.4-3.2 1-.9.7-1.6 1.6-2 2.7 0 .1-.1.2-.2.2H3.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-8.2a2.34 2.34 0 0 1 .7-1.7c.4-.5 1-.7 1.7-.8h30.3c.6 0 1.2.3 1.7.8.4.4.7 1 .7 1.7v8.2h0c-.1.2-.2.3-.4.3z"
                fill="#174860"
              />
            </svg>
          </span>
          <div className="text-174860 font-semibold text-lg md:text-base my-4">
            Try your mattress in store
          </div>
          <Link
            to={`/store-locator`}
            className="hover:underline decoration-[#174860] relative flex justify-between"
          >
            <div className="text-B09987 font-semibold text-sm">
              Discover more
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="15px"
              height="15px"
              viewBox="0 0 36 36"
              enableBackground="new 0 0 36 36"
              xmlSpace="preserve"
            >
              <polygon
                fill="#174860"
                points="10.575,0.538 9.161,1.952 24.718,17.508 8.454,33.771 9.868,35.186 27.546,17.508 "
              />
            </svg>
          </Link>
        </div>

        <div className="px-4 md:px-12 pt-8 md:pt-0">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              enableBackground="new 0 0 40 40"
              xmlSpace="preserve"
              fill="#174860"
            >
              <path
                d="M.7 21.2H2c.2 1.5 1.7 2.7 3.5 2.7 2 0 3.6-1.4 3.6-3.1v-5.6c0-1.4-1.1-2.6-2.6-2.9.4-3 1.4-5.5 3.2-7.3 3.5-3.4 8.5-3.5 9.2-3.5h.1 0c.1 0 5.6-.1 9.3 3.5 1.9 1.8 2.9 4.3 3.2 7.3-1.5.4-2.6 1.5-2.6 2.9v5.6c0 1.5 1.2 2.6 2.8 3-.1 1.6-.9 6.3-5.6 8.3-.4-1.1-1.4-1.9-2.7-1.9h-2.9c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9h2.9c1.4 0 2.5-1 2.8-2.4 5.8-2.2 6.7-8 6.9-9.8 1.5-.3 2.6-1.3 2.8-2.6h1.2a.68.68 0 0 0 .7-.7v-5a.68.68 0 0 0-.7-.7h-1.2c-.2-1.4-1.4-2.4-3-2.6-.4-3.4-1.6-6.2-3.7-8.3C25.1-.1 19.3 0 19 0S12.8-.1 8.7 3.9C6.5 6 5.4 8.8 5 12.2c-1.6.2-2.8 1.2-3 2.6H.7a.68.68 0 0 0-.7.7v5a.68.68 0 0 0 .7.7zm22.8 13.4h-2.9a1.54 1.54 0 0 1-1.5-1.5 1.54 1.54 0 0 1 1.5-1.5h2.9a1.54 1.54 0 0 1 1.5 1.5 1.54 1.54 0 0 1-1.5 1.5zm11.1-19.4v5.6c0 .9-1 1.7-2.2 1.7s-2.2-.7-2.2-1.7v-5.6c0-.9 1-1.7 2.2-1.7s2.2.8 2.2 1.7zm-31.3 0c0-.9 1-1.7 2.2-1.7s2.2.7 2.2 1.7v5.6c0 .9-1 1.7-2.2 1.7s-2.2-.7-2.2-1.7v-5.6z"
                fill="#174860"
              />
            </svg>
          </span>
          <div className="text-174860 font-semibold text-lg md:text-base my-4">
            Ask support to our customer care
          </div>
          <Link
            to={`/contacts`}
            className="hover:underline decoration-[#174860] relative flex justify-between"
          >
            <div className="text-B09987 font-semibold text-sm">
              Discover more
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Livello_1"
              x="0px"
              y="0px"
              width="15px"
              height="15px"
              viewBox="0 0 36 36"
              enableBackground="new 0 0 36 36"
              xmlSpace="preserve"
            >
              <polygon
                fill="#174860"
                points="10.575,0.538 9.161,1.952 24.718,17.508 8.454,33.771 9.868,35.186 27.546,17.508 "
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
