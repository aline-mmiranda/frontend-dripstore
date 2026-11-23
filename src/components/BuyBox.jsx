import { Star } from "lucide-react";
import formatPrice from "../utils/formatPrice";
import Icons from "./Icons";

const BuyBox = ({
  name,
  kind,
  brand,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <section className="flex flex-col gap-2.5 text-left">
      <h1 className="font-bold text-[24px] leading-8 tracking-[1px] text-dark-gray xl:text-[32px] xl:leading-9">
        {name}
      </h1>
      {reference && (
        <span className="font-medium text-[12px] leading-4.5 tracking-[0.5px] text-dark-gray-3">
          {kind} | {brand} | REF: {reference}
        </span>
      )}
      <div className="flex items-center gap-2.5">
        {stars !== undefined && (
          <span className="flex items-center gap-2 bg-warning text-white font-black text-[14px] leading-6 tracking-[0.25px] px-2.5 rounded-sm">
            {stars}
            <Icons icon={Star} size={12} color="white" fill="white" />
          </span>
        )}
        {rating !== undefined && (
          <span className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-light-gray">
            ({rating} avaliações)
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-2.5 mt-5">
        {priceDiscount ? (
          <>
            <span className="font-bold text-[32px] leading-9 tracking-[1px] text-dark-gray-2">
              {formatPrice(priceDiscount)}
            </span>
            <span className="text-[16px] leading-7 tracking-[0.75px] text-light-gray-2 line-through">
              {formatPrice(price)}
            </span>
          </>
        ) : (
          <span className="font-bold text-[32px] leading-9 tracking-[1px] text-dark-gray-2">
            {formatPrice(price)}
          </span>
        )}
      </div>
      {description && (
        <div className="mt-5">
          <h2 className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-light-gray mb-1.25">
            Descrição do produto
          </h2>
          <p className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-dark-gray-2">
            {description}
          </p>
        </div>
      )}
      {children}
      <button
        type="button"
        className="mt-12 w-full max-w-83.75 h-12 rounded-lg bg-warning text-light-gray-3 font-bold text-[16px] leading-6 tracking-[0.75px] cursor-pointer hover:brightness-95"
      >
        COMPRAR
      </button>
    </section>
  );
};

export default BuyBox;
