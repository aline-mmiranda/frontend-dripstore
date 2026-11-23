import ProductCard from "./ProductCard";

const columnsClass = {
  3: "xl:grid-cols-[repeat(3,292px)] xl:justify-start xl:gap-x-3",
  4: "xl:grid-cols-[repeat(4,292px)]",
};

const ProductListing = ({ products, limit = products.length, columns = 4 }) => {
  const visibleProducts = products.slice(0, limit);

  return (
    <>
      <section>
        <ul
          className={`grid grid-cols-[repeat(2,163px)] justify-center gap-x-2.25 gap-y-10 md:grid-cols-[repeat(4,163px)] lg:gap-x-6 ${columnsClass[columns]}`}
        >
          {visibleProducts.map((product) => (
            <li key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProductListing;
