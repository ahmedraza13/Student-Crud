import { useState } from "react";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";
import AddStudentModal from "../components/AddStudentModal";
import StudentTable from "../components/StudentTable";

function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ahmed Raza",
      email: "ahmedfaisal@gmail.com",
      contactNo: "03142322336",
      rollNo: "97745",
      course: "Web Development",
    },
    {
      id: 2,
      name: "Fuzail",
      email: "fuzailsohail@gmail.com",
      contactNo: "12345678900",
      rollNo: "97746",
      course: "Flutter Development",
    },
    {
      id: 3,
      name: "Qasam",
      email: "qasamumer@gmail.com",
      contactNo: "12345678900",
      rollNo: "97747",
      course: "Graphic Designing",
    },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentStudent, setCurrentStudent] = useState(null);

  const resetCurrentStudent = () => {
    setCurrentStudent(null); // Reset the current student
  };
  const onDeleteHandler = (id) => {
    let newData = data.filter((item, index) => {
      return item.id !== id;
    });
    setData(newData);
  };

  const onAddHandler = (student) => {
    data.push(student);
    const newStudentAdded = [...data];
    setData(newStudentAdded);
  };

  const onUpdateHandler = (student, id) => {
    console.log(id);
    handleShow();
    setCurrentStudent(student);

    let newData = data.map((item) => {
      if (item.id === id) {
        console.log(item);
        return {
          ...item,
          name: student.name,
          email: student.email,
          contactNo: student.contactNo,
          rollNo: student.rollNo,
          course: student.course,
        };
      }
      return item;
    });
    setData(newData);
  
  };
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <AddStudentModal
          onAddHandler={onAddHandler}
          onUpdateHandler={onUpdateHandler}
          data={data}
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          currentStudent={currentStudent}
          resetCurrentStudent={resetCurrentStudent} // New prop
        />
      </div>
      <div className="table-wrapper">
        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Contact No</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <StudentTable
                  data={item}
                  key={index}
                  onDeleteHandler={onDeleteHandler}
                  onUpdateHandler={onUpdateHandler}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;
