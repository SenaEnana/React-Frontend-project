import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teacher from "./page/teacher/teacher";
import Student from "./page/student/student";
import SignUp from "./page/auth/signup/signup";
import SignIn from "./page/auth/signin/signin";
function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/teachers" element={<Teacher />} />
      <Route path="/students" element={<Student />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/singIn" element={<SignIn />} />
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
