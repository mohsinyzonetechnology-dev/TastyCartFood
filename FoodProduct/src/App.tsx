import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PickUp from "./pages/PickUp";
import RestaurantMenu from "./pages/Details/RestaurantsMenu";
import Footer from "./pages/Footer";
import AuthPage from "./Auth/AuthForm";
import PandaMart from "./pages/PandaMart";
import PandaShop from "./pages/PandaShop";
// import PandaList from "./pages/Details/ShopList"
import CateringPage from "./pages/Caterers";
import ShopMenu from "./pages/Details/ShopList";


import type { MenuItem } from "./types";
import CartSidebar from "./pages/Carts/cartSidbar";
import { useCartStore } from "./store/useCartStor";

function App() {

  // Zustand cart store
  const cart = useCartStore((state) => state.cart);
  const addItem = useCartStore((state) => state.addItem);
  const updateQty = useCartStore((state) => state.updateQty);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

   (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1, // always start with 1
    });
  };

  return (
    <BrowserRouter>
      {/* Ab Provider ki zaroorat nahi, Zustand globally kaam karta hai */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pickup" element={<PickUp />} />

        {/* Yahan ghalti thi, inko sahi karein 👇 */}
        <Route path="/pandamart" element={<PandaMart />} />
        <Route path="/shops" element={<PandaShop />} />
        <Route path="/caterers" element={<CateringPage />} />

        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        <Route path="/shop/:id" element={<ShopMenu />} />

        <Route path="/login" element={<AuthPage />} />
        <Route path="/cart" element={
          <CartSidebar
            cart={cart}
            total={total}
            onAdd={(id) => updateQty(id, 1)}
            onRemove={(id) => updateQty(id, -1)}
            clearCart={clearCart}
          />
        } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;