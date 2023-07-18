import { Link } from 'react-router-dom';
import Apartments from '../../assets/images/feature1.jpg';
import Villas from '../../assets/images/feature11.jpg';
import Cabins from '../../assets/images/feature12.jpg';
import GuestHouse from '../../assets/images/feature6.jpg';
import Hotel from '../../assets/images/feature7.jpg';
import Resorts from '../../assets/images/feature8.jpg';
import useFetch from "../../hooks/useFetch";
import "./featured.scss";


const Featured = () => {

   const { data, loading, error } = useFetch("https://booking-app-api-bvpw.onrender.com/api/hotels?featured=true");


  const propertyTypeImage = [
    Hotel,Apartments,Resorts,Villas,Cabins,GuestHouse
    
]

const stars = Array(5).fill(0);


  return (
    <div className="featured">
      <div className="container">
        <div className="row">
          <div className="common-title-border mb-5">
            <h1 className="commonTitle fw-bold">Browse by popularity</h1>
            <h2 className="title-hints">Explore Facilities</h2>
          </div>
          {
            data?.map((item, index) =>{
              return (
                  <div className="col-md-4 col-sm-6">
                      <div className="featureWrapper">
                          <img src={item?.photos?.[0] ? item?.photos?.[0] : Hotel} className="img-fluid featureImg" alt="img" />
                          <div className="featureContent">
                              <div className="featureTitle">
                                  <div>
                                      <h3 className="title text-capitalize mb-2">{data[index]?.name}</h3>
                                      <div className="review-ratting mb-2">
                                          <div className="innerRatting ratting-list d-flex align-items-center gap-1 list-unstyled mb-0">
                                              {stars.map((star, i) => (
                                                  <svg
                                                      key={i}
                                                      width="20"
                                                      height="20"
                                                      viewBox="0 0 20 20"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      // onclick={()=>handleChange(index + 1)}
                                                  >
                                                      <rect
                                                          width="20"
                                                          height="20"
                                                          fill={`${
                                                              data[index]?.rating > i && data[index]?.rating === 5
                                                                  ? "#7425e9"
                                                                  : data[index]?.rating > i && data[index]?.rating === 4
                                                                  ? "#a262ff"
                                                                  : data[index]?.rating > i && data[index]?.rating === 3
                                                                  ? "#FDE90A"
                                                                  : data[index]?.rating > i && data[index]?.rating === 2
                                                                  ? "#FFA114"
                                                                  : data[index]?.rating > i && data[index]?.rating === 1
                                                                  ? "#FF4E3E"
                                                                  : data[index]?.rating === 0
                                                                  ? "#E3E8EB"
                                                                  : "#E3E8EB"
                                                          } `}
                                                      />
                                                      <path
                                                          d="M9.99967 3.33337L11.4964 7.93993H16.3401L12.4215 10.7869L13.9182 15.3935L9.99967 12.5465L6.08111 15.3935L7.57787 10.7869L3.6593 7.93993H8.50291L9.99967 3.33337Z"
                                                          fill="white"
                                                      />
                                                  </svg>
                                              ))}
                                          </div>
                                      </div>
                                      <p className="bookingPrice mb-0 fw-semibold">{data[index]?.city}</p>
                                  </div>
                              </div>
                              <div className="bookingInfo d-flex align-items-center justify-content-between">
                                  <Link className="text-decoration-none bookingBtn">Book Now</Link>
                                  <p className="bookingPrice mb-0">Start From ${data[index]?.cheapestPrice}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Featured;
