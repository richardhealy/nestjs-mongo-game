import { PlayerDto } from 'src/dto/Player.dto';

type SanitizeSortOutput = Record<string, 1 | -1> | undefined;

export const sanitizeSortInput = (
  input: Partial<PlayerDto>,
): SanitizeSortOutput => {
  const { sortBy, sortDir } = input;

  if (sortBy === 'operatorPlayerName' || sortBy === 'fantasyPoints') {
    return {
      [sortBy]: sortDir === 'desc' ? -1 : 1,
    };
  }

  return undefined;
};
