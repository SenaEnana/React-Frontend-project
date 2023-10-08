import { Route, Routes } from "react-router-dom";
import Home from "./page/frontpage/home";
import About from "./page/frontpage/about";
import Contact from "./page/frontpage/contact";
import Service from "./page/frontpage/service";

function FrontPageRouter(){
    return(
        <Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/service" element={<Service/>}/>
      </Routes>
    );
}

export default FrontPageRouter;