import React from 'react'

const UpdateProduct = () => {
  return (
    <section className='update-product'>
    <section className='create-products'>
            <center>
                <form className = 'col-md-6' onSubmit = {handleSubmit}>
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
    </section>
  )
}

export default UpdateProduct
