import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import Login from "./Components/Authentication/Login";
import Profile from "./Components/Authentication/Profile";
import Register from "./Components/Authentication/Register";
import RequireAuth from "./Components/Authentication/RequireAuth";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Manage from "./Components/Dashboard/Manage/Manage";
import Upload from './Components/Dashboard/Upload/Upload';
import Home from './Components/Home/Home';
import Blog from "./Components/Pages/Blog";
import AllProducts from "./Components/Products/AllProducts";
import ProductsDetails from "./Components/Products/ProductsDetails";
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import './index.css';

export default function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    const override = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0 auto;
  `;
    return (
        <div>
            {
                loading ? <HashLoader
                    color={"#ff11ff"}
                    loading={loading}
                    size={75}
                    css={override}
                /> :
                    <div>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/blogs" element={<Blog />} />
                            <Route path="/upload" element={<RequireAuth><Upload /></RequireAuth>} />
                            <Route path="/shop" element={<RequireAuth><AllProducts /></RequireAuth>} />
                            <Route path="/products/:id" element={<RequireAuth><ProductsDetails /></RequireAuth>} />
                            <Route path="/manage" element={<RequireAuth><Manage /></RequireAuth>} />
                            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
                        </Routes>
                        <Footer />
                        <Toaster />
                    </div>

            }
        </div>
    )
}
