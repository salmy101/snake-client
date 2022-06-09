const net = require('net');

const connect = function () {
  const conn = net.createConnection({ //setting up a connection to the server
  host:"165.227.47.243",
  port:"50541"
  });
  conn.setEncoding("utf8"); //interpret data as text

  conn.on("connect", () => {
    console.log("Connected!");
    conn.write("Name: SAL");
  });

  conn.on("data", (data) => { // Return the message from server when you get kicked out for idling
  console.log("Server says: ", data);
  });  
  // const setupInput = require("./input.js");


  return conn; 

};


// console.log("Connecting ...");
// connect();


module.exports = connect;