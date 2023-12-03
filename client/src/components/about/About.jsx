export default function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="img/about.jpg" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
            <p className="mb-4">
              Our website stands as the #1 place to find the perfect property
              due to its extensive and diverse range of property listings.
              Explore a vast collection of homes, apartments, and estates, each
              meticulously curated to cater to different preferences and needs.
              From cozy urban dwellings to luxurious countryside estates, our
              platform ensures that you have access to a comprehensive
              selection, making it effortless to find the property that aligns
              with your vision of a dream home.
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Comprehensive Property Listings
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Expert Guidance and Insights:
            </p>
            <p>
              <i className="fa fa-check text-primary me-3" />
              Exclusive Access to Off-Market Opportunities
            </p>
            <a className="btn btn-primary py-3 px-5 mt-3" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
