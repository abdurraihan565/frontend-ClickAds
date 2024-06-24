import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UpdateUser() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [UsersData, setProductData] = useState([]);
  console.log(UsersData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3002/api/users');
        setProductData(result.data.payload.users);
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
      <h1>Update User</h1>
      {UsersData.map((value) => {
        const { _id, email } = value;

        return (
          <div className="Update_containner" key={_id}>
            <span>{email}</span>
            <div className="Update_btn">
              <Link to={`/admin/updateUsers/${_id}`} state={{ _id, email }}>
                <button>UpdateUser</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UpdateUser;
