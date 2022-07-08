import http from 'http'
import database from './config/database.js';
import config from './config/index.js'
import api from './api/api.js'

const port = config.server.port
const server = http.createServer(api)

server.on('listening',() => {
    console.log(`servidor ejecutandose en el puerto ${port}`);
})

server.on('error', () => {
    console.error('Ha ocurrido un error en el server', err);
});

server.listen(port)
database()

