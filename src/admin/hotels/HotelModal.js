import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

const HotelModal = ({ data, loading, reFetch, btnName, addHotel }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // For update Hotel State
  const [editData, setEditData] = useState(data);

  // For Create Hotel State
  const [info, setInfo] = useState({})

  const [files, setFiles] = useState("");



  const handleCreate = async (e) => {

    e.preventDefault();

     const imageList = await Promise.all(
       Object.values(files).map(async (file) => {
         const data = new FormData();
         data.append("file", file);
         data.append("upload_preset", "upload");
         const uploadRes = await axios.post(
           "https://api.cloudinary.com/v1_1/kmfoysal/image/upload",
           data
         );

         const { url } = uploadRes.data;
         return url;
       })
     );

    const hotelInfo = {

      ...info,
      photos: imageList,
    };  

    try {
      await axios.post(
        `https://booking-app-api-bvpw.onrender.com/api/hotels/`,
        hotelInfo
      );

      handleClose();
      reFetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();


    // const imageList = await Promise.all(
    //   Object.values(files).map(async (file) => {
    //     const data = new FormData();
    //     data.append("file", file);
    //     data.append("upload_preset", "upload");
    //     const uploadRes = await axios.post(
    //       "https://api.cloudinary.com/v1_1/kmfoysal/image/upload",
    //       data
    //     );

    //     const { url } = uploadRes.data;
    //     return url;
    //   })
    // );

    // const data = new FormData();
    // data.append("file", file);
    // data.append("upload_preset", "upload");

    // const uploadRes = await axios.post(
    //   "https://api.cloudinary.com/v1_1/kmfoysal/image/upload",
    //   data
    // );

    // const { url } = uploadRes.data;

    const updateHotel = {
      name: editData?.name,
      title: editData?.title,
      type: editData?.type,
      city: editData?.city,
      address: editData?.address,
      rating: editData?.rating,
      cheapestPrice: editData?.cheapestPrice,
      featured: editData?.featured,
      desc: editData?.desc,
      distance: editData?.distance,
    };

    try {
      await axios.put(
        `https://booking-app-api-bvpw.onrender.com/api/hotels/${editData?._id}`,
        updateHotel
      );

      handleClose();
      reFetch()
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;

    if (addHotel) {
      setInfo((prevData) => ({
        ...prevData,
        [name]: value?.toLowerCase(),
      }));
    } else {
       setEditData((prevData) => ({
           ...prevData,
           [name]: value?.toLowerCase(),
       }));
    }
  };

  return (
    <>
      <Button variant={addHotel ? "primary" : "warning"} onClick={handleShow}>
        {btnName}
      </Button>

      <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{addHotel ? "Create Hotel" : "Edit"} Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addHotel ? handleCreate : handleUpdate}>
            { addHotel && <div>
              <div className="formInput text-center mb-4">
                <img
                  className=""
                  src={
                    files
                      ? URL.createObjectURL(files[0])
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRhHucTJYJnlCrX8kZX2H6n_S6ictGlu3UQ&usqp=CAU"
                  }
                  alt="img"
                  width={100}
                />
                {!files && (
                  <label
                    htmlFor="file"
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    Upload Hotel images
                    <input
                      type="file"
                      multiple
                      name="photos"
                      onChange={(e) => setFiles(e.target.files)}
                      placeholder="Upload Hotel Images"
                      style={{ width: "110px" }}
                    />
                  </label>
                )}
              </div>
            </div>}
            <Row>
              <Col>
                <FloatingLabel
                  controlId="name"
                  label="Hotel Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter hotel Name ... "
                    value={addHotel ? info?.name : editData?.name}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="type" label="Type">
                  <Form.Select
                    aria-label="type"
                    name="type"
                    value={addHotel ? info?.type : editData?.type}
                    onChange={handleChange}
                  >
                    <option>Select hotel type</option>
                    <option value="hotel">Hotel</option>
                    <option value="Apartment">Apartment</option>
                    <option value="resort">Resort</option>
                    <option value="villa">Villa</option>
                    <option value="guest house">Guest House</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel controlId="city" label="City" className="mb-3">
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter city Name ... "
                    value={addHotel ? info?.city : editData?.city}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="address"
                  label="Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter  Address ... "
                    value={addHotel ? info?.address : editData?.address}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel controlId="title" label="title" className="mb-3">
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter title ... "
                    value={addHotel ? info?.title : editData?.title}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="distance"
                  label="Distance from center"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="distance"
                    placeholder="Enter distance ... "
                    value={addHotel ? info?.distance : editData?.distance}
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
                value={addHotel ? info?.desc : editData?.desc}
                onChange={handleChange}
              />
            </FloatingLabel>
            <Row>
              <Col>
                <FloatingLabel controlId="rating" label="Rating">
                  <Form.Select
                    aria-label="Rating"
                    name="rating"
                    value={addHotel ? info?.rating : editData?.rating}
                    onChange={handleChange}
                  >
                    <option>Select Rating</option>
                    <option value={5}>5 Star</option>
                    <option value={4}>4 Star</option>
                    <option value={3}>3 Star</option>
                    <option value={2}>2 Star</option>
                    <option value={1}>1 Star</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="cheapestPrice"
                  label="Cheapest Price"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="cheapestPrice"
                    placeholder="Enter Description ... "
                    height={300}
                    value={
                      addHotel ? info?.cheapestPrice : editData?.cheapestPrice
                    }
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="featured" label="Featured hotel">
                  <Form.Select
                    name="featured"
                    onChange={handleChange}
                    value={addHotel ? info?.featured : editData?.featured}
                  >
                    <option>Is it Featured hotel ?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>

            <button type="submit" className="headerBtn banner-btn mt-3 w-100">
              {addHotel ? "Create" : "UPDATE"}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HotelModal;