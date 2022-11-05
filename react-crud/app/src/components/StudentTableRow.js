import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../App.css";

const StudentTableRow = (props) => {
  const { _id, email, roll, name } = props.res;

  const deleteStudent = () => {
    axios
      .delete("http://localhost:4000/students/delete-student/" + _id)
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{roll}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button size="sm" variant="danger" onClick={deleteStudent}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
