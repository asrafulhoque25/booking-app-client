import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DashboardHeader from '../dashboardHeader/DashboardHeader';
import SideBar from '../sideBar/SideBar';

const Dashboard = () => {

  const [menuOpen, setMenuOpen] = useState(true);
  
  const { data } = useFetch("https://booking-app-api-bvpw.onrender.com/api/users");
  const { data:hotels } = useFetch("https://booking-app-api-bvpw.onrender.com/api/hotels");


  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`dashboard-wrapper ${!menuOpen && "active"}`}>
        <DashboardHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="dashboard-container">
          <h2 className="mb-3">Dashboard</h2>
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">
            <div
              className="featured-card d-flex gap-4 rounded shadow p-4 flex-wrap"
              style={{ width: "32%" }}
            >
              <img
                src="https://img.freepik.com/free-icon/user_318-792327.jpg"
                alt="icon"
                className="rounded-circle"
                width={40}
                height={40}
              />
              <div>
                <h5>Total Users</h5>
                <h6>{data?.length}</h6>
              </div>
            </div>
            <div
              className="featured-card d-flex gap-4 rounded shadow p-4 flex-wrap"
              style={{ width: "32%" }}
            >
              <img
                src="https://www.carbontanzania.com/wp-content/uploads/2017/01/CT_Buy_Home-500x500.jpg"
                alt="icon"
                className="rounded-circle"
                width={40}
                height={40}
              />
              <div>
                <h5>Total Hotels</h5>
                <h6>{hotels?.length}</h6>
              </div>
            </div>
            <div
              className="featured-card d-flex gap-4 rounded shadow p-4 flex-wrap"
              style={{ width: "32%" }}
            >
              <img
                src="https://sustainabletravel.org/wp-content/uploads/Carbon-Neutral-Hotel-Stays-Icon-256px.png"
                alt="icon"
                className="rounded-circle"
                width={40}
                height={40}
              />
              <div>
                <h5>Total Rooms</h5>
                <h6>5</h6>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;