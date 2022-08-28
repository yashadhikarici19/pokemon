import React from "react";
import {
    Home,
    Details
} from "../layouts"

const routes = [
    {
        path:"",
        exact:true,
        element:<Home />
    },
    {
        path:"pokemon/:pokemon",
        exact:true,
        element:<Details />
    }
]

export default routes