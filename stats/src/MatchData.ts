import { MatchResult } from "./MatchResult";

//tuple type single row of csv file
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
