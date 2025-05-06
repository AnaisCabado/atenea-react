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
            // { path: 'profile', element: <Profile /> }
        ],
    },
])

export default router;