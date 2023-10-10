import { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import Router from "./router";
import NavBar from "./layouts/Navbar";
import FrontPageRouter from "./frontpagerouter";
import StudentSidebar from "./layouts/studentSidebar";
import TeacherSidebar from "./layouts/teacherSidebar";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("user-login"));
  const role = JSON.parse(localStorage.getItem("role"));
  return (
    <div>
        
       {isAuth ? (
        <div className="col-12 overflow-none bg-white">
        <NavBar/>
          <div className="row col-12">
            {role === "Admin" ?
                <div className="col-2">
                <Sidebar />
                </div>
              : <>
            {role === "Student"? 
            <div className="col-2">
              <StudentSidebar/>
            </div>:
            <div className="col-2">
              <TeacherSidebar/>
            </div>
            }
         </>
         }
            <div className="col-10 ">
            <Router />
            </div> 
          </div>
        </div>
      ) : (
           <div className="col-12 ">
              <FrontPageRouter/>
            </div>  
      )} 
    </div> 
  );
}
export default App;
  
       