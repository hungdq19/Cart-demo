import React, { useState, useContext } from "react";
import Menu from "../../svg/bars-solid.svg";
import Cart from "../../svg/cart-plus-solid.svg";
import Close from "../../svg/close.svg";
import { Link, useHistory } from "react-router-dom";

import { ProductContext } from "../../Context/productContex";
import "./style.css";
function Header(props) {
   const [toggle, setToggle] = useState(false);
   const handleToggle = () => {
      setToggle((x) => !x);
   };
   const { cartItem } = useContext(ProductContext);
   const history = useHistory();
   const gotoCart = () => {
      history.push("/cart");
   };
   return (
      <header>
         <div className="menu" onClick={handleToggle}>
            <img src={Menu} alt="" width="20px" />
         </div>
         <div className="logo">
            <h1>NIKE</h1>
         </div>

         <nav>
            <ul className={toggle ? "toggle" : ""}>
               <li>
                  <Link to="/product" className="link">
                     HOME
                  </Link>
               </li>
               <li>
                  <Link to="/product" className="link">
                     PRODUCT
                  </Link>
               </li>
               <li>CONTACT</li>
               <li>ABOUT</li>
               <li>LOGIN/ REGISTER</li>
               <li className="close" onClick={handleToggle}>
                  <img src={Close} alt="" width="20" />
               </li>
            </ul>
            <div className="nav-cart ">
               {cartItem.length ? <span>{cartItem.length}</span> : ""}
               <img src={Cart} alt="" width="30" onClick={gotoCart} />
            </div>
         </nav>
      </header>
   );
}

export default Header;
