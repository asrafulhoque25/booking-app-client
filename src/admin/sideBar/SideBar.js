import React from 'react';
import { Link } from "react-router-dom";
import HamburgurIcon from "../../assets/icons/hamburgur.svg";
import useAuth from '../../hooks/AuthContext';
import './sideBar.scss';

const SideBar = ({ menuOpen, setMenuOpen }) => {

  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  return (
    <div className={`side-bar ${menuOpen && "active"}`}>
      <div>
        <div className="logo-panel">
          <Link
            to="/admin/dashboard"
            className="text-decoration-none fs-5 fw-bold text-white" >
            {/* <img src={Logo} alt={Logo} /> */}
            Admin Dashboard
          </Link>
          <img
            src={HamburgurIcon}
            alt={HamburgurIcon}
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>
        <div className="main-menu">
          <Link to="/admin/dashboard" className="main-menu-link">
            Dashborad
          </Link>
          <Link to="/admin/dashboard/users" className="main-menu-link">
            Users
          </Link>
          <Link to="/admin/dashboard/hotels" className="main-menu-link">
            Hotels
          </Link>
          <Link to="/admin/dashboard/rooms" className="main-menu-link">
            Rooms
          </Link>
          <Link to="/" className="main-menu-link mt-5">
            Go To User Page
          </Link>
        </div>
      </div>
      <div className="bottom-link">
        <button className="login-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;