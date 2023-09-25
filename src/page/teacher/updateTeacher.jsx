import { useParams} from "react-router-dom";
import { useEffect,useState } from 'react';

import React from 'react'
import TextInput from '../../components/TextInput';

function UpdateTeacher(){

    let { id } = useParams();
const [data,setData] =useState([]);

useEffect(() => {
      const asyncFn = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/getTeacher/"+id);
    result = await result.json();
    setData(result)
   };
  asyncFn();
  }, []);

  function updateTeacher(){
    // const newData = {
    //     name: data.name,
    //     expert: data.expert,
    //     gender: data.gender,
    //     educationLevel: data.educationLevel,
    //     date: data.date
    // }
    const asyncFn = async () => {
        let result = await fetch("http://127.0.0.1:8000/api/updateTeacher"+id);
        result = await result.json();
        setData(result)
       };
       asyncFn();
  }
    return(
        <div className="row justify-content-center ">
        <form onSubmit={updateTeacher} className="form-group rounded border col-4 pe-3 mt-5 bg-light">
   <h4>Update Teacher</h4>
                <TextInput
                    type="text"
                    name="name"
                    label="Name"
                    value={data.name}
                  />
                <TextInput
                    type="text"
                    name="expert"
                    label="Expert"
                    value={data.expert}
                  />
                       <TextInput
                    type="text"
                    name="gender"
                    label="Gender"
                    value={data.gender}
                  />

                  <TextInput
                    type="text"
                    name="educationLevel"
                    label="EducationLevel"
                    value={data.educationLevel}
                  />
                  <TextInput
                    type="datetime-local"
                    name="date"
                    label="Date"
                    value={data.date}
                  />
               
                  <div className="m-3">
                    <input
                      className="btn btn-success col-12"
                      type="button"
                      value="edit teacher"
                    />
                  </div>
                </form>
                </div>
    )
}

export default UpdateTeacher;
