import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../home/Home";

import Login from "../login/Login";
import Register from "../register/Register";

import Publication from "../publication/publicationPage/Publication";
import Events from "../events/eventsPage/Events";
// import Join from "../join/Join";
import NewPublication from "../publication/newPublication/NewPublication";


import Profile from "../profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },

            { path: 'publications/:publicationId', element: <Publication /> },
            { path: 'events', element: <Events /> },
            { path: 'events/:date', element: <Events /> },
            // { path: 'join', element: <Join /> },
            { path: 'publications/create', element: <NewPublication />},

            { path: 'users/:username', element: <Profile /> },
        ],
    },
])

export default router;