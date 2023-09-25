import React from "react";
import Image from "../components/Image";
import Button from "../components/Button";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  // let history = useHistory();
  return (
    <div>
      <div className="float-end d-flex mt-4">
        {localStorage.getItem("user-info") ? (
          <></>
        ) : (
          <>
            <Button
              title="Sign up"
              className="btn btn-lg bg-warning fs-5 p-1 m-2 float-end d-flex"
              onClick={() => {
                // history.push("/signUp");
              }}
            />
            <i className="fa fa-hand-o-right fs-4 p-3 float-end d-flex"></i>
            <Button
              title="Already have an account?"
              className="btn btn-lg fs-5 p-1 m-1 text-info float-end d-flex"
              onClick={() => {
                // history.push("/login");
              }}
            />
          </>
        )}
      </div>
      <Image />
    </div>
  );
};

export default Home;
