import axios from 'axios';
import { useEffect, useState } from 'react';
import { FcPrevious } from "react-icons/fc";
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loader/Loader';

export default function ProductsDetails() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios(`http://localhost:5500/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            }
            )
    }, [id])
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <Link key={product._id} to="/shop"><button class="btn flex"><FcPrevious />Back to Shop</button></Link>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.image} alt={product.displayName} className="rounded-xl w-1/2" />
                    <div className="m-5">
                        <h1 class="text-5xl font-bold mb-5">{product.dressTitle}!</h1>
                        <p class="py-6font-semibold text-xl mb-5">
                            {product.description}
                        </p>

                        <div class="badge badge-outline gap-2 py-6 mr-2">
                            Brand:
                            <div>{product.brand}</div>
                        </div>

                        <div class="badge badge-outline gap-2 py-6 mt-2">
                            Category:
                            <div>{product.category}</div>
                        </div>
                        <br />
                        <div class="badge badge-outline gap-2 py-6 mt-2 mr-2">
                            Quantity:
                            <div class="badge"> {product.quantity} pcs</div>
                        </div>
                        <div class="badge badge-lg gap-2 py-6 mt-2 text-white">Price: <span className="font-bold">${product.price}</span> only</div>
                        <br />
                        <p class="font-bold mt-2 m-1"> Time: {product.time !== "" ? product.time?.slice(0, 10) : "Not Available"}</p>
                        <button class="btn btn-warning mt-2 ">Order Now!!!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
