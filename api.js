// const express = require('express')
// const app = express()

// var cors = require('cors');
// app.use(cors());

// app.get('/', function (req, res) {
//   res.send('listening to port 3000')
// })

// app.listen(3000)

const express = require('express');
var cors = require("cors");
const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 3030;

app.get('/', (req, res) =>{
  res.send('Mario');
})

app.get('/Students', (req, res) =>{
  let data = [ {id: 1, name: "Mario"}, {id: 2, name: "Roland"}, {id: 3, name: "Christian"}, {id: 4, name: "Georges"}];
  res.send(data);
})

// your code
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});