const express = require("express")
const app = express()

const server = app.listen(process.env.PORT || 3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port)
})
app.use(express.static('saji-firebase/public'));
