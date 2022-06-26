import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
export default function Manage() {
    // const [products] = useProducts();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios(`http://localhost:5500/api/products`)
            .then(res => setProducts(res.data))
    }, [])
    // delete item
    const handleDeleteItem = (id) => {
        // add user confirmation for delete
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5500/api/products/${id}`)
                    .then((data) => {
                        data.status === 200 ? toast.success("Delete Successful") : toast.warning("Activity not deleted");
                        setProducts(products.filter(product => product._id !== id))
                    });
            }
        });
    };
    return (
        <div>
            <div className="overflow-x-auto container mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Dress Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(dress => {
                                return (
                                    <tr
                                        key={dress._id}
                                    >
                                        <td>
                                            <div class="flex items-center">
                                                <img src={dress.image} alt={dress.name} className="w-16 h-16 mr-2" />
                                                {dress.dressTitle} {dress._id}
                                            </div>
                                        </td>
                                        <td>{dress.quantity}</td>
                                        <td>
                                            <button className="btn btn-info mr-2">Edit</button>
                                            <button
                                                onClick={() => handleDeleteItem(dress._id)}
                                                className="btn btn-error">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
