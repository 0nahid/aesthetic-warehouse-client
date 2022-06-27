import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import headerLogo from "./header.png";

export default function Header() {
    const { pathname } = useLocation();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth);
        toast.success(`Thank you, ${user.displayName} to stay with us!`, {
            position: "bottom-left",
            autoClose: 5000,
        });
        navigate("/");
    };

    const NavbarMenus = (
        <>
            <li>
                <NavLink className="uppercase" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="uppercase" to="/shop">
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink className="uppercase" to="/blogs">
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink className="uppercase" to="/about">
                    About
                </NavLink>
            </li>

        </>
    );
    return (
        <div>

            <div className="navbar bg-base-100"
                style={
                    pathname.includes("dashboard")
                        ? { display: "none" }
                        : { display: "flex" }
                }>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {NavbarMenus}
                            {
                                user && (
                                    <li>
                                        <NavLink className="uppercase" to="/order">
                                            My Order
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <Link to="/">
                        <img src={headerLogo} style={{ maxWidth: '75%' }} alt="Header Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {NavbarMenus}
                        {
                            user && (
                                <li>
                                    <NavLink className="uppercase" to="/order">
                                        My Order
                                    </NavLink>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? (<div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><button onClick={handleLogOut} >Logout</button></li>
                            </ul>
                        </div>) : <ul> <li><Link to="/login"><button className="btn ">Login</button></Link></li></ul>
                    }
                </div>
            </div>
        </div>
    )
}
