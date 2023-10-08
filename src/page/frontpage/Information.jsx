import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Information = () => {
  let history = useHistory();
  return (
    <div>
    <button className="btn btn-lg text-warning bg-dark float-end mt-0" onClick={() =>{history.push('/')}}>Go back</button>
        <div className="mt-4">
        <h3 className="text-dark fw-light mt-4">How it works?</h3>
        <p className="fs-4 text-dark fw-light">
                 Thank you for visiting our website!!!
                 Our website is simple and easy to use and if
                 you want to use it here is how it works first
                 you have to sign up to have an account by
                 clicking the sign up button and you
                 have to finish the
                 registration in the additional page.</p>
                  <p className="fs-4 text-dark fw-light">In the additional page you will get the form that has 
                  some additional information about your need and you have to fill the form correctly and check if there are empty
                   spaces that are not filled if so then fill them properly.
                  then after you fill the form and all the registrations
                 are done you will get the message that shows that you 
                 are successfully registered.</p>
                 <p className="fs-4 text-dark fw-light">Finally our website will send You
                 email whenever your appropriate student or teacher is ready so you can get
                 what you are looking for in the short period of time so this is how our website work Thank you. 
                  
        </p>
        </div>
        <div>
            <footer>
                <h4 className="fw-bold">Work with us for better experience!!!</h4>
            </footer>
        </div>
    </div>
  )
}

export default Information;