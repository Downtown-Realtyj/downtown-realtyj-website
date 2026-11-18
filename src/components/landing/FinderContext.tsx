"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { BUDGET_OPTIONS, KIND_OPTIONS, LOCALITY_OPTIONS } from "../../data/landing";

export interface Filters {
  kind: (typeof KIND_OPTIONS)[number]["value"];
  locality: (typeof LOCALITY_OPTIONS)[number]["value"];
  budget: (typeof BUDGET_OPTIONS)[number]["value"];
}

interface FinderState {
  filters: Filters;
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  reset: () => void;
}

const DEFAULT_FILTERS: Filters = { kind: "all", locality: "all", budget: "all" };

const FinderContext = createContext<FinderState | null>(null);

/** Shares the finder's filter values between the finder panel and the featured grid. */
export function FinderProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const value = useMemo<FinderState>(
    () => ({
      filters,
      setFilter: (key, val) => setFilters((prev) => ({ ...prev, [key]: val })),
      reset: () => setFilters(DEFAULT_FILTERS),
    }),
    [filters],
  );

  return <FinderContext.Provider value={value}>{children}</FinderContext.Provider>;
}

export function useFinder() {
  const ctx = useContext(FinderContext);
  if (!ctx) throw new Error("useFinder must be used inside <FinderProvider>");
  return ctx;
}
