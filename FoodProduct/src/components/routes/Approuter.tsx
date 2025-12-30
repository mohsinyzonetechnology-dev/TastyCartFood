import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import PickUp from "../../pages/PickUp";
import PandaMart from "../../pages/PandaMart";
import PandaShop from "../../pages/PandaShop";
import CateringCard from "../../pages/Caterers";
import AuthPage from "../../Auth/AuthForm";
import type { MenuItem } from "../../types";
import CartSidebar from "../../pages/Carts/cartSidbar";
import { useCartStore } from "../../store/useCartStor";

 
function AppRouter() {

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
      quantity: 1, 
    });
  };


  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pickup" element={<PickUp />} />
        <Route path="/pandamart" element={<PandaMart />} />
        <Route path="/shops" element={<PandaShop />} />
        <Route path="/caterers" element={<CateringCard />} />
        {/* Baki routes ko placeholder de diya hai takay navigation crash na ho */}


        {/* Cart aur Login ke routes bhi yahan add honge */}
        <Route path="/cart" element={
          <CartSidebar
            cart={cart}
            total={total}
            onAdd={(id) => updateQty(id, 1)}
            onRemove={(id) => updateQty(id, -1)}
            clearCart={clearCart}
          />
        } />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;