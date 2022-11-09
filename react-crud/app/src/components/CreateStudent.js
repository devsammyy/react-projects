import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");

  const onChangeStudentName = (e) => {
    setName(e.target.value);
  };
  const onChangeStudentEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeStudentRollno = (e) => {
    setRoll(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const studentObject = {
      name,
      email,
      roll,
    };
    axios
      .post(
        "https://my-apiv1.herokuapp.com/students/create-student",
        studentObject
      )
      .then((res) => alert("Student successfully created!"));
    setName("");
    setEmail("");
    setRoll("");
  };
  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={onChangeStudentName}
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={onChangeStudentEmail}
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type="text"
            value={roll}
            onChange={onChangeStudentRollno}
          />
        </Form.Group>
        <Button
          variant="success"
          size="lg"
          block="block"
          type="submit"
          className="mt-4"
        >
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
