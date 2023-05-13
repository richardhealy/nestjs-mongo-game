import { ReactNode, createContext, useContext } from 'react';

type FilterValues = {
  operator: string | undefined;
  gameType: string | undefined;
  slateName: string | undefined;
};

type FilterContext = {
  filters: FilterValues;
  setFilters: (filters: FilterValues) => void;
};

const defaultValues = {
  filters: {
    operator: undefined,
    gameType: undefined,
    slateName: undefined,
  },
  setFilters: () => {},
} satisfies FilterContext;

export const FilterContext = createContext<FilterContext>(defaultValues);

export const FilterProvider = ({ children }: { children: ReactNode }) => (
  <FilterContext.Provider value={defaultValues}>
    {children}
  </FilterContext.Provider>
);

export const useFilters = () => {
  const { filters, setFilters } = useContext(FilterContext);
  return { filters, setFilters };
};

export default FilterContext;
