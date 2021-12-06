import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const MyForm = ({ setToken }) => {
  const [userData, setUserData] = useState({ name: "", email: "", pass: "" });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userData,
    });
    setToken(token);
    // history.push("/dashboard")
    console.log("email is ", userData);
  };
  return (
    <Form style={{ width: "25%" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          value={userData.name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setUserData({ ...userData, pass: e.target.value })}
        />
      </Form.Group>

      <Button className="btn btn-primary" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

MyForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default MyForm;
