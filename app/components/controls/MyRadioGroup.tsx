import {useState, useEffect} from 'react';
import {RadioGroup} from '@headlessui/react';
import {AiOutlineCheck} from 'react-icons/ai';
import {TBudget} from '../Test/types';

export interface MyRadioOption {
  id: TBudget | string | undefined;
  caption: string;
}

const MyRadioGroup = ({
  value,
  options,
  onChange,
}: {
  value: MyRadioOption;
  options: MyRadioOption[];
  onChange: (value: MyRadioOption) => void;
}) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <div className="flex flex-col w-64 gap-8 mt-8 cursor-pointer">
        {options.map((o) => (
          <RadioGroup.Option key={o.caption} value={o}>
            {({checked}) => (
              <div className="flex items-center justify-between">
                <div className="mr-4 w-56 uppercase">{o.caption}</div>
                <div
                  className={`
                    relative flex h-5 w-5 items-center justify-center rounded-xl transition-all duration-200 outline-none ring-1 ring-white cursor-pointer
                    ${checked ? 'bg-test-selected' : ''} 
                  `}
                >
                  <AiOutlineCheck
                    size="1rem"
                    className={`
                      ${checked ? 'scale-100' : 'scale-0'} 
                      transition-transform duration-200 ease-out`}
                  />
                </div>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default MyRadioGroup;
