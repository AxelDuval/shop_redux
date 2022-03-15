import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FloatinCart from "./Components/FloatingCart/FloatingCart";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShopppingCart/ShoppingCart";
import Products from "./Pages/Products/Products";
import ProductShowcase from "./Pages/ProductShowcase/ProductShowcase";

function App() {
  return (
    <Router>
      <Navbar />
      <FloatinCart />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/products"} component={Products} />
        <Route exact path={"/products/:id"} component={ProductShowcase} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/shoppingCart"} component={ShoppingCart} />
      </Switch>
    </Router>
  )
}

export default App;
