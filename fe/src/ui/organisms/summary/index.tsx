import { clsx } from 'clsx';
import { usePlayerImages } from '../../../hooks/usePlayerImages';

export const Summary = () => {
  const [Element, found] = usePlayerImages('Tom Brady1');

  return (
    <div className="h-full">
      <div
        className={clsx([
          'h-1/2 flex flex-row bg-[#1D1D1D] justify-center',
          found ? 'items-end' : 'items-center',
        ])}
      >
        {Element}
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center bg-zinc-800 text-gray-300">
        <span className="text-lg">Player Name</span>
        <strong className="text-[7em] font-normal leading-tight">51</strong>
        <span className="text-xs">Points</span>
      </div>
    </div>
  );
};
