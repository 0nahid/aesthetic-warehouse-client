import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

export default function AllProducts() {
  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5500/api/products', {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        // console.log(data);
      }
      )
  }, [])
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
      {products.map(product => (
        <Link to={`/products/${product._id}`} >
          <div key={product._id} className="m-5 drop-shadow-2xl bg-gray-50 rounded-xl p-3">
            <img className="rounded-xl" src={product.image} alt={product.dressTitle} />
            <h3 className="mt-1 mb-1 font-bold">{product.dressTitle}</h3>
            <p className="font-semibold mt-1">{product?.price}$ only</p>
          </div>
        </Link>
      ))}
    </Masonry>
  )
}
