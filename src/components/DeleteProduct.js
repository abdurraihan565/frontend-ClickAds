import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DeleteProduct() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [ProductData, setProductData] = useState([]);
  console.log(ProductData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://clickads-backend.onrender.com/api/products');
        setProductData(result.data.payload.products);
      } catch (e) {
        if (e.response.data.message) {
          setInvalidMsg(e.response.data.message);
        } else {
          console.log(e);
        }
        //setInvalidMsg(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Delete Products</h1>
      {ProductData.map((value) => {
        const { _id, name, slug, description, points, time } = value;

        return (
          <div className="Update_containner" key={_id}>
            <span>{name}</span>
            <div className="Update_btn">
              <Link
                to={`/admin/delete/${_id}`}
                state={{ _id, name, slug, description, time, points }}
              >
                <button>Delete</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeleteProduct;
