import { Link } from "react-router-dom";

export default function PropertiesListItem({
    _id,
    title,
    bedroomNum,
    type,
    address,
    imageURL,
    bathNum,
    price
}) {
    
    return (

       

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="property-item rounded overflow-hidden">
          <div className="position-relative overflow-hidden"
          style ={{height: "300 px"}}
          >
            <a href="">
              <img className="img-fluid" src={imageURL} alt="" />
            </a>
            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
              For Sell
            </div>
            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
              {type}
            </div>
          </div>
          <div className="p-4 pb-0">
            <h5 className="text-primary mb-3">{"$" + price}</h5>
            <a className="d-block h5 mb-2" href="">
              {title}
            </a>
            <p>
              <i className="fa fa-map-marker-alt text-primary me-2" />
              {address}
            </p>
          </div>
          <div className="d-flex border-top">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-ruler-combined text-primary me-2" />
              {"$" +price}
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-bed text-primary me-2" />{bedroomNum + " Bed"} 
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-bath text-primary me-2" />{bathNum + " Bath"}
            </small>
          </div>
        </div>
      </div>


    );
}