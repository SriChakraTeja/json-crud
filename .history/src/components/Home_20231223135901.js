import React, { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3100/products'
    useEffect(()=> {
        fetch(url).then(response=>response.json())
        .then(data=>setProducts(data))
    })
    return (
        <section>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => 
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.price}$</td>
                                <td>{product.Name}</td>
                                <td>{product.id}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Home
