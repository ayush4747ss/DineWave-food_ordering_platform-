import RestaurantCard,{withPromotedlabel} from "./RestaurantCard";
// import resList from "../../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body=()=>{
    const [newresList,setresList]=useState([]);
    const [buttonText,setButtonText]=useState("Top Rated Restaurant");
    const [searchtext,setsearchtext]=useState("")
    const [filteredreslist,setfilteredreslist]=useState([]);

    const RestaurantcardPromoted=withPromotedlabel(RestaurantCard);
    
    useEffect(() => {
        fetchData();
      },[]);
    
      const fetchData = async () => {
        const data = await fetch( 
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
        console.log(json)
        console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setresList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredreslist(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        };

        const onlineStatus=useOnlineStatus();
        if(onlineStatus===false)return<h1>Look's like you are offline please check your internet connection </h1>
        
        
        

    return setresList.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter flex items-center">

                <div className="search m-4 px-3 py-2">
                    <input type="text" className="m-4 border-solid  rounded-lg border-2 border-indigo-600" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value);}}/>
                    
                    <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-11 mt-10"  onClick={()=>{
                        console.log(searchtext)
                        const filteredres=newresList.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                        setfilteredreslist(filteredres)
                        
                    }}>Search</button>

                </div>


                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-10 mt-10 filter_btn" 
                onClick={()=>
                {
                    if(buttonText=="Top Rated Restaurant")
                    {
                        const filteresList=newresList.filter((res)=>res.info.avgRating>4);
                        setfilteredreslist(filteresList);
                        setButtonText("All Restaurant");
                    }
                    else{
                        setButtonText("Top Rated Restaurant");
                       
                        setfilteredreslist(()=>[...newresList])

                    }
                    
                    
                }}
                
                >{buttonText}</button>


                
            </div>


           

            <div className="flex flex-wrap ml-11">
                {filteredreslist.map((restaurant)=>(
                  <Link to={"/restaurant/"+restaurant.info.id} style={{textDecoration:"none", color:"Black"}}>
                    {restaurant.info.Promoted?(<RestaurantcardPromoted resobj={restaurant}/>):(
                    <RestaurantCard key={restaurant.info.id} resobj={restaurant}/>)}</Link>)
                )}
                
            </div>

            


        </div>

    )
};

export default Body