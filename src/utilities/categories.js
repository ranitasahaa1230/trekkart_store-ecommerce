const getCategoriesProducts = (products, category) => {
        if (Object.values(category).every((v) => !v)) {
          return products;
        }
        return products.filter((product) => {
          return category[product.catagoryName];
        });
  };
  export { getCategoriesProducts };
  
// export const getCategoriesProducts = (state, productList) => {
//     return [...productList].filter((item) =>
//       state.Jackets || state.Shoes || state.Suitcases || state.Backpacks
//         ? state[item.catagoryName]
//         : true
//     );
//   };