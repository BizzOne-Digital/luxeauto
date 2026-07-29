"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import type { Product } from "@/lib/constants";

type QuickViewContextValue = {
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
};

const QuickViewContext = createContext<QuickViewContextValue | null>(null);

export function useQuickView() {
  const ctx = useContext(QuickViewContext);
  if (!ctx) {
    throw new Error("useQuickView must be used within a QuickViewProvider");
  }
  return ctx;
}

export function QuickViewProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);

  const openQuickView = useCallback((p: Product) => setProduct(p), []);
  const closeQuickView = useCallback(() => setProduct(null), []);

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  return (
    <QuickViewContext.Provider value={{ openQuickView, closeQuickView }}>
      {children}
      <QuickViewModal product={product} onClose={closeQuickView} />
    </QuickViewContext.Provider>
  );
}
