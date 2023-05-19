import axios from 'axios';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/AuthContext';
import useFetch from '../../hooks/useFetch';
import useSearch from '../../hooks/useSearch';
import './bookingModal.scss';

const BookingModal = ({ data, totalCost, totalDays }) => {

  const { user } = useAuth();
  const { date } = useSearch();
  const navigate = useNavigate();

  const [clientInfo, setClientInfo] = useState(user);

  console.log(clientInfo);

  const [selectedRooms, setSelectedRooms] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleShow = () => {
    if (user) {
      setShow(true);
    } else {
      navigate("/signup");
    }
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const getStartDate = new Date(start.getTime());

    const date = [];

    while (getStartDate <= end) {
      date.push(new Date(getStartDate).getTime());
      getStartDate.setDate(getStartDate.getDate() + 1);
    }

    return date;
  };

  const alldates = getDatesInRange(date[0]?.startDate, date[0]?.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const {
    data: roomData,
    loading,
      error,
    
    } = useFetch(`https://booking-app-api-bvpw.onrender.com/api/hotels/room/${data?._id}`);
    
    const getRoomNumer = roomData?.map((item) => {
       return item.roomNumbers.filter((room) => {
          return selectedRooms?.includes(room?._id);
        });
    })
    
    
    console.log(getRoomNumer);

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(clientInfo);

    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `https://booking-app-api-bvpw.onrender.com/api/rooms/availability/${roomId}`,
            {
              dates: alldates,
              bookingInfo: {
                name: clientInfo?.name,
                email: clientInfo?.email,
                phone: clientInfo?.phone,
                hotelName: data?.name,
                hotelAddress: data?.address,
                hotelRoomNumbers: getRoomNumer,
                bookingDates: alldates,
                totalDays: totalDays,
                totaPrice: totalCost,
              },
            }
          );
          return res.data;
        })
      );
      setShow(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <>
          <Button variant="primary" onClick={handleShow}>
              Reserve or Book Now!
          </Button>

          <Modal show={show} onHide={handleClose} size="xl" centered>
              <Modal.Body>
                  <form>
                      <div>
                          <h4>Give your contact details:</h4>
                          <FloatingLabel controlId="name" label="Name" className="mb-3">
                              <Form.Control
                                  required
                                  type="text"
                                  placeholder="Enter Your Name ... "
                                  value={clientInfo?.name}
                                  onChange={(e) => setClientInfo((prevValue) => ({ ...prevValue, name: e.target.value }))}
                              />
                          </FloatingLabel>
                          <FloatingLabel controlId="email" label="Email" className="mb-3">
                              <Form.Control
                                  required
                                  type="email"
                                  placeholder="Enter Your Name ... "
                                  value={clientInfo?.email}
                                  onChange={(e) => setClientInfo((prevValue) => ({ ...prevValue, email: e.target.value }))}
                              />
                          </FloatingLabel>
                          <FloatingLabel controlId="phone" label="Phone" className="mb-3">
                              <Form.Control
                                  required
                                  type="email"
                                  placeholder="Enter Your Name ... "
                                  value={clientInfo?.phone}
                                  onChange={(e) => setClientInfo((prevValue) => ({ ...prevValue, phone: e.target.value }))}
                              />
                          </FloatingLabel>
                      </div>

                      <span className="rItem">Select your rooms:</span>

                      {roomData.map((item) => (
                          <div className="rItem" key={item._id}>
                              <div className="rItemInfo">
                                  <div className="rTitle">{item.title}</div>
                                  <div className="rDesc">{item.desc}</div>
                                  <div className="rMax">
                                      Max people: <b>{item.maxPeople}</b>
                                  </div>
                                  <div className="rPrice">{item.price}</div>
                              </div>
                              <div className="rSelectRooms">
                                  {item.roomNumbers.map((roomNumber) => (
                                      <>
                                          {roomNumber?.number && (
                                              <div className="room">
                                                  <label>{roomNumber.number}</label>
                                                  <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
                                              </div>
                                          )}
                                      </>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={handleClick}>
                      Reserve Now
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  );
};

export default BookingModal;