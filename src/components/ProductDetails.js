import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

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

  const handleDelete = () => {
    fetch(`http://localhost:3100/products/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(() => {
        alert('Product Deleted');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className='product'>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>{product.name}</h1>
            <h2 className='card-text'>{product.brand}</h2>
            <h4 className='card-text'>{product.category}</h4>
            <button
              onClick={handleDelete}
              className='btn btn-danger btn-md m-2'
            >
              Delete
            </button>
            <Link to='/'>Go Home</Link>
          </div>
        </div>
      </center>
    </section>
  );
};

export default ProductDetails;
