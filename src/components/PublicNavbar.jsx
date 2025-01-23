import { NavLink } from "react-router-dom";



const PublicNavbar = () => {
    return (
        <nav className="primary-link">
            <NavLink to="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>
            <NavLink to="/signup" className="text-white px-3 py-2 rounded-md text-sm font-medium">Signup</NavLink>
        </nav>
    )
}

export default PublicNavbar