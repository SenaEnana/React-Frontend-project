// this is the code for the first app.js file or page
// import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './App.css';

// class App extends Component {
//   render () {
//     return (
//       <BrowserRouter>
//         <div>
//           <Switch>
            
//           </Switch>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'))

// While the installation continues, open the app.js file in the resources/js/ directly and update the code found there with this one:

//     require('./bootstrap')
//     require('./components/App')
// The Signup page
// We will create a folder called pages in the resources/js/components/ directory where we will create the signup page, name it Register.jsx, and add it to the folder. Add the following code inside it.

// import React, { Component } from 'react';
// import axios from "axios";
// import wave from 'https://terrence-aluda.com/wave.png'
// import bg from 'https://terrence-aluda.com/bg.svg'
// import avatar from 'https://terrence-aluda.com/avatar.svg'

// class Register extends Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             firstname : '',
//             lastname : '',
//             email : '',
//             phone : '',
//             NatID : '',
//             password : '',
//             userLevel : 'Job Expert'
//         }

//         this.firstName = this.firstName.bind(this);
//         this.lastName = this.lastName.bind(this);
//         this.takePhone = this.takePhone.bind(this);
//         this.takeEmail = this.takeEmail.bind(this);
//         this.takeID = this.takeID.bind(this);
//         this.takePassword = this.takePassword.bind(this);
//         this.takeLevel = this.takeLevel.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     firstName(event){
//         this.setState({firstname : event.target.value})
//     }
//     lastName(event){
//         this.setState({lastname : event.target.value})
//     }
//     takePhone(event){
//         this.setState({phone : event.target.value})
//     }
//     takeEmail(event){
//         this.setState({email : event.target.value})
//     }
//     takeID(event){
//         this.setState({ID : event.target.value})
//     }
//     takePassword(event){
//         this.setState({password : event.target.value})
//     }
//     takeLevel(event){
//         this.setState({userLevel : event.target.value})
//     }

//     handleSubmit(){
    
//         const packets = {
//             firstname:  this.state.firstname,
//             lastname: this.state.lastname,
//             email: this.state.email,
//             phone: this.state.phone,
//             NatID: this.state.ID,
//             userLevel: this.state.userLevel,
//             password: this.state.password
//         };
//         axios.post('/sendrequest', packets)
//             .then(
//                 response => alert(JSON.stringify(response.data))
                
//                 )
//             .catch(error => {
//                 console.log("ERROR:: ",error.response.data);
                
//                 });
//     }

//     render(){
//         return (
// <div>
            
//             <img class="wave" src={wave} alt="img"/>
//             <div class="container">
//                 <div class="img">
//                     <img src={bg} alt="img"/>
//                 </div>
//                 <div class="login-content">
//                     <form>
//                         <img src={avatar} alt="img"/>
//                         <h2 class="title">Register</h2>
//                            <div class="input-div one">
//                               <div class="i">
//                                       <i class="fas fa-user"></i>
//                               </div>
//                               <div class="div">
//                                       <h5></h5>
//                                       <input type="text" placeholder="First Name" onChange={this.firstName} class="input"/>
//                               </div>
//                            </div>
            
//                            <div class="input-div one">
//                               <div class="i">
//                                       <i class="fas fa-user"></i>
//                               </div>
//                               <div class="div">
//                                       <h5></h5>
//                                       <input type="text" placeholder="Last Name" onChange={this.lastName} class="input"/>
//                               </div>
//                            </div>
            
//                            <div class="input-div pass">
//                               <div class="i"> 
//                                    <i class="fas fa-envelope-square"></i>
//                               </div>
//                               <div class="div">
//                                    <h5></h5>
//                                    <input type="email" placeholder="Email" onChange={this.takeEmail} class="input" />
//                            </div>
//                         </div>
            
//                         <div class="input-div pass">
//                               <div class="i"> 
//                                    <i class=""></i>
//                               </div>
//                               <div class="div">
//                               <select onChange={this.takeLevel} name="userLevel">
//                                     <option value="">Choose level</option>                                 
//                                     <option value="Job Expert">Job Expert</option>
//                                     <option value="Client">Client</option>
//                                 </select>
//                            </div>
//                         </div>
            
//                         <div class="input-div pass">
//                               <div class="i"> 
//                                    <i class="fas fa-id-card"></i>
//                               </div>
//                               <div class="div">
//                                    <h5></h5>
//                                    <input type="number" placeholder="National ID" onChange={this.takeID} class="input" />
//                            </div>
//                         </div>
            
//                         <div class="input-div pass">
//                               <div class="i"> 
//                                    <i class="fas fa-phone"></i>
//                               </div>
//                               <div class="div">
//                                    <h5></h5>
//                                    <input type="number" placeholder="Phone Number" onChange={this.takePhone} class="input" />
//                            </div>
//                         </div>
            
//                            <div class="input-div pass">
//                               <div class="i"> 
//                                    <i class="fas fa-lock"></i>
//                               </div>
//                               <div class="div">
//                                    <h5></h5>
//                                    <input type="password" placeholder="Password" onChange={this.takePassword} class="input" />
//                            </div>
//                         </div>
            
//                         <div class="input-div pass">
//                               <div class="i"> 
//                                    <i class="fas fa-lock"></i>
//                               </div>
//                               <div class="div">
//                                    <h5></h5>
//                                    <input type="password" placeholder="Confirm Password" class="input" />
//                            </div>
//                         </div>
//                         <input type="submit" class="btn" onClick={this.handleSubmit} value="Register"/>
//                     </form>
//                 </div>
//             </div>
                    
//                 </div>
//         );
//     }
// }
// export default Register;
// Explanation
// We reference the images we’ll be using on the page.

// The constructor then initializes state values and binds the component’s functions.

// The succeeding functions are used to take values from the inputs they are called from after a user types them in, then sets the state values appropriately.

// The handleSubmit() function is called when the submit button is clicked. The function contains an object called packets with properties from the state object. This is then passed in the Axios post method as a request to the Laravel controller route we created.

// After the request, we retrieve the results and display it in an alert using the JSON.stringify() method which converts the object returned to a string. If there is an error during the process, it is shown in the console after being ‘caught’.

// Adding the styling for the page and updating the App.jsx file
// For the styling, you can customize and add your own but what we will be using to format our page, is in the CSS code below.

// Open resources/js/components/App.css and add this code:

// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Roboto:wght@100&display=swap');

// :root{
//   --nav-width: 68px;

//   /* colors */
//   --first-color: #00BFA6/*#472347D9*/;
//   --first-color-light: #fff/*#AFA5D9*/;
//   --white-color: #F7F6FB;

//   /* === Font and Typography */
//   --body-font: 'Nunito', sans-serif;
//   --normal-font-size: 1rem;
//   /* z-index */
//   --z-fixed: 100;
// }

// body{
//   font-family: Nunito, sans-serif;
//   position: relative;
//   /* margin: var(--header-height) 0 0 0; */
//   margin: 0;
//   padding: 0;
//   font-family: var(--body-font);
//   font-size: var(--normal-font-size);
//   transition: .5s;
// }

// *, ::before, ::after{
//   box-sizing: border-box;
// }

// body::-webkit-scrollbar{
//   width: 8px;
// }

// body::-webkit-scrollbar-thumb{
//   background-color: rgb(36, 36, 36);
// }
// body::-webkit-scrollbar-track{
//   background-color: rgb(235, 236, 235);
// }

// .login-register{
//   display: flex;
//   justify-content: space-between;
// }
// .login-register a{
//   margin-right: 6px;
// }
// a{
//   text-decoration: none;
// }

// form {
//   background: white;
//   border: 1px solid #dedede;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   margin: 0 auto;
//   max-width: 500px;
//   padding: 30px 50px;
// }
// button{
//   border: none;
//   border-radius: 5px;
// }


// input,select {
//   border: 1px solid #d9d9d9;
//   border-radius: 4px;
//   box-sizing: border-box;
//   padding: 10px;
//   width: 100%;
// }

// label {
//   color: #3d3d3d;
//   display: block;
//   font-family: sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   margin-bottom: 5px;
// }

// li{
//   list-style: none;
//   margin: 0 10px;
// }


// /**Login**/

// .wave{
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   height: 100%;
//   z-index: -1;
// }

// .container{
//     width: 100vw;
//     height: 100vh;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap :7rem;
//     padding: 0 2rem;
// }

// .img{
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// }

// .login-content{
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   text-align: center;
// }

// .img img{
//   width: 500px;
// }

// form{
//   width: 360px;
// }

// .login-content img{
//     height: 100px;
// }

// .login-content h2{
//   margin: 15px 0;
//   color: #333;
//   text-transform: uppercase;
//   font-size: 2.9rem;
// }

// .login-content .input-div{
//   position: relative;
//     display: grid;
//     grid-template-columns: 7% 93%;
//     margin: 25px 0;
//     padding: 5px 0;
//     border-bottom: 2px solid #d9d9d9;
// }

// .login-content .input-div.one{
//   margin-top: 0;
// }

// .i{
//   color: #d9d9d9;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .i i{
//   transition: .3s;
// }

// .input-div > div{
//     position: relative;
//   height: 45px;
// }

// .input-div > div > h5{
//   position: absolute;
//   left: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #999;
//   font-size: 18px;
//   transition: .3s;
// }

// .input-div:before, .input-div:after{
//   content: '';
//   position: absolute;
//   bottom: -2px;
//   width: 0%;
//   height: 2px;
//   background-color: #38d39f;
//   transition: .4s;
// }

// .input-div:before{
//   right: 50%;
// }

// .input-div:after{
//   left: 50%;
// }

// .input-div.focus:before, .input-div.focus:after{
//   width: 50%;
// }

// .input-div.focus > div > h5{
//   top: -5px;
//   font-size: 15px;
// }

// .input-div.focus > .i > i{
//   color: #38d39f;
// }

// .input-div > div > input{
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   border: none;
//   outline: none;
//   background: none;
//   padding: 0.5rem 0.7rem;
//   font-size: 1.2rem;
//   color: #555;
//   font-family: 'poppins', sans-serif;
// }

// .input-div.pass{
//   margin-bottom: 4px;
// }

// a{
//   display: block;
//   text-align: right;
//   text-decoration: none;
//   color: #999;
//   font-size: 0.9rem;
//   transition: .3s;
// }

// a:hover{
//   color: #38d39f;
// }

// .btn{
//   display: block;
//   width: 100%;
//   height: 50px;
//   border-radius: 10px;
//   outline: none;
//   border: none;
//   background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
//   background-size: 200%;
//   font-size: 1.2rem;
//   color: #fff;
//   font-family: 'Poppins', sans-serif;
//   text-transform: uppercase;
//   margin: 1rem 0;
//   cursor: pointer;
//   transition: .5s;
// }
// .btn:hover{
//   background-position: right;
// }


// @media screen and (max-width: 1050px){
//   .container{
//     grid-gap: 5rem;
//   }
// }

// @media screen and (max-width: 1000px){
//   form{
//     width: 290px;
//   }

//   .login-content h2{
//         font-size: 2.4rem;
//         margin: 8px 0;
//   }

//   .img img{
//     width: 400px;
//   }
// }

// @media screen and (max-width: 900px){
//   .container{
//     grid-template-columns: 1fr;
//   }

//   .img{
//     display: none;
//   }

//   .wave{
//     display: none;
//   }

//   .login-content{
//     justify-content: center;
//   }
// }

// /**fire**/
// .fa-fire{
//   color: rgb(255,102,102);
//   font-size: 3.8rem;
// }

// footer{
//   font-size: 1.5rem;
//   padding: 0.8rem;
//   text-align: center;
//   background-color: rgb(20, 20, 20);
//   color:#F7F6FB;
//   }

// .dash{
//   background-color:#f2f4f6;
//   min-width: 60vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .card-header{
//   background-color: #32be8f;
//   color: #fff;
// }

// .list-group-flush li:first-child{
//   font-size: 1.8rem;
//   color: blue;
//   text-decoration: underline;
// }

// .list-group-flush li:nth-child(2){
//   color: #6026ff;
//   font-size: 1.1rem;
//   font-weight: 500;
// }

// .list-group-flush{
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// }
// We update the App.jsx file with the routes to display with this code snippet:

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './App.css';
// import RegisterPage from './pages/Register';

// class App extends Component {
//   render () {
//     return (
//       <BrowserRouter>
//         <div>
//           <Switch>
//             <Route exact path='/' component={RegisterPage} />     
//           </Switch>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'))
// Running the app