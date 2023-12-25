import React from 'react'
import { useEffect } from 'react'

const Home = () => {
    const[products,setProducts] = useEffect([])
    useEffect(() => {

    })
    return (
        <section className='Home'>
            <table>
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
