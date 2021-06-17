import { createContext, useState } from "react";
import products from "../data.js";
export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
   const [product, setProduct] = useState(products);
   const [cartItem, setCartItem] = useState([]);
   console.log(cartItem);
   const addToCart = (product) => {
      console.log(product);
      const check = cartItem.find((item) => item._id === product._id);
      if (check) {
         setCartItem(
            cartItem.map((item) =>
               item._id === product._id ? { ...check, qty: check.qty + 1 } : item
            )
         );
      } else {
         setCartItem([...cartItem, { ...product, qty: 1 }]);
      }
   };
   const removeCart = (product) => {
      const check = cartItem.find((item) => item._id === product._id);
      if (check.qty === 1) {
         setCartItem(cartItem.filter((item) => item._id !== product._id));
      } else {
         setCartItem(
            cartItem.map((item) =>
               item._id === product._id ? { ...check, qty: check.qty - 1 } : item
            )
         );
      }
   };
   const contextData = { product, setProduct, addToCart, cartItem, removeCart };
   return <ProductContext.Provider value={contextData}>{children}</ProductContext.Provider>;
};
export default ProductContextProvider;
