const getRatingProducts = (categoryList, byRating) => {
    return categoryList.filter(({ ratings }) => ratings >= byRating);
  };
  export { getRatingProducts };
  