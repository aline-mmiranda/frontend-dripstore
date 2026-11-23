import { Link } from "react-router";
import NavItem from "./NavItem";

const pages = [
  { to: "/", text: "Home", end: true },
  { to: "/produtos", text: "Produtos" },
  { to: "/categorias", text: "Categorias" },
  { to: "/meus-pedidos", text: "Meus Pedidos" },
];

const SideMenu = () => {
  return (
    <section className="w-77 h-81.25 rounded-sm p-7.5 bg-white flex flex-col gap-5 fixed top-15.5 left-0 z-99">
      <nav>
        <span className="font-bold text-[16px] leading-6 tracking-[0.75px] text-dark-gray-2">
          Páginas
        </span>
        <ul className="flex flex-col gap-2.5 mt-5">
          {pages.map((page) => (
            <li key={page.to} className="text-[16px] leading-7 tracking-[0.75px]">
              <NavItem to={page.to} end={page.end}>
                {page.text}
              </NavItem>
            </li>
          ))}
        </ul>
      </nav>

      <hr className="w-62 border border-light-gray-2" />
      <div className="flex justify-center items-center gap-4.25">
        <Link
          to="/entrar"
          className="w-28.5 h-10 bg-primary rounded-lg font-bold text-[14px] leading-5.5 tracking-[0.75px] text-light-gray-3 flex justify-center items-center"
        >
          Entrar
        </Link>
        <Link
          to="/cadastro"
          className="text-[16px] leading-7 tracking-[0.75px] underline decoration-solid text-dark-gray-2"
        >
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default SideMenu;
