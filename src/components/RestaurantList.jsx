import {useEffect} from 'react';

export function RestaurantList({loadRestaurants}) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return <div> List of restaurants</div>;
}

export default RestaurantList;
