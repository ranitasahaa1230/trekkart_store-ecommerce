import React from 'react'
import { useDocumentTitle } from '../../hooks';

export const ProductPage = () => {

    useDocumentTitle("Product Details");


    // useEffect(() => {
    //     (async () => {
    //       try {
    //         setLoader(true);
    //         const {
    //           data: { product },
    //         } = await axios.get(`/api/products/${productId}`);
    
    //         setProduct(product);
    //         setLoader(false);
    //       } catch (error) {
    //         showToast("error", "Could not fetch the product.");
    //       }
    //     })();
    //   }, []);
    
    //   const handleAddToCart = () => {
    //     if (!user) {
    //       navigate("/login");
    //     } else {
    //       if (checkProductInCart(_id, cartProducts)) {
    //         navigate("/cart");
    //       } else {
    //         addToCart(product, cartDispatch, setProductLoader, showToast);
    //       }
    //     }
    //   };
    
    //   const handleWishlistClick = () => {
    //     if (!user) {
    //       navigate("/login");
    //     } else {
    //       if (!checkProductInWishlist(_id, wishlist)) {
    //         addToWishlist(product, cartDispatch, showToast);
    //       } else {
    //         removeFromWishlist(product._id, cartDispatch, showToast);
    //       }
    //     }
    //   };
  return (
    <div>ProductPage</div>
  )
}
