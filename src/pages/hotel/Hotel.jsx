import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../components/bookingModal/BookingModal";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import "./hotel.css";

const Hotel = () => {

  const {id} = useParams();

  const { date, options } = useSearch();


  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

   const { data, loading, error } = useFetch(`https://booking-app-api-bvpw.onrender.com/api/hotels/find/${id}`);

 

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? (data?.photos?.length-1) : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === (data?.photos?.length-1) ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    
  function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
  }

  const days = dayDifference(date[0]?.endDate, date[0]?.startDate);
    
    const totalCost = days * data.cheapestPrice * options.room;

  return (
      <div>
          <Navbar />
          <Header type="list" />
          <div className="hotelContainer">
              {open && (
                  <div className="slider">
                      <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                      <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                      <div className="sliderWrapper">
                          <img src={data?.photos[slideNumber]} alt="img" className="sliderImg" />
                      </div>
                      <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                  </div>
              )}
              <div className="hotelWrapper">
                  {/* <button className="bookNow">Reserve or Book Now!</button> */}

                  <div className="d-flex justify-content-between align-items-center">
                      <h1 className="hotelTitle">{data?.title}</h1>
                      <BookingModal data={data} />
                  </div>
                  <div className="hotelAddress">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span>{data?.address}</span>
                  </div>
                  <span className="hotelDistance">Excellent location – {data?.distance}m from center</span>
                  <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                  <div className="hotelImages">
                      {data?.photos?.map((photo, i) => (
                          <div className="hotelImgWrapper" key={i}>
                              <img onClick={() => handleOpen(i)} src={photo} alt="img" className="hotelImg" />
                          </div>
                      ))}
                  </div>
                  <div className="hotelDetails">
                      <div className="hotelDetailsTexts">
                          <h1 className="hotelTitle">{data?.title}</h1>
                          <p className="hotelDesc">{data?.desc}</p>
                      </div>
                      <div className="hotelDetailsPrice">
                          <h1>Perfect for a {days}-night stay!</h1>
                          <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
                          <h2>
                              <b>${totalCost}</b> ({days} nights)
                          </h2>

                          <BookingModal data={data} totalCost={totalCost} totalDays={days} />
                      </div>
                  </div>
              </div>
              <MailList />
              <Footer />
          </div>
      </div>
  );
};

export default Hotel;
