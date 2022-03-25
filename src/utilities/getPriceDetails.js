function getPriceDetails(myCart) {
    return myCart.reduce(
      ({ newPrice, discount }, item) => {
        newPrice += item.newPrice * item.qty;
        discount += (item.originalPrice - item.newPrice) * item.qty;
        return { newPrice, discount };
      },
      {
        newPrice: 0,
        discount: 0,
        coupon: 0,
        total: 0,
      }
    );
  }
  
  export { getPriceDetails };
