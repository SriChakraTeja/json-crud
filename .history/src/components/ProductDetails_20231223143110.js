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
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </center>
        </section>
    )
}

export default ProductDetails
