const eventEmitter = require('events')

const emitter = new eventEmitter()

emitter.on('log', (message) => {
    console.log(message)
})


function log(message) {
    emitter.emit('log', message)
}

module.exports = log