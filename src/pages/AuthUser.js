import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AuthUser = () => {
let history = useHistory();

const getToken = () =>{
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}
const getUser = () =>{
    const userString = sessionStorage.getItem('token');
    const user_detail = JSON.parse(userString);
    return user_detail;
}
    const [token, setToken] = useState(getToken());
    const[user,setUser] =useState(getUser());

    const saveToken = (user,token) =>{
       sessionStorage.setItem('token',JSON.stringify(token)); 
       sessionStorage.setItem('user',JSON.stringify(user)); 

       setToken(token);
       setUser(user);
       history.push('/profile');
    }

    const http = axios.create({
            baseURL:"http://localhost:8000/api",
            headers:{
                "Content-type" : "application/json"
            }
        });
  return (
    <div>
        setToken:saveToken,
        token,
        user,
        getToken,
         http
    </div>
  )
}

export default AuthUser

// import axios from 'axios';
// export default function AuthUser(){
//     const http = axios.create({
//         baseURL:"http://localhost:8000/api",
//         headers:{
//             "Content-type" : "application/json"
//         }
//     });
//     return {
//         http
//     }
// }
