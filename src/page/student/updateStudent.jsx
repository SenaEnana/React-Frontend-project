import { useParams} from "react-router-dom";
import { useEffect,useState } from 'react';

import React from 'react'
import TextInput from '../../components/TextInput';

function UpdateStudent(){
let { id } = useParams();
const [data,setData] =useState([]);

useEffect(() => {
      const asyncFn = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/getStudent/"+id);
    result = await result.json();
    setData(result)
   };
  asyncFn();
  }, []);
    return(
        <div className="row justify-content-center ">
        <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
            <h4>Update Student</h4>
                <TextInput
                    type="text"
                    name="name"
                    label="Name"
                    value={data.name}
                  />
                       <TextInput
                    type="text"
                    name="gender"
                    label="Gender"
                    value={data.gender}
                  />
                     <TextInput
                    type="grade"
                    name="grade"
                    label="Grade"
                    value={data.grade}
                  />
                  <TextInput
                    type="text"
                    name="subject"
                    label="Subject"
                    value={data.subject}
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
                      value="edit student"
                    />
                  </div>
                </form>
                </div>
    )
}

export default UpdateStudent;