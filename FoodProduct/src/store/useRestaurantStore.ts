import { create } from "zustand";
import type { Restaurant } from "../types";
import restaurantsData from "../data/restaurants.json";

type RestaurantStore = {
  restaurants: Restaurant[];
  initialized: boolean;

  selectedRestaurantId: number | null;

  init: () => void;
  setSelectedRestaurantId: (id: number) => void;
  getRestaurantById: (id: number) => Restaurant | undefined;
};

export const useRestaurantStore = create<RestaurantStore>((set, get) => ({
  restaurants: [],
  initialized: false,
  selectedRestaurantId: null,

  // ✅ RAW load (NO SORT) 
  init: () => {
    if (get().initialized) return;

    set({
      // JSON order = ID order (1,2,3,4...)
      restaurants: restaurantsData as Restaurant[],
      initialized: true,
    });
  },

  setSelectedRestaurantId: (id) =>
    set({ selectedRestaurantId: id }),

  getRestaurantById: (id) =>
    get().restaurants.find((r) => r.id === id),
}));
