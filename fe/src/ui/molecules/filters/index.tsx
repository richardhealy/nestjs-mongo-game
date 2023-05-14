import { useGetGameTypes } from '../../../hooks/api/useGetGameTypes.ts';
import { useGetOperators } from '../../../hooks/api/useGetOperators.ts';
import { useGetSlateNames } from '../../../hooks/api/useGetSlateNames.ts';
import { FilterValues, useFilters } from '../../../providers/FilterContext.tsx';
import { usePlayer } from '../../../providers/PlayerContext.tsx';

export const Filters = () => {
  const { filters, setFilters } = useFilters();
  const { setPlayer } = usePlayer();
  const { operators, isLoading: isOperatorLoading } = useGetOperators();
  const { gameTypes } = useGetGameTypes(filters.operator);
  const { slateNames } = useGetSlateNames(filters.operator, filters.gameType);

  if (isOperatorLoading) {
    return (
      <div className="rounded-lg my-12 w-[80%] mx-auto p-6 flex flex-row gap-4 bg-[#2F2F2F] items-center justify-center text-gray-50">
        Loading...
      </div>
    );
  }

  const handleFilterChange = (filters: FilterValues) => {
    setFilters(filters);
    setPlayer(undefined);
  };

  return (
    <form>
      <div className="rounded-lg my-12 w-[80%] mx-auto p-6 flex flex-row gap-4 bg-[#2F2F2F]">
        <select
          onChange={(e) =>
            handleFilterChange({
              operator: e.target.value === '' ? undefined : e.target.value,
              gameType: undefined,
              slateName: undefined,
            })
          }
          aria-label="operator"
          className="bg-zinc-900 border  border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose Operator</option>
          {operators?.map((operator) => (
            <option key={operator} value={operator.split(' ').join('+')}>
              {operator}
            </option>
          ))}
        </select>

        <select
          aria-label="gameType"
          disabled={!filters.operator}
          className="bg-zinc-900 border border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) =>
            handleFilterChange({
              ...filters,
              gameType: e.target.value === '' ? undefined : e.target.value,
              slateName: undefined,
            })
          }
        >
          <option value="">Choose Game Type</option>
          {gameTypes?.map((gameType) => (
            <option key={gameType} value={gameType.split(' ').join('+')}>
              {gameType}
            </option>
          ))}
        </select>

        <select
          aria-label="slateName"
          className="bg-zinc-900 border border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled={!filters.operator || !filters.gameType}
          onChange={(e) =>
            handleFilterChange({
              ...filters,
              slateName: e.target.value === '' ? undefined : e.target.value,
            })
          }
        >
          <option value="">Select Slate Name</option>
          {slateNames?.map((slateName) => (
            <option key={slateName} value={slateName.split(' ').join('+')}>
              {slateName}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
