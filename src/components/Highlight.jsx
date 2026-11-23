import { Link } from "react-router";

const Highlight = ({ className }) => {
  return (
    <section
      className={`flex flex-col items-center text-center xl:items-start xl:w-127.5 xl:text-left ${className || ""}`}
    >
      <h2 className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-primary mb-2.5 lg:text-[16px] xl:leading-6 xl:text-warning lg:mb-5">
        Melhores ofertas personalizadas
      </h2>
      <h1 className="font-extrabold text-[40px] leading-12.5 tracking-[1px] text-dark-gray mb-5 xl:text-[64px] xl:leading-16.5">
        Queima de estoque 🔥
      </h1>
      <p className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-dark-gray-2 mb-10 xl:font-normal xl:text-[18px] xl:leading-8.5 xl:tracking-[0.75px]">
        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris
        eiusmod irure consectetur.
      </p>
      <Link
        to="/produtos"
        className="flex justify-center items-center font-bold text-[16px] leading-6 tracking-[0.75px] text-light-gray-3 bg-primary rounded-lg w-full h-12 md:w-[50%] xl:w-55"
      >
        Ver Ofertas
      </Link>
    </section>
  );
};

export default Highlight;
