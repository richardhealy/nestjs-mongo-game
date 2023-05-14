import useSWR from 'swr';
import { GameType } from '../../../types/GameType';

export const useGetGameTypes = (operator?: string) => {
  const { data, isLoading, error, mutate } = useSWR<GameType[]>(
    operator ? `/operator/type/${operator.toLowerCase()}` : undefined,
  );

  return {
    gameTypes: data,
    isLoading,
    error,
    mutate,
  };
};
