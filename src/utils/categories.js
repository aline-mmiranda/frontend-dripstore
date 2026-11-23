import tshirt from "../assets/tshirt.svg";
import pants from "../assets/pants.svg";
import cap from "../assets/cap.svg";
import headphones from "../assets/headphones.svg";
import sneakers from "../assets/sneakers.svg";

const categories = [
  {
    id: 1,
    text: "Camisetas",
    src: tshirt,
    link: "/produtos?filter=Camisetas",
  },
  {
    id: 2,
    text: "Calças",
    src: pants,
    link: "/produtos?filter=Calças",
  },
  {
    id: 3,
    text: "Bonés",
    src: cap,
    link: "/produtos?filter=Bonés",
  },
  {
    id: 4,
    text: "Headphones",
    src: headphones,
    link: "/produtos?filter=Headphones",
  },
  {
    id: 5,
    text: "Tênis",
    src: sneakers,
    link: "/produtos?filter=Tênis",
  },
];

export default categories;
