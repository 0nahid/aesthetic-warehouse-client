import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios(`https://aesthetic-ware-house.herokuapp.com/api/products`)
            .then(res => setProducts(res.data))
    }, [])
    return [products, setProducts]
}
export default useProducts;