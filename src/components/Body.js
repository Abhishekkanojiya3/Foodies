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
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        console.log(restaurantData);
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
    <div className="p-6">
      {/* Search Bar */}
      <div className="flex justify-center items-center mb-6">
        <input
          className="border border-gray-300 p-2 rounded-md shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search for restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-3 hover:bg-blue-600 transition duration-200"
          onClick={() => {
            const data = filterData(searchQuery, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="transform transition duration-200 hover:scale-105"
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
