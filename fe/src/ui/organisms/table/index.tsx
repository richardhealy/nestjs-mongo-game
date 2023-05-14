export const Table = () => {
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
              <tr className="bg-zinc-800 hover:bg-[#807B0F]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap "
                >
                  Tom Brady
                </th>
                <td className="px-6 py-4">TB</td>
                <td className="px-6 py-4">QB</td>
                <td className="px-6 py-4">$11,200</td>
                <td className="px-6 py-4">23</td>
              </tr>
              <tr className="bg-zinc-800 hover:bg-[#807B0F]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap "
                >
                  Tom Brady
                </th>
                <td className="px-6 py-4">TB</td>
                <td className="px-6 py-4">QB</td>
                <td className="px-6 py-4">$11,200</td>
                <td className="px-6 py-4">23</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          className="flex items-center justify-between bg-[#1D1D1D] sticky left-0 bottom-0 right-0 px-4 py-3 sm:px-6 sm:py-2"
          aria-label="Table navigation"
        >
          <div></div>
          <span className="text-sm font-normal text-white">
            <span className="font-semibold text-white ">1-10</span> of{' '}
            <span className="font-semibold text-white ">1000</span>
          </span>
          <ul className="inline-flex items-center-x-px">
            <li>
              <a
                href="#"
                className="block px-1 py-2 ml-0 leading-tight text-white hover:text-gray-700"
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
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
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
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
