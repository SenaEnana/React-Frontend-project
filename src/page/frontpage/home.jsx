import React from "react";
import Image from "../../components/Image";
import { useNavigate } from "react-router-dom";
import NavBar from "../../layouts/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="overflow-none bg-white w-100"></div>
      <div className="sign d-flex me-1">
        <button
          className="btn btn-md btn-primary"
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
