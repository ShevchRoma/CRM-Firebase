import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { tripsCollection } from "../../firebase/firestore.collection";

const AdminPage = () => {
  const [countPessengers, setCountPessengers] = React.useState("2");
  const [carNumber, setCarNumber] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSelectChange = (e) => {
    setCountPessengers(e.target.value);
  };
  const createTrip = (e) => {
    e.preventDefault();
    if (from === "" || to === "") {
      alert("Поля не повиннi бути пустими!");
      return;
    } else {
      addDoc(tripsCollection, {
        pessengers: countPessengers,
        carNumber,
        from,
        to,
      })
        .then((response) => {
          console.log(response);
          alert("Поїздку створено!");
        })
        .catch((error) => {
          console.log(error);
          alert("Сталася помилка!");
        });
    }
    setCarNumber("");
    setFrom("");
    setTo("");
  };
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="xs" bg="primary" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <b>ADMIN PAGE</b>
        </Navbar.Brand>
        <Button onClick={logout} variant="success">
          Logout
        </Button>
        <Navbar.Collapse className="mt-4" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#pricing">Page of CRM</Nav.Link>
            <Nav.Link href="#pricing">Page of CRM</Nav.Link>
            <Nav.Link href="/edit">
              <b>Редагування користувачiв</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Form onSubmit={createTrip} className="mt-4">
          <h1 className="display-6 text-center">Створити поїздку</h1>
          <Form.Group className="mb-3">
            <Form.Label>Сar number</Form.Label>
            <Form.Control
              onChange={(e) => setCarNumber(e.target.value)}
              type="text"
              placeholder="Сar number"
              value={carNumber}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>From</Form.Label>
            <Form.Control
              onChange={(e) => setFrom(e.target.value)}
              type="text"
              placeholder="Enter the starting address of the trip"
              value={from}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>To</Form.Label>
            <Form.Control
              onChange={(e) => setTo(e.target.value)}
              type="text"
              placeholder="Enter the final address of the trip"
              value={to}
            />
          </Form.Group>
          <Form.Label>number of passengers</Form.Label>
          <Form.Control
            onChange={onSelectChange}
            className="mb-3 w-50"
            size="sm"
            as="select"
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default AdminPage;
