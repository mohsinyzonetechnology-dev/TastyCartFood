import {create} from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, delta: number) => void;
  clearCart: () => void;
}


export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addItem: (item) => {
    const existing = get().cart.find((i) => i.id === item.id);
    if (existing) {
      set({
        cart: get().cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      });
    } else {
      set({ cart: [...get().cart, item] });
    }
  },

  removeItem: (id) => {
    set({ cart: get().cart.filter((i) => i.id !== id) });
  },

 updateQty: (id: number, amount: number) => 
  set(state => {
    const cart = state.cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    ).filter(item => item.quantity > 0); // ✅ remove item if qty <= 0
    return { cart };
  }),


  clearCart: () => set({ cart: [] }),
}));
