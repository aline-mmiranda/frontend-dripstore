import { Link } from "react-router";
import formatPrice from "../utils/formatPrice";

const ProductCard = ({ id, image, category, name, price, priceDiscount }) => {
  return (
    <Link to={`/product/${id}`} className="block w-40.75 xl:w-73">
      <img
        src={image}
        alt={name}
        className="w-40.75 h-44.75 object-cover object-center  xl:w-73 xl:h-80.25 "
      />
      <div>
        <h3 className="font-bold text-[12px] leading-6 tracking-[0.75px] text-light-gray mt-2.5 xl:mt-4.5">
          {category}
        </h3>
        <h2 className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-dark-gray-2 xl:font-normal xl:text-[24px] xl:leading-9.5 xl:tracking-[0.75px]">
          {name}
        </h2>
        <div className="flex items-center gap-2">
          <span
            className={`text-[16px] leading-7 tracking-[0.75px] xl:text-[24px] xl:leading-9.5 ${priceDiscount ? "text-light-gray line-through" : "text-dark-gray font-bold"}`}
          >
            {formatPrice(price)}
          </span>
          {priceDiscount && (
            <span className="font-bold text-[16px] leading-6 text-dark-gray xl:text-[24px] xl:leading-9.5 tracking-[0.75px]">
              {formatPrice(priceDiscount)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
