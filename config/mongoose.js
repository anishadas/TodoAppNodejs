const mongoose = require('mongoose');
// connect to db
mongoose.connect('mongodb://localhost/todo_list_db');
// accquire the connectin to check if it is successful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'connection error to db'));

// up & running
db.once('open', function () {
    console.log("successfully connected to database");
});