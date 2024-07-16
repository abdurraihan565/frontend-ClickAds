import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DeleteUser() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [UsersData, setUsersData] = useState([]);
  console.log(UsersData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://clickads-backend.onrender.com/api/users');
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
      <h1>Delete User</h1>
      {UsersData.map((value) => {
        const { _id, email } = value;

        return (
          <div className="Update_containner" key={_id}>
            <span>{email}</span>
            <div className="Update_btn">
              <Link to={`/admin/deleteUser/${_id}`} state={{ _id, email }}>
                <button>Delete-User</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeleteUser;
