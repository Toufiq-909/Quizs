import {validpassword,validmail,validusername} from "./validation.js"
let api_url=import.meta.env.VITE_apicall
export  async function name(a) {
    let result = validusername.safeParse(a);

    if (result.success) {
        console.log(a)
        let res=await fetch(api_url+"/user/username?name="+a);
        if(res.status==200)
        {
            localStorage.setItem("name",a);
        }
        return res.status;


    } else {
        return 1;
    }

}
export async function usermail(b)
{
    let result=validmail.safeParse(b);
    if(result.success)
    {
        let res=await fetch(api_url+"/user/mail?mail="+b);
        if(res.status==200)
        {
            localStorage.setItem("mail",b);
        }
        return res.status;

    }
    else
    {
        return 1;
    }
}
export async function pass(c)
{
    let result=validpassword.safeParse(c);
    if(result.success)
    {
        localStorage.setItem("password",c);
        return 200;
    }
    else
    {
        return 1;
    }
}
export async function create(b)
{
    let res=await fetch(api_url+"/user/otp",{
        method:"Post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            mail:b
        })
    })
    return res.status;
}
console.log("hello there")