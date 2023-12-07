import { useEffect, useState } from "react";

import * as propertyService from "../../services/propertyService";
import PropertiesListItem from "./properties-list-item.jsx/PropertiesListItem";

export default function PropertiesList() {

  const [search, setSearch] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [properties, setProperties] = useState([]);


  useEffect(() => {
    propertyService
      .getAllProperties()
      .then((result) => {
        setProperties(result);
        setFilteredProperties(result); // Initialize filteredProperties with all properties
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    // Filter properties when the search term changes
    const filtered = properties.filter((property) =>
      property.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProperties(filtered);
  }, [search, properties]);

console.log(properties)
console.log(filteredProperties)
console.log(search)



  return (
    <div>
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: 35 }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-12">
                  <input onChange={(e) => {setSearch(e.target.value)}}
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Search Keyword"
                  />
                </div>
             
              </div>
            </div>
           
          </div>
        </div>
      </div>

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
                  Discover your dream home with our curated property listings,
                  where every detail meets your desires, bringing you closer to
                  the perfect place to call home.
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
                {filteredProperties.map((property) => (
                  <PropertiesListItem key={property._id} {...property} />
                ))}

                <div
                  className="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
