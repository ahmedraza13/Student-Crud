import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddStudentModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [rollNo, setRollNo] = useState("");
  const [contactNo, setContactNo] = useState("")
  const [course, setCourse] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit", name, email, contactNo, rollNo, course)
  }

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
              <Form.Select name="course" value={course} aria-label="Select a course" onChange={(e) => setCourse(e.target.value)}>
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
