import { ReactNode, createContext, useContext, useState } from 'react';

export type FilterValues = {
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

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterValues>(defaultValues.filters);
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const { filters, setFilters } = useContext(FilterContext);
  return { filters, setFilters };
};

export default FilterContext;
