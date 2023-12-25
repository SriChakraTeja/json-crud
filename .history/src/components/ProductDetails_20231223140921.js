import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const {id} = useParams();
    const url = 'http://localhost:3100/products/' + id
    const[product,setProduct] = useEffect([])
    
    useEffect(()=> {
        fetch(url).then(response=>response.json())
        .then(data => setProduct(data))
    })
    return (
        <section className='product-details'>
            <center>
                <h3 className=''>Product Details</h3>

            </center>
        </section>
    )
}

export default ProductDetails
