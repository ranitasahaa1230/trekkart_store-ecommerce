const getSearchedProducts = (searchedProduct, searchQuery) => {
  return searchedProduct.filter((prod) =>
    prod.name.toLowerCase().includes(searchQuery)
  );
};
export { getSearchedProducts };
