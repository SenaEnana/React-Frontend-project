import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
 import "./styleG.css";
import { BrowserRouter } from "react-router-dom";
// import ReactDOM from 'react-dom/client'; 
import ReactDOM from 'react-dom';                            
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   // document.getElementById('root');
// );
  

