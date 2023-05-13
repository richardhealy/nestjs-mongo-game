export const Summary = () => {
  return (
    <div className="h-full">
      <div className="h-1/2 flex flex-row items-end justify-center bg-zinc-900">
        Image
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center bg-zinc-800 text-gray-300">
        <span className="text-lg">Player Name</span>
        <strong className="text-[7em] font-normal leading-tight">51</strong>
        <span className="text-xs">Points</span>
      </div>
    </div>
  );
};
