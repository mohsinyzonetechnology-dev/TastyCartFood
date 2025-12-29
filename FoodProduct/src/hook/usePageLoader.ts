 import { useEffect } from "react";
 import { useUIStore } from "../store/useUIStore";

 export const usePageLoader = () => {
  const { showLoader, hideLoader } = useUIStore();

  useEffect(() => {
    showLoader();
    const timer = setTimeout(hideLoader, 1000);
    return () => clearTimeout(timer);
  }, []);
 };

