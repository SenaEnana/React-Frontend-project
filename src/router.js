import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teacher from "./page/teacher/teacher";
import Student from "./page/student/student";
import SignUp from "./page/auth/signup/signup";
import SignIn from "./page/auth/signin/signin";
import CreateTeacher from "./page/teacher/createTeacher";
import CreateStudent from "./page/student/createStudent";
import Profile from "./page/profile/profile";
import UpdateTeacher from "./page/teacher/updateTeacher";
import UpdateStudent from "./page/student/updateStudent";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/teachers" element={<Teacher />} />
      <Route path="/students" element={<Student />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/singIn" element={<SignIn />} />
      <Route path="/createStudent" element={<CreateStudent />} />
      <Route path="/createTeacher" element={<CreateTeacher />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/updateTeacher/:id" element={<UpdateTeacher />}/>
      <Route path="updateStudent/:id" element={<UpdateStudent />}/>
    </Routes>
  );
}

export default Router;
