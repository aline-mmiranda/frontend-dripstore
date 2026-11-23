const formatPrice = (value) =>
  value.toLocaleString("en-US", { style: "currency", currency: "USD" });

export default formatPrice;
