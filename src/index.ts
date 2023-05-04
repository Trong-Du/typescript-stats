import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// create an object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// create instance of MatchReader and pass in sth satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let muWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    muWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    muWins++;
  }
}

console.log(muWins);
