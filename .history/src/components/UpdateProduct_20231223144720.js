import React from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';

const UpdateProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3100/products/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
  return (
    <section className='update-product'>
        <h1 className='text-center'>Update Product</h1>
        <hr/>
            <center>
                <form className = 'col-md-6'>
                    <input type='number' placeholder='Price' value={product.price}
                    name='price' />
                    <br />
                    <input type='text' placeholder='Name'value={product.name}
                    name='name'/>
                    <br />
                    <input type='text' placeholder='Brand' />
                    <br />
                    <input type='text' placeholder='Category' />
                    <br />
                    <button className='btn btn-primary btn-md m-2'>Update</button>
                    <button onClick={()=>navigate('/')} className='btn btn-secondary btn-md m-2'>Home</button>
                </form>
            </center>
    </section>
  )
}

export default UpdateProduct
