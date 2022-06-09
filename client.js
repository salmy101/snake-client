const net = require('net');

const connect = function () {
const conn = net.createConnection({ //setting up a connection to the server
  host:"165.227.47.243",
  port:"50541"
});

conn.setEncoding("utf8"); //interpret data as text

return conn; 

};

console.log("Connecting...")
connect(); 

