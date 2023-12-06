import { useNavigate, useParams } from 'react-router-dom';

import * as propertyService from '../../services/propertyService';
import { useEffect, useState } from 'react';


export default function PropertyEdit() {

    const navigate = useNavigate();
    const { propertyId } = useParams();
    const [property, setProperty] = useState({
        title: '',
        type: '',
        bathNum: '',
        bedroomNum: '',
        imageURL: '',
        address: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        propertyService.getOneProperty(propertyId)
            .then(result => {
                setProperty(result);
            });
    }, [propertyId]);

    const editPropertySubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await propertyService.editProperty(propertyId, values);

            navigate('/properties');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setProperty(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };



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
            <form id="create" onSubmit={editPropertySubmitHandler}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Title"
                      name = "title"
                      defaultValue={property.title}
                    />
                    <label htmlFor="name">Title</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="price"
                      name="price"
                      defaultValue={property.price}
                    />
                    <label htmlFor="name">Price</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="bedroomNum"
                      placeholder="bedroomNum"
                      name = "bedroomNum"
                      defaultValue={property.bedroomNum}
                    />
                    <label htmlFor="name">Number of Bedrooms</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="bathNum"
                      placeholder="bathNum"
                      name="bathNum"
                      defaultValue={property.bathNum}
                    />
                    <label htmlFor="name">Number of Baths</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  
                  <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="type"
                      name = "type"
                      defaultValue={property.type}
                    />
                  <label htmlFor="name">Property Type</label>
                
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      name = "address"
                      defaultValue={property.address}
                    />
                    <label htmlFor="email">Property Address</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      placeholder="Image"
                      name = "imageURL"
                      defaultValue={property.imageURL}
                    />
                    <label htmlFor="subject">Image URL</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      id="description"
                      name ="description"
                      style={{ height: 150 }}
                      defaultValue={property.description}
                    />
                    <label htmlFor="message">Property Description</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
