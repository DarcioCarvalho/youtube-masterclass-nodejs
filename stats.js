
/*   DICA DE TECLA DE ATALHO NO VISUAL STUDIO CODE

   Crtl + J >>  Abre o Terminal
*/

const os = require('os')
const log = require('./logger')

setInterval(() => {

    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt( freemem() / 1024 / 1024)
    const percents = parseInt( (mem/total) * 100)
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }
    
    console.clear()
    console.log("====== PC STATS ======")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)

    //log('Rodando...')


}, 1000)



//console.log(`${parseInt( freemem() / 1024 / 1024 ) } MB` , totalmem())
