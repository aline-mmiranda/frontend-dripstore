import { Funnel } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import Icons from "../components/Icons";
import SortBy from "../components/SortBy";
import FilterBy from "../components/FilterBy";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { products } from "../utils/products";

const normalize = (text) =>
  text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const finalPrice = (product) => product.priceDiscount ?? product.price;

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get("filter")?.trim() ?? "";

  const [order, setOrder] = useState("relevance");
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  function handleFilterChange(key, values) {
    setFilters((prev) => ({ ...prev, [key]: values }));
  }

  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      if (term) {
        const haystack = normalize(`${product.name} ${product.category}`);
        if (!haystack.includes(normalize(term))) return false;
      }

      return Object.entries(filters).every(
        ([key, values]) => values.length === 0 || values.includes(product[key]),
      );
    });

    if (order === "lower-price") {
      result = [...result].sort((a, b) => finalPrice(a) - finalPrice(b));
    } else if (order === "higher-price") {
      result = [...result].sort((a, b) => finalPrice(b) - finalPrice(a));
    }

    return result;
  }, [term, order, filters]);

  const title = (
    <>
      <span className="font-bold">
        {term ? `Resultados para "${term}"` : "Todos os produtos"}
      </span>
      <span className="font-normal text-dark-gray-3">
        {" "}
        - {visibleProducts.length} produtos
      </span>
    </>
  );

  return (
    <main className="relative flex flex-col items-center pt-7.5 pb-30 gap-7.5 xl:pt-10 xl:pb-35">
      <Section
        title={title}
        titleAlign="left"
        action={
          <div className="flex items-center gap-2.5">
            <SortBy value={order} onChange={setOrder} />
            <button
              type="button"
              aria-label="Filtros"
              onClick={() => setShowFilters((prev) => !prev)}
              className="bg-primary rounded-lg cursor-pointer w-15 h-15 flex justify-center items-center xl:hidden"
            >
              <Icons
                icon={Funnel}
                color="var(--color-white)"
                size={28}
                strokeWidth={1.5}
              />
            </button>
          </div>
        }
      >
        <div className="xl:flex xl:items-start xl:gap-7">
          <div
            className={`${
              showFilters
                ? "absolute inset-0 z-100 flex items-start justify-start bg-dark-gray/60"
                : "hidden"
            } xl:static xl:inset-auto xl:z-auto xl:block xl:bg-transparent`}
            onClick={(event) => {
              if (event.target === event.currentTarget) setShowFilters(false);
            }}
          >
            <div className="absolute top-0 left-0 w-77 xl:static">
              <FilterBy
                onChange={handleFilterChange}
                onClose={() => setShowFilters(false)}
              />
            </div>
          </div>
          <ProductListing
            products={visibleProducts}
            limit={visibleProducts.length}
            columns={3}
          />
        </div>
      </Section>
    </main>
  );
};

export default ProductListingPage;
