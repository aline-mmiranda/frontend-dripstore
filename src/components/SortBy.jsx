import { ChevronDown } from "lucide-react";
import Icons from "./Icons";

const SortBy = ({ value, onChange }) => {
  return (
    <>
      <div className="relative flex items-center gap-1 border border-dark-gray-2 rounded-sm bg-select pl-3.5 py-5 w-66.25 h-15 xl:w-83">
        <label
          htmlFor="order"
          className="font-bold text-[13px] leading-7 tracking-[0.75px] whitespace-nowrap xl:text-[16px]"
        >
          Ordenar por:
        </label>
        <select
          id="order"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="appearance-none bg-transparent outline-none cursor-pointer flex-1 min-w-0 py-4 text-[13px] leading-7 tracking-[0.75px] whitespace-nowrap xl:text-[16px]"
        >
          <option value="relevance">mais relevantes</option>
          <option value="lower-price">menor preço</option>
          <option value="higher-price">maior preço</option>
        </select>
        <Icons
          icon={ChevronDown}
          color="var(--color-dark-gray-2)"
          size={18}
          strokeWidth={2}
          className="absolute top-1/2 -translate-y-1/2 right-3.75 z-10 pointer-events-none"
        />
      </div>
    </>
  );
};

export default SortBy;
