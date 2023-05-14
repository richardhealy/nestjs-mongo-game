export type Operator = {
  _id: string;
  season: number;
  seasonType: number;
  week: number;
  operatorGameType: string;
  operator: string;
  operatorName: string;
  isMultiDaySlate: boolean;
  numberOfGames: number;
  operatorDay: string;
  operatorSlateId: number;
  operatorStartTime: string;
  removedByOperator: boolean;
  salaryCap: number;
};
