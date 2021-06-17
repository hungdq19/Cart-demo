import React, { useContext } from "react";
import { ProductContext } from "../../../Context/productContex";
import Colors from "../Color";
import { Link } from "react-router-dom";
import "./style.css";

function CartResult(props) {
   const { cartItem, addToCart, removeCart } = useContext(ProductContext);
   const totalCart = cartItem.reduce((a, b) => a + b.price * b.qty, 0);
   return (
      <>
         {cartItem.length === 0 && <div>Không có sản phẩm nào trong giỏ hàng</div>}
         {cartItem.length &&
            cartItem.map((item) => (
               <div className="details cart" key={item._id}>
                  <img src={item.src} alt="" />
                  <div className="box">
                     <div className="row">
                        <h2>{item.title}</h2>
                        <span>${item.price * item.qty}</span>
                     </div>
                     <Colors colors={item.colors} />
                     <p>{item.description}</p>
                     <p>{item.content}</p>
                     <div className="amount">
                        <button className="count" onClick={() => removeCart(item)}>
                           {" "}
                           -{" "}
                        </button>
                        <span>{item.qty}</span>
                        <button className="count" onClick={() => addToCart(item)}>
                           {" "}
                           +{" "}
                        </button>
                     </div>
                  </div>
                  <div className="delete" onClick={{}}>
                     X
                  </div>
               </div>
            ))}
         <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: {totalCart} </h3>
         </div>
      </>
   );
}

export default CartResult;
