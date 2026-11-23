import { Link } from "react-router";
import Gallery from "../components/Gallery";
import Highlight from "../components/Highlight";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import SpecialOffer from "../components/SpecialOffer";
import categories from "../utils/categories";
import link from "../utils/link";
import { imagesHome, products } from "../utils/products";

const HomePage = () => {
  return (
    <main className="bg-background xl:relative">
      <Gallery images={imagesHome} width={1440} height={681} radius="0px" />
      <Highlight className="px-5 mt-2.5 mb-10 xl:p-0 xl:m-0 xl:absolute xl:top-31 xl:left-25" />
      <div className="flex flex-col gap-20 mb-10 xl:gap-25 xl:mt-9.5 px-5 xl:px-25">
        <Section
          title="Coleções em destaque"
          titleAlign="center"
          titleAlignResp="left"
        >
          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-3">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={`/collection-${n}.png`}
                alt={`Destaque ${n}`}
                className="w-full h-auto rounded-sm"
              />
            ))}
          </div>
        </Section>
        <Section title="Categorias" titleAlign="center">
          <div className="flex gap-4.75 flex-wrap justify-center xl:gap-12">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="flex flex-col items-center gap-2.75 xl:gap-3"
              >
                <div className="bg-white rounded-full w-23 h-23 flex justify-center items-center shadow-[0_3.54px_22.12px_0_rgba(0,0,0,0.05)] xl:w-26 xl:h-26">
                  <img
                    src={category.src}
                    alt=""
                    className="w-14.25 h-14.25 xl:w-16 xl:h-16"
                  />
                </div>
                <h3 className="font-bold text-[12px] leading-5.5 tracking-[1px] text-dark-gray-2 xl:text-[14px] xl:tracking-[0.75px]">
                  {category.text}
                </h3>
              </Link>
            ))}
          </div>
        </Section>
        <Section title="Produtos em alta" link={link}>
          <ProductListing products={products} limit={8} />
        </Section>
      </div>
      <SpecialOffer className="pt-10 pb-12.5 lg:px-13 lg:pt-21.75 lg:pb-26.5" />
    </main>
  );
};

export default HomePage;
