import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teacher from "./page/teacher/teacher";
import SignUp from "./page/auth/signup/signup";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/teachers" element={<Teacher />} />
      <Route path="/signOut" element={<SignUp />} />
      {/*    <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/additional" component={Additional} />
            <Route path="/reset" component={Reset} />
            <Route path="/forgotPass" component={ForgotPassword} />
            <Route path="/information" component={Information} />
            <Route path="/profile" component={Profile} />
            <Route path="/studying" component={Student} />
            <Route path="/teaching" component={Teacher} /> */}
    </Routes>
  );
}

export default Router;
