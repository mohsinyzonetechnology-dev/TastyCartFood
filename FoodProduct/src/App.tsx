import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PickUp from "./pages/PickUp";
import PandaMart from "./pages/PandaMart";
import PandaShop from "./pages/PandaShop";
import RestaurantMenu from "./pages/Details/RestaurantsMenu";
// import ShopList from "./pages/Details/ShopList";
import CateringCard from "./pages/Caterers"; 
import AuthPage from "./Auth/AuthForm";
import Footer from "./pages/Footer";
/////
import { CartProvider } from "./context/CartContext";


// Temporary Placeholder
const Placeholder = ({ name }: { name: string }) => (
  <div style={{ padding: "20px" }}>
    <h1>{name} Page Coming Soon</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/*  Global Loader (route change par spinner) */}
      {/* <GlobalLoader /> */}

      {/* 🔝 Navbar */}
      <CartProvider>
      <Navbar />

      {/* 🧭 Routes */}
      <Routes> 
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pickup" element={<PickUp />} />

        {/* Restaurant Details */}
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />

        {/* Other Pages */}
        <Route path="/pandamart" element={<PandaMart />} />
        <Route path="/shops" element={<PandaShop />} />
        <Route path="/caterers" element={<CateringCard/>} />
        <Route path="/cart" element={<Placeholder name="Cart" />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      
      <Footer/>
       
       </CartProvider>
    </BrowserRouter>
  );
}

export default App;
