import React, { useContext } from "react";
import { ProductContext } from "../../../Context/productContex";
import { Link } from "react-router-dom";
import "./style.css";
import { useHistory } from "react-router-dom";
function Product(props) {
   const history = useHistory();
   const { product, addToCart } = useContext(ProductContext);
   const gotoDetails = (id, product) => {
      history.push(`/product/${id}`);
   };
  

   return (
      <div id="product">
         {product.map((product) => (
            <div className="card" key={product._id}>
               <Link to={`/product/${product._id}`}>
                  <img onClick={() => gotoDetails(product._id, product)} src={product.src} alt="" />
               </Link>
               <div className="content">
                  <h3>
                     <Link to={`/product/${product._id}`}>{product.title}</Link>
                  </h3>
                  <span>${product.price}</span>
                  <p>{product.description}</p>
                  <button onClick={() => addToCart(product)}>Add to cart</button>
               </div>
            </div>
         ))}
      </div>
   );
}

export default Product;
