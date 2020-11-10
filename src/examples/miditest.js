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
  parallelproc.push(
    s.midiccmove(
      '0', // channel
      '7', // controller
      'x', // axis : on which axis I want the move :  x = x axis, y = y axis
      500, // x  : position of x in the first position
      500, // y  : position of x in the first position
      500, // pixelmove
      false,   // offset
      1    // speed
    )
  );
  parallelproc.push(
    s.midinoteonclick(
      '0', // channel
      '0', // note
      500,
      500,
      true // ifdoubleclick : true = doubleclick, false = only one click
    )
  );
  parallelproc.push(
    s.midinoteonclick(
      '0', // channel
      '1', // note
      500,
      500,
      false // ifdoubleclick : true = doubleclick, false= only one click
    )
  );
  Promise.all(parallelproc).then(function() {
    console.log("midi commands loaded");
  });
