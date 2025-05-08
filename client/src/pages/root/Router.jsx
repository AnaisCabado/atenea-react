import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Events from "../events/Events";
import Profile from "../profile/Profile";
import Publication from "../publication/publicationPage/Publication";
import NewPublication from "../publication/newPublication/NewPublication";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'events', element: <h1>Juan ramon</h1>},
            { path: 'publications/create', element: <NewPublication />},
            { path: 'users/:username', element: <Profile /> },
            { path: 'publications/:publicationId', element: <Publication /> },
        ],
    },
])

export default router;