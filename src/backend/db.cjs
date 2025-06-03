const mon=require("mongoose");
const s1=new mon.Schema({
    username:{
        type:String,
        unique:true
    },
    mail:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})
let s2=new mon.Schema({
    mail:{
        type:String,
        unique:true
    },
    otp:String
})
const usermodel=mon.model('users',s1);
const otpmodel=mon.model("otp",s2)
module.exports={
    user:usermodel,
    otp:otpmodel
}