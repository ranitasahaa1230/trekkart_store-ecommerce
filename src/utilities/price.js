const getPricedProducts = (filteredProduct, priceRange) => {
  return filteredProduct.filter(
    ({ newPrice }) => Number(newPrice) <= Number(priceRange)
  );
};
export { getPricedProducts };
