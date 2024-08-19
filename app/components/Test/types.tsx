export type TSize = 'Single' | 'Double';
export type TAge =
  | 'Age 0-3'
  | 'Age 4-12'
  | 'Age 13-20'
  | 'Age 21-40'
  | 'Age 41-60'
  | 'Age 61-75'
  | 'Age76+';
export type TBmi = 'Underweight' | 'Normal weight' | 'Obese' | 'Dual core';
export type TPosition = 'Stomach sleeper' | 'Side sleeper' | 'Back Sleeper';
export type TTemperature = 'Cool' | 'Normal' | 'Warm';
export type TComfort = 'Soft' | 'Medium' | 'Firm';
export type TMorning =
  | 'Back pain'
  | 'Allergies'
  | 'Joints'
  | 'Circulation'
  | 'Cervical pain'
  | 'Rheumatism'
  | 'Wakeup';
export type TBudget = 'Low budget' | 'Average budget';
export type TGender = 'F' | 'M' | 'N';

export type TTestTags = {
  sizeTag?: TSize;
  ageTag1?: TAge;
  ageTag2?: TAge;
  bmiTag?: TBmi;
  positionTag?: TPosition | TPosition[];
  position2Tag?: TPosition | TPosition[];
  temperatureTag?: TTemperature;
  temperature2Tag?: TTemperature;
  comfortTag?: TComfort;
  comfort2Tag?: TComfort;
  morningTag?: TMorning;
  morning2Tag?: TMorning;
  budgetTag?: TBudget;
  gender1?: TGender;
  gender2?: TGender;
  age1?: string;
  age2?: string;
  weight1?: string;
  weight2?: string;
  height1?: string;
  height2?: string;
  temperature?: number;
  temperature2?: number;
  why?: string;
  support?: string;
};

export type TProps = {
  step: number;
  totalStep: number;
  selectedTags: TTestTags;
  onBack: () => void;
  onSubmit: (newTags: TTestTags) => void;
  testId?: number;
};
