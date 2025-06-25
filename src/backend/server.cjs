const express=require('express');
const user=require("./user.cjs");
const mon=require("mongoose");
const cors=require("cors");
const app=express();
require('dotenv').config();
let a=async ()=>{
    await check();
}
a()
app.use(cors({
    origin:["https://quizs-ed8a.onrender.com","http://localhost:3000"]
}))
app.use(express.json())
app.use("/user",user)
app.listen(3000)
async function check()
{
    try{
        await mon.connect(process.env.monconnect)

    }
    catch(e)
    {
        console.log("database connection failed")
    }
}

