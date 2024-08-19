import {useEffect, useState} from 'react';

const Divider = ({medium, className}: {medium: boolean; className: string}) => {
  return (
    <div
      className={`w-[2px] bg-white ${medium ? 'h-2' : 'h-4'} z-10 ${className}`}
    ></div>
  );
};

const TemperatureControl = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (num: number) => void;
}) => {
  const [num, setNum] = useState(value);
  const [bg, setBG] = useState('#5799b9');
  const [label, setLabel] = useState('Cold');

  useEffect(() => {
    setNum(value);
  }, [value]);

  useEffect(() => {
    switch (num) {
      case 1:
        setBG('#5799b9');
        setLabel('Cold');
        onChange(num);
        break;
      case 2:
        setBG('#5799b9');
        setLabel('Very chilly');
        onChange(num);
        break;
      case 3:
        setBG('#5799b9');
        setLabel('Quite chilly');
        onChange(num);
        break;
      case 4:
        setBG('#87a6b4');
        setLabel('Normal');
        onChange(num);
        break;
      case 5:
        setBG('#c21824');
        setLabel('Quite Warm');
        onChange(num);
        break;
      case 6:
        setBG('#c21824');
        setLabel('Warm');
        onChange(num);
        break;
      case 7:
        setBG('#c21824');
        setLabel('Very warm');
        onChange(num);
        break;
    }
  }, [num]);

  const handleControl = (plus: boolean) => {
    if (num > 1 && !plus) setNum((prevNum) => prevNum - 1);
    if (num < 7 && plus) setNum((prevNum) => prevNum + 1);
  };

  return (
    <div className="row">
      <div className="uppercase text-white my-12">{label}</div>
      <div className="flex gap-2 text-white">
        <button
          className="w-8 h-8 rounded-full border border-white text-lg align-middle"
          onClick={() => handleControl(false)}
          disabled={num === 1}
        >
          -
        </button>
        <div className="relative h-8 border border-white rounded-full">
          <div className="w-full h-full flex items-center">
            <Divider medium={true} className="ml-4" />
            <Divider medium={false} className="ml-4" />
            <Divider medium={true} className="ml-4" />
            <Divider medium={false} className="ml-4" />
            <Divider medium={true} className="ml-4" />
            <Divider medium={false} className="ml-4" />
            <Divider medium={true} className="ml-4" />
            <Divider medium={false} className="ml-4" />
            <Divider medium={true} className="ml-4" />
            <Divider medium={false} className="ml-4" />
            <Divider medium={true} className="ml-4" />
            <Divider medium={false} className="ml-4" />
            <Divider medium={true} className="ml-4 mr-4" />
          </div>
          <div
            className="absolute transition-all ease-in-out duration-300 z-0 top-0 h-full rounded-full"
            style={{width: `${num * (100 / 7)}%`, backgroundColor: bg}}
          ></div>
        </div>
        <button
          className="w-8 h-8 rounded-full border border-white text-lg align-middle"
          onClick={() => handleControl(true)}
          disabled={num === 7}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TemperatureControl;
