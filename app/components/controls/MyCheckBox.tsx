import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";

const MyCheckBox = ({ label, checked, onChange} : {label: string, checked: boolean, onChange: (checked: boolean) => void}) => {
  const [status, setStatus] = useState(checked);

  useEffect(() => {
    setStatus(checked);
  }, [checked])

  return (
    <Switch.Group>
      <div className="flex items-center justify-between w-64 my-6 text-white cursor-pointer">
        <Switch.Label className="mr-4 w-56 cursor-pointer">{label}</Switch.Label>
        <Switch
          checked={status}
          onChange={onChange}
          className={`
            relative flex h-5 w-5 items-center justify-center rounded-xl transition-all duration-200 outline-none ring-1 ring-white
            ${checked ? "bg-test-selected" : ""} 
          `}
        >
          <AiOutlineCheck
            size="1rem"
            className={`
             ${checked ? "scale-100" : "scale-0"} 
             transition-transform duration-200 ease-out`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default MyCheckBox;