import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summaryHtml = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();

summaryHtml.buildAndPrintReport(matchReader.matches);
