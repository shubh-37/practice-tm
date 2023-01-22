const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

app.use("/api/v1/tasks",tasks); 
app.use(express.json()); //to convert all the incoming request into json

app.listen(3000, console.log("server running on port: 3000"));
