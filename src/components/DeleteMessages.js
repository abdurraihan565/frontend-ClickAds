import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DeleteMessages() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [MessageData, setProductData] = useState([]);
  // console.log(ProductData);
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
        //setInvalidMsg(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Delete message</h1>
      {MessageData.map((value) => {
        const { _id, email, message } = value;

        return (
          <div className="Update_containner" key={_id}>
            <span>{email}</span>
            <div className="Update_btn">
              <Link
                to={`/admin/delete-message/${_id}`}
                state={{ _id, email, message }}
              >
                <button>Delete </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeleteMessages;
