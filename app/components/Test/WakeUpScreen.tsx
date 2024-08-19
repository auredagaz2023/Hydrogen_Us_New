import {useState, useEffect} from 'react';
import MyCheckBox from '../controls/MyCheckBox';
import SideImage from '../../assets/Test/bg-partner-step-5.jpg';
import {TMorning, TProps} from './types';
import {RadioGroup} from '@headlessui/react';
import {BsCheck2} from 'react-icons/bs';
import StatusBar from './StatusBar';

type TWakeupOption = {
  value: TMorning | undefined;
  label: string;
};

const WakeUps: TWakeupOption[] = [
  {
    value: undefined,
    label: 'Perfectly rested',
  },
  {
    value: 'Back pain',
    label: 'My back hurts',
  },
  {
    value: 'Allergies',
    label: 'I sneeze due to an allergy to mites and dust',
  },
  {
    value: 'Joints',
    label: 'I feel widespread pain in the joints',
  },
  {
    value: 'Circulation',
    label: 'I have circulation problems',
  },
  {
    value: 'Cervical pain',
    label: 'I have neck pain',
  },
  {
    value: 'Rheumatism',
    label: 'I suffer from rheumatism',
  },
];

const WakeUps2: TWakeupOption[] = [
  {
    value: undefined,
    label: 'Perfectly rested',
  },
  /*
  {
    value: 'Wakeup',
    label: 'How do you wake up',
  },
  */
  {
    value: 'Back pain',
    label: 'His back hurts',
  },
  {
    value: 'Allergies',
    label: 'I sneeze due to an allergy to mites and dust',
  },
  {
    value: 'Joints',
    label: 'I feel widespread pain in the joints',
  },
  {
    value: 'Circulation',
    label: 'I have circulation problems',
  },
  {
    value: 'Cervical pain',
    label: 'I have neck pain',
  },
  {
    value: 'Rheumatism',
    label: 'I suffer from rheumatism',
  },
];

export default function WakeUpScreen(props: TProps) {
  const {onSubmit, onBack, step, totalStep, selectedTags, testId} = props;
  const [wakeup, setWakeup] = useState<TWakeupOption | undefined | null>(null);
  const [wakeup2, setWakeup2] = useState<TWakeupOption | undefined | null>(
    null,
  );

  const handleSubmit = () => {
    if (wakeup) {
      const result: any = {
        morningTag: wakeup.value,
      };
      if (isDouble && wakeup2) {
        result.morning2Tag = wakeup2.value;
      }
      onSubmit(result);
    }
  };

  const isDouble =
    selectedTags.sizeTag === 'Double' && testId !== 0 && testId !== 3;

  return (
    <div className="bg-dark-blue h-test flex">
      <div
        className={`flex flex-col justify-between pt-20 pb-28 items-stretch w-full ${
          isDouble ? '' : ' lg:w-9/12'
        }`}
      >
        <div className="container">
          <div className="flex flex-col">
            <div
              className="flex justify-start items-start"
              style={{minHeight: `50vh`}}
            >
              <StatusBar status={5} />
              <div className="flex w-1/3">
                <div className="w-24"> </div>
                <div className="text-white text-4xl font-semibold">
                  <p className="text-sm mb-3">
                    {`00${step}`.slice(-2)} / {`00${totalStep}`.slice(-2)}
                  </p>
                  How do you wake up in the morning?
                  <p className="text-lg mt-3 font-medium max-w-[220px]">
                    Choose the answer in which you most recognize yourself when
                    you get out of bed.
                  </p>
                </div>
              </div>
              <div className="flex w-2/3 mt-20">
                <div className="ml-12 max-w-[500px]">
                  <p className="uppercase text-test-header text-sm font-bold">
                    You
                  </p>
                  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 w-[500px]" />
                  <div className="max-w-[500px]">
                    <RadioGroup
                      value={wakeup}
                      onChange={setWakeup}
                      className="flex flex-col gap-x-6"
                      style={{maxHeight: '260px'}}
                    >
                      {WakeUps.map((w, index) => (
                        <RadioGroup.Option value={w} key={index}>
                          {({checked}) => (
                            <div className="flex justify-between items-center uppercase text-white text-28 mb-3 cursor-pointer">
                              <div style={{flex: '0 1 230px'}}>{w.label}</div>
                              <div
                                className={`w-5 h-5 border border-white rounded-full flex justify-center items-center ${
                                  checked && 'bg-test-selected opacity-75'
                                }`}
                              >
                                {checked && (
                                  <BsCheck2 className="w-4 h-4 font-bold" />
                                )}
                              </div>
                            </div>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                {isDouble && (
                  <div className="ml-12 max-w-[500px]">
                    <p className="uppercase text-test-header text-sm font-bold">
                      Your Partner
                    </p>
                    <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 w-[500px]" />
                    <div className="max-w-[500px]">
                      <RadioGroup
                        value={wakeup2}
                        onChange={setWakeup2}
                        className="flex flex-col gap-x-6"
                        style={{maxHeight: '260px'}}
                      >
                        {WakeUps2.map((w, index) => (
                          <RadioGroup.Option value={w} key={index}>
                            {({checked}) => (
                              <div className="flex justify-between items-center uppercase text-white text-28 mb-3 cursor-pointer">
                                <div style={{flex: '0 1 230px'}}>{w.label}</div>
                                <div
                                  className={`w-5 h-5 border border-white rounded-full flex justify-center items-center ${
                                    checked && 'bg-test-selected opacity-75'
                                  }`}
                                >
                                  {checked && (
                                    <BsCheck2 className="w-4 h-4 font-bold" />
                                  )}
                                </div>
                              </div>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="ml-24 mt-20 mr-12">
              <div className="flex justify-end w-full items-center gap-8">
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
                  disabled={!wakeup || (!wakeup2 && isDouble)}
                >
                  {step === totalStep ? 'Show Results' : 'Next'}
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
      {!isDouble && (
        <div
          className="w-full lg:w-3/12 bg-cover bg-center"
          style={{backgroundImage: `url(${SideImage})`}}
        />
      )}
    </div>
  );
}
