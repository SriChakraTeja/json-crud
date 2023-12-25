import React, { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
    const [products, setProducts] = useState([])
    const url = 'http://localhost:3100/products'
    useEffect(()=> {
        fetch(url)
    })
    return (
        <section>

        </section>
    )
}

export default Home
