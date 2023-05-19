import React from "react";
import { Link } from "react-router-dom";
import residential1 from "../../assets/images/residential1.jpg";
import residential2 from "../../assets/images/residential2.jpg";
import residential3 from "../../assets/images/residential3.jpg";
import residential4 from "../../assets/images/residential4.jpg";
import residential5 from "../../assets/images/residential5.jpg";
import useFetch from "../../hooks/useFetch";
import "./Residential.scss";
const Residential = () => {
    const { data, loading, error } = useFetch("https://booking-app-api-bvpw.onrender.com/api/hotels/countByType");

    const propertyType = [
        {
            typeImg: residential1,
            layout: "col-xl-8",
        },
        {
            typeImg: residential2,
            layout: "col-xl-4",
        },
        {
            typeImg: residential3,
            layout: "col-xl-4",
        },
        {
            typeImg: residential4,
            layout: "col-xl-4",
        },
        {
            typeImg: residential5,
            layout: "col-xl-4",
        },
    ];

    return (
        <div className="residential pt-4 mt-4">
            <div className="container">
                <h2 className="residentialTitle text-center">Residential Categories / Property Type</h2>
                <div className="residential-wrapper">
                    <div className="residential-top">
                        <div className="row">
                            {data &&
                                propertyType?.map((item, index) => {
                                    return (
                                        <div className={`${item?.layout}`}>
                                            <Link className="residential-item w-100 d-block">
                                                <img src={item?.typeImg} className="img-fluid" alt="img" />
                                                <div className="residential-content">
                                                    <h2 className="title text-capitalize text-decoration-none">{data[index]?.type}</h2>
                                                    <p className="pra">
                                                        {data[index]?.count} {data[index]?.type}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Residential;
