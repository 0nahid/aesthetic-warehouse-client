import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Upload() {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const onSubmit = data => {
        axios.post(`http://localhost:5500/api/products`, data)
            .then(res => {
                if (res.status === 200) {
                    toast.success('Activity added successfully');
                }
                else {
                    toast.error('Something went wrong');
                }
                reset();
            })
    }
    return (
        <div className="p-5">
            <h3 className="text-2xl font-semibold mb-2">Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow rounded bg-base-100 p-5 md:p-10"
            >
                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Dress Name
                    </label>
                    <input type="text" className="input input-bordered w-full"
                        placeholder="Dress Title" {...register("dressTitle", { required: true, min: 5 })} />
                    {errors.dressTitle?.type === "required" && (
                        <span className="text-error">Dress title is required</span>
                    )}
                </div>

                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Category
                    </label>
                    <input type="text" className="input input-bordered w-full" placeholder="Category" {...register("category", { required: true, min: 3 })} />
                    {errors.category?.type === "required" && (
                        <span className="text-error">Category is required</span>
                    )}
                </div>

                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Quantity
                    </label>
                    <input type="number" className="input input-bordered w-full" placeholder="Quantity" {...register("quantity", { required: true, min: 0 })} />
                    {errors.quantity?.type === "required" && (
                        <span className="text-error">Quantity is required</span>
                    )}
                </div>

                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Description
                    </label>
                    <input type="text" className="input input-bordered w-full" placeholder="Description" {...register("description", { required: true, min: 10 })} />
                    {errors.description?.type === "required" && (
                        <span className="text-error">Description is required</span>
                    )}
                </div>

                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Direct Image URL
                    </label>
                    <input type="url" className="input input-bordered w-full" placeholder="Valid Image URL" {...register("image", { required: true })} />
                    {errors.image?.type === "required" && (
                        <span className="text-error">Image Link is required</span>
                    )}
                </div>

                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Price
                    </label>
                    <input type="number" className="input input-bordered w-full" placeholder="Price" {...register("price", { required: true, min: 0 })} />
                    {errors.price?.type === "required" && (
                        <span className="text-error">Price Link is required</span>
                    )}
                </div>

                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Brand
                    </label>
                    <input type="text" className="input input-bordered w-full" placeholder="Brand" {...register("brand", { required: true, min: 2 })} />
                    {errors.brand?.type === "required" && (
                        <span className="text-error">Image Link is required</span>
                    )}
                </div>

                <div className="my-2">
                    <label htmlFor="name" className="my-2">
                        Time
                    </label>
                    <input type="datetime-local" className="input input-bordered w-full" placeholder="Date" {...register("time", {})} />
                    {errors.time?.type === "required" && (
                        <span className="text-error">Time is required</span>
                    )}
                </div>

                <input className="input input-bordered w-full hover:bg-primary" type="submit" />
            </form>
        </div>
    )
}
