import { RouteObject, Navigate } from "react-router-dom"

import { useRoutes } from 'react-router-dom';
import Home from "../pages/Home/Home"
import Electronic from "../pages/Electronic/Electronic"
import DashBoard from "../pages/DashBoard/DashBoard";


const router = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                element: <DashBoard />,
                index: true
            },
            {
                element: <Electronic />,
                path: '2',
            }
        ],
    }
]
export default function Router() {
    return useRoutes(router)
}