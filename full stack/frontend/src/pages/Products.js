import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products") // just /products
      .then(res => {
        console.log("API data:", res.data);
        setProducts(res.data);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Product List</h3>
      <div className="row">
        {products.map(p => (
          <div key={p._id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>{p.description}</p>
                <strong>${p.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
