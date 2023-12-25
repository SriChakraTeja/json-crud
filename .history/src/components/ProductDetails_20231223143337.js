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
                        <h2 class="card-text">{product.brand}</h2>
                        <h4 class="card-text">{product.category}</h4>
                        <button>Delete</button>
                        <Link to="." >Go Home</Li>
                    </div>
                </div>
            </center>
        </section>
    )
}

export default ProductDetails
