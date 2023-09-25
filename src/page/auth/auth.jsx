import { useState } from "react";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";

function Auth({ setAuth }) {
  const [loginStatus, setLoggedIn] = useState(true);
  return (
    <>
      {loginStatus ? (
        <SignIn setLoggedIn={setLoggedIn} setAuth={setAuth} />
      ) : (
        <SignUp setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}
export default Auth;
