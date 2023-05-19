import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import HotelModal from './HotelModal';


const DeleteBtn = ({ data, loading, reFetch }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://booking-app-api-bvpw.onrender.com/api/hotels/${data?._id}`);

      // setTimeout(() => {
      //   window.location.reload();
      // }, "2000");
      reFetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className="ms-2 btn btn-danger"
      onClick={handleDelete}
      disabled={loading}
    >
      {loading ? "Loading" : "Delete"}
    </button>
  );
};


const Hotels = () => {

      const { data, loading, reFetch, error } = useFetch(
        "https://booking-app-api-bvpw.onrender.com/api/hotels"
      );
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Hotels Table</h4>
          <HotelModal btnName='Add Hotel' addHotel={true} />
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#SL</th>
              <th>Name</th>
              <th>Title</th>
              <th>Type</th>
              <th>Address</th>
              <th>Rating</th>
              <th>Cheapest Price</th>
              <th>Total Rooms</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((hotel, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="items-center">
                    <span>{hotel?.name}</span>
                  </td>
                  <td>{hotel?.title}</td>
                  <td>{hotel?.type}</td>
                  <td>{hotel?.address ? hotel?.address : "Not Available"}</td>
                  <td>{hotel?.rating ? hotel?.rating : "Not Available"}</td>
                  <td>{hotel?.cheapestPrice}</td>
                  <td>{hotel?.rooms?.length}</td>
                  <td className="d-flex">
                    <HotelModal
                      data={hotel}
                      loading={loading}
                      reFetch={reFetch}
                      btnName="Edit"
                    />
                    <DeleteBtn
                      data={hotel}
                      loading={loading}
                      reFetch={reFetch}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
};

export default Hotels;