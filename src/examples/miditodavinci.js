//dependencies
var dotenv = require('dotenv');
dotenv.config({
  path: 'globalvar.env'
})
var robot = require("robotjs");
var Bluebird = require("bluebird");
const s = require(process.env.MI2MOUSEMODULES + 'actions.js');
//check inputs and update midiobj.js
var easymidi = require('easymidi');
var inputs = easymidi.getInputs();
console.log(inputs);
//midi commands handled in parallel
var parallelproc = [];
parallelproc.push(
  s.midimousedatanoteon()
);
parallelproc.push(
  s.midimousedatacc()
);



parallelproc.push(s.midinoteonclick ('0','0',900,600 ,false       ));
parallelproc.push(s.midiccmove  ('0', '7', 'x', 900,600 ,100 , true, 1 ));
parallelproc.push(s.midiccmove  ('1', '7', 'y', 900,600 ,100 , true, 1 ));



Promise.all(parallelproc).then(function() {
  console.log("midi commands loaded");
});
