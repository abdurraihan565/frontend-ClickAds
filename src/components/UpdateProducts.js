import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function UpdateProducts() {
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
      {ProductData.map((value) => {
        const { _id, name, slug, description, points, time } = value;

        return (
          <div className="Update_containner" key={_id}>
            <span>{name}</span>
            <div className="Update_btn">
              <Link
                to={`/admin/${_id}`}
                state={{ _id, name, slug, description, time, points }}
              >
                <button>Update</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UpdateProducts;
