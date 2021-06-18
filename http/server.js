const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url

    fs.readFile(
        path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
            if(err) throw err

            res.end(content)
        })

 
//    console.log(file)

//    res.end('Cheguei')


/*
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if(err) throw err

                res.end(content)
            }
        )
    }
*/


}).listen(5000, () => console.log('Server is running'))