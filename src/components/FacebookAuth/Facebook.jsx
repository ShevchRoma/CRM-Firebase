import React from "react";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const FacebookAuth = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    signIn();
  }, []);

  const signIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        //const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        if (accessToken) {
          navigate("/");
        } else {
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return <div></div>;
};

export default FacebookAuth;
