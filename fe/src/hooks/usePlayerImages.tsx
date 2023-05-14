import TomBrady from '../assets/players/tom_brady.png';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export const usePlayerImages = (playerName: string) => {
  switch (playerName) {
    case 'Tom Brady':
      return [<img src={TomBrady} />, true];
    default:
      return [<UserCircleIcon className="w-48 h-48 text-zinc-700" />, false];
  }
};
