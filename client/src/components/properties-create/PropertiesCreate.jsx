import { useNavigate } from 'react-router-dom';




export default function PropertiesCreate() {




  
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 ">
            <img src="img/about.jpg" />
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <form id="create" >
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Title"
                      name = "title"
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
                      defaultValue={""}
                    />
                    <label htmlFor="message">Property Description</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Create
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
