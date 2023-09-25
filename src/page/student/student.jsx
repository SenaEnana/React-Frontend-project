import { NavLink } from "react-router-dom";
import {useState,useEffect} from 'react';

function Student() {

  const [data,setData] =useState([]);

 useEffect(() => {
  // const asyncFn = async () => {
  //   let result = await fetch("http://127.0.0.1:8000/api/listStudents");
  //   result = await result.json();
  //   setData(result)
  //  };
  // asyncFn();
  getData();
}, []);
console.log('result', data);

 async function deleteOperation(id){
let result = await fetch("http://127.0.0.1:8000/api/deleteStudent/"+id,{
  method:"DELETE"
});
result = await result.json();
console.log(result);
getData();
}

async function getData(){
  let result = await fetch("http://127.0.0.1:8000/api/listStudents");
  result = await result.json();
  setData(result)
}
  return (
    <>
         <div className="d-flex justify-content-between mt-5">
        <h5 className="text-start">List of Students</h5>
        <NavLink
          to={"/createStudent"}
          className="float-end btn btn-primary btn-sm mb-2"
        >
          Add new student
        </NavLink>
      </div>
      <div className="rounded-2 border">
        <table className="table table-hover">     
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>grade</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Operations</th>
            </tr>       
          {
          data.map((item)=>
          <tr className="text-light">
            <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.grade}</td>
              <td>{item.subject}</td>
              <td>{item.date}</td>
              <td></td>
            </tr>
            )
            }
          <tbody>
             {data.map((student, index) => (
              <tr key={index}>
                {Object.values(student).map((item) => (
                  <td key={item}>{item}</td>
                ))} 
                <td>
                  <button className="btn btn-outline-info btn-sm" type="button">
                    Edit
                  </button>
                  <button
                  onClick={()=>deleteOperation(student.id)}
                    className="btn btn-outline-danger ms-1 btn-sm"
                    type="button"
                  >
                    Remove
                  </button>
                </td> 
              </tr>
             ))}
          </tbody> 
        </table>
      </div> 
    </> 
  );
}
export default Student;
