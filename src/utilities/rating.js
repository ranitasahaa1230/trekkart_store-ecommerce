const getRatingProducts = (pricedProductList, byRating) => {
    return pricedProductList.filter(({ ratings }) => ratings >= byRating);
  };
  export { getRatingProducts };
  