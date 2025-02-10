import React,{useEffect, useState} from 'react'

const useRestaurantView = (id) => {

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
        setRestaurantData(restaurantDataa);
      } catch (error) {
        console.error(error);
      }
    };
  return {restaurantData, menuItems}
}

export default useRestaurantView;