import { useEffect, useState } from 'react';

import { useGetPlayers } from '../../../hooks/api/useGetPlayers';
import { useFilters } from '../../../providers/FilterContext';

export const Table = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
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

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const totalCount = 1000;

  return (
    <>
      <div className="relative flex flex-col h-full shadow-md sm:rounded-lg bg-zinc-800">
        <div className="grow overflow-y-auto">
          <table className="w-full text-sm text-left text-gray-200 pb-8">
            <thead className="text-xs text-gray-100 b ">
              <tr>
                <th scope="col" className="sticky top-0 px-6 py-3 bg-[#1D1D1D]">
                  Name
                </th>
                <th scope="col" className="sticky top-0 px-6 py-3 bg-[#1D1D1D]">
                  Team
                </th>
                <th scope="col" className="sticky top-0 px-6 py-3 bg-[#1D1D1D]">
                  Position
                </th>
                <th scope="col" className="sticky top-0 px-6 py-3 bg-[#1D1D1D]">
                  Salary
                </th>
                <th scope="col" className="sticky top-0 px-6 py-3 bg-[#1D1D1D]">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {players &&
                players.map((player) => (
                  <tr className="bg-zinc-800 hover:bg-[#807B0F]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap "
                    >
                      {player.operatorPlayerName}
                    </th>
                    <td className="px-6 py-4">{player.team}</td>
                    <td className="px-6 py-4">{player.operatorPosition}</td>
                    <td className="px-6 py-4">${player.operatorSalary}</td>
                    <td className="px-6 py-4">{player.fantasyPoints ?? 0}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex items-center justify-between bg-[#1D1D1D] sticky left-0 bottom-0 right-0 px-4 py-3 sm:px-6 sm:py-2"
          aria-label="Table navigation"
        >
          <div></div>
          <span className="text-sm font-normal text-white">
            <span className="font-semibold text-white ">
              {Number(Number(page - 1) * limit) + 1}
            </span>{' '}
            of <span className="font-semibold text-white ">1000</span>
          </span>
          <ul className="inline-flex items-center-x-px">
            <li>
              <button
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
                className="block px-1 py-2 ml-0 leading-tight text-white hover:text-gray-700"
                disabled={page === 1}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (page < totalCount / limit) {
                    setPage(page + 1);
                  }
                }}
                className="block px-1 py-2 leading-tight text-white  hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
