import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import "./restaurant.css"
import { restaurants } from "./swiggyApi"


function filterData(searchText, filterrestaurant) {

  return filterrestaurant.filter((restaurant) => restaurant.info.name.includes(searchText))
}

const Home = () => {
  const [filterrestaurant, setFilterrestaurant] = useState(restaurants)
  const [searchText, setSearchText] = useState("")
  

  useEffect(() => {
    getApiCall();
  }, [])

  async function getApiCall() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1364016&lng=72.8296252&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    setFilterrestaurant(json?.data?.cards[2]?.restaurants?.info);
  }

  return (
    <>
      <div className="home">
        
        {/* Input */}
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />

          {/* Search button */}
          <button className="search-btn" onClick={() => {
            const data = filterData(searchText, filterrestaurant)
            setFilterrestaurant(data);
          }}>Search</button>
        </div>

             <h1>Restaurants with online food delivery in Mumbai</h1>
        <div className="restaurant-list">
             {filterrestaurant.map((restaurant) => {
              return (
              <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
