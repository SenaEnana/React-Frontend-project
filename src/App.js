import { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import Router from "./router";
// import Auth from "./page/auth/auth";
import NavBar from "./layouts/Navbar";
import FrontPageRouter from "./frontpagerouter";
import StudentSidebar from "./layouts/studentsidebar";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("user-login"));
  return (
    <div>
        
       {isAuth ? (
        <div className="col-12 overflow-none bg-white">
        <NavBar/>
          <div className="row col-12">
            {localStorage.getItem("user-role") ? (
             <div className="col-2">
              <Sidebar />
            </div>
            ) : (
            <div className="col-2">
            <StudentSidebar/>
            </div>)}
            <div className="col-10 ">
              <Router />
            </div> 
          </div>
        </div>
      ) : (
           <div className="col-12 ">
            {/* <Auth setAuth={setAuth}/ > */}
              <FrontPageRouter/>
            </div>  
      )} 
    </div> 
  );
}
export default App;
  
       