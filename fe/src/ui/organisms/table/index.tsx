import { useEffect, useState } from 'react';

import { useGetPlayers } from '../../../hooks/api/useGetPlayers';
import { useFilters } from '../../../providers/FilterContext';
import { usePlayer } from '../../../providers/PlayerContext';
import { THead } from './THead';
import { Pagination } from './Pagination';
import clsx from 'clsx';
import { Spinner } from '../../atoms/Spinner';
import { formatMoney } from '../../../utils/formatMoney';

export const Table = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState('operatorPlayerName');
  const [sortDir, setSortDir] = useState('asc');

  const { filters } = useFilters();
  const { player: selectedPlayer, setPlayer } = usePlayer();

  const { players, metadata, isLoading } = useGetPlayers({
    operator: filters.operator,
    operatorGameType: filters.gameType,
    operatorName: filters.slateName,
    page,
    limit,
    sortBy,
    sortDir,
  });

  const handleSort = (_sortBy: string) => {
    if (_sortBy === sortBy) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(_sortBy);
      setSortDir('asc');
    }
  };

  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    if (!selectedPlayer && Array.isArray(players) && players?.length > 0) {
      setPlayer(players[0]);
    }
  }, [selectedPlayer, players]);

  return (
    <>
      <div className="relative flex flex-col h-full shadow-md sm:rounded-lg bg-zinc-800">
        <div className="flex grow overflow-y-auto">
          {!isLoading && players && players.length > 0 && (
            <table className="w-full text-sm text-left text-gray-200 pb-8">
              <THead handleSort={handleSort} />
              <tbody className="overflow-y-auto">
                {players &&
                  players.map((player, key) => (
                    <tr
                      key={key}
                      className={clsx([
                        'hover:bg-[#807B0F]',
                        player.playerId === selectedPlayer?.playerId &&
                        player.slatePlayerId === selectedPlayer?.slatePlayerId
                          ? 'bg-[#807B0F]'
                          : 'bg-zinc-800',
                      ])}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-100  whitespace-nowrap "
                      >
                        <button
                          className="bg-transparent"
                          onClick={() => setPlayer(player)}
                        >
                          {player.operatorPlayerName}
                        </button>
                      </th>
                      <td className="px-6 py-4">
                        <button
                          className="bg-transparent"
                          onClick={() => setPlayer(player)}
                        >
                          {player.team}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="bg-transparent"
                          onClick={() => setPlayer(player)}
                        >
                          {player.operatorPosition}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="bg-transparent"
                          onClick={() => setPlayer(player)}
                        >
                          $
                          {player.operatorSalary
                            ? formatMoney(player.operatorSalary)
                            : ''}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="bg-transparent"
                          onClick={() => setPlayer(player)}
                        >
                          {player.fantasyPoints ?? 0}
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
          {!isLoading && players && players.length === 0 && (
            <div className="flex w-full flex-row items-center justify-center">
              <p className="text-white">No Players!</p>
            </div>
          )}
          {isLoading && (
            <div className="flex w-full flex-row items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          totalCount={metadata?.total ?? 0}
        />
      </div>
    </>
  );
};
