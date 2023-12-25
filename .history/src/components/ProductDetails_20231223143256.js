import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3100/products/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return (
        <section className='product'>
            <center>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">{product.name}</h1>
                        <ph2 class="card-text">{product.brand}</ph2>
                        <p class="card-text">{product.category}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </center>
        </section>
    )
}

export default ProductDetails
