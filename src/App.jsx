import {Signup,Otp} from "./frontend/Authentication.jsx"
import Pagenotfound from "./frontend/pagenotfound.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App()
{

    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Signup/>}/>
                <Route path={"/otp"} element={<Otp/>}/>
                <Route path={"*"} element={<Pagenotfound/>}/>
            </Routes>
        </BrowserRouter>



    )
}



export default App