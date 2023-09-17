// importing express to initialise server
const express = require('express');
// NOTES:- express allows us to create a server -- 
//setup express method
const app = express();

// require protocol and linking the server to the applicattion express.
// making server using http and express
const server = require('http').Server(app);

// giving public folder to express app
 app.use(express.static('public'));
// // require socke,io ans link to our http server.
const io = require('socket.io')(server);

// // making connection with io that will take socket
io.on('connection', (socket) => {
    socket.on('message', (data) => { //user sendong message
  // giving the message to io
  io.emit('message', data); // emitting the message to all the other io
  
    })
    socket.on('disconnect', ()=>{
        console.log('user left the chat')
    })
})
// taking an unused random port to our self on which the server should be accessible.
const PORT = 9000; //localHost:9000

server.listen(PORT, () => {
console.log(`server is running on the portal ${9000}`);
})