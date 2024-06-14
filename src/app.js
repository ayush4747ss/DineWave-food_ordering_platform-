import React, { lazy,Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
// import Grocery from "./component/Grocery";

const Grocery=lazy(()=>import("./component/Grocery"));



const Applayout=()=>{
    return ( <div className="app">
        <Header />
        <Outlet/>
        
    </div>
    )
};

const approuter=createBrowserRouter([
    {path:"/",
     element:<Applayout/>,
     children: [
        {   path:"/",
            element:<Body/>,

        },
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/contact",
            element:<Contact />,
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
        }
    ],
     errorElement:<Error/>,
    },
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);