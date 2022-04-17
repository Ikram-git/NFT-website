import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <Router>
      <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/products">
          <ProductList />
      </Route>
      <Route exact path="/product/:id">
          <Product />
      </Route>
      <Route exact path="/login">
        { user ? <Redirect to="/" /> : <Login /> }
      </Route>
      <Route exact path="/register">
      { user ? <Redirect to="/" /> : <Register /> }
      </Route>
    </Router>
  );
};

export default App;