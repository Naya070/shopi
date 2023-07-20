





import { NavLink } from "react-router-dom"





const Navbar = () => {
    return (
        <nav >
            <ul>
                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                    <NavLink to='/'>
                        All
                    </NavLink>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                    <NavLink to='/fornitures'>
                        Furnitures
                    </NavLink>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}