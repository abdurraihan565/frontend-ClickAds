import React, { useEffect, useState } from 'react';
import DashboardCatagory from '../components/DashboardCatagory';

import axios from 'axios';

function ProfileHandelar() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  console.log(successMsg);
  const [InvaildMsg, setInvalidMsg] = useState('');
  console.log(InvaildMsg);

  //get data from session staorge
  const userDataAll = JSON.parse(sessionStorage.getItem('userData'));
  const id = userDataAll._id;
  //get data from database
  const [userSingleData, setuserSingleData] = useState([]);
  const userId = userSingleData._id;

  useEffect(() => {
    try {
      axios
        .get('http://localhost:3002/api/users/' + id, {})
        .then((response) => {
          console.log(response.data.message);
          setuserSingleData(response.data.payload.user);
        });
    } catch (e) {
      console.log(e.response.data.message);
    }
  }, []);

  const UserUpdateHandelar = async (e) => {
    e.preventDefault();

    try {
      await axios
        .put('http://localhost:3002/api/users/' + userId, {
          name: name,
          email: email,
          password: password,
        })
        .then((response) => {
          setsuccessMsg(response.data.message);
        });
    } catch (e) {
      setInvalidMsg(e.response.data.message);
    }
  };

  return (
    <div className="Profile_handelar">
      <DashboardCatagory />
      <div className="Profile_handelar_des">
        <div className="hero_containner_input">
          <h1>Personal information</h1>
          <form action="" onSubmit={UserUpdateHandelar}>
            <label for="">name:</label> <br></br>
            <input
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <br></br>
            <label for=""> Email:</label> <br></br>
            <input
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <br></br>
            <label for="">password:</label> <br></br>
            <input
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br></br>
            <div className="btn">
              <input type="submit" value="Update" />
              <br></br>
            </div>
          </form>
          {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
        </div>
      </div>
    </div>
  );
}

export default ProfileHandelar;
