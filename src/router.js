import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Profile from "./page/profile/profile";
import SignUp from "./page/auth/signup/signup";
import SignIn from "./page/auth/signin/signin";
import Teacher from "./page/teacher/teacher";
import Dashboard from "./page/dashboard/dashboard";
import Teachers from "./page/admin/teacher/teachers";
import Students from "./page/admin/student/students";
import UpdateProfile from "./page/profile/updateProfile";
import CreateTeacher from "./page/admin/teacher/createTeacher";
import CreateStudent from "./page/admin/student/createStudent";
import UpdateTeacher from "./page/admin/teacher/updateTeacher";
import UpdateStudent from "./page/admin/student/updateStudent";
import TeacherDashboard from "./page/dashboard/teacherDashboard";

function Router() {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    getTeacher();
  }, []);

  async function getTeacher() {
    let result = await fetch("http://127.0.0.1:8000/api/listTeachers");
    result = await result.json();
    setTeacher(result);
  }

  return (
    <Routes>
     <Route path="/" element={<Dashboard/>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/updateProfile" element={<UpdateProfile/>}/>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/singIn" element={<SignIn />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/students" element={<Students />} />
      <Route path="/createStudent" element={<CreateStudent />} />
      <Route path="/createTeacher" element={<CreateTeacher />} />    
      <Route path="/updateTeacher/:id" element={<UpdateTeacher />}/> 
      <Route path="/updateStudent/:id" element={<UpdateStudent />}/>
      <Route path="/teacherDashboard" element={<TeacherDashboard/>}/>
      <Route path="/teacher" element={
        <div>
<h3 className="mt-2 p-0 text-center">Teachers List</h3>
      <div className="card_container m-3">
              {teacher.map((teacherData,index) => (
     <Teacher result={teacherData} key={index}/>
              ))}
              </div>
              </div>}/>
    </Routes>
  );
}

export default Router;
