const {PythonShell} = require ('python-shell');
let pyshell = new PythonShell('print.py');

pyshell.on('message', function (message) {
  // received a message sent from the Python script
  console.log(message);
  console.log('--------------script python sucess--------------');
});