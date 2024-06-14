
import Itemlist from "./Itemlist.js";
import { useState } from "react";
const Restaurantcategory=({data,showItems,setshowIndex})=>{
    // const [showItems,setShowItems]=useState(false);
    // console.log(data);
    // console.log("hi")
    const handleclick=()=>{
    //    setShowItems(!showItems);
    setshowIndex();
    };
    return (
        
    <div>
        
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 "> 
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>

            <span className="font-bold text-lg">
                {data.title} 
                ({data.itemCards.length})
                
            </span>
            <span>👇</span>
        </div>
            {showItems && <Itemlist items={data.itemCards}/>}
        </div>
        
       
    </div>
    );
}
export default Restaurantcategory;