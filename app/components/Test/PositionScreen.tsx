import {useState, useEffect} from 'react';
import {useNavigate} from '@remix-run/react';
import SideImage from '../../assets/Test/bg-partner-step-2.jpg';
import {TPosition, TProps} from './types';
import {RadioGroup} from '@headlessui/react';
import {BsCheck2} from 'react-icons/bs';
import StatusBar from './StatusBar';

type TPositionOption = {
  value: TPosition | TPosition[];
  label: string;
};

const POSITIONS: TPositionOption[] = [
  {
    value: 'Back Sleeper',
    label: 'Belly up',
  },
  {
    value: 'Stomach sleeper',
    label: 'Belly down',
  },
  {
    value: 'Side sleeper',
    label: 'On the side',
  },
  {
    value: ['Back Sleeper', 'Side sleeper', 'Stomach sleeper'],
    label: 'I always change',
  },
];

export default function PositionScreen(props: TProps) {
  const {onSubmit, onBack, step, totalStep, selectedTags, testId} = props;
  const [position, setPosition] = useState<TPositionOption | undefined>(
    POSITIONS.find((p) => p.value == selectedTags.positionTag),
  );

  const [position2, setPosition2] = useState<TPositionOption | undefined>(
    POSITIONS.find((p) => p.value == selectedTags.position2Tag),
  );

  const handleSubmit = () => {
    if (position) {
      const result: any = {
        positionTag: position.value,
      };
      if (position2) {
        result.position2Tag = position2.value;
      }
      onSubmit(result);
    }
  };

  const isDouble =
    selectedTags.sizeTag === 'Double' && testId !== 0 && testId !== 3;

  return (
    <div className="bg-dark-blue h-test flex">
      <div
        className={`flex flex-col justify-between pt-20 pb-28 items-stretch w-full${
          !isDouble ? ' lg:w-9/12' : ''
        }`}
      >
        <div className="container">
          <div className="flex flex-col">
            <div
              className="flex justify-start items-start"
              style={{minHeight: `50vh`}}
            >
              <StatusBar status={2} />
              <div className="flex w-1/3">
                <div className="w-24"> </div>
                <div className="text-white text-4xl font-semibold">
                  <p className="text-sm mb-3">
                    {`00${step}`.slice(-2)} / {`00${totalStep}`.slice(-2)}
                  </p>
                  What position do you sleep in?
                  <p className="text-lg mt-3 font-medium max-w-[220px]">
                    Choose which bed you will sleep on.
                  </p>
                </div>
              </div>
              <div className="w-2/3 flex">
                <div className="ml-12 max-w-[500px] mt-28" style={{flex: 1}}>
                  <p className="uppercase text-test-header text-sm font-bold">
                    You
                  </p>
                  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                  <RadioGroup value={position} onChange={setPosition}>
                    {POSITIONS.map((p, index) => (
                      <RadioGroup.Option value={p} key={index}>
                        {({checked}) => (
                          <div className="flex justify-between items-center uppercase text-white text-28 mb-3 cursor-pointer">
                            <span>{p.label}</span>
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
                {isDouble && (
                  <div className="ml-12 max-w-[500px] mt-28" style={{flex: 1}}>
                    <p className="uppercase text-test-header text-sm font-bold">
                      Your partner
                    </p>
                    <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                    <RadioGroup value={position2} onChange={setPosition2}>
                      {POSITIONS.map((p, index) => (
                        <RadioGroup.Option value={p} key={index}>
                          {({checked}) => (
                            <div className="flex justify-between items-center uppercase text-white text-28 mb-3 cursor-pointer">
                              <span>{p.label}</span>
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
                  disabled={!position || (!position2 && isDouble)}
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
      {!isDouble && (
        <div
          className="w-full lg:w-3/12 bg-cover bg-center"
          style={{backgroundImage: `url(${SideImage})`}}
        />
      )}
    </div>
  );
}
