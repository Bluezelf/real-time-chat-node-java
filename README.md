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
1. Compile
```bash
Windows:javac -cp .;javax.websocket-api-1.1.jar;grizzly-framework-2.3.25.jar;grizzly-http-2.3.25.jar;grizzly-http-server-2.3.25.jar;tyrus-client-1.13.1.jar;tyrus-container-grizzly-client-1.13.1.jar;tyrus-core-1.13.1.jar;tyrus-server-1.13.1.jar;tyrus-spi-1.13.1.jar ChatClient.java

Linux: javac -cp .:javax.websocket-api-1.1.jar:grizzly-framework-2.3.25.jar:grizzly-http-2.3.25.jar:grizzly-http-server-2.3.25.jar:tyrus-client-1.13.1.jar:tyrus-container-grizzly-client-1.13.1.jar:tyrus-core-1.13.1.jar:tyrus-server-1.13.1.jar:tyrus-spi-1.13.1.jar ChatClient.java
```
2. Run
```bash
Windows:java -cp .;javax.websocket-api-1.1.jar;grizzly-framework-2.3.25.jar;grizzly-http-2.3.25.jar;grizzly-http-server-2.3.25.jar;tyrus-client-1.13.1.jar;tyrus-container-grizzly-client-1.13.1.jar;tyrus-core-1.13.1.jar;tyrus-server-1.13.1.jar;tyrus-spi-1.13.1.jar ChatClient

Linux:java -cp .:javax.websocket-api-1.1.jar:grizzly-framework-2.3.25.jar:grizzly-http-2.3.25.jar:grizzly-http-server-2.3.25.jar:tyrus-client-1.13.1.jar:tyrus-container-grizzly-client-1.13.1.jar:tyrus-core-1.13.1.jar:tyrus-server-1.13.1.jar:tyrus-spi-1.13.1.jar ChatClient
```
