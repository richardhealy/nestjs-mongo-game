import useSWR from 'swr';
import { serialize } from '../../utils/serialize';
import { Player } from '../../types/Player';

type Options = {
  operator?: string;
  operatorGameType?: string;
  operatorName?: string;
};

export const useGetPlayers = (options: Options) => {
  const { data, isLoading, error, mutate } = useSWR<Player[]>(
    `/players?${serialize(options)}`,
  );

  return {
    players: data,
    isLoading,
    error,
    mutate,
  };
};
