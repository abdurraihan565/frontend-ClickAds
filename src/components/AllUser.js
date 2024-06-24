import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AllUser() {
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
        // setInvalidMsg(e.response.data.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>All Users </h1>
      {UsersData.map((value) => {
        const { _id, name, points, email } = value;

        return (
          <div className="AllProducts_containner" key={_id}>
            <span>Name: {name}</span>
            <p>Points :{email}</p>
            <p>Points :{points}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllUser;
