import { Link } from "react-router-dom";
import Image from "../../components/Image";
import FrontPageHeader from "../../components/frontpageheader";

const Contact = () => {
  return (
    <div>
      <FrontPageHeader />
      <div className="float-end mt-5">
        <h4 className="fw-light text-dark p-1">
          Phone No:
          <Link className="fw-light text-dark p-1 fs-4">0987645202</Link>
        </h4>

        <h4 className="fw-light text-dark p-1">
          Email:<Link className="fw-light p-1">senaenanu@gmail.com</Link>
        </h4>
      </div>
      <Image />
      <h3 className=" fw-light text-secondary text-centre">
        You Can Contact Us!!!
      </h3>
      {/* <div className="float-end">
        <h4 className="fw-light text-dark p-1">Phone No:<Link className="fw-light text-dark p-1 fs-4">0987645202</Link></h4>
        
        <h4 className="fw-light text-dark p-1">Email:<Link className="fw-light p-1">senaenanu@gmail.com</Link></h4>
            
        
        </div> */}
    </div>
  );
};

export default Contact;
