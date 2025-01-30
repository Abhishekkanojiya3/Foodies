import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({name, locality,cuisines, cloudinaryImageId })=> {
    //const restaurantInfo = resList[0].restaurants[1].info; // Accessing the first restaurant's info
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className = "res-logo" src = {
          CDN_URL
            +
            cloudinaryImageId
          } alt = "logo"/>
        <h2>{name}</h2>
        <h3>{cuisines?.join(",")}</h3>
        <h4>{locality}</h4>
       
      </div>
    )
  }

  export default RestaurantCard;