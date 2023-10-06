import { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import Router from "./router";
import Auth from "./page/auth/auth";
import NavBar from "./layouts/Navbar";
import Student from "./page/student/student";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("user-login"));
  return (
    <>
      {isAuth ? (
        <div className="col-12 overflow-none bg-white">
        <NavBar/>
          <div className="row col-12">
            {/* <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10 ">
              <Router />
            </div> */}
            <Router />
            {/* <Student/> */}
          </div>
        </div>
      ) : (
        <Auth setAuth={setAuth} />
      )}
    </>
  );
}
export default App;
