import "./FeaturedIn.css";

const FeaturedIn = (props) => {
  return (
    <div className="container">
      <div className="featured-container row">
        <div className="col-md-6">
          <img className="featured-images" src={props.featuredOne} />
          <img className="featured-images" src={props.featuredTwo} />
        </div>
        <div className="col-md-6">
          <img className="featured-images" src={props.featuredThree} />
          <img className="featured-images" src={props.featuredFour} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
