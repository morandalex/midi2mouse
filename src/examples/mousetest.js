var robot = require("robotjs");

const s = require('C:\\nodepro\\midi2mouse\\src\\conv\\script.js')
var robot = require("robotjs");

var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);

s.mousemovex(mouse.x,mouse.x+50,mouse.y,1);
//var mouse = robot.getMousePos();
//s.mousemovey(mouse.y,mouse.x+200,mouse.x,1);


robot.mouseToggle("down");

setTimeout(function()
{
    robot.mouseToggle("up");

}, 500);

//robot.mouseClick();
