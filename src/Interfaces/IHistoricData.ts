export interface IHistory {
  date: Date;
  affected: number;
}

export interface IHistoricData {
  cases: IHistory[];
  deaths: IHistory[];
  recovered: IHistory[];
}
