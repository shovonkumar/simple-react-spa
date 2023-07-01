import { Link } from "react-router-dom";
import image from "../assets/image.png";

const About = () => {
  return (
    <section
      id="header"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column align-items-start justify-content-center">
            <h1>
              Welcome to About Page
              <strong className="brand-name"> Shovon Kumar</strong>
            </h1>
            <h2 className="my-3">
              We are the team of talanted web developer making websites
            </h2>
            <div className="mt-3">
              <Link to="/contact" className="btn-get-started">
                Contact Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-image aic">
            <img src={image} className="img-fluid w-100 animated" alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
