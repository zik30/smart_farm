import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/Home";
import { Fields } from "pages/Fields";
import { Analytics } from "pages/Analytics";
import { Notifications } from "pages/Notifications";
import { Settings } from "pages/Settings";
import { Map } from "pages/Map";


export const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [

        {
            path: '',
            element: <HomePage />,
        },
        {
            path: 'fields',
            element: <Fields />,
        },
        {
            path: 'analytics',
            element: <Analytics />,
        },
        {
            path: 'notifications',
            element: <Notifications />,
        },
        {
            path: 'settings',
            element: <Settings />,
        },
        {
            path: 'map',
            element: <Map />,
        },
    ]
}])