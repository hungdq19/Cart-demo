import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
import Section from "./Component/Section";
import ProductContextProvider from "./Context/productContex";

function App() {
   return (
      <div className="App">
         <ProductContextProvider>
            <Router>
               <Header />
               <Switch>
                  <Route path="/" component={Section} />
                  <Route exact path="/product" component={Section} />
               </Switch>
            </Router>
         </ProductContextProvider>
      </div>
   );
}

export default App;
