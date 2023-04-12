import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import { Button, Nav, Navbar } from "react-bootstrap";

const Home = () => {
  const [user, setUser] = React.useState(auth.currentUser);
  const navigate = useNavigate();

  const email = user && user.email ? user.email : null;

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser !== null) {
        return setUser(maybeUser);
      }
    });
    if (email === "shevchroma@gmail.com") {
      navigate("/admin");
    }
    return unsubscribe;
  }, [email, navigate]);

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="xs" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <b>USER PAGE</b>
        </Navbar.Brand>
        <Button onClick={logout} variant="primary">
          Logout
        </Button>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Page of CRM</Nav.Link>
            <Nav.Link href="#pricing">Page of CRM</Nav.Link>
            <Nav.Link href="#pricing">Decor</Nav.Link>
            <Nav.Link href="#pricing">Decor</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};
export default Home;
