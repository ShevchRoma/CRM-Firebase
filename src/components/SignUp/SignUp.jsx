import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { Button, Form } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const [role, setRole] = React.useState("driver");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const usersCollection = collection(db, "users");
        addDoc(usersCollection, { name, email, age: 31, role });
        navigate("/auth");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("пользователь с такой почтой уже есть");
        }
      });
  };

  return (
    <div className="container-my">
      <Form onSubmit={signUp}>
        <h1 className="display-6">Sign Up</h1>
        <Form.Group className="mb-3">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
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
        <Form.Label>Select a role</Form.Label>
        <Form.Control
          onChange={(e) => setRole(e.target.value)}
          className="mb-3 w-50"
          size="sm"
          as="select"
        >
          <option>driver</option>
          <option>pessenger</option>
          <option>dispatcher</option>
        </Form.Control>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
