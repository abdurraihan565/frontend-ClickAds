import React, { useEffect, useState } from 'react';

import DashboardCatagory from '../components/DashboardCatagory';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  //get data from session staorge
  const userDataAll = JSON.parse(sessionStorage.getItem('userData'));
  const id = userDataAll._id;
  //get data from database
  const [userSingleData, setuserSingleData] = useState([]);
  const points = userSingleData.points;

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
    <div className="dashboard_containner">
      <DashboardCatagory />
      <div className="dashboard_containner">
        <div className="dashboard_containner_des">
          <span>Main Balance</span>
          <h4>{points} Points</h4>
          <Link to="/dashboard/payouts">
            <button>Withdraw</button>
          </Link>
        </div>
        <div className="dashboard_containner_des">
          <span>Deposit Balance</span>
          <h4>0.000 $</h4>
          <button>Deposit</button>
        </div>
        <div className="dashboard_containner_des_msg">
          <span>
            Please Update Your Profile Account-{' '}
            <Link to="/dashboard/profile">Profile</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
