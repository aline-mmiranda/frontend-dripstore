import { X } from "lucide-react";
import FilterGroup from "./FilterGroup";
import { categorias, estados, generos, marcas } from "../utils/filters";
import Icons from "./Icons";

const FilterBy = ({ onChange, onClose }) => {
  return (
    <section className="w-full max-w-77 h-auto p-7.5 bg-white">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[16px] leading-6 tracking-[0.75px] text-dark-gray-2">
          Filtrar por
        </h3>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar filtros"
            className="cursor-pointer xl:hidden"
          >
            <Icons
              icon={X}
              size={18}
              color="var(--color-dark-gray-2)"
              strokeWidth={1.5}
            />
          </button>
        )}
      </div>
      <hr className="border-light-gray-2 w-full mx-auto my-5" />
      <div className="flex flex-col gap-5">
        <FilterGroup
          title="Marca"
          inputType="checkbox"
          options={marcas}
          onChange={(values) => onChange?.("brand", values)}
        />
        <FilterGroup
          title="Categoria"
          inputType="checkbox"
          options={categorias}
          onChange={(values) => onChange?.("kind", values)}
        />
        <FilterGroup
          title="Gênero"
          inputType="checkbox"
          options={generos}
          onChange={(values) => onChange?.("gender", values)}
        />
        <FilterGroup
          title="Estado"
          inputType="radio"
          options={estados}
          onChange={(values) => onChange?.("condition", values)}
        />
      </div>
    </section>
  );
};

export default FilterBy;
