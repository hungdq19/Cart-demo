import React, { useContext, useState, useEffect } from "react";
import Colors from "../Color/index";
import PropTypes from "prop-types";
import { useRouteMatch, Link } from "react-router-dom";
import { ProductContext } from "../../../Context/productContex";
import "./style.css";
DetailProduct.propTypes = {};

function DetailProduct(props) {
   const { product, addToCart } = useContext(ProductContext);
   const { params } = useRouteMatch();
   const findProduct = product.find((item) => item._id === params.id);
  

   return (
      <>
         <div className="details" key={findProduct._id}>
            <img src={findProduct.src} alt="" />
            <div className="box">
               <div className="row">
                  <h2>{findProduct.title}</h2>
                  <span>${findProduct.price}</span>
               </div>
               <Colors colors={findProduct.colors} />
               <p>{findProduct.description}</p>
               <p>{findProduct.content}</p>
               <Link to="/cart" className="cart" onClick={() => addToCart(findProduct)}>
                  Add to cart
               </Link>
            </div>
         </div>
      </>
   );
}

export default DetailProduct;
