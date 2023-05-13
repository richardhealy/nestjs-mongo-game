export const Filters = () => {
  return (
    <form>
      <div className="rounded-lg my-12 w-[80%] mx-auto p-6 flex flex-row gap-4 bg-[#2F2F2F]">
        <select
          id="operators"
          className="bg-zinc-900 border  border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose Operator</option>
          <option value="US">United States</option>
        </select>

        <select
          id="operators"
          className="bg-zinc-900 border border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose Operator</option>
          <option value="US">United States</option>
        </select>

        <select
          id="operators"
          className="bg-zinc-900 border border-zinc-900 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Select Slate Name</option>
          <option value="US">United States</option>
        </select>
      </div>
    </form>
  );
};
