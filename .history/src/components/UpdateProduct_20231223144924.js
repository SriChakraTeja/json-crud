import React from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3100/products/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    return (
        <section className='update-product'>
            <h1 className='text-center'>Update Product</h1>
            <hr />
            <center>
                <form className='col-md-6'>
                    <input type='number' placeholder='Price' value={product.price}
                        name='price' onChange={handleChange} />
                    <br />
                    <input type='text' placeholder='Name' value={product.name}
                        name='name' onChange={handleChange} />
                    <br />
                    <input type='text' placeholder='Brand' value={product.brand}
                        name='brand' onChange={handleChange} />
                    <br />
                    <input type='text' placeholder='Category' value={product.category}
                        name='category' onChange={handleChange} />
                    <br />
                    <button className='btn btn-primary btn-md m-2'>Update</button>
                    <button onClick={() => navigate('/')} className='btn btn-secondary btn-md m-2'>Home</button>
                </form>
            </center>
        </section>
    )
}

export default UpdateProduct
