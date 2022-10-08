const express = require('express');
const socket = require('socket.io');

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

//routes
const user = require("./routes/user")


const users = require("./datas/users.json");

const MongoDB = require("./models/mongo");
const User = require('./models/user');
const UserDict = require('./models/userDict');
const phoneNormalizer = require('./helpers/phoneNormalizer');

// var connection = new MongoDB("whatsapp","users",process.env.MONGO_CONNECTION_STRING);

app.use(user)

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

// app.patch("/users", (req,res) => {
//   var userList = [];
//   users.map((data,i) => {
//     var dictArray = [];
//     for(var i = 0; i < Math.floor((Math.random()*500)+5); i++) {
//       dictArray.push(phoneNormalizer(users.random()._id));
//     }
//     data._id = phoneNormalizer(data._id);
//     var user = new User({
//       ...data,
//       dict:dictArray
//     })
//     userList.push(user)
//     dictArray = null;
//   });
//   connection.insertDocuments(userList);
//   res.send(`${userList.length} documents inserted`);
// });

const server = app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});


const io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('chatGet', data => {
    console.log(data)
    socket.emit('chatPush',data); //burdada sadece kendisine gidiyor
    socket.broadcast.emit('chatPush',data); //broadcast dersek eğer tüm kullanıcılara gidiyor kendisi hariç
  })
});