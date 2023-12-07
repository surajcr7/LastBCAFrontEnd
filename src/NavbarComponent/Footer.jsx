import { Link } from "react-router-dom";
//import "./AddFooter.css"; // Import the new CSS file

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color custom-bg">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color">
                    Multivendor Agriculture E-Commerce
                  </h5>
                  <p>
                    Explore our vibrant marketplace where farmers and buyers
                    come together to cultivate a thriving community of
                    agriculture-based commerce.
                  </p>
                </div>

                {/* Updated sections with relevant content */}
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Categories</h5>
                  <ul className="list-unstyled mb-0 footer-links">
                    <li>
                      <Link to="/products" className="text-color" style={{ textDecoration: 'none' }}>
                        Fresh Produce
                      </Link>
                    </li>
                    <li>
                      <Link to="/seeds" className="text-color" style={{ textDecoration: 'none' }}>
                        Seeds &amp; Plants
                      </Link>
                    </li>
                    <li>
                      <Link to="/equipment" className="text-color" style={{ textDecoration: 'none' }}>
                        Farm Equipment
                      </Link>
                    </li>
                    <li>
                      <Link to="/fertilizers" className="text-color" style={{ textDecoration: 'none' }}>
                        Fertilizers
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Support</h5>
                  <ul className="list-unstyled mb-0 footer-links">
                    <li>
                      <Link to="/contact" className="text-color" style={{ textDecoration: 'none' }}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="text-color" style={{ textDecoration: 'none' }}>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-color-4">Sell With Us</h5>
                  <ul className="list-unstyled mb-0 footer-links">
                    <li>
                      <Link to="/vendor/register" className="text-color" style={{ textDecoration: 'none' }}>
                        Become a Vendor
                      </Link>
                    </li>
                    <li>
                      <Link to="/vendor/faq" className="text-color" style={{ textDecoration: 'none' }}>
                        Vendor FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Login from here</span>
                <Link to="/user/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>

          <div className="text-center">
            © 2023 Copyright:
            <a
              className="text-color-3"
              href="https://www.surajpoudel.com.np//"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              🌞 Suraj Poudel 🌙
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
