import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Gallery = ({
  className,
  width,
  height,
  radius = "4px",
  showThumbs = false,
  images = [],
}) => {
  const [activeImage, setActiveImage] = useState(0);

  if (images.length === 0) return null;

  const isFirst = activeImage === 0;
  const isLast = activeImage === images.length - 1;

  function handlePrevious() {
    if (!isFirst) setActiveImage(activeImage - 1);
  }

  function handleNext() {
    if (!isLast) setActiveImage(activeImage + 1);
  }

  const arrowButtonClass =
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-white rounded-full w-3.5 h-3.5 lg:w-5.5 lg:h-5.5";

  return (
    <section
      className={`w-full mx-auto ${className || ""}`}
      style={width ? { maxWidth: `${width}px` } : undefined}
    >
      <div
        className="relative w-full overflow-hidden bg-dark-gray-3"
        style={{
          aspectRatio: width && height ? `${width} / ${height}` : undefined,
          borderRadius: radius,
        }}
      >
        <button
          type="button"
          aria-label="Imagem anterior"
          disabled={isFirst}
          onClick={handlePrevious}
          className={`${arrowButtonClass} left-4 ${isFirst ? "opacity-30" : "cursor-pointer"}`}
        >
          <ChevronLeft
            color="var(--color-dark-gray-2)"
            strokeWidth={1.5}
            className="w-full h-full"
          />
        </button>
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={image.id ?? index}
              src={image.src}
              alt={`Imagem ${index + 1} de ${images.length}`}
              className="w-full h-full shrink-0 object-cover object-center"
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próxima imagem"
          disabled={isLast}
          onClick={handleNext}
          className={`${arrowButtonClass} right-4 ${isLast ? "opacity-30" : "cursor-pointer"}`}
        >
          <ChevronRight
            color="var(--color-dark-gray-2)"
            strokeWidth={1.5}
            className="w-full h-full"
          />
        </button>
      </div>
      {showThumbs && (
        <div className="flex justify-center items-center gap-2.25 mt-2.5 lg:gap-7 lg:mt-5 overflow-x-auto">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.id ?? index}
              onClick={() => setActiveImage(index)}
              aria-pressed={activeImage === index}
              aria-label={`Ver imagem ${index + 1}`}
              className="w-15 h-14.5 lg:w-29.25 lg:h-23.75 shrink-0 cursor-pointer"
            >
              <img
                src={image.src}
                alt=""
                className={`w-full h-full object-cover object-center box-border ${activeImage === index ? "border-2 border-primary" : ""}`}
                style={{ borderRadius: radius }}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
