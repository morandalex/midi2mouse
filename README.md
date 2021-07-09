# midi 2 software automation

The idea behind this project is to connect  the midi signal  with the mouse or keyboard control using Nodejs

In this sense , you can control every software.


## Requirements

install latest LTS version of Nodejs

## Setup installation

Open a terminal and :

    git clone https://github.com/morandalex/midi2mouse.git

    cd midi2mouse

    npm install

Then open the globalvar.env file, and write the path of the folder where you are the midi2mouse modules.
In that sense you can use the library in a different OS.

## Start locally with examples

in the root directory of the project type and run the tests inside the example folder:

    node src/examples/miditest.js
