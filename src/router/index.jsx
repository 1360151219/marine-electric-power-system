import { RouteObject, Navigate } from "react-router-dom"

import { useRoutes } from 'react-router-dom';
import Home from "../pages/Home/Home"
import Electronic from "../pages/Electronic/Electronic"
import DashBoard from "../pages/DashBoard/DashBoard";
import Generator from "../pages/Generator/Generator";
import Panel from "../pages/Panel/Panel";
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
            },
            {
                element: <Generator />,
                path: '3',
            },
            {
                element: <Panel />,
                path: '4',
            }
        ],
    }
]
export default function Router() {
    return useRoutes(router)
}