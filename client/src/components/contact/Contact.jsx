export default function Contact() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">Contact Us</h1>
          <p>
            Feel free to reach out to us anytime – we're here to listen, assist,
            and ensure your experience is seamless. Your questions, feedback,
            and inquiries are important to us, and we look forward to connecting
            with you.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-map-marker-alt text-primary" />
                    </div>
                    <span>Sofia, Bulgaria</span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-envelope-open text-primary" />
                    </div>
                    <span>info@example.com</span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-phone-alt text-primary" />
                    </div>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://maps.google.com/maps?q=42.63647540068086, 23.36966804448252&z=15&output=embed"
              frameBorder={0}
              style={{ minHeight: 400, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp; PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 150 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
