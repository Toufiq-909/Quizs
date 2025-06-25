const {Router}=require("express");
const {user,otp}=require("./db.cjs")
const nodemailer=require("nodemailer")
const userrouter=Router();
userrouter.get("/username",async (req,res)=>{
let finduser=await user.findOne({
    username:req.query.name
})
  if(finduser==null)
  {
      console.log(req.query.name)
      return  res.sendStatus(200);
  }
  else
  {
      return res.sendStatus(409);
  }
})
userrouter.get("/mail",async (req,res)=>{
    let finduser= await user.findOne({
        mail:req.query.mail
    })
    let otpuser= await otp.findOne({
        mail:req.query.mail
    })
    if(finduser==null && otpuser==null)
    {
        return res.sendStatus(200);
    }
    else
    {
        return res.sendStatus(409)
    }
})

userrouter.post("/otp",async (req,res)=>{
    let a=Math.ceil(Math.random()*Math.pow(10,6));
    let b=a.toString();
    if(b.length==5)
    {
        b=b+"0"
    }
    try
    {
        await otp.create({
            mail:req.body.mail,
            otp:b
        })
    }
    catch(e)
    {
        console.log(e);
        return res.sendStatus(500)

    }

    try
    {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kuizotp@gmail.com',
                pass: 'qpnf duwi desn jknn'
            }
        });

        let mailOptions = {
            from: 'kuizotp@gmail.com',
            to: req.body.mail,
            subject: "Email Verification Code Inside",
            text:  `Hi there,

Thank you for signing up for Kuiz!

Your One-Time Password (OTP) for verifying your email is: ${b}

Please enter this code in the app to complete your registration. This code will expire in 5 minutes.

If you didn't request this, please ignore this email.

– Kuiz Team`

    };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return res.sendStatus(200);
    }
    catch(e)
    {
        console.log(e);
        return res.sendStatus(500);
    }




})
module.exports=userrouter