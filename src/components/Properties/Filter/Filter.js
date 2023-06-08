//Styles
import "./Filter.css";
//Hooks
import { useState } from "react";

const Filter = ({ onSearch }) => {
  const [location, setLocation] = useState("any");
  const [propertyType, setPropertyType] = useState("any");
  const [priceRange, setPriceRange] = useState("any");

  const handleSearch = () => {
    onSearch(location, propertyType, priceRange);
  };

  return (
    <div className="filter__outer-container">
      <div className="filter__container row container">
        <div className="filter-location__container col-lg-3">
          <div className="select-form__container">
            <div className="select-form__icon-container">
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
            </div>
            <select
              className="select-form"
              aria-label="Default select example"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="any">Location (any)</option>
              <option value="north">North London</option>
              <option value="south">South London</option>
              <option value="east">East London</option>
              <option value="west">West London</option>
            </select>
          </div>
        </div>
        <div className="filter-property__container col-lg-3">
          <div className="select-form__container">
            <div className="select-form__icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
            </div>
            <select
              className="select-form"
              aria-label="Default select example"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="any">Property type (any)</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>
        </div>

        <div className="filter-price__container col-lg-3">
          <div className="select-form__container">
            <div className="select-form__icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-currency-pound"
                viewBox="0 0 16 16"
              >
                <path d="M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.32 5.32 0 0 1 2.103.465V2.456A5.629 5.629 0 0 0 9.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4v.972z" />
              </svg>
            </div>
            <select
              className="select-form"
              aria-label="Default select example"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="any">Price range (any)</option>
              <option value="2,500,000 - 3,000,000">
                2,500,000 - 3,000,000
              </option>
              <option value="2,000,000 - 2,500,000">
                2,000,000 - 2,500,000
              </option>
              <option value="1,500,000 - 2,000,000">
                1,500,000 - 2,000,000
              </option>
              <option value="1,000,000 - 1,500,000">
                1,000,000 - 1,500,000
              </option>
              <option value="500,000 - 1,000,000">500,000 - 1,000,000</option>
              <option value="100,000 - 500,000">100,000 - 500,000</option>
            </select>
          </div>
        </div>
        <div className="filter-price__container col-lg-3">
          <button className="filter__btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
