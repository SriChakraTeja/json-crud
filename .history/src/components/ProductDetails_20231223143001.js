import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    const[product,setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3100/products/'+id)
        .then(res => res.json())
        .then(data => setProduct(data))
    })
    return (
        <section className='product'>
            <center>

            </center>
        </section>
    )
}

export default ProductDetails
