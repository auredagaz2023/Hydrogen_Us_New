import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import {PageHeader, Section, Heading, Link} from '~/components';

export default function PaginaTesti(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <>
      <Section
        padding="x"
        className="justify-center text-174860 lg:pl-0 lg:pr-0"
      >
        <div className="container max-w-[880px]">
          <br />
          <br />
          <br />
          <h1 className="text-5xl font-semibold my-8">Titolo della pagina</h1>
          <p className="text-8c8c8c">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur.{' '}
            <a
              href="#"
              className="text-dark-blue underline hover:text-B09987 transition"
            >
              Questo è un link
            </a>{' '}
            quis aute iure reprehenderit cillum dolore eu fugiat nulla pariatur.
            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <h2 className="text-[2.65rem] font-semibold my-6">Titolo h2</h2>
          <p className="text-8c8c8c">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur.{' '}
            <strong className="text-dark-blue">
              Quis aute iure reprehenderit
            </strong>{' '}
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <ul className="list-disc ml-6 mt-4 text-8c8c8c">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur. Quis aute iure reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </li>
            <li>
              Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
          </ul>
          <br />
          <br />
          <h3 className="text-4xl font-semibold my-4">Titolo h3</h3>
          <p className="text-8c8c8c">
            111Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <br />
        </div>
      </Section>
    </>
  );
}
