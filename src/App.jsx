import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Home from './Components/Home/Home';
import AllProducts from "./Components/Products/AllProducts";
import ProductsDetails from "./Components/Products/ProductsDetails";
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Upload from './Components/Dashboard/Upload/Upload';
import './index.css';
import Manage from "./Components/Dashboard/Manage/Manage";
import Profile from "./Components/Authentication/Profile";

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
                            <Route path="/upload" element={<Upload />} />
                            <Route path="/products/:id" element={<ProductsDetails />} />
                            <Route path="/shop" element={<AllProducts />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/manage" element={<Manage />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                        <Footer />
                        <Toaster />
                    </div>

            }
        </div>
    )
}
