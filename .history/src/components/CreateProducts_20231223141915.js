import React from 'react'

const CreateProducts = () => {
    const[products,setProducts] = useState({
        price : '',
        name : '',
        brand : '',
        category : '',
    })
    const {price,name,brand,category} = {...products}
    return (
        <section className='create-products'>
            <center>
                <form>
                    <input type='number' placeholder='Price' />
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
