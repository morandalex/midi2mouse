  //check inputs and update midiobj.js
  var easymidi = require('easymidi');
  var inputs = easymidi.getInputs();
  console.log(inputs);

  //dependencies
  var robot = require("robotjs");
  var Bluebird = require("bluebird");
  const s = require('C:\\nodepro\\midi2mouse\\src\\conv\\actions.js');

  //midi commands handled in parallel
  var parallelproc = [];
  parallelproc.push(
    s.midiccmove(
      '0',
      '7',
      'x',
      1791,
      1005,
      70,
      1
    )
  );
  parallelproc.push(
    s.midinoteonclick(
      '0',
      '0',
      '127',
      true
    )
  );
  parallelproc.push(
    s.midinoteonclick(
      '0',
      '1',
      '127',
      false
    )
  );
  Promise.all(parallelproc).then(function() {
    console.log("all the files were created");
  });
