import { create } from 'zustand';
import type { ShopMenu } from '../types';
import shopDataRaw from '../data/shop.json'; // Raw import

// TypeScript ko batayein ke yeh data ShopMenu ka array hi hai
const shopData = shopDataRaw as unknown as ShopMenu[];

interface ShopMenuStore {
  shops: ShopMenu[];
  init: () => void;
}
 
export const useShopStoreMenu = create<ShopMenuStore>((set) => ({
  shops: shopData as ShopMenu[], // Khali [] ki jagah direct data rakhein
  init: () => set({ shops: shopData as ShopMenu[] }),
}));