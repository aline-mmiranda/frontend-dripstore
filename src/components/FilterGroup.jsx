import { Check } from "lucide-react";
import { useState } from "react";

const FilterGroup = ({
  title,
  inputType = "checkbox",
  options = [],
  onChange,
}) => {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const isRadio = inputType === "radio";

  const getValue = (option) => option.value ?? option.text;

  const handleChange = (event, optionValue) => {
    let next;

    if (isRadio) {
      next = [optionValue];
    } else if (event.target.checked) {
      next = [...checkedOptions, optionValue];
    } else {
      next = checkedOptions.filter((value) => value !== optionValue);
    }

    setCheckedOptions(next);
    onChange?.(next);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <h4 className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-dark-gray-2">
        {title}
      </h4>
      <div className="flex flex-col gap-2.5">
        {options.map((option) => {
          const value = getValue(option);
          const isChecked = checkedOptions.includes(value);

          return (
            <label
              key={value}
              className="flex items-center gap-2.5 cursor-pointer font-medium text-[14px] leading-5.5 tracking-[0.25px] text-dark-gray-2"
            >
              <span
                className={`flex items-center justify-center w-5.5 h-5.5 border ${
                  isRadio ? "rounded-full" : "rounded-xs"
                } ${
                  isChecked && !isRadio
                    ? "bg-primary border-primary"
                    : isChecked
                      ? "bg-white border-primary"
                      : "bg-white border-dark-gray-3"
                }`}
              >
                {isChecked &&
                  (isRadio ? (
                    <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                  ) : (
                    <Check size={16} color="white" strokeWidth={2} />
                  ))}
              </span>
              <input
                type={inputType}
                name={isRadio ? title : undefined}
                value={value}
                checked={isChecked}
                onChange={(event) => handleChange(event, value)}
                className="sr-only"
              />
              {option.text}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
