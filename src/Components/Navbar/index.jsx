import { NavLink } from "react-router-dom"





export const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        All
                    </NavLink>
                </li>
                    <NavLink to='/clothes'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        Clothes
                    </NavLink>
                <li>
                    <NavLink to='/electronics'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60
                ">
                    naya@hotmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        My Orders
                    </NavLink>
                </li>
                    <NavLink to='/my-account'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
                        My Account
                    </NavLink>
                <li>
                    <NavLink to='/sign-in'
                    className={({ isActive })=> isActive ? activeStyle:undefined}>
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