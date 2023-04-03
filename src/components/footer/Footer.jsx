import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../../assets/images/facebook-white.svg';
import Instagram from '../../assets/images/instagram-white.svg';
import Linkedin from '../../assets/images/linkedin-white.svg';
import './Footer.scss';


const Footer = () => {
  return (
    <footer className='footer bgBlack'>
      <div className="footerWidgetArea">
        <div className="container">
          <div className="footerTop sectionPadding">
          
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                {/* <div className='FooterLogo text-start pb-3'>
                  <img src={FooterLogo} className='img-fluid' alt='FooterLogo' />
                </div> */}
                <div className="singleWidget mb-5 mb-xl-0">
                  <h3 className='widgetTitle fs-3 fw-bold  mb-4'>
                    Office Location
                  </h3>
                  <div className="footerIntro fs-6 fw-normal lh-base mb-4 pb-3">
                    <p className='mb-0'>
                      Motivation can take you far, but it can take you even further if you first find your vision.
                    </p>
                  </div>
                  <div className="subscribe position-relative">
                    <input type='email' className='form-control px-4 fs-12' placeholder='Write Your Email' />
                    <button type='button' className='btn fs-6 fw-bold position-absolute sign-btn border-0 px-3'>
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-6 offset-xl-1">
                <div className="singleWidget mb-5 mb-xl-0">
                  <h3 className='widgetTitle fs-3 fw-bold  mb-3 pb-2'>
                    Featured Categories
                  </h3>
                  <ul className='widgetMenu list-unstyled mb-0'>
                    <Link to='/' className="link  fs-18 fw-normal d-block">
                      Accommodation
                    </Link>
                    <Link to='/about' className="link  fs-18 fw-normal d-block">
                      Cities
                    </Link>
                    <Link to='/faq' className="link fs-18 fw-normal d-block">
                      Hotels Life
                    </Link>
                    <Link to='/faq' className="link fs-18 fw-normal d-block">
                      Luxury
                    </Link>
                    <Link to='/faq' className="link fs-18 fw-normal d-block">
                      Masonry
                    </Link>
                    <Link to='/faq' className="link fs-18 fw-normal d-block">
                      Rooms
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-6">
                <div className="singleWidget mb-5 mb-xl-0">
                  <h3 className='widgetTitle fs-3 fw-bold  ff-rufina mb-3 pb-2'>
                    Company
                  </h3>
                  <ul className='widgetMenu list-unstyled mb-0'>
                    <Link to='/review' className="link  fs-18 fw-normal d-block ">
                      About Us
                    </Link>
                    <Link to='/guides' className="link  fs-18 fw-normal d-block ">
                      Terms & Conditions
                    </Link>
                    <Link to='/press' className="link  fs-18 fw-normal d-block">
                      User Agreement
                    </Link>
                    <Link to='/press' className="link  fs-18 fw-normal d-block">
                      Privacy
                    </Link>
                    <Link to='/press' className="link  fs-18 fw-normal d-block">
                      FAQs
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-3 col-6">
                <div className="singleWidget mb-5 mb-xl-0">
                  <h3 className='widgetTitle fs-3 fw-bold textGray3 ff-rufina mb-3 pb-2'>
                    Sponsors
                  </h3>
                  <ul className='widgetMenu list-unstyled mb-0'>
                    <Link to='/partner' className="link  fs-18 fw-normal d-block">
                      Partner with us
                    </Link>
                    <Link to='/guides' className="link  fs-18 fw-normal d-block ">
                      Scholarships
                    </Link>
                  </ul>
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottomArea">
        <div className="container">
          <div className="bottomWrapper d-flex gap-3 gap-md-5 justify-content-center justify-content-md-between align-items-center flex-wrap py-3">
            <div className="copyRight fs-18 fw-normal textGray4">
              <p className='mb-0 text-white'>
                &copy; 2023 MERN Booking App. All Rights Reserved
              </p>
            </div>
            <div className="social">
              <ul className='list-unstyled mb-0 d-flex gap-3 align-items-center flex-wrap'>
                <li>
                  <a href='/' className='singleSocial d-block text-center rounded-circle'>
                    <img src={Facebook} className='img-fluid' alt='SIcon' />
                  </a>
                </li>
                <li>
                  <a href='/' className='singleSocial d-block text-center rounded-circle'>
                    <img src={Instagram} className='img-fluid' alt='SIcon' />
                  </a>
                </li>
                <li>
                  <a href='/' className='singleSocial d-block text-center rounded-circle'>
                    <img src={Linkedin} className='img-fluid' alt='SIcon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
