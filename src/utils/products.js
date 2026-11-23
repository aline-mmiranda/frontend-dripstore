const imagesHome = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/home-slide-${i + 1}.jpeg`,
}));

const productGallery = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/product-image-${i + 1}.jpeg`,
}));

const brands = ["Adidas", "Nike", "Puma", "K-swiss", "Converse"];
const kinds = ["Esporte", "Casual", "Utilitário", "Corrida"];
const genders = ["Feminino", "Masculino", "Unissex"];

const prices = [
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
  [200, 149.9],
  [49.9],
];

const products = prices.map(([price, priceDiscount], index) => {
  const id = index + 1;
  const imageNumber = (index % 5) + 1;

  return {
    id,
    category: "Tênis",
    name: `Nome do produto ${imageNumber}`,
    image: `/product-image-${imageNumber}.jpeg`,
    alt: "Imagem do produto",
    brand: brands[index % brands.length],
    kind: kinds[index % kinds.length],
    gender: genders[index % genders.length],
    condition: index % 4 === 3 ? "usado" : "novo",
    reference: `REF-${String(id).padStart(5, "0")}`,
    stars: 4.7,
    rating: 90 + id,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#E2E3FF", "#FFE8BC", "#FFC0BC", "#DEC699", "#E8DFCF"],
    price,
    priceDiscount,
  };
});

export { imagesHome, productGallery, products };
