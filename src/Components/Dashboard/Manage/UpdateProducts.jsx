import axios from 'axios';
import { useState } from 'react';
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function UpdateProducts({ dress, setModalProduct ,refetch}) {
  const { _id, image, quantity, dressTitle, price } = dress;
  // console.log(dress);

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
            refetch();
          });
      }
    });
  };


  return (
    <tr
    >
      <td>
        <img src={image} alt={dressTitle}
          className="w-16 h-16 rounded shadow-sm bg-base-300 border p-1"
        />
      </td>
      <td><h1 className="text-xl font-semibold">{dressTitle}</h1></td>
      <td>{quantity}</td>
      <td className="font-semibold">{price}$</td>
      <td>
        <label for="my-modal-3" onClick={() => setModalProduct({ _id, dressTitle, quantity,price })} class="btn modal-button mr-5">Edit</label>
      </td>
      <td> <button
        onClick={() => handleDeleteItem(_id)}
        className="btn btn-error">Delete</button></td>
    </tr>
  )
}
