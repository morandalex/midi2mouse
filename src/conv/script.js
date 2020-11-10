module.exports = {
  mousemovex: function(x1, x2, y, speed) {
    var robot = require("robotjs");
    var screenSize = robot.getScreenSize();
    var height = (screenSize.height / 2) - 10;
    var width = screenSize.width;
    robot.setMouseDelay(speed);
    for (var x = x1; x < x2; x++) {
      robot.moveMouse(x, y);
      console.log(x);
    }
  },
  mousemovey: function(y1, y2, x, speed) {
    var robot = require("robotjs");
    var screenSize = robot.getScreenSize();
    var height = (screenSize.height / 2) - 10;
    var width = screenSize.width;
    robot.setMouseDelay(speed);
    for (var y = y1; y < y2; y++) {
      robot.moveMouse(x, y);
      console.log(y);
    }
  }



};
