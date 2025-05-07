import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Feed from "../feed/Feed";
// import Profile from "../profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'feed', element: <Feed /> },
            { path: 'publications', element: <h1>Juan ramon</h1>},
            { path:'publications/create', element: <h1>Crear publicacion</h1>},
            { path: 'users/:username', element: <h1>Profile</h1> },
        ],
    },
])

export default router;