// src/store/ShopStore.ts
import { create } from "zustand";
import shopJSON from "../data/shop.json";
import type { Shop } from "../types";

type ShopStore = {
  shops: Shop[];
  initialized: boolean;

  init: () => void;
};

export const useShopStore = create<ShopStore>((set, get) => ({
  shops: [],
  initialized: false,

  // ✅ JSON → Zustand (ONLY ONCE)
  init: () => {
    if (get().initialized) return;

    set({
      shops: shopJSON as Shop[],
      initialized: true,
    });
  },
}));
