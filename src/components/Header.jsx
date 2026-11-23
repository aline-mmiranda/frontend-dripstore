import { Menu, Search, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Logo from "./Logo";
import SearchField from "./SearchField";
import Icons from "./Icons";
import SideMenu from "./SideMenu";
import NavItem from "./NavItem";

const navLinks = [
  { to: "/", text: "Home", end: true },
  { to: "/produtos", text: "Produtos" },
  { to: "/categorias", text: "Categorias" },
  { to: "/meus-pedidos", text: "Meus Pedidos" },
];

const Header = () => {
  const [activePanel, setActivePanel] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setActivePanel(null);
  }, [pathname]);

  function handleSearchClick() {
    setActivePanel(activePanel === "search" ? null : "search");
  }

  function handleMenuClick() {
    setActivePanel(activePanel === "menu" ? null : "menu");
  }

  return (
    <>
      <header className="bg-white xl:px-25 xl:py-8.75 xl:flex xl:flex-col xl:gap-10">
        <div className="relative flex justify-between items-center p-5 xl:p-0">
          <Icons
            className="cursor-pointer xl:hidden"
            icon={Menu}
            size={24}
            color="var(--color-dark-gray)"
            strokeWidth={2}
            onClick={handleMenuClick}
          />
          <Link to="/" aria-label="Ir para a Home" className="absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0">
            <Logo
              className="w-34.5 xl:w-63.25 h-auto"
              color="var(--color-primary)"
            />
          </Link>
          <div className="hidden xl:flex flex-1 ml-6.75 mr-12">
            <SearchField />
          </div>
          <div className="hidden xl:flex xl:justify-center xl:items-center xl:gap-7.5 xl:mr-17.5">
            <Link
              to="/cadastro"
              className="text-[16px] leading-7 tracking-[0.75px] underline decoration-solid text-dark-gray-2"
            >
              Cadastre-se
            </Link>
            <Link
              to="/entrar"
              className="w-28.5 h-10 bg-primary rounded-xl font-bold text-[14px] leading-5.5 tracking-[0.75px] text-light-gray-3 flex justify-center items-center"
            >
              Entrar
            </Link>
          </div>
          <div className="flex gap-3.25">
            <Icons
              className="cursor-pointer xl:hidden"
              icon={Search}
              color="var(--color-light-gray-2)"
              size={20}
              onClick={handleSearchClick}
            />
            <Icons icon={ShoppingCart} color="var(--color-primary)" size={20} />
          </div>
        </div>
        <nav className="hidden xl:inline">
          <ul className="xl:flex xl:gap-8 mt-5">
            {navLinks.map((item) => (
              <li
                key={item.to}
                className="text-[16px] leading-7 tracking-[0.75px]"
              >
                <NavItem to={item.to} end={item.end}>
                  {item.text}
                </NavItem>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {activePanel === "search" && (
        <div className="bg-white px-7.5 pb-5 xl:hidden">
          <SearchField onSearch={() => setActivePanel(null)} />
        </div>
      )}
      {activePanel === "menu" && <SideMenu />}
    </>
  );
};

export default Header;
