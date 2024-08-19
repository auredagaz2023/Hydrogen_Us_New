import {useState, useEffect} from 'react';
import GenderSelector from '../controls/GenderSelector';
import SideImage from '../../assets/Test/bg-partner-step-1.jpg';
import {TAge, TBmi, TGender, TProps, TTestTags} from './types';
import StatusBar from './StatusBar';

export default function TypeCoupleScreen(props: TProps) {
  const {onSubmit, onBack, step, totalStep, selectedTags, testId} = props;
  const [gender1, setGender1] = useState<TGender>(selectedTags.gender1 || 'F');
  const [age1, setAge1] = useState<string>(selectedTags.age1 || '');
  const [weight1, setWeight1] = useState<string>(selectedTags.weight1 || '');
  const [height1, setHeight1] = useState<string>(selectedTags.height1 || '');
  const [gender2, setGender2] = useState<TGender>(selectedTags.gender2 || 'F');
  const [age2, setAge2] = useState<string>(selectedTags.age2 || '');
  const [weight2, setWeight2] = useState<string>(selectedTags.weight2 || '');
  const [height2, setHeight2] = useState<string>(selectedTags.height2 || '');

  const calculateAgeTag = (age: number): TAge => {
    if (age <= 3) return 'Age 0-3';
    else if (age <= 12) return 'Age 4-12';
    else if (age <= 20) return 'Age 13-20';
    else if (age <= 40) return 'Age 21-40';
    else if (age <= 60) return 'Age 41-60';
    else if (age <= 75) return 'Age 61-75';
    else return 'Age76+';
  };

  const calculateAgeBMI = (
    weight1: number,
    height1: number,
    weight2?: number,
    height2?: number,
  ): TBmi => {
    const bmi1 = (weight1 / height1 / height1) * 703;
    if (height2 && weight2) {
      const bmi2 = (weight2 / height2 / height2) * 703;
      if (
        (bmi1 >= 25 && bmi2 >= 25) ||
        (bmi1 >= 25 && bmi2 >= 18.5) ||
        (bmi1 >= 18.5 && bmi2 >= 25)
      )
        return 'Obese';
      else if (bmi1 >= 18.5 && bmi1 < 25 && bmi2 >= 18.5 && bmi2 < 25)
        return 'Normal weight';
      else if (
        (bmi1 < 18.5 && bmi2 < 18.5) ||
        (bmi1 < 18.5 && bmi2 < 25) ||
        (bmi1 < 25 && bmi2 < 18.5)
      )
        return 'Underweight';
      else return 'Dual core';
    } else {
      if (bmi1 < 18.5) return 'Underweight';
      else if (bmi1 < 25) return 'Normal weight';
      else return 'Obese';
    }
  };

  const handleSubmit = () => {
    if (age1 == '' || weight1 == '' || height1 == '') {
      console.error('Input all required fields');
    } else {
      // if (
      //   selectedTags.sizeTag === 'Double' &&
      //   testId !== 0 &&
      //   (age2 == '' || weight2 == '' || height2 == '')
      // ) {
      //   console.error('Input all required fields');
      // } else
      {
        let newTags: TTestTags = {
          age1,
          weight1,
          height1,
          gender1,
          ageTag1: calculateAgeTag(parseInt(age1)),
          bmiTag: calculateAgeBMI(parseFloat(weight1), parseFloat(height1)),
        };
        if (selectedTags.sizeTag === 'Double' && testId !== 0) {
          newTags = {
            ...newTags,
            age2,
            weight2,
            height2,
            gender2,
            ageTag2: calculateAgeTag(parseInt(age2)),
            bmiTag: calculateAgeBMI(
              parseFloat(weight1),
              parseFloat(height1),
              parseFloat(weight2),
              parseFloat(height2),
            ),
          };
        }
        onSubmit(newTags);
      }
    }
  };

  const isDouble =
    selectedTags.sizeTag === 'Double' && testId !== 0 && testId !== 3;

  return (
    <div className="bg-dark-blue h-test flex">
      <div
        className={`flex flex-col justify-between pt-20 pb-28 items-stretch w-full ${
          isDouble ? '' : 'lg:w-9/12'
        }`}
      >
        <div className="container">
          <div className="flex flex-col">
            <div
              className="flex justify-start items-start"
              style={{minHeight: `50vh`}}
            >
              <StatusBar status={1} />
              <div>
                <div className="text-white text-4xl font-semibold">
                  <p className="text-sm mb-3">
                    {`00${step}`.slice(-2)} / {`00${totalStep}`.slice(-2)}
                  </p>
                  {testId === 0
                    ? 'What kind of person are you?'
                    : 'What type is your host'}
                </div>
                <div className="text-white text-4xl font-semibold">
                  <p className="text-lg mt-3 font-medium max-w-[220px]">
                    {testId === 0
                      ? 'To suggest the best support it is important to know some parameters of your body.'
                      : 'Choose which bed your guest will sleep on.'}
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
                  <div className="text-white">
                    <div className="flex my-6 justify-between items-center">
                      <p className="uppercase w-1/2">Gender</p>
                      <GenderSelector value={gender1} onChange={setGender1} />
                    </div>
                    <div className="flex my-6 justify-between items-center">
                      <p className="uppercase w-1/2">Age</p>
                      <input
                        className="bg-dark-blue border border-white rounded-full text-center w-1/2 px-2 py-1 ml-12"
                        value={age1}
                        onChange={(e) => setAge1(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex my-6 justify-between items-center">
                      <p className="uppercase w-1/2">
                        Weight{' '}
                        <span className="text-xs align-baseline mt-2">LB</span>
                      </p>
                      <input
                        className="bg-dark-blue border border-white rounded-full text-center w-1/2 px-2 py-1 ml-12"
                        value={weight1}
                        onChange={(e) => setWeight1(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex my-6 justify-between items-center">
                      <p className="uppercase w-1/2">
                        Height{' '}
                        <span className="text-xs align-baseline mt-2">IN</span>
                      </p>
                      <input
                        className="bg-dark-blue border border-white rounded-full text-center w-1/2 px-2 py-1 ml-12"
                        value={height1}
                        onChange={(e) => setHeight1(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>
                {isDouble && (
                  <div
                    className="ml-12 max-w-[500px]"
                    style={{width: 'fit-content', flex: 1}}
                  >
                    <p className="uppercase text-test-header text-sm font-bold">
                      Your partner
                    </p>
                    <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                    <div className="ml-12 text-white">
                      <div className="flex my-6 justify-between items-center">
                        <p className="uppercase w-1/2">Gender</p>
                        <GenderSelector value={gender2} onChange={setGender2} />
                      </div>
                      <div className="flex my-6 justify-between items-center">
                        <p className="uppercase w-1/2">Age</p>
                        <input
                          className="bg-dark-blue border border-white rounded-full text-center w-1/2 px-2 py-1 ml-12"
                          value={age2}
                          onChange={(e) => setAge2(e.target.value)}
                        ></input>
                      </div>
                      <div className="flex my-6 justify-between items-center">
                        <p className="uppercase w-1/2">
                          Weight{' '}
                          <span className="text-xs align-baseline mt-2">
                            LB
                          </span>
                        </p>
                        <input
                          className="bg-dark-blue border border-white rounded-full text-center w-1/2 px-2 py-1 ml-12"
                          value={weight2}
                          onChange={(e) => setWeight2(e.target.value)}
                        ></input>
                      </div>
                      <div className="flex my-6 justify-between items-center">
                        <p className="uppercase w-1/2">
                          Height{' '}
                          <span className="text-xs align-baseline mt-2">
                            IN
                          </span>
                        </p>
                        <input
                          className="bg-dark-blue border border-white rounded-full text-center w-1/2 px-2 py-1 ml-12"
                          value={height2}
                          onChange={(e) => setHeight2(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="ml-24 mt-20 mr-12">
              <div className="flex justify-end w-full items-center gap-8">
                {testId === 1 ? (
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
