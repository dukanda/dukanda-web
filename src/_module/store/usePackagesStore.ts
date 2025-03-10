import { create } from 'zustand';

interface Package {
  id: number;
  name: string;
  price: number;
}

interface PackagesState {
  counts: Record<number, number>;  // Quantidade para cada pacote (indexado pelo ID do pacote)
  totals: Record<number, number>;  // Totais para cada pacote
  overallTotal: number;            // Total geral dos pacotes
  setCount: (id: number, count: number, price: number) => void;
  increment: (id: number, price: number) => void;
  decrement: (id: number, price: number) => void;
  reset: () => void;               // Resetar todos os estados
}

const usePackagesStore = create<PackagesState>((set) => ({
  counts: {},
  totals: {},
  overallTotal: 0,

  setCount: (id, count, price) => set((state) => {
    const newTotals = { ...state.totals, [id]: count * price };
    const newOverallTotal = Object.values(newTotals).reduce((acc, total) => acc + total, 0);
    return {
      counts: { ...state.counts, [id]: count },
      totals: newTotals,
      overallTotal: newOverallTotal,
    };
  }),

  increment: (id, price) => set((state) => {
    const newCount = (state.counts[id] || 0) + 1;
    const newTotals = { ...state.totals, [id]: newCount * price };
    const newOverallTotal = Object.values(newTotals).reduce((acc, total) => acc + total, 0);
    return {
      counts: { ...state.counts, [id]: newCount },
      totals: newTotals,
      overallTotal: newOverallTotal,
    };
  }),

  decrement: (id, price) => set((state) => {
    const currentCount = state.counts[id] || 0;
    if (currentCount > 0) {
      const newCount = currentCount - 1;
      const newTotals = { ...state.totals, [id]: newCount * price };
      const newOverallTotal = Object.values(newTotals).reduce((acc, total) => acc + total, 0);
      return {
        counts: { ...state.counts, [id]: newCount },
        totals: newTotals,
        overallTotal: newOverallTotal,
      };
    }
    return state;
  }),

  reset: () => ({
    counts: {},
    totals: {},
    overallTotal: 0,
  }),
}));

export default usePackagesStore;
