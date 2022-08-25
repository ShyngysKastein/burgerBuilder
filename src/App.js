import { Route, Routes } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<BurgerBuilder />} />
          <Route path="orders" element={<Orders/>}/>
          <Route path="checkout" element={<Checkout />}>
          <Route path="contact-data" element={<ContactData />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
