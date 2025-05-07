import { useContext } from "react";
import { NavLink } from "react-router-dom";
import RouteContext from "../../pages/root/RouteContext";
import { AuthContext } from '../../context/AuthContext';

import './Nav.css';

function Navbar() {
    const { onLogout, userData } = useContext(AuthContext);
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/publications' >Publications</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to='/profile' >Profile</NavLink>
                </li> */}

                {userData ? (
                    <li className="nav-item">
                        <button onClick={onLogout}>Logout</button>
                    </li>
                ): (
                    <li>
                        <NavLink to='/login' >Login</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

// function NavBar({ myItem }) {
//     const { route, onRouteChange } = useContext(RouteContext);
//     return (
//         <nav className="my-nav">
//             <ul className="nav-list">
//                 {myItem.map(item => (
//                     <li key={item.text}>
//                         <NavLink
//                             to={item.nweRoute}
//                             className={({ isActive }) => {
//                                 return isActive ? 'link active' : 'link';
//                             }}
//                         >
//                             {item.text}
//                         </NavLink>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }

export default Navbar;