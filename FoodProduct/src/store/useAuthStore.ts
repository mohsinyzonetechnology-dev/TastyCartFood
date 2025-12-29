import { create } from "zustand";
import  { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../DataBase/fireBase";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    set({ user });
  });

  return {
    user: null,
    setUser: (user) => set({ user }),
  };
});
