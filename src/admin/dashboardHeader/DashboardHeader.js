
import React from 'react';
import { Dropdown } from "react-bootstrap";

import BellIcon from "../../assets/icons/bell.svg";
import DownAngle from "../../assets/icons/down-angle.svg";
import HamburgurIcon from "../../assets/icons/light-hamburgur.svg";
import MessageIcon from "../../assets/icons/message.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import UploadIcon from "../../assets/icons/upload.svg";

import profileImg from "../../assets/images/parson1.png";
import useAuth from '../../hooks/AuthContext';
import './dashboardHeader.scss';

const DashboardHeader = ({ menuOpen, setMenuOpen }) => {

    const { user } = useAuth();

  return (
    <nav className="nav-bar">
      <div className="left-item">
        {!menuOpen && (
          <div
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={HamburgurIcon} alt={HamburgurIcon} />
          </div>
        )}
        <div className="search-box">
          <input type="text" placeholder="Search anything" />
        </div>
      </div>
      <div className="right-item">
        {/* <div>
          <button className="upload-btn">
            Upload <img src={UploadIcon} alt={UploadIcon} />
          </button>
        </div> */}
        <div className="notification-box">
          <button className="notify-btn">
            <img src={MessageIcon} alt={MessageIcon} />
          </button>
          <button className="notify-btn">
            <img src={BellIcon} alt={BellIcon} />
          </button>
          <button className="notify-btn">
            <img src={SettingIcon} alt={SettingIcon} />
          </button>
        </div>
        <div className="profile-box">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="profile-btn">
              <img src={user.profilePic? user.profilePic : profileImg} alt={profileImg} className='img-fluid rounded-circle' width='40'/>
              {user.name}
              <img src={DownAngle} alt={DownAngle} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;