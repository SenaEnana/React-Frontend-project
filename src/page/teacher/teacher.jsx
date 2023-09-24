import { NavLink } from "react-router-dom";
import {useState,useEffect} from 'react';

const Teacher = () => {

  const [data,setData] =useState([]);

 useEffect(() => {
  const asyncFn = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/listTeachers");
    result = await result.json();
    setData(result)
   };
  asyncFn();
}, []);
console.log('result', data);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h5 className="text-start">List of Teacher</h5>
        <NavLink
          to={"/createTeacher"}
          className="float-end btn btn-primary btn-sm mb-2"
        >
          Add new teacher
        </NavLink>
      </div>
      <div className="rounded-2 border">
        <table className="table table-hover">
          <thead>
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Education</th>
              <th>Expert</th>
              <th>Date</th>
              <th>Created At</th>
              <th>Updated At</th>
              <td></td>
            </tr>
          </thead>
          {
          data.map((item)=>
          <tr className="text-light">
            <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.education}</td>
              <td>{item.expert}</td>
              <td>{item.date}</td>
              <td>{item.created}</td>
              <td>{item.updated}</td>
              <td></td>
            </tr>
            )
            }
          <tbody>
            {data.map((teacher, index) => (
              <tr key={index}>
                {Object.values(teacher).map((item) => (
                  <td key={item}>{item}</td>
                ))}
                <td>
                  <button className="btn btn-outline-info btn-sm" type="button">
                    Edit
                  </button>
                  <button
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
};
export default Teacher;
