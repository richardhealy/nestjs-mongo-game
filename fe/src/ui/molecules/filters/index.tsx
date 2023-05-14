import { useGetGameTypes } from '../../../hooks/api/operators/useGetGameTypes.ts';
import { useGetOperators } from '../../../hooks/api/operators/useGetOperators.ts';
import { useFilters } from '../../../providers/FilterContext.tsx';

export const Filters = () => {
  const { filters, setFilters } = useFilters();
  const { operators, isLoading: isOperatorLoading } = useGetOperators();

  console.log(filters.operator);

  const { gameTypes } = useGetGameTypes(filters.operator);

  if (isOperatorLoading) {
    return (
      <div className="rounded-lg my-12 w-[80%] mx-auto p-6 flex flex-row gap-4 bg-[#2F2F2F] items-center justify-center text-gray-50">
        Loading...
      </div>
    );
  }

  return (
    <form>
      <div className="rounded-lg my-12 w-[80%] mx-auto p-6 flex flex-row gap-4 bg-[#2F2F2F]">
        <select
          onChange={(e) =>
            setFilters({
              operator: e.target.value,
              gameType: undefined,
              slateName: undefined,
            })
          }
          id="operators"
          className="bg-zinc-900 border  border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose Operator</option>
          {operators?.map((operator) => (
            <option key={operator} value={operator}>
              {operator}
            </option>
          ))}
        </select>

        <select
          id="operators"
          disabled={!filters.operator}
          className="bg-zinc-900 border border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) =>
            setFilters({
              ...filters,
              gameType: e.target.value,
              slateName: undefined,
            })
          }
        >
          <option>Choose Game Type</option>
          {gameTypes?.map((gameType) => (
            <option key={gameType} value={gameType}>
              {gameType}
            </option>
          ))}
        </select>

        <select
          id="operators"
          className="bg-zinc-900 border border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Select Slate Name</option>
        </select>
      </div>
    </form>
  );
};
