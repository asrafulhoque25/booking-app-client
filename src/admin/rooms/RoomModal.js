import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';


const RoomModal = ({ data, btnName, addRoom, reFetch }) => {

  const { data: hotelData, loading, error } = useFetch(
    "https://booking-app-api-bvpw.onrender.com/api/hotels"
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // For Create Room State
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);




  // For update Hotel State
  const [editData, setEditData] = useState(data);

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;

    if (addRoom) {
      setInfo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setEditData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

   const handleRoomNumberChange = (index, event) => {
     const { name, value } = event.target;

     // Create a new array with the updated room number object
     const newRoomNumbers = editData.roomNumbers.map((roomNumber, i) => {
       if (i === index) {
         return { ...roomNumber, [name]: value };
       } else {
         return roomNumber;
       }
     });

     // Update the state with the new room numbers array
     setEditData({ ...editData, roomNumbers: newRoomNumbers });
   };

  const handleCreate = async (e) => {
    e.preventDefault();

    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));

    const newRoom = {
      ...info,
      roomNumbers,
    };

    try {
      await axios.post(`https://booking-app-api-bvpw.onrender.com/api/rooms/${hotelId}`, newRoom);

      handleClose();
      reFetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateRoom = {
      title: editData?.title,
      maxPeople: editData?.maxPeople,
      price: editData?.price,
      desc: editData?.desc,
      roomNumbers: editData?.roomNumbers,
    };

    try {
      await axios.put(
        `https://booking-app-api-bvpw.onrender.com/api/rooms/${editData?._id}`,
        updateRoom
      );

      handleClose();
      reFetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button variant={addRoom ? "primary" : "warning"} onClick={handleShow}>
        {btnName}
      </Button>

      <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{addRoom ? "Create" : "Edit"} Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addRoom ? handleCreate : handleUpdate}>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="title"
                  label="Room Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter hotel Name ... "
                    value={addRoom ? info?.title : editData?.title}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel controlId="price" label="Price" className="mb-3">
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Price ... "
                    value={addRoom ? info?.price : editData?.price}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="maxPeople"
                  label="Max People"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="maxPeople"
                    placeholder="Enter  Total Member Number ... "
                    value={addRoom ? info?.maxPeople : editData?.maxPeople}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="desc"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="text-area"
                name="desc"
                placeholder="Enter Description ... "
                height={300}
                value={addRoom ? info?.desc : editData?.desc}
                onChange={handleChange}
              />
            </FloatingLabel>
            {addRoom && (
              <FloatingLabel
                controlId="roomNumbers"
                label="Room Numbers (Give comma between room numbers)"
                className="mb-3"
              >
                <Form.Control
                  type="text-area"
                  name="roomNumbers"
                  placeholder="Give comma between room numbers... "
                  height={300}
                  value={info?.roomNumbers}
                  onChange={(e) => setRooms(e.target.value)}
                />
              </FloatingLabel>
            )}
            <Row>
              {editData?.roomNumbers.map((roomNumber, index) => (
                <Col xs={6} md={4} lg={3} key={index}>
                  <FloatingLabel
                    controlId="roomNumbers"
                    label={`Room Number ${index + 1}`}
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      id={`roomNumber${index}`}
                      name="number"
                      value={roomNumber.number}
                      onChange={(event) => handleRoomNumberChange(index, event)}
                    />
                  </FloatingLabel>
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <FloatingLabel controlId="hotelId" label="Select Hotel">
                  <Form.Select
                    name="hotelId"
                    onChange={
                      addRoom ? (e) => setHotelId(e.target.value) : handleChange
                    }
                    // value={addRoom ? hotelData &&
                    //     hotelData?.map(hotel => hotel.name) : editData?.featured}
                  >
                    {loading
                      ? "loading"
                      : hotelData &&
                        hotelData?.map((hotel) => (
                          <option key={hotel._id} value={hotel._id}>
                            {hotel.name}
                          </option>
                        ))}
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>

            <button type="submit" className="headerBtn banner-btn mt-3 w-100">
              {addRoom ? "Create" : "UPDATE"}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RoomModal;




