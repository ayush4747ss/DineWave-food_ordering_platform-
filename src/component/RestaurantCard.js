
import {CDN_URL} from "../../utils/contents";

const RestaurantCard=(props)=>{
    const {resobj}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resobj?.info
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-slate-200" >
            
            <img className="rounded-lg res_logo" alt="res_logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-3 ">{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            


        </div>

    )
};

export const withPromotedlabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;