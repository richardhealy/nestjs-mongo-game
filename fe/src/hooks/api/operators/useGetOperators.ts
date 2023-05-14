import useSWR from 'swr';
import { Operator } from '../../../types/Operator';

export const useGetOperators = () => {
  const { data, isLoading, error, mutate } = useSWR<Operator[]>(`/operator`);

  return {
    operators: data,
    isLoading,
    error,
    mutate,
  };
};
