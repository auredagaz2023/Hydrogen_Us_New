import {useState, useEffect} from 'react';
import {RadioGroup} from '@headlessui/react';
import {AiOutlineCheck} from 'react-icons/ai';
import SoftIcon from '../../assets/Test/soft-icon.svg';
import MediumIcon from '../../assets/Test/medium-icon.svg';
import FirmIcon from '../../assets/Test/firm-icon.svg';
import {TComfort} from '../Test/types';

type TComfortOption = {
  id: TComfort;
  caption: string;
  desc: string;
  image: string;
};

const ComfortSelector = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: TComfort) => void;
}) => {
  const comfortOptions: TComfortOption[] = [
    {id: 'Soft', caption: 'Soft', desc: 'Soft and welcoming', image: SoftIcon},
    {
      id: 'Medium',
      caption: 'Medium',
      desc: 'Cozy and Solid',
      image: MediumIcon,
    },
    {
      id: 'Firm',
      caption: 'Firm',
      desc: 'Determined and rigid',
      image: FirmIcon,
    },
  ];
  return (
    <RadioGroup value={value} onChange={onChange}>
      <div className="flex flex-col gap-6 text-white cursor-pointer">
        {comfortOptions.map((o) => (
          <RadioGroup.Option key={o.id} value={o.id}>
            {({checked}) => (
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <img src={o.image} width={52} height={37} className="mt-1" />
                  <div
                    className={`
                    relative flex h-5 w-5 items-center justify-center rounded-xl transition-all duration-200 outline-none ring-1 ring-white
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
                <div className="flex flex-col">
                  <p className="text-[15px] w-[120px] uppercase">{o.desc}</p>
                  <p className="text-xl font-semibold">{o.caption}</p>
                </div>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default ComfortSelector;
