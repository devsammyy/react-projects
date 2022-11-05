import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const EditStudent = (props) => {
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
      .put(
        "http://localhost:4000/students/update-student/" +
          props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Student List
    props.history.push("/student-list");
  };

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:4000/students/edit-student/" + props.match.params.id
      )
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setRoll(res.data.roll);
      })
      .catch((error) => console.log(error));

    return () => {
      console.log("clean");
    };
  }, [props]);

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            // readOnly

            onChange={onChangeStudentName}
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            // readOnly
            onChange={onChangeStudentEmail}
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type="text"
            value={roll}
            // readOnly

            onChange={onChangeStudentRollno}
          />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;
