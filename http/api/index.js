const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

const data = require('./urls.json')


function writeFile(cb) {
  fs.writeFile(
    path.join(__dirname, "urls.json"),
    JSON.stringify(data, null, 2),
    err => {
      if (err) throw err

      cb(JSON.stringify({ message: "Ok!!!" }))
    }

  )
}


http.createServer((req, res) => {
  const { name, url, del } = URL.parse(req.url, true).query
  const file = req.url
  const filePath = path.join(__dirname, file)
  const extname = path.extname(filePath)

  console.log("filePath: " + filePath)
  console.log("extname: " + extname)

  const allowedFileTypes = [".html", ".css", ".js", ".json"]
  const allowed = allowedFileTypes.find(item => item == extname)

  if (!allowed && extname != "") return

  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })

  //all resources
  if (!name || !url)
    return res.end(JSON.stringify(data))

  if (del) {
    data.urls = data.urls.filter(item => String(item.url) !== String(url))

    return writeFile((message) => res.end(message))
  }

  data.urls.push({ name, url })
  return writeFile((message) => res.end(message))

  //res.end('create')

  //  res.end(JSON.stringify(data))

}).listen(3000, () => console.log('API is running'))