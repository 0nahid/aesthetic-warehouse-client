import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

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
                                                <h1 className="text-xl font-semibold">{dress.dressTitle}</h1>
                                            </div>
                                        </td>
                                        <td>{dress.quantity}</td>
                                        <td>
                                            <label for="my-modal-4" class="btn modal-button mr-5">Edit</label>
                                            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                                            <label for="my-modal-4" class="modal cursor-pointer">
                                                <label class="modal-box relative" for="">
                                                    <h1 class="text-center text-xl font-semibold">Update Dress Info & Quantity</h1>
                                                    <form onSubmit={handleSubmit(onSubmit)}>

                                                        <div class="form-control">
                                                            <label class="label">
                                                                <span class="label-text">Dress Title</span>
                                                            </label>
                                                            <input className="input input-bordered w-full" type="text" placeholder="Dress Title" {...register("dressTitle", { required: true, min: 3 })} />
                                                            {errors.dressTitle?.type === "required" && (
                                                                <span className="text-error">Dress Title is required</span>
                                                            )}
                                                        </div>

                                                        <div class="form-control">
                                                            <label class="label">
                                                                <span class="label-text">Dress Title</span>
                                                            </label>
                                                            <input className="input input-bordered w-full" type="number" placeholder="Dress Quantity" {...register("quantity", { required: true, min: 0 })} />
                                                            {errors.quantity?.type === "required" && (
                                                                <span className="text-error">Quantity is required</span>
                                                            )}
                                                        </div>

                                                        <div class="form-control mt-6">
                                                            <button onSubmit={onSubmit} class="btn btn-primary">Update</button>
                                                        </div>
                                                    </form>
                                                </label>
                                            </label>
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
