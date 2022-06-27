import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { BsGrid } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Logo from "../../Shared/Header/Logo";

const Dashboard = ({ handleThemeChange, theme }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await signOut(auth).then(() => {
            navigate("/");
            toast.success(`Thank you, ${user.displayName} to stay with us!`, {
                autoClose: 3000,
                position: "bottom-left",
            });
        });
    };
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-3 md:p-3">
                <div className="header z-50 sticky top-0 flex justify-between items-center bg-base-300 p-4 rounded">
                    <label
                        htmlFor="dashboard-sidebar"
                        className="btn bg-base-300 text-black hover:text-white drawer-button lg:hidden "
                    >
                        <BsGrid className="text-2xl" />
                    </label>
                    <Link
                        to="/"
                        className="text-lg lg:text-2xl md:text-2xl font-semibold"
                    >
                        Aesthetic Outfit
                    </Link>

                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle avatar online"
                        >
                            <div
                                style={{ display: "grid" }}
                                className="w-10 h-10  place-items-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                            >
                                {
                                    auth?.currentUser?.photoURL ? (
                                        <img
                                            src={auth?.currentUser?.photoURL}
                                            alt="avatar"
                                            style={{ marginTop: "0.5rem" }}
                                        />) : (
                                        <img
                                            style={{ marginTop: "0.5rem" }}
                                            src="https://api.lorem.space/image/face?hash=33791"
                                            alt="avatar"
                                        />)
                                }
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
                        >
                            <li>
                                <Link to="/dashboard/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogOut}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                    <div className="flex flex-col items-center gap-3 text-2xl p-2 border-b pb-5">
                        <Link
                            to="/"
                            className="logo font-semibold text-center flex items-center flex-col gap-2"
                        >
                            <Logo style={{ maxWidth: '200px' }} />
                            Aesthetic Outfit
                        </Link>
                    </div>
                    <li className="py-2 mt-4">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>

                    <li className="py-2">
                        <NavLink to="/dashboard/profile">Profile</NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink to="/dashboard/manage">Manage </NavLink>
                    </li>
                    <li className="py-2">
                        <Link to="/dashboard/upload">
                            Add Products{" "}
                            <small className="badge badge-outline text-sm">New</small>
                        </Link>
                    </li>
                    <li className="py-2">
                        <button
                            onClick={handleLogOut}
                            className="bg-primary rounded-lg text-white"
                        >
                            <FiLogOut /> Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;