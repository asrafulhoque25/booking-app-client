import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, FreeMode, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import property1 from '../../assets/images/property1.jpg';
import property2 from '../../assets/images/property2.jpg';
import property3 from '../../assets/images/property3.jpg';
import property4 from '../../assets/images/property4.jpg';
import property5 from '../../assets/images/property5.jpg';
import property6 from '../../assets/images/property6.jpg';
import property7 from '../../assets/images/property7.jpg';
import property8 from '../../assets/images/property8.jpg';
import property9 from '../../assets/images/property9.jpg';
import useFetch from "../../hooks/useFetch";
import './propertyList.scss';
SwiperCore.use([EffectCoverflow, Pagination ]);


const PropertyList = () => {

   const { data, loading, error } = useFetch(
    "https://booking-app-api-bvpw.onrender.com/api/hotels/countByCity?cities=coxbazar,dhaka,sylhet,chittagong,khulna,sreemangal,bandarban,rajshahi,rangamati"
  );

  const propertyData =[
    {
    propertyImg: property1,
    title:"Cox's Bazar",
    pra:data[0]
},
    {
    propertyImg: property2,
        title:"Dhaka",
    pra:data[1]
},
    {
    propertyImg: property3,
    title:"Sylhet",
    pra:data[2]
},
    {
    propertyImg: property4,
    title:"Chittagong",
    pra:data[3]
},
    {
    propertyImg: property5,
        title:"Khulna",
    pra:data[4]
},
    {
    propertyImg: property6,
        title:"Sreemangal",
    pra:data[5]
},
    {
    propertyImg: property7,
        title:"Bandarban",
    pra:data[6]
},
    {
    propertyImg: property8,
        title:"Rajshahi",
    pra:data[7]
},
    {
    propertyImg: property9,
        title:"Rangamati",
    pra:data[8]
},

]

 


  return (
<div className="pList">
      <div className="container">
       <div className="common-title-border">
          <h1 className="commonTitle fw-bold">Browse by property count</h1>
          <h2 className="title-hints">Explore Bangladesh</h2>
       </div>
        <div className="pListWrapper">
          <Swiper
            navigation={true}
            speed={1000}
            slidesPerView={5}
            spaceBetween={30}
            mousewheel={true}
            pagination={false}
            loop={true}
            autoHeight={false}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              
            }}
            modules={[Navigation, Pagination, Mousewheel, Autoplay, FreeMode]}
            className="propertyListSwiper" >
            {
              propertyData.map((property)=>{
             return(
               <SwiperSlide>
                 <div className="propertySlider">
                   <img src={property.propertyImg} className="img-fluid" alt="" />
                   <h3 className="propertyTitle mt-3">{property.title}</h3>
                   <p className="propertyPra mt-2">{property.pra} Properties</p>
                 </div>
               </SwiperSlide>
             )
              })
            }

          </Swiper>
        </div>
      </div>
</div>
  );
};

export default PropertyList;