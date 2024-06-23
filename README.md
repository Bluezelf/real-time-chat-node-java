# Real Time Chat
In this first part, we can open a websocket server and connect with other clients, in this case we can connect with another javascript client and java clients

## Instructions
### Node Server:
1. Change the directory
```bash
cd node server
```
2. Install the dependencies
```bash
npm install
```
3. Run
```bash
node server.js
```
### Node Client:
1. Change the directory
```bash
cd node client
```
2. Install the dependencies
```bash
npm install
```
3. Run
```bash
node client.js
```
### Java Client
1. Change the directory
```bash
cd node server
```
2. Run
```bash
mvn clean compile exec:java -Dexec.mainClass="com.example.ChatClient"
```