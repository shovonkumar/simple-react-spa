import web from "../assets/web.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="col-md-4 mx-auto">
        <div className="card">
          <img src={web} className="card-img-top" alt="Service" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <Link to="" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
