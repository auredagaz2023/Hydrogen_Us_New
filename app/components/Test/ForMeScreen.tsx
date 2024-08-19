import {useState} from 'react';
import {useNavigate} from '@remix-run/react';
import DoubleSingleScreen from './DoubleSingleScreen';
import TypeCoupleScreen from './TypeCoupleScreen';
import PositionScreen from './PositionScreen';
import TemperatureScreen from './TemperatureScreen';
import ComfortScreen from './ComfortScreen';
import WakeUpScreen from './WakeUpScreen';
import BudgetScreen from './BudgetScreen';
import CurrentWhyScreen from './CurrentWhyScreen';
import {TSize, TTestTags} from './types';

export default function ForMeScreen({
  start_step,
  size,
  testId,
  selected,
  onChange,
}: {
  start_step: number;
  size?: TSize;
  testId: number;
  selected: any[];
  onChange: (selected: any[]) => void;
}) {
  const [step, setStep] = useState<number>(start_step);
  const [selectedOptions, setSelectedOptions] = useState<TTestTags>({
    sizeTag: size,
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const navigate = useNavigate();

  const totalStep = 8;

  const onSubmit = (step: number, newTags: TTestTags) => {
    if (step < totalStep) {
      const _updatedOptions: TTestTags = {
        ...selectedOptions,
        ...newTags,
      };
      setSelectedOptions(_updatedOptions);
      setStep(step + 1);

      // Need to remove once check done
      let tags: string[] = [];
      Object.entries(_updatedOptions).map(([k, v], index) => {
        if (k.indexOf('Tag') > -1 && v) {
          if (Array.isArray(v)) tags = [...tags, ...v];
          else tags.push(v.toString());
        }
      });
      setSelectedTags(tags);
    } else {
      let tags: string[] = [];
      Object.entries({...selectedOptions, ...newTags}).map(([k, v], index) => {
        if (k.indexOf('Tag') > -1 && v) {
          if (Array.isArray(v)) tags = [...tags, ...v];
          else tags.push(v.toString());
        }
      });

      navigate(`/test-result/${testId}`, {
        state: {
          'test-index': testId,
          tags: tags,
        },
      });
    }
  };

  const renderTestScreen = () => {
    switch (step) {
      case 1:
        return (
          <DoubleSingleScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep(1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      case 2:
        return (
          <TypeCoupleScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      case 3:
        return (
          <PositionScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      case 4:
        return (
          <TemperatureScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      case 5:
        return (
          <ComfortScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      case 6:
        return (
          <WakeUpScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      case 7:
        return (
          <BudgetScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      case 8:
        return (
          <CurrentWhyScreen
            step={step}
            totalStep={totalStep}
            selectedTags={selectedOptions}
            onBack={() => setStep((prevStep) => prevStep - 1)}
            onSubmit={(newTags: TTestTags) => {
              onSubmit(step, newTags);
            }}
            testId={testId}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="relative mb-24">
      <div className="absolute top-5 w-9/12 bg-dark-blue">
        {/* {selectedTags.length > 0 && ( */}
        <div
          className="flex gap-2 px-2 py-2  text-sm mx-auto mr-5"
          style={{width: `fit-content`}}
        >
          {/* <span>Tags: </span> */}
          {testId === 1 && !selectedTags.includes('Double') && (
            <span>Double</span>
          )}
          {selectedTags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        {/* )} */}
      </div>
      {renderTestScreen()}
    </div>
  );
}
