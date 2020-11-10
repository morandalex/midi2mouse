module.exports = {
  midiccmove: async function(
    channel, controller,
    axis, x, y, pixelmove, speed
  ) {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require('C:\\nodepro\\midi2mouse\\src\\conv\\midiobj.js');
    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    robot.mouseToggle('up');
    robot.setMouseDelay(speed);
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('cc', function(midimsg) {
        if (midimsg.channel == channel && midimsg.controller == controller) {
          if (axis == 'y') {
            var mouse = robot.getMousePos();
            robot.mouseToggle('down');
            robot.moveMouse(x, height - (y + midimsg.value * (pixelmove) / 127));
            console.log('midi msg :' + JSON.stringify(midimsg) + 'and mouse pos now is  x=' + mouse.x + " y=" + mouse.y)
            if (midimsg.value * (pixelmove) / 127 <= pixelmove - 5) {
              robot.mouseToggle('down');
            }
          }
          if (axis == 'x') {
            var mouse = robot.getMousePos();
            robot.mouseToggle('down');
            robot.moveMouse(x + midimsg.value * (pixelmove) / 127, y);
            console.log('midi msg :' + JSON.stringify(midimsg) + 'and mouse pos now is  x=' + mouse.x + " y=" + mouse.y)
          }
        } else {
          robot.mouseToggle('up');
          var mouse = robot.getMousePos();
          console.log(JSON.stringify(midimsg) + ' and mouse pos now is  x=' + mouse.x + " y=" + mouse.y)
        }
      });
    }).catch(console.log)
  },
  midinoteonclick: async function(
    channel,
    note,
    velocity,
    ifdoubleclick
  ) {
    var easymidi = require('easymidi');
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require('C:\\nodepro\\midi2mouse\\src\\conv\\midiobj.js');
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('noteon', function(midimsg) {
        if (midimsg.channel == channel && midimsg.note == note) {
          if (ifdoubleclick == true) {
            robot.mouseClick('left', true);
          } else {
            robot.mouseClick('left');
          }
          var mouse = robot.getMousePos();
          console.log(JSON.stringify(midimsg) + ' and mouse pos now is  x=' + mouse.x + " y=" + mouse.y)
        } else {
          var mouse = robot.getMousePos();
          console.log(JSON.stringify(midimsg) + ' and mouse pos now is  x=' + mouse.x + " y=" + mouse.y)
        }
      });
    }).catch(console.log)
  }
};
