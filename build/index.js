"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summaryHtml = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summaryHtml.buildAndPrintReport(matchReader.matches);
