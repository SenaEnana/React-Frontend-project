import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Additional from "./pages/Additional";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Reset from './components/Reset';
import ForgotPassword from './components/ForgotPassword';
import Information from './pages/Information';
import Profile from './pages/Profile';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

// import ErrorPage from "./pages/ErrorPage";

function App() {
  //this are the code used for all of the page that we are going to use them
//   window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// let token = document.head.querySelector('meta[name="csrf-token"]');

// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }
  return (
<div>
<Router>
<Switch>
  {/* The file and the button that are inside the home components can be here if needed */}
<Route className ="p-3 m-3" exact path="/" component={Home}/>
  <Route className ="p-3 m-3" path="/about" component={About} />
 <Route className ="p-3 m-3" path="/contact" component={Contact} />
 <Route className ="p-3 m-3" path="/additional" component={Additional} />
 <Route className ="p-3 m-3" path="/login" component={Login} />
 <Route className ="p-3 m-3" path="/signUp" component={SignUp} />
 <Route className ="p-3 m-3" path="/reset" component={Reset} />
 <Route className ="p-3 m-3" path="/forgotPass" component={ForgotPassword} />
 <Route className ="p-3 m-3" path="/information" component={Information} />
 <Route className ="p-3 m-3" path="/profile" component={Profile} />
 <Route className ="p-3 m-3" path="/studying" component={Student} />
 <Route className ="p-3 m-3" path="/teaching" component={Teacher} />
{/* <Route className ="p-3 m-3" path="/users" component={Users}/>  */}
 </Switch>
 </Router> 
</div>
    );
  }
export default App;
