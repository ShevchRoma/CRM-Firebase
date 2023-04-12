import React, { useState } from "react";
import "./EditUsers.css";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { BsFillPencilFill } from "react-icons/bs";
import { Button, Form, ListGroup, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditUsers = () => {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("");
  const [visibleEdit, setVisibleEdit] = useState(false);
  const history = useNavigate();

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const usersCollection = collection(db, "users");
    getDocs(usersCollection)
      .then((response) => {
        const peoples = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setUsers(peoples);
      })
      .catch((error) => console.log(error));
  };

  const onSelectChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (id) => {
    if (role === "") {
      return;
    } else {
      const docRef = doc(db, "users", id);
      updateDoc(docRef, { role });
    }
    setVisibleEdit(false);
    getUsers();
  };
  const handleHistoryBack = () => {
    history("/admin");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="xs" bg="primary" variant="dark">
        <Navbar.Brand href="/">
          <b>EDIT PAGE</b>
        </Navbar.Brand>
        <Button onClick={handleHistoryBack} variant="success">
          Go Back
        </Button>
      </Navbar>
      <ListGroup as="ul">
        {users.map((user) => (
          <ListGroup.Item
            key={user.data.name}
            as="li"
            className="d-flex justify-content-around"
          >
            <span>{user.data.name}</span>
            <span>{user.data.age}</span>
            <span>{user.data.role}</span>
            {!visibleEdit ? (
              <BsFillPencilFill
                className="icon"
                onClick={() => setVisibleEdit(true)}
              />
            ) : (
              <Form
                className="d-flex align-items-center"
                onSubmit={() => handleSubmit(user.id)}
              >
                <Form.Select className="h-100" onChange={onSelectChange}>
                  <option>select role</option>
                  <option value="driver">driver</option>
                  <option value="pessenger">pessenger</option>
                  <option value="dispatcher">dispatcher</option>
                </Form.Select>
                <Button variant="success" type="submit">
                  Ok
                </Button>
              </Form>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default EditUsers;
