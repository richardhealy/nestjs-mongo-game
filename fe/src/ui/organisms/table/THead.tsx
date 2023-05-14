interface THeadProps {
  handleSort: (key: string) => void;
}

export const THead = ({ handleSort }: THeadProps) => {
  return (
    <thead className="text-xs text-gray-100 b ">
      <tr>
        <th scope="col" className="sticky top-0 px-6 py-3 bg-[#1D1D1D]">
          <button onClick={() => handleSort('operatorPlayerName')}>Name</button>
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
          <button onClick={() => handleSort('fantasyPoints')}>Points</button>
        </th>
      </tr>
    </thead>
  );
};
