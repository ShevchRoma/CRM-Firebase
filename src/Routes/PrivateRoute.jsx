import React from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";

export const PrivateRoute = () => {
  const [user, setUser] = useState(auth.currentUser);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser !== null) {
        return setUser(maybeUser);
      }
    });
    return unsubscribe;
  }, []);

  return user !== null ? <Home /> : <Auth />;
};
