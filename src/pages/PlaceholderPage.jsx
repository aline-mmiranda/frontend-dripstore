import { Link } from "react-router";

const PlaceholderPage = () => {
  return (
    <main className="flex flex-col items-center gap-5 px-5 py-30 text-center">
      <h1 className="font-bold text-[24px] text-dark-gray-2">
        Página em construção
      </h1>
      <p className="text-dark-gray-3">
        Esta página ainda não foi criada.
      </p>
      <Link
        to="/"
        className="flex justify-center items-center w-50 h-10 bg-primary rounded-lg font-bold text-[14px] text-light-gray-3"
      >
        Voltar para a Home
      </Link>
    </main>
  );
};

export default PlaceholderPage;
