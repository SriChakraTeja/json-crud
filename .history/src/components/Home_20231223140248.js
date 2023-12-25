import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3100/products'
    cont navigate = useNavigate();
    useEffect(()=> {
        fetch(url).then(response=>response.json())
        .then(data=>setProducts(data))
    })
    return (
        <section>
            <h1 className='text-center'>
                Product Details
            </h1>
            <button className='btn btn-primary btn-lg mx-4'>Create Product +</button>
            <hr/>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => 
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.price}$</td>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>
                                    <button className='btn btn-sm btn-warning m-2'>Edit</button>
                                    <button className='btn btn-sm btn-info m-2'>View</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Home
