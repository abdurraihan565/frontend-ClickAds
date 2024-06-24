import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UpdateUserDisplay() {
  const location = useLocation();
  const id = location.state._id;
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [country, setcountry] = useState('');
  const [points, setpoints] = useState('');

  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const UpdateUserHandelar = async (e) => {
    e.preventDefault();
    const UpdateUserInfo = {
      name: name,
      email: email,
      password: password,
      country: country,
      points: points,
    };

    try {
      await axios
        .put('http://localhost:3002/api/users/' + id, {
          name: UpdateUserInfo.name,
          email: UpdateUserInfo.email,
          password: UpdateUserInfo.password,
          country: UpdateUserInfo.country,
          points: UpdateUserInfo.points,
          time: UpdateUserInfo.time,
        })
        .then((response) => {
          setsuccessMsg(response.data.message);
        });
    } catch (e) {
      setInvalidMsg(e.response.data.message);
    }
  };

  return (
    <div className="Update_users">
      <div className="hero_containner_input">
        <form action="" onSubmit={UpdateUserHandelar}>
          <label for="">Name:</label> <br></br>
          <input
            type="text"
            autoFocus
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <br></br>
          <label for="">Email</label> <br></br>
          <input
            type="text"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br></br>
          <label for="">Password:</label> <br></br>
          <input
            type="text"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Country:</label> <br></br>
          <input
            type="text"
            onChange={(e) => {
              setcountry(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Points:</label> <br></br>
          <input
            type="Number"
            onChange={(e) => {
              setpoints(e.target.value);
            }}
          />
          <br></br>
          <div className="btn">
            <input type="submit" value="Update-User" />
            <br></br>
          </div>
        </form>
        {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
      </div>
    </div>
  );
}

export default UpdateUserDisplay;
