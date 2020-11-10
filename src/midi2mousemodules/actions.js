module.exports = {
  midiccmove: async function(channel, controller, axis, x, y, pixelmove, offset, speed) {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require(process.env.MI2MOUSEMODULES + 'midiobj.js');
    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    robot.setMouseDelay(speed);
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('cc', function(midimsg) {
        if (midimsg.channel == channel && midimsg.controller == controller) {
          if (offset === false) {
            if (axis == 'y') {
              robot.mouseToggle('down');
              robot.moveMouse(x, height - (y + midimsg.value * (pixelmove) / 127));
            }
            if (axis == 'x') {
              robot.mouseToggle('down');
              robot.moveMouse(x - offset + midimsg.value * (pixelmove) / 127, height - y);
            }
          } else {
            if (midimsg.value > 63) {
              if (axis == 'y') {
                robot.mouseToggle('down');
                robot.moveMouse(x, height - (y + (midimsg.value - 63) * (pixelmove) / (127 - 63)));
              }
              if (axis == 'x') {
                robot.mouseToggle('down');
                robot.moveMouse(x + (midimsg.value - 63) * (pixelmove) / (127 - 63), height - y);
              }
            } else {
              if (axis == 'y') {
                robot.mouseToggle('down');
                robot.moveMouse(x, height - (y - pixelmove + midimsg.value * (pixelmove) / (127 - 63)));
              }
              if (axis == 'x') {
                robot.mouseToggle('down');
                robot.moveMouse(x - pixelmove + midimsg.value * (pixelmove) / (127 - 63), height - y);
              }
            }
          }
        }
      });
    }).catch(console.log)
  },
  midiccmovenoxy: async function(channel, controller, axis,  pixelmove, offset, speed) {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require(process.env.MI2MOUSEMODULES + 'midiobj.js');
    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    robot.setMouseDelay(speed);
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('cc', function(midimsg) {
        var mouse = robot.getMousePos();
        var x = mouse.x;
        var y = (height - mouse.y);
        if (midimsg.channel == channel && midimsg.controller == controller) {
          if (offset === false) {
            if (axis == 'y') {
              robot.mouseToggle('down');
              robot.moveMouse(x, height - (y + midimsg.value * (pixelmove) / 127));
            }
            if (axis == 'x') {
              robot.mouseToggle('down');
              robot.moveMouse(x - offset + midimsg.value * (pixelmove) / 127, height - y);
            }
          } else {
            if (midimsg.value > 63) {
              if (axis == 'y') {
                robot.mouseToggle('down');
                robot.moveMouse(x, height - (y + (midimsg.value - 63) * (pixelmove) / (127 - 63)));
              }
              if (axis == 'x') {
                robot.mouseToggle('down');
                robot.moveMouse(x + (midimsg.value - 63) * (pixelmove) / (127 - 63), height - y);
              }
            } else {
              if (axis == 'y') {
                robot.mouseToggle('down');
                robot.moveMouse(x, height - (y - pixelmove + midimsg.value * (pixelmove) / (127 - 63)));
              }
              if (axis == 'x') {
                robot.mouseToggle('down');
                robot.moveMouse(x - pixelmove + midimsg.value * (pixelmove) / (127 - 63), height - y);
              }
            }
          }
        }
      });
    }).catch(console.log)
  },
  midinoteonclick: async function(channel, note, x, y, ifdoubleclick) {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require(process.env.MI2MOUSEMODULES + 'midiobj.js');
    var input = i.inputmidi;
    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    var width = screenSize.width;
    robot.mouseToggle('up');
    Bluebird.try(async () => {
      const auth = await input.on('noteon', function(midimsg) {
        if (midimsg.channel == channel && midimsg.note == note) {
          if (ifdoubleclick == true) {
            robot.moveMouse(x, height - y);
            robot.mouseClick('left', true);
          } else {
            robot.moveMouse(x, height - y);
            robot.mouseClick('left');
          }
          var mouse = robot.getMousePos();
          //  console.log(JSON.stringify(midimsg) + ' and mouse pos now is  x=' + mouse.x + " y=" + mouse.y)
        } else {
          var mouse = robot.getMousePos();
          //    console.log(JSON.stringify(midimsg) + ' and mouse pos now is  x=' + mouse.x + " y=" + mouse.y)
        }
      });
    }).catch(console.log)
  },
  midimousedatanoteon: async function() {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    var width = screenSize.width;
    var i = require(process.env.MI2MOUSEMODULES + 'midiobj.js');
    var input = i.inputmidi;
    robot.mouseToggle('up');
    Bluebird.try(async () => {
      const auth = await input.on('noteon', function(midimsg) {
        console.log(midimsg)
        var mouse = robot.getMousePos();
        console.log("x=" + mouse.x + "<=" + width + "  y=" + (height - mouse.y) + "<=" + height)
      });
    }).catch(console.log)
  },
  midimousedatacc: async function() {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    var width = screenSize.width;
    robot.mouseToggle('up');
    var i = require(process.env.MI2MOUSEMODULES + 'midiobj.js');
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('cc', function(midimsg) {
        console.log(midimsg)
        var mouse = robot.getMousePos();
        console.log("x=" + mouse.x + "<=" + width + "  y=" + (height - mouse.y) + "<=" + height)
      });
    }).catch(console.log)
  }
};
