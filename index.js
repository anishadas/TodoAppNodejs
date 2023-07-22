const express=require("express")
const bodyParser = require('body-parser')
const port = 8000;
const app = express();
const axios = require("axios").create({ baseUrl: "http://localhost:8000/" });
app.use(express.json());
app.use(express.urlencoded());
// body parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// assets
app.use(express.static('assets'));

app.use('/', require('./routes'));


// listening to server
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running server: ${err}`);
    }
    console.log(`server is running on port ${port}`);

})
