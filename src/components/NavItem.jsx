import { NavLink } from "react-router";

const NavItem = ({ to, children, end = false }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive
          ? "font-bold leading-6 text-primary underline decoration-2 underline-offset-[3px]"
          : "text-dark-gray-2"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
