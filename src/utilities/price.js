const getPricedProducts = (productList, priceRange) => {
  return productList.filter(
    ({ newPrice }) => Number(newPrice) <= Number(priceRange)
  );
};
export { getPricedProducts };
