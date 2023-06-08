//Styling
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Home.css";
//Components
import HeroSection from "./HeroSection/HeroSection";
import FeaturedIn from "./FeaturedIn/FeaturedIn";
import Properties from "./Properties/Properties";
import Footer from "./Footer/Footer";

//Images
import ModernHouseOne from "../images/modern-house-1.jpg";
// import ModernHouseTwo from "./images/modern-house-2.jpg";
// import ModernHouseThree from "./images/modern-house-3.jpg";
// import ModernHouseFour from "./images/modern-house-4.jpg";
import WhiteShadow from "../images/white-shadow.png";
import FeaturedOne from "../images/featured-1.png";
import FeaturedTwo from "../images/featured-2.png";
import FeaturedThree from "../images/featured-3.png";
import FeaturedFour from "../images/featured-4.png";

function Home() {
  return (
    <div>
      <main>
        <HeroSection heroRightImg={ModernHouseOne} whiteShadow={WhiteShadow} />
      </main>
      <section>
        <FeaturedIn
          featuredOne={FeaturedOne}
          featuredTwo={FeaturedTwo}
          featuredThree={FeaturedThree}
          featuredFour={FeaturedFour}
        />
      </section>
      <section>
        <Properties />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
