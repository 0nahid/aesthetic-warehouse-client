import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios(`http://localhost:5500/api/products`)
            .then(res => setProducts(res.data))
    }, [])
    return [products, setProducts]
}
export default useProducts;