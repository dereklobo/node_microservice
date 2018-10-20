const service = require('../server/service.js');
const http = require('http');

const server = http.createServer(service);
server.listen(3000);
console.log("server listening on port 3000");

server.on('listening',function(){
    console.log(`Node microservice is listetning on ${server.address().port}
    on ${service.get('env')} mode`);
})