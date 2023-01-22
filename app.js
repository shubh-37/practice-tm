const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const bodyParser = require("body-parser");

//middleware
app.use(express.json()); //to convert all the incoming request into json
app.use(bodyParser.json());

//routes
app.use("/api/v1/tasks",tasks); 

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, console.log("server running on port: 3000"));
    } catch (error) {
        console.log(error);
    }
}

start();

