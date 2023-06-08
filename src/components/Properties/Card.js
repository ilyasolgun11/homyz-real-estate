//Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faMaximize } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img__container">
          <img className="card-img" alt="picture of house" src={props.img} />
        </div>
        <div className="card-body">
          <div className="card-header__container">
            <div className="card__home-type">{props.type}</div>
            <div className="card__location">{props.location}</div>
            {props.deal ? <div className="card__deal">{props.deal}</div> : null}
          </div>
          <div className="card__home-info">
            <p>{props.info}</p>
            <div className="card__building-container">
              <div className="card__building-beds">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faBed} style={{ color: "#656565" }} />
                </div>
                <div className="icon-label-container">{props.beds}</div>
              </div>
              <div className="card__building-bathrooms">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faBath} style={{ color: "#656565" }} />
                </div>
                <div className="icon-label-container">{props.bathrooms}</div>
              </div>
              <div className="card__building-sqft">
                <div className="icon-container">
                  <FontAwesomeIcon
                    icon={faMaximize}
                    style={{ color: "#656565" }}
                  />
                </div>
                <div className="icon-label-container">{props.sqft} sq ft</div>
              </div>
            </div>

            <div className="card__price-container">
              <div className="card__price">
                <span>£</span>
                {props.price}
              </div>
              {props.discount ? (
                <div className="card__discount">
                  <span>was £</span>
                  {props.discount}
                </div>
              ) : null}
            </div>
            <div className="card__more-details">
              <Link
                type="button"
                className="more-details__link"
                to={`/property/${props.id}`}
                onClick={scrollToTop}
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
