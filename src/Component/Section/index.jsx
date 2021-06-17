import React from "react";
import { Route } from "react-router-dom";
import CartResult from "./CartResult";
import DetailProduct from "./DetailProduct";
import Product from "./Products/Product";

function Section(props) {
   return (
      <section>
         <Route exact path="/" component={Product} />
         <Route exact path="/product" component={Product} />
         <Route exact path="/product/:id" component={DetailProduct} />
         <Route exact path="/cart" component={CartResult} />
      </section>
   );
}

export default Section;
