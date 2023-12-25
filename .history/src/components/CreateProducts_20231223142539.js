import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const CreateProducts = () => {
    const[products,setProducts] = useState({
        price : '',
        name : '',
        brand : '',
        category : '',
    })
    const {price,name,brand,category} = {...products}
    const handleChange = (e) => {
        setProducts({...products,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3100/products',{
            method: 'POST',
            body : JSON.stringify(products),
            headers : {
                'content-type':'application/json'
            }
        })
    }
    return (
        <section className='create-products'>
            <center>
                <form className = 'col-md-6'>
                    <input type='number' placeholder='Price' onChange = {handleChange}
                    name = 'price' value = {price}/>
                    <br />
                    <input type='text' placeholder='Name' onChange = {handleChange}
                    name = 'name' value = {name}/>
                    <br />
                    <input type='text' placeholder='Brand' onChange = {handleChange}
                    name = 'brand' value = {brand}/>
                    <br />
                    <input type='text' placeholder='Category' onChange = {handleChange}
                    name = 'category' value = {category}/>
                    <br />
                    <button className='btn btn-primary btn-md m-2'>Save</button>
                    <button onClick={()=>navigate('/')} className='btn btn-secondary btn-md m-2'>Home</button>
                </form>
            </center>
        </section>
    )
}

export default CreateProducts
