const http = require('http');
const WebSocket = require('ws');
const readline = require('readline');
const server = http.createServer();
const wss = new WebSocket.Server({server});

let clientId = 0;

wss.on('connection', socket => {
    clientId++;
    socket.id = clientId;
    console.log(`Client ${socket.id} connected`);

    socket.on('message', message => {
        console.log(`Client ${socket.id} says: ${message}`);
        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(`Client ${socket.id} says: ${message}`);
            }
        });
    });
    socket.send(`Welcome to this new chat in real time you are Client ${socket.id}`);
});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', (input) => {
    wss.clients.forEach(client => {
        if(client.readyState === WebSocket.OPEN){
            client.send(`Server says: ${input}`);
        }
    })
})

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});