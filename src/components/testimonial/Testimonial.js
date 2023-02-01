import React from 'react'
import './Testimonial.scss'
import { personInfo } from './TestimonialData'
import StarIcon from '../../assets/images/star.svg';
import QuoteIcon from '../../assets/images/quote-icon.svg';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonial = () => {
    return (
        <div className='testimonial pt-5'>
            <div className="container">
                <div className="common-title-border">
                    <h1 className="commonTitle fw-bold">What Our Clients Says</h1>
                    <h2 className="title-hints">Client Reviews</h2>
                </div>
                <div className="testimonial-wrapper">
                    <Swiper
                        navigation={true}
                        speed={1000}
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={false}
                        loop={true}
                        autoHeight={false}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,

                        }}
                        modules={[Navigation, Pagination, Autoplay, FreeMode]}
                        className="testimonialSwiper"
                    >
                        {
                            personInfo.map((personInfo, index) => {
                                return (
                                    <SwiperSlide>
                                        <div className='testimonialItem text-center bg-white px-3 px-md-4 px-xl-5 radius16 position-relative d-flex flex-column justify-content-between'>
                                            <div className='reviewTop'>
                                                <div className='personImg mx-auto d-flex justify-content-center align-items-center rounded-circle mb-4'>
                                                    <img src={personInfo.person} alt='personImg' className='img-fluid w-auto' />
                                                </div>
                                                <h3 className="testimonialTitle fs-4 fw-bold  mb-4">
                                                    {personInfo.testimonialTitle}
                                                </h3>
                                                <p className="testDecs mb-5 fs-6 fw-normal textGray" dangerouslySetInnerHTML={{ __html: personInfo.testDecs }}>
                                                    {/* {personInfo.testDecs} */}
                                                </p>
                                            </div>
                                            <div className='reviewBottom pb-2'>
                                                <div className='ratting d-flex gap-2 justify-content-center mb-3'>
                                                    <span>
                                                        <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                                    </span>
                                                    <span>
                                                        <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                                    </span>
                                                    <span>
                                                        <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                                    </span>
                                                    <span>
                                                        <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                                    </span>
                                                    <span>
                                                        <img src={StarIcon} alt='StarIcon' className='img-fluid' />
                                                    </span>
                                                </div>
                                                <div className="name fs-4 fw-bold ff-rufina mb-2">
                                                    <p>
                                                        {personInfo.personName}
                                                    </p>
                                                </div>
                                                <div className="date fs-6 textGray fw-normal pb-4">
                                                    <p>
                                                        {personInfo.duration}
                                                    </p>
                                                </div>
                                                <span className="QuoteIcon position-absolute d-flex justify-content-center align-items-center rounded-circle">
                                                    <img src={QuoteIcon} alt='QuoteIcon' className='img-fluid' />
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>



                                )
                            })
                        }
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default Testimonial