import React from "react";
import { Routes,Route } from "react-router-dom";
import routes from "./config";

const AppRoutes = () => {
    return(
        <Routes>
            {routes.map((route,routeIndex)=>(
                <Route {...route} key={routeIndex}/>
            ))}
        </Routes>
    )
}

export default AppRoutes;