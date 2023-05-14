import { ReactNode, createContext, useContext, useState } from 'react';
import { Player } from '../types/Player';

type PlayerContext = {
  player: Player | undefined;
  setPlayer: (player: Player) => void;
};

const defaultValues = {
  player: undefined,
  setPlayer: () => {},
} satisfies PlayerContext;

export const PlayerContext = createContext<PlayerContext>(defaultValues);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useState<Player | undefined>(undefined);
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const { player, setPlayer } = useContext(PlayerContext);
  return { player, setPlayer };
};

export default PlayerContext;
