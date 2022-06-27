import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

export default function MyOrder() {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        axios(`http://localhost:5500/api/orders?email=${user.email}`)
            .then(res => {
                setOrders(res.data)
            })
    }, [user.email])
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-xl font-medium mb-5">My Order</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.productId}</td>
                            <td>{order.dressTitle}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>{order.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
