import { clsx } from 'clsx';
import { usePlayerImages } from '../../../hooks/usePlayerImages';
import { usePlayer } from '../../../providers/PlayerContext';

import { UserCircleIcon } from '@heroicons/react/24/outline';

export const Summary = () => {
  const { player } = usePlayer();

  const [Element, found] = usePlayerImages(player?.operatorPlayerName ?? '');

  return (
    <div className="h-full">
      <div
        className={clsx([
          'h-1/2 flex flex-row bg-[#1D1D1D] justify-center',
          found ? 'items-end' : 'items-center',
        ])}
      >
        {player && Element}
        {!player && <UserCircleIcon className="w-48 h-48 text-zinc-700" />}
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center bg-zinc-800 text-gray-300">
        {player && (
          <>
            <span className="text-lg">{player.operatorPlayerName}</span>
            <strong className="text-[7em] font-normal leading-tight">
              {player.fantasyPoints ?? '0'}
            </strong>
            <span className="text-xs">Points</span>
          </>
        )}
      </div>
    </div>
  );
};
