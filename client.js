const net = require('net');

const connect = function () {
const conn = net.createConnection({ //setting up a connection to the server
  host:"165.227.47.243",
  port:"50541"
});
conn.setEncoding("utf8"); //interpret data as text


conn.on("connect", () => {
  conn.write("Conneted!");
  conn.write("Name: SAL");
  // setTimeout(() => {
  //   conn.write('Move: up')
  // })
});

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function () {
    stdin.on("data", handleUserInput);
    if (key === '\u0003') {
      process.exit();
    }
  };
  return stdin;
};


return conn; 

};

console.log("Connecting...")
connect(); 

