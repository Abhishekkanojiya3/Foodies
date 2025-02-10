import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantView from "../utils/useRestaurantView";

const RestaurantView = () => {
  const { id } = useParams();
  const { restaurantData, menuItems } = useRestaurantView(id);

  if (!restaurantData) {
    return <Shimmer />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Restaurant Header Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center p-6">
          <img
            className="w-48 h-48 object-cover rounded-lg shadow-md"
            src={CDN_URL + restaurantData.cloudinaryImageId}
            alt={restaurantData.name}
          />
          <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              {restaurantData.name}
            </h1>
            <p className="text-gray-600 mt-2">
              {restaurantData.cuisines?.join(", ")}
            </p>
            <p className="text-gray-600 mt-1">
              {restaurantData.areaName}, {restaurantData.city}
            </p>
            <p className="text-gray-600 mt-1">
              Rating: {restaurantData.avgRating} ⭐
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Menu</h2>
        <ul className="space-y-4">
          {menuItems.map((menu) => (
            <li
              key={menu.card.info.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {menu.card.info.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {menu.card.info.description}
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-800 whitespace-nowrap">
                  Rs. {menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantView;