import {useState, useEffect} from 'react';
import TemperatureControl from '../controls/TemperatureControl';
import SideImage from '../../assets/Test/bg-partner-step-3.jpg';
import {TProps, TTemperature} from './types';
import StatusBar from './StatusBar';

export default function TemperatureScreen(props: TProps) {
  const {onSubmit, onBack, step, totalStep, selectedTags, testId} = props;
  const [num, setNum] = useState<number>(selectedTags.temperature || 1);
  const [num2, setNum2] = useState<number>(selectedTags.temperature2 || 1);

  const handleSubmit = () => {
    let tag: TTemperature;

    switch (num) {
      case 1:
      case 2:
      case 3:
        tag = 'Warm';
        break;
      case 4:
        tag = 'Normal';
        break;

      default:
        tag = 'Cool';
        break;
    }

    const result: any = {
      temperature: num,
      temperatureTag: tag,
    };

    if (isDouble) {
      let tag2: TTemperature;
      switch (num2) {
        case 1:
        case 2:
        case 3:
          tag2 = 'Warm';
          break;
        case 4:
          tag2 = 'Normal';
          break;

        default:
          tag2 = 'Cool';
          break;
      }
      result.temperature2 = num2;
      result.temperature2Tag = tag2;
    }

    onSubmit(result);
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
              <StatusBar status={3} />
              <div className="flex w-1/3">
                <div className="w-24"> </div>
                <div className="text-white text-4xl font-semibold">
                  <p className="text-sm mb-3">
                    {`00${step}`.slice(-2)} / {`00${totalStep}`.slice(-2)}
                  </p>
                  Chilly or warm?
                  <p className="text-lg mt-3 font-medium max-w-[220px]">
                    During sleep, the perception of the temperature of the
                    mattress varies from person to person.
                  </p>
                </div>
              </div>
              <div className="flex w-2/3 ml-12 mt-20">
                <div
                  className="max-w-[500px]"
                  style={{width: 'fit-content', flex: 1}}
                >
                  <p className="uppercase text-test-header text-sm font-bold">
                    You
                  </p>
                  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                  <TemperatureControl value={num} onChange={setNum} />
                </div>
                {isDouble && (
                  <div
                    className="ml-12 max-w-[500px]"
                    style={{width: 'fit-content', flex: 1}}
                  >
                    <p className="uppercase text-test-header text-sm font-bold">
                      Your Partner
                    </p>
                    <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                    <TemperatureControl value={num2} onChange={setNum2} />
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
