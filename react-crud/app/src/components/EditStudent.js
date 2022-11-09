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
        "https://my-apiv1.herokuapp.com/students/update-student/" +
          props.match.params.id,
        studentObject
      )
      .then((res) => {
        alert("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(
        "https://my-apiv1.herokuapp.com/students/edit-student/" +
          props.match.params.id
      )
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setRoll(res.data.roll);
      })
      .catch((error) => console.log(error));
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
        <Button variant="success" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;
