import { useState } from "react";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Router from "./router";
import Auth from "./page/auth/auth";

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      {isAuth ? (
        <div className="col-12 overflow-none bg-white">
          <Navbar />
          <div className="row col-12">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10 ">
              <Router />
            </div>
          </div>
        </div>
      ) : (
        <Auth setAuth={setAuth} />
      )}
    </>
  );
}
export default App;
