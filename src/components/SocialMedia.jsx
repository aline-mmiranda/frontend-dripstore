import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const networks = [
  {
    name: "Facebook",
    icon: facebook,
    href: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: instagram,
    href: "https://www.instagram.com",
  },
  {
    name: "Twitter",
    icon: twitter,
    href: "https://www.twitter.com",
  },
];

const SocialMedia = ({ className }) => {
  return (
    <section className={`flex items-center gap-8.75 ${className}`}>
      {networks.map((network) => (
        <a
          key={network.name}
          href={network.href}
          target="_blank"
          rel="noreferrer"
        >
          <img src={network.icon} alt={network.name} />
        </a>
      ))}
    </section>
  );
};

export default SocialMedia;
