import {name,usermail,pass,create} from './frontend/userauthentication.js'
import {useState,useEffect} from 'react'
function App()
{
  let [step,ss]=useState("Signup")
    return(

            step==="Signup"? <Signup changestep={ss}/>: <Otp/>

    )
}

function Signup(props)
{


    const [usernamestatus,setus]=useState(0);
    const [passwordstatus,setps]=useState(0);
    const [mailstatus,setms]=useState(0);
    const [username,setusername]=useState("");
    const [mail,setmail]=useState("");
    const [password,setpassword]=useState("")
    const [button,setbutton]=useState(true);
    useEffect( ()=>{
        let a=async ()=>{
            if (username === "") {
                setus(0);
               return;
            }
           setus(await name(username));
            console.log(usernamestatus)

        }
        let timer=setTimeout(a,900);
        return ()=>{
            clearTimeout(timer)
        }
    },[username])


    useEffect( ()=>{
        let a=async ()=>{
            if (mail === "") {
                setms(0)
                return;
            }
            setms(await usermail(mail));
            console.log(mailstatus)

        }
        let timer=setTimeout(a,900);
        return ()=>{
            clearTimeout(timer)
        }
    },[mail])

    useEffect( ()=>{
        let a=async ()=>{
            if (password === "") {
                setps(0);
                return;
            }
            setps(await pass(password));
            console.log(passwordstatus)

        }
        let timer=setTimeout(a,900);
        return ()=>{
            clearTimeout(timer)
        }
    },[password])
    useEffect(()=>{
        if(usernamestatus===200 && mailstatus===200 && passwordstatus===200)
        {coc
            setbutton(false)

        }
        else
        {
            setbutton(true)
        }
    },[usernamestatus,mailstatus,passwordstatus])

    return (<div>
        <p className={"font-[cookie]    text-2xl mb-0 md:text-5xl mt-6 md:mb-4 ml-8"}>Hey there! Ready to turn knowledge
            into fun? <br/>Join Kuiz to create, play, and share quizzes like never before!</p>
        <div className={"flex flex-col md:flex-row md:justify-around"}>
            <div className={"flex flex-col  md:w-[40%] pt-4 md:pt-14 ml-8 md:ml-0"}>
                <div className={"mb-4"}>
                    <div className={"flex "}>
                        <p className={"font-[cookie] text-3xl mr-4"}>Username</p>
                        {usernamestatus === 1 &&
                            <p className={"font-[cookie] text-3xl text-red-500"}>Please enter a username with at least 4 characters</p>

                        }
                        {usernamestatus === 200 &&
                            <p className={"font-[cookie] text-3xl text-green-500"}>Valid Username</p>

                        }
                        {usernamestatus === 409 &&
                            <p className={"font-[cookie] text-3xl text-rose-500"}>Too slow! That name's gone</p>

                        }
                    </div>
                    <input className={"input input-lg w-[90%] md:w-[70%]"} id={"u"}
                           placeholder={"Enter your username"} onChange={(event)=>{
                               setusername(event.target.value)
                    }}/>
                </div>
                <div className={"mb-4"}>
                    <div className={"flex "}>
                        <p className={"font-[cookie] text-3xl mr-4 "}>@Mail</p>
                        {mailstatus === 1 &&
                            <p className={"font-[cookie] text-3xl text-red-500"}>Invalid Mail</p>

                        }
                        {mailstatus === 200 &&
                            <p className={"font-[cookie] text-3xl text-green-500"}>Valid Mail</p>

                        }
                        {mailstatus === 409 &&
                            <p className={"font-[cookie] text-3xl text-rose-500"}>Already in use. Got another email?</p>

                        }
                    </div>
                    <input className={"input input-lg w-[90%] md:w-[70%]"} id={"m"} placeholder={"Enter your Mail id"}
                           onChange={(event)=>{
                               setmail(event.target.value)
                           }}/>
                </div>
                <div className={"mb-4"}>
                    <div className={"flex"}>
                        <p className={"font-[cookie] text-3xl mr-4"}>Password</p>
                        {passwordstatus === 1 &&
                            <p className={"font-[cookie] text-3xl text-rose-500"}>Invalid Password</p>

                        }
                        {passwordstatus === 200 &&
                            <p className={"font-[cookie] text-3xl text-green-500"}>Valid Password</p>

                        }


                    </div>
                    <input className={"input input-lg w-[90%] md:w-[70%]"} id={"p"}
                           placeholder={"Enter your Password"}
                           onChange={(event)=>{
                               setpassword(event.target.value)
                           }}/>
                </div>
                { <button className={"btn btn-primary mb-4 mt-4 font-[cookie] text-3xl w-[90%]"} disabled={button} onClick={async () => {
                    let res=await create(localStorage.getItem("mail"));
                    props.changestep("otp");



                }}>Create Account
                </button>
                }
                <button className={"btn btn-primary font-[cookie] text-3xl w-[90%]"}>Sign in?</button>
            </div>
            <img src={"../images/Online test-pana.png"} className={"md:w-[35%]"}/>
        </div>
    </div>)
}

function Otp()
{
    return(
        <div>
            <div className={"flex justify-center mt-4 ml-4 md:ml-0"}>
                <p className={"font-[cookie] text-3xl  md:text-4xl"}>You're almost there! Just verify the OTP to finish setting up your account</p>
            </div>
            <div className={"flex flex-col-reverse md:flex-col ml-4 md:flex-row md:justify-evenly md:mt-8 "}>
                <img src={".././images/Enter OTP-bro.svg"} className={"w-[80%] ml-6 mt-2 md:w-[35%] md:ml-0 md:mt-0"}/>
                <div className={" md:w-[40%] h-[400px]   flex flex-col justify-evenly md:mt-22"}>
                    <p className={"font-[cookie] text-3xl "} >
                        We've sent an OTP to {localStorage.getItem("mail")}. Please enter it below to verify your  mail
                    </p>
                    <div className={"flex w-[80%] md:w-[50%] justify-evenly ml-4 md:ml-0"}>
                        <input type={"text"} maxLength={1} className={"input w-[15%] md:w-[14%]"} inputMode={"numeric"} onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            } else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                       autoFocus />
                        <input type={"text"} maxLength={1} className={"input w-[15%] md:w-[14%]"} inputMode={"numeric"} onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            } else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] md:w-[14%]"} inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            } else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] md:w-[14%]"} inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            } else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] md:w-[14%]"}  inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            } else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] md:w-[14%]"} inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            } else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />


                    </div>
                    <button className={"btn btn-primary font-[cookie] w-[80%] md:w-[60%] text-2xl ml-4 md:ml-0"}>Verify</button>
                    <div className={" w-[80%] md:w-[60%] flex justify-between ml-4 md:ml-0"}>
                        <button className={"btn btn-primary font-[cookie] w-[49%] md: w-[48%] text-2xl"}>Change Mail</button>
                        <button className={"btn btn-primary font-[cookie] w-[49%] md:w-[48%] text-2xl"}>Send Again</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default App