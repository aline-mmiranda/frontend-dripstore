import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Icons from "./Icons";

const SearchField = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const filter = term.trim();
    navigate(`/produtos?filter=${encodeURIComponent(filter)}`);
    onSearch?.();
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full" role="search">
      <input
        type="text"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        className="w-full h-15 rounded-lg bg-dark-gray-2/4 px-5 pr-14 outline-none focus:ring-2 focus:ring-primary/40"
        placeholder="Pesquisar produto..."
        aria-label="Pesquisar produto"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <Icons
          icon={Search}
          color="var(--color-dark-gray-3)"
          opacity={0.5}
        />
      </button>
    </form>
  );
};

export default SearchField;
