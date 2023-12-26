import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3100/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='update-product'>
      <h1 className='text-center'>Update Product</h1>
      <hr />
      <center>
        <form className='col-md-6'>
          <input
            type='number'
            placeholder='Price'
            value={product.price}
            name='price'
            onChange={handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='Name'
            value={product.name}
            name='name'
            onChange={handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='Brand'
            value={product.brand}
            name='brand'
            onChange={handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='Category'
            value={product.category}
            name='category'
            onChange={handleChange}
          />
          <br />
          <button className='btn btn-primary btn-md m-2'>Update</button>
          <button
            onClick={() => navigate('/')}
            className='btn btn-secondary btn-md m-2'
          >
            Home
          </button>
        </form>
      </center>
    </section>
  );
};

export default UpdateProduct;
