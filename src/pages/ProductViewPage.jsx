import { Link, useParams } from "react-router";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import { productGallery, products } from "../utils/products";
import link from "../utils/link";

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <main className="flex flex-col items-center gap-5 px-5 py-30 text-center">
        <h1 className="font-bold text-[24px] text-dark-gray-2">
          Produto não encontrado
        </h1>
        <Link
          to="/produtos"
          className="flex justify-center items-center w-50 h-10 bg-primary rounded-xl font-bold text-[14px] text-light-gray-3"
        >
          Ver todos os produtos
        </Link>
      </main>
    );
  }

  const recommended = products.filter((item) => item.id !== product.id);

  return (
    <main className="flex flex-col items-center pt-7.5 pb-30 xl:pt-5 xl:pb-31.75">
      <nav
        aria-label="Navegação estrutural"
        className="px-5 mb-5 text-[12px] font-medium leading-4.5 tracking-[0.5px] text-dark-gray-2 xl:self-start xl:pl-25 xl:mb-10 xl:text-[14px] xl:leading-5.5 xl:tracking-[0.25px]"
      >
        <Link
          to="/"
          className="font-bold leading-6 tracking-[0.75px] hover:underline"
        >
          Home
        </Link>
        {" / "}
        <Link to="/produtos" className="hover:underline">
          Produtos
        </Link>
        {" / "}
        <span>{product.category}</span>
        {" / "}
        <span>{product.brand}</span>
        {" / "}
        <span>{product.name}</span>
      </nav>

      <div className="flex flex-col gap-7.5 px-5 mb-20 xl:flex-row xl:gap-10 xl:px-25">
        <div className="w-full xl:w-175 xl:shrink-0">
          <Gallery
            key={product.id}
            images={productGallery}
            showThumbs
            width={700}
            height={570}
            radius="4px"
          />
        </div>
        <div className="flex-1">
          <BuyBox
            name={product.name}
            kind={product.kind}
            brand={product.brand}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <div>
              <h2 className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-light-gray mb-2.5 xl:mt-7.5">
                Tamanho
              </h2>
              <ProductOptions
                options={product.sizes}
                shape="square"
                radius="4px"
                type="text"
              />
            </div>
            <div className="mt-2.5">
              <h2 className="font-bold text-[14px] leading-5.5 text-light-gray mb-2.5">
                Cor
              </h2>
              <ProductOptions
                options={product.colors}
                shape="circle"
                type="color"
              />
            </div>
          </BuyBox>
        </div>
      </div>

      <Section
        title="Produtos Relacionados"
        titleAlign="left"
        link={link}
      >
        <ProductListing products={recommended} limit={4} />
      </Section>
    </main>
  );
};

export default ProductViewPage;
