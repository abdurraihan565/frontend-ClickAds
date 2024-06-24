import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UnBan() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [UsersData, setUsersData] = useState([]);
  console.log(UsersData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3002/api/users');
        setUsersData(result.data.payload.users);
      } catch (e) {
        if (e.response.data.message) {
          setInvalidMsg(e.response.data.message);
        } else {
          console.log(e);
        }
        // setInvalidMsg(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>UnBan User</h1>
      {UsersData.map((value) => {
        const { _id, email } = value;

        return (
          <div className="Update_containner" key={_id}>
            <span>{email}</span>
            <div className="Update_btn">
              <Link to={`/admin/unban-user/${_id}`} state={{ _id, email }}>
                <button>UnBan-User</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UnBan;
