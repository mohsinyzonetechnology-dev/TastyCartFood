import { create } from "zustand";
import shopData from "../data/shopMenu.json";
import type { ShopMenu } from "../types";

interface ShopMenuState {
  shops: ShopMenu[];
  init: () => void;
}

export const useShopStoreMenu = create<ShopMenuState>((set) => ({
  shops: [],
  init: () => set({ shops: shopData as ShopMenu[] }),
}));
