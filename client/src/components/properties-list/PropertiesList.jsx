import { useEffect, useState } from 'react';

import * as propertyService from '../../services/propertyService'
import PropertiesListItem from './properties-list-item.jsx/PropertiesListItem';


export default function PropertiesList() {

  const [properties, setProperties] = useState([]);

    useEffect(() => {
        propertyService.getAllProperties()
            .then(result => setProperties(result))
            .catch(err => {
                console.log(err);
            });
    }, []);


  return (

    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">Property Listing</h1>
              <p>
                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 text-start text-lg-end wow slideInRight"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              <li className="nav-item me-2">
                <a
                  className="btn btn-outline-primary active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  Featured
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  className="btn btn-outline-primary"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  For Sell
                </a>
              </li>
              <li className="nav-item me-0">
                <a
                  className="btn btn-outline-primary"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  For Rent
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              
            {properties.map(property => (
                <PropertiesListItem key={property._id} {...property} />
            ))}
           
              <div
                className="col-12 text-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
               
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}