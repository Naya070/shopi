





import { NavLink } from "react-router-dom"





export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    naya@hotmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                    <NavLink to='/my-account'>
                        My Account
                    </NavLink>
                <li>
                    <NavLink to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
            
        </nav>
    )
}