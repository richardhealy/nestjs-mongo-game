import useSWR from 'swr';
import { Slate } from '../../../types/Slate';

export const useGetSlateNames = (operator?: string, gameType?: string) => {
  const { data, isLoading, error, mutate } = useSWR<Slate[]>(
    operator && gameType ? `/operator/${operator}/${gameType}` : undefined,
  );

  return {
    slateNames: data,
    isLoading,
    error,
    mutate,
  };
};
