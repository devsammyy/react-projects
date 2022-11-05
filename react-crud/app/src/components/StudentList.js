import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

const StudentList = (props) => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((res) => {
            return <StudentTableRow res={res} key={res._id} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
