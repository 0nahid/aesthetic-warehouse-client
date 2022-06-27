import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

export default function Checkout() {
    const [user] = useAuthState(auth)
    console.log(user);
    const { id } = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        axios(`http://localhost:5500/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                // console.log(res.data);
            }
            )
    }, [id])
    const [orderQuantity, setOrderQuantity] = useState("");
    const [address, setAddress] = useState("");

    const handleUpdateStock = async (event) => {
        event.preventDefault();
        if (orderQuantity < 0) {
            toast.error("Stock can't be negative!");
            return;
        }
        await axios.post(`http://localhost:5500/api/orders`, {
            userId: user.uid,
            productId: id,
            quantity: orderQuantity,
            address: address,
            dressTitle: product.dressTitle,
            price: product.price,
            image: product.image,
            createdAt: new Date().toISOString()
        })
            .then(res => {
              if(res.status){
                toast.success(`${product.dressTitle} product ordered successfully`);
              }
              else{
                toast.error(`${product.dressTitle} product order failed`);
              }
              
            })


    }
    return (
        <div class="container mx-auto p-0 md:p-5">
            Checkout of {id}
            <form onSubmit={handleUpdateStock} action="" className="my-2">
                <div className="my-4">
                    <label htmlFor="stock">Product Name</label>
                    <input
                        type="text"
                        placeholder="Put Your Product Name"
                        className="input input-bordered w-full my-3"
                        id="stock"
                        value={product?.dressTitle}
                    />
                </div>

                <div className="my-4">
                    <label htmlFor="stock">Price</label>
                    <input
                        type="number"
                        placeholder="Put Your Price"
                        className="input input-bordered w-full my-3"
                        id="stock"
                        value={product?.price}
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="stock">Email</label>
                    <input
                        type="text"
                        className="input input-bordered w-full my-3"
                        id="stock"
                        value={user.email}
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="stock">Address</label>
                    <input
                        type="text"
                        placeholder="Put Your Address"
                        className="input input-bordered w-full my-3"
                        id="stock"
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>

                <div className="my-4">
                    <label htmlFor="stock">Type Quantity of Order</label>
                    <input
                        type="number"
                        className="input input-bordered w-full my-3"
                        id="stock"
                        value={orderQuantity}
                        onChange={(event) =>
                            setOrderQuantity(event.target.value)
                        }
                    />
                </div>

                <div className="text-right">
                    <button className="btn text-white">CheckOut</button>
                </div>
            </form>
        </div>
    )
}
