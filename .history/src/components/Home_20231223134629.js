import React from 'react'
import { useEffect } from 'react'

const Home = () => {
    const url = 'http://localhost:3100/products/'
    const[products,setProducts] = useEffect([])
    useEffect(() => {
        fetch(url)
        .then(response => response.json)
        .then(data => console.log(data))
    })
    return (
        <section className='Home'>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Branch</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => 
                            <tr>
                                <td>{product.id}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Home
