import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import UserAvator from "../../assets/images/parson5.png";
import useFetch from "../../hooks/useFetch";
import UserModal from "./UserModal";

const DeleteBtn = ({ data, loading }) => {
  
  const handleDelete = async () => {
    try {
      await axios.delete(`https://booking-app-api-bvpw.onrender.com/api/users/${data?._id}`);

      setTimeout(() => {
        window.location.reload();
      }, "2000");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="ms-2 btn btn-danger" onClick={handleDelete} disabled={loading}>
      Delete
    </button>
  );
};

const UsersTable = () => {

  // const [updateMode, setUpdateMode] = useState(false);

    const { data, loading, error } = useFetch(
      "https://booking-app-api-bvpw.onrender.com/api/users"
  );
  
  
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Users Table</h4>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="items-center gap-2">
                  <span className="me-2">
                    <img
                      src={user?.profilePic ? user?.profilePic : UserAvator}
                      alt="profile-img"
                      className="img-fluid rounded-circle"
                      width={25}
                    />
                  </span>
                  <span>{user?.name}</span>
                </td>
                <td>{user?.email}</td>
                <td>{user?.username}</td>
                <td>{user?.address ? user?.address : "Not Available"}</td>
                <td>{user?.phone ? user?.phone : "Not Available"}</td>
                <td>{user?.isAdmin ? "Admin" : "User"}</td>
                <td>
                  <UserModal btnTitle="Edit" data={user} />
                  <DeleteBtn data={user} loading={loading} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
