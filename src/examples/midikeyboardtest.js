//dependencies
var dotenv = require('dotenv');
dotenv.config({
  path: 'globalvar.env'
})
var robot = require("robotjs");
var Bluebird = require("bluebird");

const s = require(process.env.MI2KEYBOARDMODULES + 'actions.js');

//check inputs and update midiobj.js
var easymidi = require('easymidi');
var inputs = easymidi.getInputs();
console.log(inputs);
var parallelproc = [];
parallelproc.push(s.midiKEYnoteonclick1(0,32,'a'));
parallelproc.push(s.midiKEYnoteonclick1(0,33,'b'));
parallelproc.push(s.midiKEYnoteonclick1(0,34,'c'));
parallelproc.push(s.midiKEYnoteonclick1(0,35,'backspace'));
parallelproc.push(s.midiKEYnoteonclick1(0,36,'delete'));
parallelproc.push(s.midiKEYnoteonclick2(0,37,'control','f'));
//parallelproc.push(s.midiKEYnoteonclick3(0,37,'control','alt','delete'));
