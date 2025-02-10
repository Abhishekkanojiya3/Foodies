import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({name, locality,cuisines, cloudinaryImageId, avgRating })=> {
    //const restaurantInfo = resList[0].restaurants[1].info; // Accessing the first restaurant's info
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 w-64 h-80 flex flex-col justify-between">
        <img className = "w-full h-40 object-cover rounded-md" src = {
          CDN_URL
            +
            cloudinaryImageId
          } alt = "logo"/>
         <div>
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
      </div>
      <div className="text-sm font-bold text-gray-700">
        ⭐ {avgRating} / 5
      </div>
       
      </div>
    )
  }

  export default RestaurantCard;