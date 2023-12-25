import React from 'react'
import { useState } from 'react'

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
    return (
        <section className='create-products'>
            <center>
                <form className = 'col-md-6'>
                    <input type='number' placeholder='Price' onChange = {handleChange}
                    name = 'price' value = {price}/>
                    <br />
                    <input type='text' placeholder='Price' onChange = {handleChange}
                    name = 'name' value = {price}/>
                    <br />
                    <input type='text' placeholder='Price' onChange = {handleChange}
                    name = 'brand' value = {price}/>
                    <br />
                    <input type='text' placeholder='Price' onChange = {handleChange}
                    name = 'category' value = {price}/>
                    <br />
                </form>
            </center>
        </section>
    )
}

export default CreateProducts
