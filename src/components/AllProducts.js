import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AllProducts() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [ProductData, setProductData] = useState([]);
  console.log(ProductData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3002/api/products');
        setProductData(result.data.payload.products);
      } catch (e) {
        if (e.response.data.message) {
          setInvalidMsg(e.response.data.message);
        } else {
          console.log(e);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>All products </h1>
      {ProductData.map((value) => {
        const { _id, name, points, time } = value;

        return (
          <div className="AllProducts_containner" key={_id}>
            <span>{name}</span>
            <p>ID:{_id}</p>
            <p>Points :{points}</p>
            <p>Time :{time}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
