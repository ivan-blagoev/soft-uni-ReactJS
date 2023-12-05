import { useContext, useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as propertyService from "../../services/propertyService"
import AuthContext from "../../contexts/authContext";
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";


export default function PropertyDetails() {

    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [property, setProperty] = useState({});
    const { propertyId } = useParams();

    useEffect(() => {
        propertyService.getOneProperty(propertyId)
            .then(setProperty);
    }, [propertyId]);

    

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${property.title}`);

        if (hasConfirmed) {
            await propertyService.remove(propertyId);

            navigate('/properties');
        }
    }

  
    return (
      <div className="container-xxl py-5">
        <div className="container"> 
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src={property.imageURL} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">{property.title}</h1>
              <p className="mb-4">
                {property.description}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                {"Property Type: " + property.type}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                {"Property Price: " + property.price}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                {"Bathrooms: " + property.bathNum}
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                {"Bedrooms: " + property.bedroomNum}
              </p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="" style ={{marginRight:"20px"}}>
                Edit
              </a>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  