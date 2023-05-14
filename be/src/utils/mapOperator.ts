import { Operator } from '../operator/operator.types';

export const mapOperator = (props: Operator): Partial<Operator> => {
  const {
    _id,
    season,
    seasonType,
    week,
    operatorGameType,
    operator,
    operatorName,
  } = props;

  return {
    _id,
    season,
    seasonType,
    week,
    operatorGameType,
    operator,
    operatorName,
  };
};
