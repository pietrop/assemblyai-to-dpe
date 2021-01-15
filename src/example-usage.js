const fs = require('fs');
const convert = require('./index.js');
// const sampleJson = require('./assemblyai-sample.json');
const sampleJson = require('../sample/assemblyai-speakers-sample.json');

const result = convert(sampleJson);

console.log(result);

fs.writeFileSync('./sample/output.json', JSON.stringify(result, null, 2));
