import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllProducts from "./Components/Products/AllProducts";
import ProductsDetails from "./Components/Products/ProductsDetails";
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Upload from './Components/Upload/Upload';
import './index.css';

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/products/:id" element={<ProductsDetails />} />
                <Route path="/shop" element={<AllProducts />} />
            </Routes>
            <Footer />
            <Toaster />

        </div>
    )
}
