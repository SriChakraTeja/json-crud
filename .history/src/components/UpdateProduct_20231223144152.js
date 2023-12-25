import React from 'react'

const UpdateProduct = () => {
  return (
    <section className='update-product'>
    <section className='create-products'>
            <center>
                <form className = 'col-md-6' onSubmit = {handleSubmit}>
                    <input type='number' placeholder='Price'/>
                    <br />
                    <input type='text' placeholder='Name'/>
                    <br />
                    <input type='text' placeholder='Brand' />
                    <br />
                    <input type='text' placeholder='Category' />
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
