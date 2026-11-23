import { Link } from "react-router";

const Section = ({
  title,
  titleAlign = "left",
  titleAlignResp,
  link,
  action,
  children,
}) => {
  return (
    <>
      <section className="">
        <div
          className={`relative mb-7.5 xl:mb-10 ${
            action
              ? "flex flex-col-reverse gap-5 xl:flex-row xl:items-center xl:justify-between"
              : ""
          }`}
        >
          <h2
            className={`font-bold text-[16px] leading-6 tracking-[0.75px] text-dark-gray-2 lg:text-[24px] lg:leading-9.5 ${titleAlign === "center" ? "text-center" : "text-left"} ${titleAlignResp === "center" ? "lg:text-center" : titleAlignResp === "left" ? "lg:text-left" : ""}`}
          >
            {title}
          </h2>
          {action}
          {link && (
            <Link
              to={link.href}
              className="absolute top-0 right-0 font-medium text-[14px] leading-5.5 tracking-[0.25px] text-primary lg:text-[18px] lg:leading-8.5 lg:tracking-[0.75px]"
            >
              {link.text}
            </Link>
          )}
        </div>
        {children}
      </section>
    </>
  );
};

export default Section;
