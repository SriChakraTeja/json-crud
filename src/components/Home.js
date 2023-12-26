import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3100/products';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once

  const handleUpdate = (id) => {
    navigate('/products/edit/' + id);
  };

  const handleDisplay = (id) => {
    navigate('/products/' + id);
  };

  return (
    <section>
      <h1 className='text-center'>Product Details</h1>
      <button
        onClick={() => navigate('/create-products')}
        className='btn btn-primary btn-lg mx-4'
      >
        Create Product +
      </button>
      <hr />
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Price</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.price}$</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>
                <button
                  onClick={() => handleUpdate(product.id)}
                  className='btn btn-sm btn-warning m-2'
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDisplay(product.id)}
                  className='btn btn-sm btn-info m-2'
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Home;
