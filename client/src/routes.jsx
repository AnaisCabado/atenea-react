import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import PublicationList from './pages/publication/publicationList/PublicationList';
import NewPublication from './pages/publication/newPublication/NewPublication';
import Auth from './pages/auth/Auth';

import { getAllPublications } from './utils/api/publication';

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            {
                path: "/publications",
                element: <PublicationList />,
                loader: getAllPublications
            },
            {
                path: '/publications/create',
                element: <NewPublication />,
                // loader: getAllPublications
            },
            {
                path: "/login",
                element: <Auth />,
            }
        ]
    },
    
])

export default router;