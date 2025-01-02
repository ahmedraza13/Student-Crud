import { useState } from "react";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";
import AddStudentModal from "../components/AddStudentModal";
import StudentTable from "../components/StudentTable";
import { FaUserGraduate } from "react-icons/fa";

function Home() {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentStudent, setCurrentStudent] = useState(null);

  const resetCurrentStudent = () => {
    setCurrentStudent(null); // Reset the current student
  };

  const onDeleteHandler = (id) => {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const onAddHandler = (student) => {
    const newData = [...data, student]; // Add the new student to the data array
    setData(newData);
  };

  const onUpdateHandler = (student, id) => {
    handleShow();
    setCurrentStudent(student);

    let newData = data.map((item) => {
      if (item.id === id) {
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

      {/* Conditionally render table or a message */}
      <div className="table-wrapper">
        {data.length === 0 ? (
          <div className="no-data-message text-center">
            {/* Icon with bouncing effect */}
            <FaUserGraduate
              size={80}
              color="blue" // Choose a color to match your theme
              className="animate-bounce"
            />
            <p className="no-data-text">
              Oh no! No students found. Please add students!
            </p>
          </div>
        ) : (
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
              {data.map((item, index) => (
                <StudentTable
                  data={item}
                  key={index}
                  onDeleteHandler={onDeleteHandler}
                  onUpdateHandler={onUpdateHandler}
                />
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}

export default Home;
