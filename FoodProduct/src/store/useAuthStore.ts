import { create } from "zustand";
import type { User } from "firebase/auth";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => {

  return {
    user: null,
    setUser: (user) => set({ user }),
  };
});
