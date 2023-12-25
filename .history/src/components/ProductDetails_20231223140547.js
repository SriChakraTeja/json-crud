import React from 'react'

const ProductDetails = () => {
    const {id} = useParams();
    return (
        <section className='product-details'>
            <center>
                <h3 className=''>Product Details</h3>
            </center>
        </section>
    )
}

export default ProductDetails
