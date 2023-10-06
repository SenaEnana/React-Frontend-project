import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./page/profile/profile";
import SignUp from "./page/auth/signup/signup";
import SignIn from "./page/auth/signin/signin";
import Teacher from "./page/admin/teacher/teacher";
import Student from "./page/admin/student/student";
import CreateTeacher from "./page/admin/teacher/createTeacher";
import CreateStudent from "./page/admin/student/createStudent";
import UpdateTeacher from "./page/admin/teacher/updateTeacher";
import UpdateStudent from "./page/admin/student/updateStudent";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/singIn" element={<SignIn />} />
      <Route path="/teachers" element={<Teacher />} />
      <Route path="/students" element={<Student />} />
      <Route path="/createStudent" element={<CreateStudent />} />
      <Route path="/createTeacher" element={<CreateTeacher />} />    
      <Route path="/updateTeacher/:id" element={<UpdateTeacher />}/> 
      <Route path="/updateStudent/:id" element={<UpdateStudent />}/>
    </Routes>
  );
}

export default Router;
