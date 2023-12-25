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
                    name = {price} />
                    <br />
                    <input />
                    <br />
                    <input />
                    <br />
                    <input />
                    <br />
                </form>
            </center>
        </section>
    )
}

export default CreateProducts
