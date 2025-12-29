import { create } from "zustand";
import type { Product } from "../types";
import martJSON from "../data/mart.json";

type MartStore = {
  products: Product[];
  initialized: boolean;
  init: () => void;
};

export const useMartStore = create<MartStore>((set, get) => ({
  products: [],
  initialized: false,
  init: () => {
    if (get().initialized) return;
    set({ products: martJSON as Product[], initialized: true });
  },
}));
