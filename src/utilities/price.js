const getPricedProducts = (pricedProductList, byRating) => {
    return pricedProductList.filter(({ ratings }) => ratings >= byRating);
  };
  export { getPricedProducts };
  