import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchQuery, allRestaurants) {
  if (!searchQuery) return allRestaurants;

  return allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();

        const restaurantData =
          json?.data?.cards[1].card.card.gridElements.infoWithStyle
            .restaurants || [];
            console.log(restaurantData)
        setAllRestaurants(restaurantData);
        setFilteredRestaurants(restaurantData);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchData();
  }, []);

  return allRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <input
        className="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button
        className="btn"
        onClick={() => {
          const data = filterData(searchQuery, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
      <div className="res-container">
        {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))}
        {/* <RestaurantCard {...resList[0].restaurants[0].info}/>
        <RestaurantCard {...resList[0].restaurants[1].info}/>
        <RestaurantCard {...resList[0].restaurants[2].info}/>
        <RestaurantCard {...resList[0].restaurants[3].info}/>
        <RestaurantCard {...resList[0].restaurants[4].info}/>
        <RestaurantCard {...resList[0].restaurants[5].info}/>
        <RestaurantCard {...resList[0].restaurants[6].info}/>
        <RestaurantCard {...resList[0].restaurants[7].info}/> */}
      </div>
    </div>
  );
}

export default Body;
