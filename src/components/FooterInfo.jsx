import { Link } from "react-router";

const FooterInfo = ({ title, informations }) => {
  return (
    <section>
      <h3 className="font-semibold text-lg leading-[100%] tracking-[0%] mb-2.5 xl:mb-7">
        {title}
      </h3>
      <ul className="text-[16px] leading-7.75 tracking-[0%] xl:leading-9.5">
        {informations.map((info) => (
          <li key={info.text}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterInfo;
