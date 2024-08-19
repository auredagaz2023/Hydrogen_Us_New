import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {PageHeader, Section, Heading, Link} from '~/components';

export default function PaginaTestiCol(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <>
      <div className="justify-center text-174860">
        <div className='lg:flex lg:flex-row'>
          <div className='basis-full lg:basis-9/12 py-[140px]'>
            <div className='max-w-[880px] mx-auto my-0 px-8'>
              <h1 className='text-5xl font-semibold my-8'>Titolo della pagina</h1>
              <p className='text-8c8c8c'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. <a href="#" className='text-dark-blue underline hover:text-B09987 transition'>Questo è un link</a> quis aute iure reprehenderit cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <br />
              <h2 className='text-[2.65rem] font-semibold my-6'>Titolo h2</h2>
              <p className='text-8c8c8c'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. <strong className='text-dark-blue'>Quis aute iure reprehenderit</strong> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul className='list-disc ml-6 mt-4 text-8c8c8c'>
                <li>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                <li>Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
              </ul>
              <br /><br />
              <h3 className='text-4xl font-semibold my-4'>Titolo h3</h3>
              <p className='text-8c8c8c'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <br /><br />
            </div>
          </div>
          <aside className='basis-full lg:basis-3/12 bg-f7 py-12 lg:py-[140px] px-12'>
            <div className="sticky py-4 top-[118px]">
              <ul>
                <li className="py-2 mb-2 border-[#dee2e6] border-b"><a href="https://www.magniflex.com/italy/garanzia.html">Garanzia</a></li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b"><a href="https://www.magniflex.com/italy/costi-e-modalita-di-spedizione.html">Modalità di spedizione</a></li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b"><a href="https://www.magniflex.com/italy/condizioni-uso.html">Condizioni d'uso</a></li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b text-B09987 active"><a href="https://www.magniflex.com/italy/privacy-policy.html">Privacy Policy</a></li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b"><a href="https://www.magniflex.com/italy/cookies.html">Cookies</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}