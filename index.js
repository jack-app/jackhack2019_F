const express = require("express")
const app = express()

const server = app.listen(process.env.port || 3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port)
})
app.use(express.static('saji-firebase/public'));
