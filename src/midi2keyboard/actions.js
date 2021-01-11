module.exports = {
  midiKEYnoteonclick1: async function(channel, note, key) {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require(process.env.MI2KEYBOARDMODULES + 'midiobj.js');
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('noteon', function(midimsg) {
        if (midimsg.channel == channel && midimsg.note == note) {
          console.log('midi (' + midimsg.channel + '+' + midimsg.note + ') = ' + key)
          robot.keyTap(key);
        }
      })
    }).catch(console.log)
  },
  midiKEYnoteonclick2: async function(channel, note, key1, key2) {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require(process.env.MI2KEYBOARDMODULES + 'midiobj.js');
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('noteon', function(midimsg) {
        if (midimsg.channel == channel && midimsg.note == note) {
          var command = [key1];
          console.log('midi (' + midimsg.channel + '+' + midimsg.note + ') = ' + command + '+'
            key2);
          robot.keyTap(key2, command);
        }
      })
    }).catch(console.log)
  },
  midiKEYnoteonclick3: async function(channel, note, key1, key2, key3) {
    var robot = require("robotjs");
    var Bluebird = require("bluebird");
    var i = require(process.env.MI2KEYBOARDMODULES + 'midiobj.js');
    var input = i.inputmidi;
    Bluebird.try(async () => {
      const auth = await input.on('noteon', function(midimsg) {
        if (midimsg.channel == channel && midimsg.note == note) {
          var command = [key1, key2];
          console.log('midi (' + midimsg.channel + '+' + midimsg.note + ') = ' + command + '+'
            key3);
          robot.keyTap(key3, command);
        }
      })
    }).catch(console.log)
  }
}
