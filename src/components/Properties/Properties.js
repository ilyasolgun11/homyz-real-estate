//Hooks
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Components
import Filter from "./Filter/Filter";
import Card from "./Card";
import Contact from "../Contact/Contact";
//Styles
import "./Properties.css";
//Home Images
import Home1 from "./images/home-1.jpg";
import Home2 from "./images/home-2.jpeg";
import Home3 from "./images/home-3.jpeg";
import Home4 from "./images/home-4.jpeg";
import Home6 from "./images/home-6.jpg";
import Home7 from "./images/home-7.jpeg";
import Home8 from "./images/home-8.jpg";
import Home9 from "./images/home-9.jpeg";
import Apartment1 from "./images/apartment-1.jpg";
import Apartment2 from "./images/apartment-2.jpg";
import Apartment3 from "./images/apartment-3.jpg";
import Apartment4 from "./images/apartment-4.jpg";
import Apartment5 from "./images/apartment-5.jpg";
//Person Images
import Women1 from "../Paths/Images/women-1.jpg";
import Women2 from "../Paths/Images/women-2.avif";
import Women3 from "../Paths/Images/women-3.avif";
import Man1 from "../Paths/Images/man-1.jpeg";
import Man2 from "../Paths/Images/man-2.avif";
import Man3 from "../Paths/Images/man-3.avif";

export const northLondonProperties = [
  {
    id: 1,
    img: Home1,
    location: "North London",
    type: "House",
    info: "315 Bury St W, London, N9 9JN",
    beds: 2,
    bathrooms: 1,
    squareft: 705,
    price: "790,000",
    deal: "Rare find",
    discount: "840,000",
    name: "Amelia Carter",
    personImg: Women1,
  },
  {
    id: 2,
    img: Home2,
    location: "North London",
    type: "House",
    info: "19 Wheatfields, London, EN3 5DW",
    beds: 3,
    bathrooms: 2,
    squareft: 825,
    price: "930,000",
    name: "Sophia Bennett",
    personImg: Women2,
  },
  {
    id: 3,
    img: Home3,
    location: "North London",
    type: "House",
    info: "17 Burncroft Ave, London, EN3 7JP",
    beds: 3,
    bathrooms: 2,
    squareft: 783,
    price: "1,290,000",
    name: "Amelia Carter",
    personImg: Women1,
  },
  {
    id: 4,
    img: Home6,
    location: "North London",
    type: "House",
    info: "20 Greenway, London, N20 8ED",
    beds: 4,
    bathrooms: 3,
    squareft: 917,
    price: "2,190,000",
    deal: "Rare find",
    discount: "2,290,000",
    name: "Sophia Bennett",
    personImg: Women2,
  },
  {
    id: 5,
    img: Apartment1,
    location: "North London",
    type: "Apartment",
    info: "23 Michleham Down, London, N12 7JJ",
    beds: 2,
    bathrooms: 1,
    squareft: 443,
    price: "1,622,000",
    name: "Sophia Bennett",
    personImg: Women2,
  },
  {
    id: 6,
    img: Apartment2,
    location: "North London",
    type: "Apartment",
    info: "14 Sanders Ln, London, NW7 1BD",
    beds: 1,
    bathrooms: 1,
    squareft: 374,
    price: "484,000",
    name: "Amelia Carter",
    personImg: Women1,
  },
];

export const southLondonProperties = [
  {
    id: 7,
    img: Home4,
    location: "South London",
    type: "House",
    info: "25 Heybridge Ave, London, SW16 3DY",
    beds: 3,
    bathrooms: 1,
    squareft: 674,
    price: "2,520,000",
    name: "Ethan Thompson",
    personImg: Man2,
  },
  {
    id: 8,
    img: Home9,
    location: "South London",
    type: "House",
    info: "57 Fitzhugh Grove, London, SW18 3SD",
    beds: 3,
    bathrooms: 1,
    squareft: 743,
    price: "1,930,000",
    name: "Lucas Wright",
    personImg: Man3,
  },
  {
    id: 9,
    img: Apartment4,
    location: "South London",
    type: "Apartment",
    info: "71 Dunston Rd, London, SW11 5YB",
    beds: 2,
    bathrooms: 2,
    squareft: 325,
    price: "1,860,000",
    name: "Akshay Singh",
    personImg: Man1,
  },
  {
    id: 10,
    img: Apartment5,
    location: "South London",
    type: "Apartment",
    info: "18 Gideon Rd, London, SW11 5UA",
    beds: 2,
    bathrooms: 3,
    squareft: 505,
    price: "2,140,000",
    name: "Akshay Singh",
    personImg: Man1,
  },
];

export const eastLondonProperties = [
  {
    id: 11,
    img: Home7,
    location: "East London",
    type: "House",
    info: "28 Shoreditch Street, London, E1 6PG",
    beds: 2,
    bathrooms: 1,
    squareft: 691,
    price: "439,000",
    deal: "Rare find",
    discount: "624,000",
    name: "Ava Campbell",
    personImg: Women3,
  },
  {
    id: 12,
    img: Apartment4,
    location: "East London",
    type: "Apartment",
    info: "7 Leyton High Road, London, E10 6JP",
    beds: 2,
    bathrooms: 2,
    squareft: 582,
    price: "762,000",
    name: "Ava Campbell",
    personImg: Women3,
  },
  {
    id: 13,
    img: Apartment3,
    location: "East London",
    type: "Apartment",
    info: "16 Mile End Road, London, NE1 4NS",
    beds: 4,
    bathrooms: 3,
    squareft: 825,
    price: "2,490,000",
    name: "Sophia Bennett",
    personImg: Women1,
  },
  {
    id: 14,
    img: Apartment5,
    location: "East London",
    type: "Apartment",
    info: "9 Hackney Wick, London, E9 5RD",
    beds: 3,
    bathrooms: 2,
    squareft: 658,
    price: "938,000",
    deal: "Rare find",
    discount: "1,024,000",
    name: "Sophia Bennett",
    personImg: Women1,
  },
];

export const westLondonProperties = [
  {
    id: 15,
    img: Home8,
    location: "West London",
    type: "House",
    info: "9 Holland Avenue, London, W11 3RN",
    beds: 4,
    bathrooms: 3,
    squareft: 929,
    price: "2,390,000",
    name: "Akshay Singh",
    personImg: Man1,
  },
  {
    id: 16,
    img: Home9,
    location: "West London",
    type: "House",
    info: "15 Notting Gate, London, W11 3JE",
    beds: 4,
    bathrooms: 3,
    squareft: 878,
    price: "2,138,000",
    deal: "Rare find",
    discount: "2,294,000",
    name: "Akshay Singh",
    personImg: Man1,
  },
  {
    id: 17,
    img: Apartment2,
    location: "West London",
    type: "Apartment",
    info: "18 Fulham Road, London, SW3 6HX",
    beds: 4,
    bathrooms: 3,
    squareft: 925,
    price: "2,490,000",
    name: "Lucas Wright",
    personImg: Man3,
  },
  {
    id: 18,
    img: Apartment1,
    location: "West London",
    type: "Apartment",
    info: "51 Hammer Grove, London, W6 0NE",
    beds: 2,
    bathrooms: 2,
    squareft: 658,
    price: "938,000",
    deal: "Rare find",
    discount: "1,124,000",
    name: "Lucas Wright",
    personImg: Man3,
  },
];

const Properties = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const headerHeight = document.querySelector(
      ".properties__header"
    ).offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > headerHeight) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  };

  const [filteredProperties, setFilteredProperties] = useState([
    ...northLondonProperties,
    ...southLondonProperties,
    ...eastLondonProperties,
    ...westLondonProperties,
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (
    selectedLocation,
    selectedPropertyType,
    selectedPriceRange
  ) => {
    setIsLoading(true);

    let filteredResults = [];

    if (selectedLocation === "north") {
      filteredResults = northLondonProperties;
    } else if (selectedLocation === "south") {
      filteredResults = southLondonProperties;
    } else if (selectedLocation === "east") {
      filteredResults = eastLondonProperties;
    } else if (selectedLocation === "west") {
      filteredResults = westLondonProperties;
    } else {
      filteredResults = [
        ...northLondonProperties,
        ...southLondonProperties,
        ...eastLondonProperties,
        ...westLondonProperties,
      ];
    }

    if (selectedPropertyType !== "any") {
      filteredResults = filteredResults.filter(
        (property) => property.type === selectedPropertyType
      );
    }

    if (selectedPriceRange !== "any") {
      const [minPriceStr, maxPriceStr] = selectedPriceRange.split(" - ");
      const minPrice = parseInt(minPriceStr.replace(/,/g, ""), 10);
      const maxPrice = parseInt(maxPriceStr.replace(/,/g, ""), 10);
      filteredResults = filteredResults.filter((property) => {
        const propertyPrice = parseInt(property.price.replace(/,/g, ""), 10);
        return propertyPrice >= minPrice && propertyPrice <= maxPrice;
      });
    }

    setTimeout(() => {
      setFilteredProperties(filteredResults);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [filteredProperties]);

  return (
    <div id="#properties" className="properties__container container">
      <div
        className={`properties__header ${isHeaderVisible ? "slide-up" : ""}`}
      >
        <h2 className="properties__header-h2">
          Browse our Estates
          <div className="properties__header-circle"></div>
        </h2>
        <h4 className="properties__header-h4">
          Browse our Estates for a curated selection of exquisite properties
          awaiting your discovery.
        </h4>
      </div>

      <Filter onSearch={handleSearch} />

      <div className="properties-results__container">
        {isLoading ? (
          <div className="loading-animation">
            <div className="circle"></div>
          </div>
        ) : (
          <div className="row properties__results-style">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <div key={index} className="col-lg-4">
                  <Card
                    id={property.id}
                    img={property.img}
                    type={property.type}
                    location={property.location}
                    deal={property.deal}
                    info={property.info}
                    beds={property.beds}
                    bathrooms={property.bathrooms}
                    sqft={property.squareft}
                    price={property.price}
                    discount={property.discount}
                  />
                </div>
              ))
            ) : (
              <div className="no-result-container">
                <h4 className="no-results">No results</h4>
                <p>To see results, change the filters above</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Properties;
