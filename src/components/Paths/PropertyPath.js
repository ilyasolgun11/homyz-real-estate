//Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faMaximize } from "@fortawesome/free-solid-svg-icons";
import "./PropertyPath.css";
//Hooks
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  northLondonProperties,
  southLondonProperties,
  eastLondonProperties,
  westLondonProperties,
} from "../Properties/Properties";
//Components
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const PropertyPath = () => {
  const [emailNotif, setEmailNotif] = useState("");
  const { id } = useParams();

  const properties = [
    ...northLondonProperties,
    ...southLondonProperties,
    ...eastLondonProperties,
    ...westLondonProperties,
  ];

  let property;

  if (id) {
    property = properties.find((property) => property.id === parseInt(id));
  }

  const handleSubmitBtn = (e) => {
    setEmailNotif(() => {
      return (
        <div className="alert alert-success" role="alert">
          Email has been sent!
        </div>
      );
    });
    setTimeout(() => {
      setEmailNotif("");
    }, 2500);
    e.preventDefault();
  };

  const scrollToTopRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
    }, [id]);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={scrollToTopRef} className="property-path__container">
      <div className="container">
        <div className="property-path__inner-container  row">
          <div className="col-lg-7 property-path__animate-left">
            <h1 className="property-path__location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              {property.location}
            </h1>
            <div className="property-path-info__container">
              <h3 className="property-path-info">{property.info}</h3>
            </div>
            <div className="property-path__price-container">
              <h2 className="property-path__price">
                <span>£</span>
                {property.price}
              </h2>
              {property.discount ? (
                <div className="property-path__discount">
                  was
                  <span>£</span>
                  {property.discount}
                </div>
              ) : null}
            </div>
            <div>
              <img
                className="property-path_home-img"
                src={property.img}
                alt="Property"
              />
            </div>
            <div className="property-path__info-container">
              <h3>
                <FontAwesomeIcon icon={faBed} style={{ color: "#656565" }} />
                <span className="property-path__beds">{property.beds}</span>
              </h3>
              <h3>
                <FontAwesomeIcon icon={faBath} style={{ color: "#656565" }} />
                <span className="property-path__beds">
                  {property.bathrooms}
                </span>
              </h3>
              <h3>
                <FontAwesomeIcon
                  icon={faMaximize}
                  style={{ color: "#656565" }}
                />
                <span className="property-path__beds">
                  {property.squareft} sq ft
                </span>
              </h3>
            </div>
          </div>

          <div className="col-lg-5 property-path__animate-right">
            <div className="property-path__agent-container">
              <div className="property-path__agent-info-container">
                <img
                  className="property-path__agent-info-img"
                  src={property.personImg}
                  alt="Property estate agent image"
                />
                <div className="property-path__agent-info">
                  <h3 className="property-path__agent-name">{property.name}</h3>
                  <h4 className="property-path__agent-more-info">Agent info</h4>
                </div>
              </div>
              {emailNotif}
              <div className="property-path__agent-contact-container">
                <form>
                  <div className="input-group input-group-lg">
                    <input
                      placeholder="Name"
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                      required
                    />
                  </div>
                  <div className="input-group input-group-lg">
                    <input
                      placeholder="Email"
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                      required
                    />
                  </div>
                  <div className="input-group input-group-lg">
                    <input
                      placeholder="Phone"
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                      required
                    />
                  </div>
                  <div className="input-group input-group-lg">
                    <div className="input-group">
                      <textarea
                        placeholder={`Hello, im interested in ${property.info}`}
                        className="form-control form-control-text-area"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="property-path__btns-container">
                    <button
                      type="submit"
                      onClick={handleSubmitBtn}
                      className="property-path__btn-send"
                    >
                      Send
                    </button>
                    <button className="property-path__btn-call">Call</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="property-path__p-container">
          <p className="property-path__p">{`This ${property.type} located in ${property.info} offers a modern and stylish living space with ample natural light and stunning city views. With convenient amenities, a prime location, and easy access to local attractions, it provides an ideal opportunity for luxurious urban living in ${property.location}.`}</p>
        </div>
        <div>
          <Contact />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PropertyPath;
