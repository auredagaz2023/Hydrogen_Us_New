import {useState, useEffect} from 'react';
import {TGender} from '../Test/types';

const types: TGender[] = ['F', 'M', 'N'];
const borderRadius = ['12px 0 0 12px', '', '0 12px 12px 0'];
const GenderSelector = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (type: TGender) => void;
}) => {
  const [active, setActive] = useState(value);

  useEffect(() => {
    setActive(value);
  }, [value]);

  return (
    <div className="border border-white rounded-full text-xs w-1/2 ml-12">
      {types.map((type, index) => (
        <button
          className={`w-1/3 py-1 ${type === active ? 'bg-test-selected' : ''}`}
          style={{borderRadius: borderRadius[index]}}
          key={type}
          onClick={() => {
            setActive(type);
            onChange(type);
          }}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default GenderSelector;
