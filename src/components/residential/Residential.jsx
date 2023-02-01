import React from 'react'
import './Residential.scss'
import residential1 from '../../assets/images/residential1.jpg'
import residential2 from '../../assets/images/residential2.jpg'
import residential3 from '../../assets/images/residential3.jpg'
import residential4 from '../../assets/images/residential4.jpg'
import residential5 from '../../assets/images/residential5.jpg'
const Residential = () => {
    return (
        <div className='residential pt-4 mt-4'>
            <div className="container">
                <h2 className="residentialTitle text-center">Residential Categories</h2>
                <div className="residential-wrapper">
                    <div className="residential-top">
                        <div className="row">
                            <div className="col-xl-8">
                                <a href='#' className="residential-item w-100 d-block">
                                    <img src={residential1} className="img-fluid" alt="" />
                                    <div className="residential-content">
                                        <h2 className='title text-decoration-none'>Single</h2>
                                        <p className='pra'>No: 58 A, East Medison Street, New York 4508</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4">
                                <a href='#' className="residential-item w-100 d-block">
                                    <img src={residential2} className="img-fluid" alt="" />
                                    <div className="residential-content">
                                        <h2 href='#' className='title text-decoration-none'>Double</h2>
                                        <p className='pra'>No: 58 A, East Medison Street, New York 4508</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4">
                                <a href='#' className="residential-item w-100 d-block">
                                    <img src={residential3} className="img-fluid" alt="" />
                                    <div className="residential-content">
                                        <h2 href='#' className='title text-decoration-none'>Twin Room</h2>
                                        <p className='pra'>No: 58 A, East Medison Street, New York 4508</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4">
                                <a href='#' className="residential-item w-100 d-block">
                                    <img src={residential4} className="img-fluid" alt="" />
                                    <div className="residential-content">
                                        <h2 href='#' className='title text-decoration-none'>Family Rooms</h2>
                                        <p className='pra'>No: 58 A, East Medison Street, New York 4508</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4">
                                <a href='#' className="residential-item w-100 d-block">
                                    <img src={residential5} className="img-fluid" alt="" />
                                    <div className="residential-content">
                                        <h2 href='#' className='title text-decoration-none'>Hotels</h2>
                                        <p className='pra'>No: 58 A, East Medison Street, New York 4508</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Residential