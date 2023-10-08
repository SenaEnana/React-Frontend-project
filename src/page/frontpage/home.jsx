import React from "react";
import Image from "../../components/Image";
import { useNavigate } from "react-router-dom";
import FrontPageHeader from "../../components/frontpageheader";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="overflow-none bg-white w-100">
        <FrontPageHeader />
      </div>
      <div className="float-end d-flex mt-4">
        <button
          className="btn btn-md btn-primary sign-in"
          onClick={() => {
            navigate("/signIn");
          }}
        >
          sign in
        </button>
      </div>
      <Image />
    </div>
  );
};

export default Home;
