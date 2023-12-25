import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const {id} = useParams();
    const url = 'http://localhost:3100/products/' + id
    useEffect(()=>fetch(url))
    .then(res => res.json())
    .then(data => console.log(data),[url])
    
    return (
        <section className='product-details'>
            <center>
                <h3 className=''>Product Details</h3>

            </center>
        </section>
    )
}

export default ProductDetails
