import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantView = () => {
  const { id } = useParams();
  console.log(id);
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.642752063660424&lng=77.29424821849668&restaurantId=${id}`
      );
      const json = await data.json();
      const restaurantDataa = json?.data?.cards[2].card.card.info || [];
      console.log(restaurantDataa);
      console.log(json);
      const menuItemss =
        json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards || [];
      setMenuItems(menuItemss);
      console.log("Menu Items:", menuItems);

      setRestaurantData(restaurantDataa);
    } catch (error) {
      console.error(error);
    }
  };
  if (!restaurantData) {
    return <Shimmer />;
  }
  return (
    <div className="res-view">
      <h1>{restaurantData.name}</h1>
      <img className="image" src={CDN_URL + restaurantData.cloudinaryImageId} alt="logo" />
      <div className="menu">
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.card.info.id}>
              {menu.card.info.name} - {"Rs."}{" "}
              {menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantView;
