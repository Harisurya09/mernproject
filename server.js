const express = require('express')
const cors = require('cors');
require('./database/dbconnection');
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser');
//routers
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3999;

app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use(bodyparser())
app.use(express.urlencoded({ extended: false}));  // decode the encoded url and get the json data from client side
app.use(express.static(path.join(__dirname, './client/', 'build')));
app.use(userRouter); 
app.use(productRouter); // router middleware... in order to perform routing.


app.listen(PORT, ()=>{
    console.log('Server is up and running on Port ' + PORT)
})
