import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Mousewheel, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { propertyData } from "./PropertyData";
import './propertyList.scss'
import { Navigation} from "swiper";
import "swiper/css/navigation";
SwiperCore.use([EffectCoverflow, Pagination ]);

const PropertyList = () => {
  return (
<div className="pList">
      <div className="container">
       <div className="common-title-border">
          <h1 className="commonTitle fw-bold">Browse by property type</h1>
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
              propertyData.map((data)=>{
             return(
               <SwiperSlide>
                 <div className="propertySlider">
                   <img src={data.propertyImg} className="img-fluid" alt="" />
                   <h3 className="propertyTitle mt-3">{data.title}</h3>
                   <p className="propertyPra mt-2">{data.pra}</p>
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