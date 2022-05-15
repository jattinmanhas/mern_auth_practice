const express = require('express');
const mongoose = require('mongoose');
const dotnev = require('dotenv');
const cookieparser = require('cookie-parser')
const cors = require('cors')

dotnev.config();

//set up the server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
})

app.use(express.json());
app.use(cookieparser());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials: true,
}));

//connect to mongoDb
mongoose.connect(process.env.MDB_CONNECT,(err) =>{
    if(err) return console.log(err);
    console.log("Connected to Mongo Db");
});

//set up routes

app.use("/auth",require("./routers/userRouter"));
app.use("/customer",require("./routers/customerRouter"));