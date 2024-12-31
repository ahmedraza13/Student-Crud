import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddStudentModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRollNo">
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter roll number"
                name="rollNo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNo">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact number"
                name="contactNo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCourse">
              <Form.Label>Course</Form.Label>
              <Form.Select name="course" aria-label="Select a course">
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
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStudentModal;
