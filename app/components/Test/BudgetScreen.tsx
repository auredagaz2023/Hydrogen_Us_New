import {useState, useEffect} from 'react';
import MyRadioGroup, {MyRadioOption} from '../controls/MyRadioGroup';
import SideImage from '../../assets/Test/bg-partner-step-6.jpg';
import {TBudget, TProps} from './types';
import StatusBar from './StatusBar';

const OPTIONS: MyRadioOption[] = [
  {id: 'Low budget', caption: 'LOW'},
  {id: 'Average budget', caption: 'AVERAGE'},
  {id: undefined, caption: 'NO BUDGET'},
];

export default function BudgetScreen(props: TProps) {
  const {onSubmit, onBack, step, totalStep, selectedTags, testId} = props;
  const [budget, setBudget] = useState<MyRadioOption>(
    OPTIONS.find((o) => o.id === selectedTags.budgetTag) || OPTIONS[0],
  );

  const handleSubmit = () => {
    onSubmit({budgetTag: budget.id as TBudget | undefined});
  };

  return (
    <div className="bg-dark-blue h-test flex">
      <div className="flex flex-col justify-between pt-20 pb-28 items-stretch w-full lg:w-9/12">
        <div className="container">
          <div className="flex flex-col">
            <div
              className="flex justify-start items-start"
              style={{minHeight: `50vh`}}
            >
              <StatusBar status={6} />
              <div className="flex w-1/2">
                <div className="w-24"> </div>
                <div className="text-white text-4xl font-semibold">
                  <p className="text-sm mb-3">
                    {`00${step}`.slice(-2)} / {`00${totalStep}`.slice(-2)}
                  </p>
                  <p style={{maxWidth: '450px'}}>
                    How much would you like to spend on the new mattress?
                  </p>
                  <p className="text-lg mt-3 font-medium">
                    Consider that we spend a third of our lives sleeping and
                    rest affects its quality, therefore your mattress represents
                    an important investment.
                  </p>
                </div>
              </div>
              <div className="flex text-white w-1/2">
                <div className="ml-24 mt-20">
                  <p className="uppercase text-test-header text-sm font-bold">
                    Budget
                  </p>
                  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                  <MyRadioGroup
                    value={budget}
                    options={OPTIONS}
                    onChange={setBudget}
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

      <div
        className="w-full lg:w-3/12 bg-cover bg-center"
        style={{backgroundImage: `url(${SideImage})`}}
      />
    </div>
  );
}
