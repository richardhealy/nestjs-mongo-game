import { useEffect, useState } from 'react';

import { useGetPlayers } from '../../../hooks/api/useGetPlayers';
import { useFilters } from '../../../providers/FilterContext';
import { usePlayer } from '../../../providers/PlayerContext';
import { THead } from './THead';
import { Pagination } from './Pagination';

export const Table = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { setPlayer } = usePlayer();
  const [sortBy, setSortBy] = useState('operatorPlayerName');
  const [sortDir, setSortDir] = useState('asc');
  const { filters } = useFilters();
  const { players } = useGetPlayers({
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

  const totalCount = 1000;

  return (
    <>
      <div className="relative flex flex-col h-full shadow-md sm:rounded-lg bg-zinc-800">
        <div className="grow overflow-y-auto">
          <table className="w-full text-sm text-left text-gray-200 pb-8">
            <THead handleSort={handleSort} />
            <tbody className="overflow-y-auto">
              {players &&
                players.map((player, key) => (
                  <tr key={key} className="bg-zinc-800 hover:bg-[#807B0F]">
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
                        ${player.operatorSalary}
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
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          totalCount={totalCount}
        />
      </div>
    </>
  );
};
