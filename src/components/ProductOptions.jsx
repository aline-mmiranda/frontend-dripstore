import { useState } from "react";

const ProductOptions = ({
  options = [],
  radius = "4px",
  shape = "square",
  type = "text",
  onSelect,
}) => {
  const [selected, setSelected] = useState(null);

  const isCircle = shape === "circle";
  const isColor = type === "color";

  function handleSelect(option) {
    setSelected(option);
    onSelect?.(option);
  }

  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const isSelected = selected === option;

        const shapeClasses = isCircle
          ? `w-9 h-9 rounded-full bg-white border-2 ${
              isSelected ? "border-primary" : "border-transparent"
            }`
          : `min-w-11.5 h-11.5 px-3 border ${
              isSelected
                ? "bg-primary border-primary"
                : "bg-white border-light-gray-2"
            }`;

        return (
          <button
            type="button"
            key={option}
            aria-pressed={isSelected}
            aria-label={isColor ? `Cor ${option}` : `Opção ${option}`}
            onClick={() => handleSelect(option)}
            className={`flex justify-center items-center cursor-pointer box-border  ${shapeClasses}`}
            style={{ borderRadius: isCircle ? undefined : radius }}
          >
            {isColor ? (
              <span
                className="block w-7.75 h-7.75 rounded-full"
                style={{ backgroundColor: option }}
              />
            ) : (
              <span
                className={`font-bold text-[16px] leading-6 tracking-[0.75px] ${
                  isSelected ? "text-white" : "text-dark-gray-2"
                }`}
              >
                {option}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;
