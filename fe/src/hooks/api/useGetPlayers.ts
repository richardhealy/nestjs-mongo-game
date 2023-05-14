import useSWR from 'swr';
import { serialize } from '../../utils/serialize';
import { Player } from '../../types/Player';

type Options = {
  operator?: string;
  operatorGameType?: string;
  operatorName?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortDir?: string;
};

type PlayersResponse = {
  metaData: [
    {
      total: number;
    },
  ];
  players: Player[];
};

export const useGetPlayers = (options: Options) => {
  const { data, isLoading, error, mutate } = useSWR<PlayersResponse>(
    `/players?${serialize(options)}`,
  );

  return {
    players: data?.players ?? undefined,
    metadata: data?.metaData?.[0] ?? undefined,
    isLoading,
    error,
    mutate,
  };
};
