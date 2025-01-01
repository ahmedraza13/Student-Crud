import { useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddStudentModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [course, setCourse] = useState("");

  let schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(10, "Name must be at most 10 characters")
      .required("Student name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    rollNo: yup
      .string()
      .min(3, "Roll number must be at least 3 characters")
      .max(6, "Roll number must be at most 6 characters")
      .required("Roll number is required"),
    contactNo: yup
      .string()
      .matches(/^[0-9]{11}$/, "Contact number must be a valid 11-digit number")
      .required("Contact number is required"),
    course: yup.string().required("Course is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      id: props.data.length + 1,
      name,
      email,
      rollNo,
      contactNo,
      course,
    };

    try {
      let result = await schema.validate(data);
      console.log(result);
      props.onAddHandler(data);
      handleClose();
      setName("");
      setEmail("");
      setRollNo("");
      setContactNo("");
      setCourse("");

      toast.success("Add Student Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      error.toString();
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="custom-button">
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title className="custom-modal-title">
            Add Student Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <Form>
            <Form.Group className="mb-3" controlId="formStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student's name"
                name="studentName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRollNo">
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter roll number"
                name="rollNo"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNo">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact number"
                name="contactNo"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCourse">
              <Form.Label>Course</Form.Label>
              <Form.Select
                name="course"
                value={course}
                aria-label="Select a course"
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Computer Science">Computer Science</option>
              </Form.Select>
            </Form.Group>

            <Modal.Footer className="custom-modal-footer">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="custom-close-button"
              >
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="custom-save-button"
                onClick={handleSubmit}
              >
                Add Student
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStudentModal;
