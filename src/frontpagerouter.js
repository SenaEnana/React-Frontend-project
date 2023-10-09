import { Route, Routes } from "react-router-dom";
import Home from "./page/frontpage/home";
import About from "./page/frontpage/about";
import Contact from "./page/frontpage/contact";
import Service from "./page/frontpage/service";
import SignIn from "./page/auth/signin/signin";
import SignUp from "./page/auth/signup/signup";

function FrontPageRouter(){
    return(
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/service" element={<Service/>}/>
<Route path="/signIn" element={<SignIn/>}/>
<Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    );
}

export default FrontPageRouter;