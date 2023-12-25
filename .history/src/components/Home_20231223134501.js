import React from 'react'
import { useEffect } from 'react'

const Home = () => {
    const url = 'http://localhost:3100/products'
    const[products,setProducts] = useEffect([])
    useEffect(() => {
        fetch(url)
        .then(response => response.json)
        .then(data => setProducts(data))
    })
    return (
        <section className='Home'>
            <table className='table'>
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
            </table>
        </section>
    )
}

export default Home
