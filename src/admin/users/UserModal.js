import axios from "axios";
import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

const UserModal = ({data }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // For update User State
  const [editData, setEditData] = useState(data);

  const [file, setFile] = useState("");
  

  const handleUpdate = async (e) => {
    e.preventDefault();

     const data = new FormData();
     data.append("file", file);
    data.append("upload_preset", "upload");

    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/kmfoysal/image/upload",
      data
    );

    const { url } = uploadRes.data;
    
    const updateCurrentUser = {
      name: editData?.name,
      username: editData?.username,
      email: editData?.email,
      password: editData?.password,
      address: editData?.address,
      phone: editData?.phone,
      profilePic: url,
      isAdmin: editData?.isAdmin,
    };

    try {
      await axios.put(
        `https://booking-app-api-bvpw.onrender.com/api/users/${editData?._id}`,
        updateCurrentUser
      );

      handleClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;

    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdate}>
            <div>
              <div className="formInput text-center mb-4">
                <img
                  className="rounded-circle"
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : data?.profilePic
                      ? data?.profilePic
                      : "https://images.vexels.com/media/users/3/147102/isolated/lists/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon.png"
                  }
                  alt="img"
                  width={100}
                />
                {!file && (
                  <label
                    htmlFor="file"
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    Upload Your Profile image
                    <input
                      type="file"
                      name="profilePic"
                      onChange={(e) => setFile(e.target.files[0])}
                      placeholder="Upload profile picture"
                      style={{ width: "100px" }}
                    />
                  </label>
                )}
              </div>
            </div>
            <Row>
              <Col>
                <FloatingLabel controlId="name" label="Name" className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Your Name ... "
                    value={editData?.name}
                    onChange={handleUpdateChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="userName"
                  label="User Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Your user name ... "
                    value={editData?.username}
                    onChange={handleUpdateChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel controlId="email" label="Email" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Your Name ... "
                    value={editData?.email}
                    onChange={handleUpdateChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <FloatingLabel controlId="address" label="Address" className="mb-3">
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter Your Address ... "
                value={editData?.address}
                onChange={handleUpdateChange}
              />
            </FloatingLabel>
            <Row>
              <Col>
                <FloatingLabel controlId="phone" label="Phone" className="mb-3">
                  <Form.Control
                    type="phone"
                    name="phone"
                    placeholder="Enter Your phone number ... "
                    value={editData?.phone}
                    onChange={handleUpdateChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="userRole" label="User Role">
                  <Form.Select
                    aria-label="User Role"
                    name="userRole"
                    onChange={handleUpdateChange}
                  >
                    <option>Select a User Role</option>
                    <option value={true}>Admin</option>
                    <option value={false}>User</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>

            <button type="submit" className="headerBtn banner-btn mt-3 w-100">
              UPDATE
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserModal;
