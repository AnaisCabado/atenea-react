import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import ProductList from './pages/productList/ProductList'; /* TODO CAMBIAR */
import StandList from './pages/standList/StandList'; /* TODO CAMBIAR */
import Auth from './pages/auth/Auth'; /* TODO CAMBIAR */

import { getAllProducts } from './utils/api/product'; /* TODO CAMBIAR */
import { getAllStands } from './utils/api/stand'; /* TODO CAMBIAR */

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            {
                path: "/product", /* TODO CAMBIAR */
                element: <ProductList />,
                loader: getAllProducts
            },
            {
                path: "/stand", /* TODO CAMBIAR */
                element: <StandList />,
                loader: getAllStands
            },
            {
                path: "/login", /* TODO CAMBIAR */
                element: <Auth />,
            }
        ]
    },
    
])

export default router;