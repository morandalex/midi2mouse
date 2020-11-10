//dependencies
var dotenv = require('dotenv');
dotenv.config({
  path: 'globalvar.env'
})
var robot = require("robotjs");
var Bluebird = require("bluebird");
const s = require(process.env.MI2MOUSEMODULES + 'actions.js');
const r = require(process.env.MI2MOUSEMODULES + 'mouseobj.js');
//check inputs and update midiobj.js
var easymidi = require('easymidi');
var inputs = easymidi.getInputs();
console.log(inputs);
var mo = new r(robot);
console.log(mo.getX());
console.log(mo.getY());
