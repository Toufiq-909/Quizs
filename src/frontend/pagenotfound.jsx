import {useNavigate} from "react-router-dom"
export default function Pagenotfound()
{
    let nav=useNavigate();
    return(

             <div className={"flex flex-col items-center justify-evenly background-red-900 h-[85vh] lg:h-[90vh]"}>
            <img src={"/images/404.png"} className={"lg:w-[35%]"}/>
                 <p className={"font-[cookie] text-4xl text-[#407bff] font-light"}>Oops! Looks like you're lost.</p>
                 <button className={"btn btn-primary font-[cookie] w-[80%] text-4xl lg:w-[30%]"} onClick={()=>{
                     nav("/",{
                         replace:true
                     })
                 }}>Take me Back to Home</button>
             </div>

)
}