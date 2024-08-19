import {useState, useEffect} from 'react';
import babyDouble from '../../assets/Test/baby-double.png';
import babySingle from '../../assets/Test/baby-single.png';
import {RadioGroup} from '@headlessui/react';
import SideImage from '../../assets/Test/bg-io-step-1.jpg';
import {TProps, TSize} from './types';
import StatusBar from './StatusBar';

export default function DoubleSingleScreen(props: TProps) {
  const {onBack, onSubmit, step, totalStep, selectedTags, testId} = props;
  const [tag, setTag] = useState<TSize | undefined>(selectedTags.sizeTag);

  const handleSubmit = () => {
    if (tag) {
      onSubmit({sizeTag: tag});
    } else {
      console.error('Select an option');
    }
  };

  return (
    <div className="bg-dark-blue h-test flex">
      <div className="flex flex-col justify-between pt-20 pb-28 items-stretch w-full lg:w-9/12">
        <div className="container">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-2">
              <StatusBar className="col-span-1" status={0} />
              <div className="col-span-11 grid grid-cols-1 md:grid-cols-2 gap-20 gap-y-6">
                <div className='col-span-1'>
                  <div className="text-white text-4xl font-semibold">
                      <p className="text-sm mb-3">
                        {`00${step}`.slice(-2)} / {`00${totalStep}`.slice(-2)}
                      </p>
                      Single or Double?
                    </div>
                    <div className="border-b border-neutral-100"></div>
                    <div className="text-white text-4xl font-semibold">
                      <p className="text-lg mt-3 font-medium ">
                        {testId == 0
                          ? 'Choose which bed you will sleep on.'
                          : 'Choose which bed your guest will sleep on.'}
                      </p>
                  </div>
                </div>
                <div className="flex col-span-1">
                  <RadioGroup
                    className="flex gap-4"
                    as="div"
                    value={tag || ''}
                    onChange={(value: string) => setTag(value as TSize)}
                  >
                    <RadioGroup.Option value="Single">
                      {({checked}) => (
                        <div
                          className={`flex flex-col px-2 py-3 justify-start items-center cursor-pointer ${
                            checked && 'bg-test-selected rounded-2xl'
                          }`}
                        >
                          <img
                            className="w-auto h-28"
                            src={babySingle}
                            alt="baby cot"
                          />
                          <span className="text-white text-lg font-semibold mt-3">
                            Single
                          </span>
                        </div>
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Double">
                      {({checked}) => (
                        <div
                          className={`flex flex-col px-2 py-3 justify-start items-center cursor-pointer ml-4 ${
                            checked && 'bg-test-selected rounded-2xl'
                          }`}
                        >
                          <img
                            className="w-auto h-28"
                            src={babyDouble}
                            alt="baby cot"
                          />
                          <span className="text-white text-lg font-semibold mt-3">
                            Double
                          </span>
                        </div>
                      )}
                    </RadioGroup.Option>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div className="ml-24 mt-20 mr-12">
              <div className="flex justify-between">
                {step === 1 ? (
                  <div />
                ) : (
                  <button
                    className="flex border-none bg-none text-sm text-white"
                    onClick={onBack}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-left"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Back
                  </button>
                )}
                <button
                  className="flex border border-white text-white px-10 py-3 uppercase text-sm hover:bg-test-selected hover:border-test-selected transition-all ease-in-out disabled:opacity-70"
                  onClick={handleSubmit}
                  disabled={!tag}
                >
                  {step === totalStep ? 'Show Results' : 'Continue'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(selectedTags.sizeTag !== 'Double' || testId === 0) && (
        <div
          className="w-full hidden md:block md:w-3/12 bg-cover bg-right bg-no-repeat"
          style={{backgroundImage: `url(${SideImage})`}}
        />
      )}
    </div>
  );
}
