import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let win = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        win++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        win++;
      }
    }

    return `Team ${this.team} won ${win} games`;
  }
}
