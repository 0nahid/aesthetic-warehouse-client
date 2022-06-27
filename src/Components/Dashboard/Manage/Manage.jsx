import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import UpdateProducts from "./UpdateProducts";

export default function Manage() {
    const [modalProduct, setModalProduct] = useState({});

    const { data, isLoading, refetch } = useQuery(["products"], () =>
        fetch(`https://aesthetic-ware-house.herokuapp.com/api/products`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    const products = data;


    /* Handle Update Stock Product */
    const [productNameField, setProductNameField] = useState("");
    const [availableQtyField, setAvailableQtyField] = useState("");
    const [priceField, setPriceField] = useState("");

    const handleUpdateStock = async (event) => {
        event.preventDefault();

        if (availableQtyField < 0) {
            toast.error("Stock can't be negative!");
            return;
        }

        await fetch(
            `https://aesthetic-ware-house.herokuapp.com/api/products/${modalProduct._id}`,
            {
                method: "PATCH",
                headers: {
                    // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    dressTitle: productNameField || modalProduct?.dressTitle,
                    quantity: Number(availableQtyField || modalProduct?.quantity),
                    price: Number(priceField || modalProduct?.price),
                }),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.modifiedCount) {
                    toast.success(
                        `${modalProduct?.dressTitle} product updated successfully`
                    );
                    refetch();
                    setModalProduct(null);
                }
            });
    };


    return (
        <div>
            <div className="overflow-x-auto container mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Dress Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(dress => (
                                <UpdateProducts key={dress._id} dress={dress} refetch={refetch} setModalProduct={setModalProduct} />
                            ))
                        }
                    </tbody>
                </table>

            </div>
            {
                modalProduct && (<>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label
                                htmlFor="my-modal-3"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <h3 className="text-lg font-bold">{modalProduct?.dressTitle}</h3>
                            <p>Update Your Product Details From Here</p>
                            <form onSubmit={handleUpdateStock} action="" className="my-2">
                                <div className="my-4">
                                    <label htmlFor="stock">Update Product Name</label>
                                    <input
                                        type="text"
                                        placeholder="Put Your Product Name"
                                        className="input input-bordered w-full my-3"
                                        id="stock"
                                        value={productNameField || modalProduct?.dressTitle}
                                        onChange={(event) =>
                                            setProductNameField(event.target.value)
                                        }
                                    />
                                </div>
                                <div className="my-4">
                                    <label htmlFor="stock">Update Available Quantity</label>
                                    <input
                                        type="number"
                                        placeholder="Put Your Quantity"
                                        className="input input-bordered w-full my-3"
                                        id="stock"
                                        value={availableQtyField || modalProduct?.quantity}
                                        onChange={(event) =>
                                            setAvailableQtyField(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="my-4">
                                    <label htmlFor="stock">Update Price</label>
                                    <input
                                        type="number"
                                        placeholder="Put Your Price"
                                        className="input input-bordered w-full my-3"
                                        id="stock"
                                        value={priceField || modalProduct?.price}
                                        onChange={(event) => setPriceField(event.target.value)}
                                    />
                                </div>
                                <div className="text-right">
                                    <button className="btn text-white">Update Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>)
            }
        </div>
    )
}
