import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                
            }
        ]
    },
]);

export default Router;