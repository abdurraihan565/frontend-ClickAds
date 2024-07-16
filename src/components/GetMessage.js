import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetMessage() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [MessageData, setProductData] = useState([]);
  //console.log(ProductData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          'https://clickads-backend.onrender.com/api/contact/get-message'
        );
        setProductData(result.data.payload.message);
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
      <div>
        <h1>All Message </h1>
        {MessageData.map((value) => {
          const { _id, email, message } = value;

          return (
            <div className="AllProducts_containner" key={_id}>
              <p>{email}</p>
              <span>{message}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetMessage;
