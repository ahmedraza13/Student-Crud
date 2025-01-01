import { useEffect, useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddStudentModal(props) {
  console.log(props.currentStudent?.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (props.currentStudent) {
      setName(props.currentStudent.name);
      setEmail(props.currentStudent.email);
      setRollNo(props.currentStudent.rollNo);
      setContactNo(props.currentStudent.contactNo);
      setCourse(props.currentStudent.course || "");
    }
  }, [props.currentStudent]);

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

  const clearInputs = () => {
    setName("")
    setEmail("")
    setRollNo("")
    setContactNo("")
    setCourse("")
    props.resetCurrentStudent(); // Reset currentStudent to null
    props.handleShow()
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      id: props.currentStudent ? props.currentStudent.id : props.data.length + 1, // Retain currentStudent id if updating
      name,
      email,
      rollNo,
      contactNo,
      course,
    };

    try {
      let result = await schema.validate(data);
      console.log(result);
      props.currentStudent ? props.onUpdateHandler(data, data.id) : 
      props.onAddHandler(data);
      props.handleClose();
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
      <Button
        variant="primary"
        onClick={clearInputs}
        className="custom-button"
      >
        Add Student
      </Button>

      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="custom-modal"
      >
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
                value={course || ""}
                aria-label="Select a course"
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                <option value="Web Development">Web Development</option>
                <option value="Flutter Development">Flutter Development</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Cloud Computing">Cloud Computing</option>
              </Form.Select>
            </Form.Group>

            <Modal.Footer className="custom-modal-footer">
              <Button
                variant="secondary"
                onClick={props.handleClose}
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
              {props.currentStudent ? "Update Student" : "Add Student"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStudentModal;
