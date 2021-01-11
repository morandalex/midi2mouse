module.exports = class Mouse {
  constructor(robot) {
      this.robot = robot;
      }
  getX(){
    var mouse = this.robot.getMousePos();
    return mouse.x
  }
  getY(){
    var mouse = this.robot.getMousePos();
    return mouse.y
  }

};
