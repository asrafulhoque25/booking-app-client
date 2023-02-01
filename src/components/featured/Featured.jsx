import "./featured.scss";
import { featureData } from './FeatureData.js'
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="row">
          {
            featureData.map((data) =>{
              return (
                <div className="col-xl-4">
              <div className="featureWrapper">
                    <img src={data.featureImg} className="img-fluid featureImg" alt="" />
                    <div className="featureContent">
                      <div className="featureTitle ">
                        <h3 className="title">{data.title}</h3>
                      </div>
                      <div className="bookingInfo d-flex align-items-center justify-content-between">
                        <a href="#" className="text-decoration-none bookingBtn">{data.buttonText}</a>
                        <p className="bookingPrice mb-0">{data.price}</p>
                      </div>
                    </div>
              </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Featured;
