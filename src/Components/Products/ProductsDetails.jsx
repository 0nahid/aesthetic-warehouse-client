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
            <Link to="/shop"><button class="btn flex"><FcPrevious />Back to Shop</button></Link>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.image} alt={product.displayName} className="rounded-xl" />
                    <div>
                        <h1 class="text-5xl font-bold mb-5">{product.dressTitle}!</h1>
                        <p class="py-6font-semibold text-xl mb-5">
                            {product.description}
                        </p>

                        <button class="btn gap-2 btn-info">
                            Band:
                            <div>{product.brand}</div>
                        </button>
                        <br />
                        <button class="btn gap-2 bg-[#4994de] mt-2">
                            Category:
                            <div>{product.category}</div>
                        </button>
                        <br />
                        <button class="btn gap-2 mt-2">
                            Quantity:
                            <div class="badge badge-secondary"> {product.quantity}</div>
                        </button>
                        <br />
                        <button class="btn btn-success mt-2 ">${product.price} only</button>
                        <br />
                        <p class="font-bold mt-2 m-1"> Time:{product.time}</p>
                        <button class="btn btn-warning mt-2 ">Order Now!!!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
