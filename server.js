const express = require("express");
const app = express();

app.post("/status", (req, res) =>{
    res.status(200).json({msg: "you did a nice job, keep it up"})
})
app.get("/status", (req, res)=>{
    res.status(201).json({msg: "create a controller and send request using the terminal"})
    console.log("request created");
})


const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`server is running on localhost: ${PORT}`);
})