import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";
import SpringsIcon from "../../assets/Test/springs-icon.svg";
import LatexIcon from "../../assets/Test/latex-icon.svg";
import MemoryIcon from "../../assets/Test/memory-icon.svg";
import FiberIcon from "../../assets/Test/fiber-icon.svg";
import DontKnowIcon from "../../assets/Test/dontknow-icon.svg";

const CurrentSupport = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [status, setStatus] = useState(value);

  useEffect(() => {
    setStatus(value);
  }, [value])

  const supportOptions = [
    { id: "springs", caption: "Springs", image: SpringsIcon },
    { id: "latex", caption: "Latex", image: LatexIcon },
    { id: "memory", caption: "Memory", image: MemoryIcon },
    { id: "fiber", caption: "Natural Fibers", image: FiberIcon },
    { id: "dontknow", caption: "I do not know", image: DontKnowIcon },
  ];
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
    >
      <div className="flex flex-col w-64 gap-6 text-white cursor-pointer">
        {supportOptions.map((o) => (
          <RadioGroup.Option key={o.id} value={o.id}>
            {({ checked }) => (
              <div className="flex items-center">
                <div className={`items-center gap-2 w-56 ${o.id === "springs" || o.id === "latex" || o.id === "memory" ? "flex" : ""}`}>
                  <img src={o.image} alt="Firm Icon" width={52} height={39} />
                  <p className="text-base font-semibold uppercase">{o.caption}</p>
                </div>
                <div
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
                </div>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

export default CurrentSupport;