import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import bannerImg from '../../assets/images/hero-bg.png';
import useSearch from "../../hooks/useSearch";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const {dispatch} = useSearch();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } });
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    
    <div className="header" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
 
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Find your perfect <br /> place to <span className="titleColor">live</span> 
            </h1>
            <p className="headerDesc">
              Get rewarded for your booking – unlock instant savings of 10% 
            </p>
            <button className="headerBtn banner-btn mt-3">Book a room</button>
          <div className="booking-wrapper">
              <div className="search-wrapper">
                <h2 className="searchTitle">Find Hotels and Resorts</h2>
                <div className="headerSearch row">
                  <div className="col-lg-3 col-md-6 mb-lg-0 mb-3">
                    <div className="headerSearchItem headerItemBorder ">
                      <FontAwesomeIcon icon={faBed} className="headerIcon" />
                      <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        onChange={(e) => setDestination(e.target.value?.toLowerCase())}
                      />
                    </div>
                </div>
                  <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
                    <div className="headerSearchItem headerItemBorder ">
                      <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                      <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}
                      >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                      )}`}</span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className="date"
                          minDate={new Date()}
                        />
                      )}
                    </div>
                </div>
                  <div className="col-lg-3 col-md-6 mb-lg-0 mb-3">
                    <div className="headerSearchItem headerItemBorder " >
                      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                      <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}
                      >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                      {openOptions && (
                        <div className="options">
                          <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                              <button
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.adult}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                              <button
                                disabled={options.children <= 0}
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.children}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                              <button
                                disabled={options.room <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.room}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                 </div>
                  <div className="col-lg-2 col-md-6 mb-lg-0 mb-3">
                    <div className="searchBtnWrapper">
                      <button className="btn headerBtn searchBtn" disabled={!destination} onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                 </div>
                </div>
            </div>
          </div>

          </>
        )}
      </div>
    </div>
  );
};

export default Header;
