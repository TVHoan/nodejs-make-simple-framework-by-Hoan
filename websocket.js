const App = require('ws');
const wss = new App.Server({ port: 5000 });
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(message);
    });

})