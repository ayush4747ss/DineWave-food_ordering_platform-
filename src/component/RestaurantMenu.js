// import React, { usestate} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import {MENU_API} from "../../utils/contents";
import Menucard from "./Menucard";
import Restaurantcategory from "./Restaurantcategory";
import Restaurantcategory from "./Restaurantcategory";
import { useState } from "react";


const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
  const {resId}=useParams();
  // console.log(resId)

  const resInfo=useRestaurantMenu(resId);
  const [showIndex,setshowIndex]=useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API+ resId
  //   );
  //   const json = await data.json();
  //   console.log(json);

  //   setresInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

    // console.log("ayush",name,resInfo?.cards[0]?.card?.card?.info);


  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
  console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
  const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) =>
  c.card?.["card"]?.["@type"] ===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categories);

//   console.log("shukla",itemCards)
//   console.log( 
//     "item",
//     itemcard,
//     "2",
//     resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3]["card"]["card"]["itemCards"]) //?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
    // itemcards,
//     resInfo.cards[2].groupedCard["cardGroupMap"]["REGULAR"]["cards"][3]
//   );
//   console.log("item"+itemcards)

if(!itemCards) return(
  <div className="flex flex-col items-center justify-center mt-14">
    <h1 className="font-serif font-bold italic text-3xl text-center">
    CANNOT TAKE ORDER CURRENTLY
</h1>

    <img src="https://media.tenor.com/hB9OTbewrikAAAAi/work-work-in-progress.gif" alt="Sorry GIF" className=" mt-3 max-w-full max-h-96" />
</div>
) 

  // <h1>NO Speciality tod</h1>
  return (
  
   <div className="Menu text-center">
     <h1 className="font-bold my-6 text-size-2xl">{name}</h1>
     <p className="font-bold text-1g">{cuisines.join(", ")}-{costForTwoMessage}</p>
    {categories.map((category,index)=>(<Restaurantcategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false}
    setshowIndex={()=>setshowIndex(index)}/>))}
    </div>
  );
}; 

export default RestaurantMenu;
