import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => {
        if (credentials.user.displayName) {
          navigate("/");
        }
      })
      .catch((e) => console.error(e));
  }, [navigate]);
  return <div></div>;
};

export default GoogleAuth;
