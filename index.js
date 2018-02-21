

var app = require('./app');
var port = process.env.PORT || 3002;
var config = require('./config');
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', (client) => {
    client.on('newOvent', (res) => {
        console.log('client add a new ovents', res.data);
        client.emit('newOvents', res.data);
    });
});

server.listen(port, () => {
    console.log(`API REST corriendo en ${port}`)
})