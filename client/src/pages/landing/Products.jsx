import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Products = () => {


    const [products, setProducts] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
          })
          .catch((err)=>console.log(err))
        }, [])

  return (
    <div>
        {
            products.map((product, index) => (
                <div key={index}>
                    <p>{product.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Products