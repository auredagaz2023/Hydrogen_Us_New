import React from 'react';
import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import Sottovuoto1_Img from '~/assets/Brand/signor-magniflex.jpg';
import Sottovuoto2_Img from '~/assets/Brand/Sottovuoto-gif.gif';

export const InnovazioneSottovuoto = React.forwardRef<HTMLDivElement, any>(
  (props: {keyframe: Keyframes}, ref) => {
    const {keyframe} = props;

    return (
      <div ref={ref}>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <div className="px-3 sm:container	box-border py-8 text-text text-gold uppercase lg:text-xl mb-5">
            <div className="max-w-7xl mx-auto">VACUUM-PACKED TECHNOLOGY</div>
          </div>
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-174860">
                <div className="w-full lg:w-1/3 xxl:w-1/4">
                  <h3 className="font-semibold mb-6 text-cusSubheading lg:text-3xl">
                    Revolutionary Vacuum-Packed Technology
                  </h3>
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12 text-text lg:text-xl">
                  Our unwavering commitment to research and our dedication to
                  nature have resulted in the breakthrough invention of vacuum
                  packaging, revolutionizing the mattress industry.
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="relative">
              <div className="bg-[url('../assets/Brand/bg-sottovuoto.jpg')] bg-cover bg-center h-4/5 mb-8 absolute top-0 w-full"></div>
              <div className="px-3 sm:container relative z-10">
                <div className="max-w-7xl mx-auto">
                  <div className="w-8/12 md:w-1/2">
                    <img
                      src={Sottovuoto1_Img}
                      className="max-w-[100%] h-auto"
                      alt="Sottovuoto image 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section className="pb-16 md:pb-24 lg:pb-28">
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between center text-174860">
                <div className="w-full lg:w-4/12 xxl:w-3/12">
                  <h3 className="text-cusSubheading xl:text-3xl font-semibold mb-6">
                    Benefits of Vacuum-Packing:
                  </h3>
                </div>
                <div className="w-full lg:w-7/12 xl:w-8/12">
                  <p className="relative pl-16 pb-4 before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3 text-text xl:text-xl">
                    Consistent Hygiene and Quality: Maintains stability in
                    hygiene and quality.
                  </p>
                  <p className="relative pl-16 pb-4 before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3 text-text xl:text-xl">
                    90% Reduced Volume: Shrinks volume by 90%.
                  </p>
                  <p className="relative pl-16 pb-4 before:w-12 before:h-px before:absolute before:left-0 before:bg-B09987 before:top-3 text-text xl:text-xl">
                    Reduced CO2 Emissions: Results in reduced CO2 emissions (13
                    mattresses/cubic foot).
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <section>
          <Fade duration={1000} triggerOnce>
            <div className="px-3 sm:container">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between py-12">
                <div className="w-1/2 md:w-1/4 px-3 text-center">
                  <div className="mb-6 pb-6 border-b border-neutral-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="2 2 120 120"
                      fill="#004967"
                      className="inline-block"
                    >
                      <path d="M107.932 50.667c-4.558 0-12.636-6.46-18.168-11.993-3.976-3.976-7.354-8.108-9.509-11.636-2.719-4.448-3.202-7.448-1.479-9.171.457-.458 1.286-1.003 2.636-1.003 4.543 0 12.622 6.466 18.159 12.003 1.483 1.482 2.914 3.019 4.251 4.565a2.01 2.01 0 0 1 .436.857c1.833 7.928 3.984 11.395 4.84 11.96a2.04 2.04 0 0 1 1.843 1.093 2 2 0 0 1-.369 2.32c-.46.458-1.289 1.005-2.64 1.005zM81.791 20.899c.329 1.96 3.474 7.619 10.801 14.946 4.232 4.231 7.993 7.143 10.799 8.872-.988-2.153-1.978-5.083-2.916-9.039a82.17 82.17 0 0 0-3.732-3.983c-7.024-7.024-12.741-10.414-14.952-10.796z" />
                      <path d="M109.455 50.226l-.598-3.955a.65.65 0 0 0-.312.126c.977-.905 2.142-7.558.409-18.836-1.573-10.278-4.284-16.16-5.665-17.559-.894 1.758-1.713 8.19-.144 18.454.289 1.909.663 3.872 1.112 5.839l-3.9.891a84.34 84.34 0 0 1-1.166-6.128c-1.184-7.739-1.609-18.081 1.088-21.745.798-1.083 1.727-1.426 2.365-1.522 6.678-.99 9.915 18.894 10.263 21.165 1.188 7.734 1.618 18.071-1.085 21.746-.798 1.084-1.727 1.427-2.367 1.524z" />
                      <path d="M40.386 118.247c-6.056.001-16.831-10.572-18.225-11.967-3.976-3.977-7.353-8.107-9.509-11.633-2.719-4.446-3.203-7.444-1.481-9.166l67.604-67.604 2.828 2.828L14.159 88.15c-.068 1.522 2.982 7.453 10.83 15.302 7.763 7.762 13.65 10.831 15.25 10.831.018 0 .035-.001.052-.002l67.444-67.444 2.828 2.828-67.604 67.605c-.682.682-1.562.977-2.573.977z" />
                    </svg>
                  </div>
                  Open the package
                </div>
                <div className="w-1/2 md:w-1/4 px-3 text-center">
                  <div className="mb-6 pb-6 border-b border-neutral-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0.5 -18.5 120 120"
                      fill="#174860"
                      className="inline-block"
                    >
                      <path d="M120.356 40.735a2 2 0 0 0-1.848-1.235H73.336l2.25-2.25c4.03-4.03 6.25-9.388 6.25-15.087a21.2 21.2 0 0 0-6.25-15.086A21.19 21.19 0 0 0 60.5.828a21.19 21.19 0 0 0-15.086 6.249L6.741 45.75c-4.03 4.03-6.25 9.388-6.25 15.086s2.22 11.056 6.25 15.086 9.388 6.25 15.086 6.25h58.009a2 2 0 0 0 1.414-.586l38.673-38.672a2 2 0 0 0 .433-2.179zm-101.985-.958L48.242 9.905C51.517 6.631 55.87 4.828 60.5 4.828s8.983 1.803 12.258 5.077 5.078 7.629 5.078 12.258-1.804 8.984-5.078 12.259L67.41 39.77c-.312.178-.567.434-.745.745L42.887 64.292c.048-.295.072-.595.108-.893l.074-.609a21.83 21.83 0 0 0 .095-1.954c0-5.698-2.22-11.056-6.25-15.086s-9.388-6.25-15.087-6.25a21.87 21.87 0 0 0-1.955.095c-.204.019-.405.049-.608.074-.298.035-.598.06-.893.108zM4.491 60.836c0-4.63 1.804-8.982 5.078-12.258S17.197 43.5 21.827 43.5s8.984 1.804 12.259 5.078 5.078 7.628 5.078 12.258-1.804 8.982-5.078 12.258-7.628 5.078-12.259 5.078-8.983-1.804-12.258-5.078-5.078-7.628-5.078-12.258zm74.517 17.336H34.232c.941-.677 1.846-1.414 2.682-2.25L69.336 43.5h44.345L79.008 78.172z" />
                      <path d="M31.83 70.839a14.05 14.05 0 0 0 4.145-10.003 14.05 14.05 0 0 0-4.145-10.003 14.05 14.05 0 0 0-10.003-4.144 14.05 14.05 0 0 0-10.002 4.144c-2.672 2.672-4.144 6.225-4.144 10.003s1.472 7.331 4.144 10.003 6.225 4.144 10.002 4.144a14.06 14.06 0 0 0 10.003-4.144zM11.682 60.836c0-2.71 1.056-5.258 2.972-7.175a10.08 10.08 0 0 1 7.174-2.972c2.71 0 5.258 1.056 7.175 2.972a10.08 10.08 0 0 1 0 14.35c-1.917 1.916-4.465 2.972-7.175 2.972s-5.256-1.056-7.174-2.972a10.08 10.08 0 0 1-2.972-7.175z" />
                    </svg>
                  </div>
                  Unroll the mattress
                </div>
                <div className="w-1/2 md:w-1/4 px-3 text-center">
                  <div className="mb-6 pb-6 border-b border-neutral-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="-25 -20 120 120"
                      fill="#004967"
                      className="inline-block"
                    >
                      <path d="M60.78 67.637c5.442-6.106 8.759-14.147 8.759-22.952 0-18.373-14.422-33.437-32.539-34.477V2.776a2 2 0 1 0-4 0v7.432C14.883 11.248.461 26.312.461 44.685c0 8.805 3.316 16.846 8.759 22.952l-5.866 5.866a2 2 0 0 0 0 2.828 1.99 1.99 0 0 0 1.414.586 1.99 1.99 0 0 0 1.414-.586l5.866-5.866c6.106 5.442 14.148 8.759 22.952 8.759s16.845-3.316 22.952-8.759l5.866 5.866a1.99 1.99 0 0 0 2.828 0 2 2 0 0 0 0-2.828l-5.866-5.866zM4.461 44.685c0-16.839 13.7-30.539 30.539-30.539s30.539 13.7 30.539 30.539S51.839 75.224 35 75.224 4.461 61.523 4.461 44.685zm43.341 8.591L37 43.78V21.415a2 2 0 1 0-4 0v23.27c0 .021.006.041.006.062.002.07.011.14.021.21l.03.184c.015.062.036.123.057.184l.067.185c.026.056.058.109.089.163l.105.173c.035.048.074.092.113.137l.149.161c.015.014.025.03.041.044L45.161 56.28a1.99 1.99 0 0 0 2.822-.182 2 2 0 0 0-.181-2.822z" />
                    </svg>
                  </div>
                  Allow it to rest for a minimum of 4 hours before use.
                </div>
                <div className="w-1/2 md:w-1/4 px-3 text-center">
                  <div className="mb-6 pb-6 border-b border-neutral-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="-16 -16 120 120"
                      fill="#174860"
                      className="inline-block"
                    >
                      <path d="M49.777 48.102a1.68 1.68 0 0 0-1.676 1.676c0 1.701-1.879 3.138-4.101 3.138s-4.1-1.437-4.1-3.138a1.68 1.68 0 0 0-1.675-1.676 1.68 1.68 0 0 0-1.676 1.676c0 3.578 3.343 6.488 7.452 6.488s7.452-2.91 7.452-6.488a1.68 1.68 0 0 0-1.676-1.676zm37.291 19.964c0-3.047-2.479-5.526-5.525-5.526h-7.951v-6.276h4.969c2.447 0 4.695-1.744 5.342-4.147a92.8 92.8 0 0 0-.002-47.04C83.268 2.636 81.073.932 78.559.932H9.441C6.929.932 4.733 2.636 4.1 5.077a92.81 92.81 0 0 0 0 47.042c.646 2.401 2.893 4.146 5.341 4.146h4.967v6.276H6.457c-3.047 0-5.526 2.479-5.526 5.526v13.477c0 3.047 2.479 5.525 5.526 5.525h75.086c3.047 0 5.525-2.479 5.525-5.525V68.066zM9.442 52.914c-1.007 0-1.859-.675-2.073-1.641-3.852-14.831-3.852-30.52.002-45.36.212-.957 1.064-1.631 2.071-1.631h69.119a2.1 2.1 0 0 1 2.072 1.64 90.45 90.45 0 0 1-.002 45.361c-.213.957-1.066 1.632-2.07 1.632h-4.967v-14.69c0-16.317-13.275-29.592-29.592-29.592S14.41 21.908 14.41 38.225v14.69H9.442zm46.066 9.172c5.297-3.728 8.461-9.877 8.461-16.449l-.002-8.375c0-3.047-2.479-5.526-5.525-5.526H46.889a6.91 6.91 0 0 1-6.988-6.989v-2.888a1.68 1.68 0 0 0-1.676-1.676 1.68 1.68 0 0 0-1.675 1.676v2.888a6.91 6.91 0 0 1-6.989 6.989c-3.047 0-5.526 2.479-5.526 5.526v8.375c0 6.475 3.164 12.624 8.464 16.451l.627.453-15.367-.001V38.225c0-14.47 11.772-26.242 26.243-26.242s26.242 11.772 26.242 26.242V62.54H54.861l.647-.454zm-11.507.358c-9.162 0-16.615-7.496-16.615-16.711v-8.472a2.18 2.18 0 0 1 2.176-2.176c3.321 0 6.484-1.652 8.46-4.42l.204-.285.204.285c1.976 2.768 5.139 4.42 8.459 4.42H58.44a2.18 2.18 0 0 1 2.176 2.176v8.375a16.8 16.8 0 0 1-4.859 11.884c-3.138 3.175-7.312 4.924-11.756 4.924zM4.282 68.066a2.18 2.18 0 0 1 2.175-2.176h75.085a2.18 2.18 0 0 1 2.176 2.176l.002 2.175H4.282v-2.175zm79.439 13.477a2.18 2.18 0 0 1-2.176 2.176H6.458a2.18 2.18 0 0 1-2.175-2.176v-7.951h79.438v7.951z" />
                    </svg>
                  </div>
                  Full restoration achieved after 24 hours.
                </div>
              </div>
            </div>
            <div className="border-b border-neutral-300 pb-24">
              <div className="px-3 sm:container">
                <div className="max-w-7xl mx-auto">
                  <img
                    src={Sottovuoto2_Img}
                    alt="Sottovuoto image 2"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    );
  },
);
