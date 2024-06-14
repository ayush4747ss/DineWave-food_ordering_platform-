import {LOGO_URL}  from "../../utils/contents";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header=()=>{
    

    const[btnnamereact,setbtnnamereact]=useState("Login")
    const onlineStatus=useOnlineStatus();
    return(
        <div className="flex justify-between bg-lime-400 shadow-lg ">
            <div className="logo-container items-center">
                <img 
                    className="w-30 h-24 bg-opacitty-1"
                    src={LOGO_URL}
                />

            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-4 ">
                    
                    <li className="px-4">Online Status:{onlineStatus?"😊":"😒"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><Link to="/grocery">Grocery Store</Link></li>
                    <button
                        className="login"
                        onClick={()=>{
                            if(btnnamereact=="Login")
                            {
                               
                                setbtnnamereact('Logout');
                            }
                            else{
                                setbtnnamereact('Login');
                            }
                        }}
                        >{btnnamereact}
                    </button>
                    
                </ul>
            </div>
        </div>
    )
};

export default Header