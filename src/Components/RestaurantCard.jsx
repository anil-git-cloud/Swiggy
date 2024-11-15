import "./restaurant.css"
import PropTypes from 'prop-types';
import { IoLocation } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { ImSpoonKnife } from "react-icons/im";


const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  // lastMileTravelString,
  avgRating,
  locality,
}) => {
  return (
    <>
      <div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        <div className="card-text">
          <h4>{name}</h4>
          <span><ImSpoonKnife /><h5>{cuisines.join(", ")}</h5></span>
          <span><FcRating /> <h6>{avgRating}</h6> <IoLocation/><h6>{locality}</h6></span>
          {/* <h4>{lastMileTravelString}</h4> */}
        </div>
      </div>
    </>
  )
}

RestaurantCard.propTypes = {
    name: PropTypes.string.isRequired,
    cuisines: PropTypes.array.isRequired,
    cloudinaryImageId: PropTypes.string.isRequired,
    // lastMileTravelString: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    locality: PropTypes.string.isRequired,
};

export default RestaurantCard;
