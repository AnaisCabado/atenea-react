import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import PublicationList from './pages/publicationList/PublicationList';
import Auth from './pages/auth/Auth';

import { getAllPublications } from './utils/api/publication';

const router  = createBrowserRouter([
    {
        path : "http:/localhost:3000/api",
        element: <Root />,
        children: [
            {
                path: "/publications",
                element: <PublicationList />,
                loader: getAllPublications
            },
            {
                path: "/login",
                element: <Auth />,
            }
        ]
    },
    
])

export default router;