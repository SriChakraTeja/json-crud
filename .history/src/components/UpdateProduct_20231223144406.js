import React from 'react'
import { useNavigate } from 'react-router'

const UpdateProduct = () => {
    const navigate = useNavigate();
  return (
    <section className='update-product'>
        <hr/>
        <h1 className='text-center'>Update Product</h1>
            <center>
                <form className = 'col-md-6'>
                    <input type='number' placeholder='Price'/>
                    <br />
                    <input type='text' placeholder='Name'/>
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
