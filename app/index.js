const WebSocketServer = require('websocket').server;
const http = require('http');
const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const router = express.Router();
const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];

const routes = require('./routes/index.js');

const db = require('./config').mongoURI;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose
  .connect(
    process.env.MONGO_LOCAL_CONN_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

if (environment !== 'production') {
  app.use(logger('dev'));
}

app.use('/api/v1', routes(router));

const server = http.createServer(app);

const wsServer = new WebSocketServer({ httpServer:server });

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}
 
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});

module.exports = app;