import {useState} from 'react';
import CurrentSupport from '../controls/CurrentSupport';
import MyRadioGroup, {MyRadioOption} from '../controls/MyRadioGroup';
import SideImage from '../../assets/Test/bg-partner-step-7.jpg';
import {TProps} from './types';
import StatusBar from './StatusBar';

const OPTIONS: MyRadioOption[] = [
  {id: 'buy', caption: 'I buy a house, I buy a new mattress'},
  {id: 'feel', caption: "I don't feel rested in the morning"},
  {id: 'old', caption: 'The mattress is old, I would like a better one'},
  {id: 'move', caption: 'I move, Change mattress'},
];

export default function CurrentWhyScreen(props: TProps) {
  const {onSubmit, onBack, step, totalStep, selectedTags, testId} = props;
  const [support, setSupport] = useState<string | undefined>(undefined);
  const [why, setWhy] = useState<MyRadioOption | undefined>(undefined);
  const handleSubmit = () => {
    if (why && support) {
      onSubmit({
        support: support,
        why: why.id,
      });
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
              <StatusBar status={7} />
              <div className="flex w-1/3">
                <div className="w-24"> </div>
                <div className="text-white text-4xl font-semibold">
                  <p className="text-sm mb-3">
                    {`00${step}`.slice(-2)} / {`00${totalStep}`.slice(-2)}
                  </p>
                  <p className="text-lg mt-3 font-medium max-w-[220px]">
                    To advise you on the most suitable choice for your rest, it
                    is important to know your current support.
                  </p>
                </div>
              </div>
              <div className="flex w-2/3">
                <div className="lg:w-6/12 ml-12 mt-16">
                  <p className="uppercase text-test-header text-sm font-bold">
                    Current Support
                  </p>
                  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 " />
                  <CurrentSupport value={support || ''} onChange={setSupport} />
                </div>
                <div className="lg:w-6/12 text-white ml-12 mr-12 mt-16">
                  <p className="uppercase text-test-header text-sm font-bold ">
                    Why do you want to change change?
                  </p>
                  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 " />
                  <MyRadioGroup
                    value={why || {id: undefined, caption: ''}}
                    options={OPTIONS}
                    onChange={setWhy}
                  />
                </div>
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
                  disabled={!why && !support}
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
