const getSortedProducts = (productList, sortBy) => {
    if (sortBy === "LOW_TO_HIGH")
      return [...productList].sort((item1, item2) => item1.newPrice - item2.newPrice);
    if (sortBy === "HIGH_TO_LOW")
      return [...productList].sort((item1, item2) => item2.newPrice - item1.newPrice);
  
    return productList;
  };
  export { getSortedProducts };
  