import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthEmail = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Fields must not be empty ");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/user-not-found") {
          alert("Користувач з даною поштою не знайдений!Зареєструйтесь!");
        } else if (error.code === "auth/wrong-password") {
          alert("Неправильний пароль!");
        }
      });
  };

  return (
    <div className="container-my">
      <Form>
        <h1 className="display-6">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={signIn} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthEmail;
