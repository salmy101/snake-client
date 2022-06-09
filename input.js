// const { connect } = require("http2");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003'){ // if they use this key then termminate
    process.exit();
  } else if ( data === "w"){ // if not move on, these are they only 4 keys that can be used
    connection.write("Move: up");
  }  else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if ( data === 'd') {
    connection.write("Move: right")
  }  
  if(data === 'o') {
    connection.write("Say: moooovveee!!");
} else if (data === 'l') {
  connection.write("Say: see ya");
}
};
module.exports = setupInput;

