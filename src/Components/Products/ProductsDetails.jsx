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
            <Link key={product._id} to="/shop"><button className="btn flex"><FcPrevious />Back to Shop</button></Link>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product.image} alt={product.displayName} className="rounded-xl w-1/2" />
                    <div className="m-5">
                        <h1 className="text-5xl font-bold mb-5">{product.dressTitle}!</h1>
                        <p className="py-6font-semibold text-xl mb-5">
                            {product.description}
                        </p>

                        <div className="badge badge-outline gap-2 py-6 mr-2">
                            Brand:
                            <div>{product.brand}</div>
                        </div>

                        <div className="badge badge-outline gap-2 py-6 mt-2">
                            Category:
                            <div>{product.category}</div>
                        </div>
                        <br />
                        <div className="badge badge-outline gap-2 py-6 mt-2 mr-2">
                            Quantity:
                            <div className="badge"> {product.quantity} pcs</div>
                        </div>
                        <div className="badge badge-lg gap-2 py-6 mt-2 text-white">Price: <span className="font-bold">${product.price}</span> only</div>
                        <br />
                        <p className="font-bold mt-2 m-1"> Time: {product.time !== "" ? product.time?.slice(0, 10) : "Not Available"}</p>
                        <button className="btn btn-warning mt-2 "><Link to={`/checkout/${product._id}`}>Order Now!!!</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
