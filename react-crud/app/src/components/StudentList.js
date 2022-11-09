import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

const StudentList = (props) => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://my-apiv1.herokuapp.com/students/")
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="table-wrapper">
      {loading ? (
        "Loading..."
      ) : (
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
      )}
    </div>
  );
};

export default StudentList;
