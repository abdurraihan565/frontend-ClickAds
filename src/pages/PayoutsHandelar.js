import React, { useEffect, useState } from 'react';
import DashboardCatagory from '../components/DashboardCatagory';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PayoutsHandelar() {
  const [paymentMethod, setpaymentMethod] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');
  const payoutsHandeler = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/payouts', {
          email: email,
          paymentMethod: paymentMethod,
          amount: points,
        })
        .then((response) => {
          setsuccessMsg(response.data.message);
        });
    } catch (e) {
      if (e.response.data.message) {
        setInvalidMsg(e.response.data.message);
      } else {
        console.log(e);
      }
    }
  };
  //get data from session staorge
  const userDataAll = JSON.parse(sessionStorage.getItem('userData'));
  const id = userDataAll._id;
  //get data from database
  const [userSingleData, setuserSingleData] = useState([]);
  const points = userSingleData.points;
  const email = userSingleData.email;

  useEffect(() => {
    try {
      axios
        .get('https://clickads-backend.onrender.com/api/users/' + id, {})
        .then((response) => {
          console.log(response.data.message);
          setuserSingleData(response.data.payload.user);
        });
    } catch (e) {
      console.log(e.response.data.message);
    }
  }, []);
  return (
    <div className="Profile_handelar">
      <DashboardCatagory />
      <div className="Profile_handelar_des">
        <div className="hero_containner_input">
          <h1>Payout</h1>
          <form action="" onSubmit={payoutsHandeler}>
            <h3>Total Amount : {points}</h3>
            <br></br>
            <label for="">Payeer Account:</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => {
                setpaymentMethod(e.target.value);
              }}
              placeholder="P85675875"
            />
            <br></br>
            <div className="btn">
              <input type="submit" value="Update" />
              <br></br>
            </div>
          </form>
          {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
          <span>
            Don't have an Account -{' '}
            <Link to="https://payeer.com/?session=31118131" target="_blank">
              Payeer
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PayoutsHandelar;
