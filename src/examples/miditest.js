  var easymidi = require('easymidi');
  var robot = require("robotjs");
  var Bluebird = require("bluebird");
  const s = require('C:\\nodepro\\midi2mouse\\src\\conv\\script.js')
  var robot = require("robotjs");

  var inputs = easymidi.getInputs();
  console.log(inputs);
  var input = new easymidi.Input('APC40 mkII 2');
  var parallelproc = [];

      parallelproc.push(
        Bluebird.try(async () => {
          const auth = await input.on('cc', function(msg) {
            console.log(msg);
            if (msg.controller == 15) {
              robot.moveMouse(msg.value * 1920 / 127, 200);
            }
          });
        }).catch(console.log)
      );

      parallelproc.push(
        Bluebird.try(async () => {
          const auth = await input.on('cc', function(msg) {
            console.log(msg);

            if (msg.controller == 14) {
              robot.moveMouse(200, 1080-msg.value * 1080 / 127);
            }
          });
        }).catch(console.log)
      );

//caratteristiche dell'oggetto:
//canale
//_type
//controller
//value
//tipo
//case
//screenwidht
//screenheight
//move ( true=toggle false=)





  Promise.all(  parallelproc).then(function() {
      console.log("all the files were created");
  });
