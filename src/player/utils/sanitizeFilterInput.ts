import { PlayerDto } from 'src/dto/Player.dto';
import { processInput } from 'src/utils/processInput';

type SanitizeFilterValue = {
  $regex: string;
  $options: 'i';
};

type SanitizeFilterOutput =
  | {
      operator: SanitizeFilterValue;
      operatorName: SanitizeFilterValue;
      operatorGameType: SanitizeFilterValue;
    }
  | undefined;

export const sanitizeFilterInput = (
  input: Partial<PlayerDto>,
): SanitizeFilterOutput => {
  const { operatorGameType, operatorName, operator } = input;

  return {
    ...(operatorGameType && {
      operatorGameType: {
        $regex: processInput(operatorGameType),
        $options: 'i',
      },
    }),
    ...(operatorName && {
      operatorName: {
        $regex: processInput(operatorName),
        $options: 'i',
      },
    }),
    ...(operator && {
      operator: {
        $regex: processInput(operator),
        $options: 'i',
      },
    }),
  };
};
