import React from "react";
import "./Auth.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Auth = () => {
  const navigate = useNavigate();

  const signWithEmail = () => {
    navigate("/email");
  };
  const signInWithGoogle = () => {
    navigate("/google");
  };
  const signInWithTel = () => {
    navigate("/tel");
  };
  const signInWithFacebook = () => {
    navigate("/fb");
  };
  const signUp = () => {
    navigate("/signup");
  };
  return (
    <div className="container-my">
      <h2 className="display-6">Sign In</h2>
      <ListGroup className="mt-4">
        <ListGroup.Item
          onClick={signInWithFacebook}
          className="d-flex justify-content-center align-items-center fw-bold mb-2"
          action
          variant="primary"
        >
          <span>Facebook</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </ListGroup.Item>
        <ListGroup.Item
          onClick={signWithEmail}
          className="d-flex justify-content-center align-items-center fw-bold mb-2"
          action
          variant="secondary"
        >
          <span>Email </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </ListGroup.Item>
        <ListGroup.Item
          onClick={signInWithTel}
          className="d-flex justify-content-center align-items-center fw-bold mb-2"
          action
          variant="success"
        >
          <span>Telephone</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-phone"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </ListGroup.Item>
        <ListGroup.Item
          onClick={signInWithGoogle}
          className="d-flex justify-content-center align-items-center fw-bold mb-2"
          action
          variant="warning"
        >
          <span>Google</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
        </ListGroup.Item>
      </ListGroup>
      <p className="d-flex justify-content-center mt-2">OR</p>
      <Button
        onClick={signUp}
        className="d-flex justify-content-center w-100"
        variant="primary"
        size="lg"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Auth;
