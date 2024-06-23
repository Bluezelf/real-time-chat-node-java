const WebSocket = require('ws');
const readline = require ('readline');

const socket = new WebSocket('ws://localhost:8080/ws/chat');

socket.on('open', () => {
    console.log('Connected to the server');
});

socket.on('message', message => {
    console.log(`${message}`);
});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', (input) => {
    socket.send(`${input}`);
});