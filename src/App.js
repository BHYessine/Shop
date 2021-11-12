import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import ProductList from "./Components/ProductList/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Order from "./Components/Order/Order";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
