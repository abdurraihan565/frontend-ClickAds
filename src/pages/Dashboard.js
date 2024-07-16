import React, { useEffect, useState } from 'react';

import DashboardCatagory from '../components/DashboardCatagory';
import axios from 'axios';
import { Helmet } from 'react-helmet';
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
    <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="This is a description of my page" />
        <meta
          name="keywords"
          content="make passive income,watch and earn money,passive money,passive revenue,static income,ideas of passive income,Earn Money Watching Ads,make passive income,Get Paid to Watch,earn passive income,amazon remote careers,survey monkey survey,get paid to watch,Paid to View,paid view point,paidview point,Ad Viewing Sites,Online Earnings Tips,Side Hustles,Earn Cash Online,Earn at Home,Earn Online Fast,Mobile Earnings,Social Media Marketing,Online Surveys,Forex Trading,bitcoin,Freelancing,work from home jobsremote data entry jobs,remote work part time,generate money online,affiliate marketingaffleting, marketingwatching advertisement earn money,Task Apps,Online Marketplaces,clickads,Career Development,watching ads and earn,top earn money site,online jobs,earn mone from home,make money online,passive income,advertise earning site,Cash for Ad Watching,Fast Cash,Get Paid Instantly,Ad Viewing Sites,Online Earnings,click to earn,typing jobs,writting jobs,work to earn,work from home,jobs online,online jobs,how to earn money online,how to get a jobs,how to earn money online,part time jobs for student,data entry jobs,online jobs,side hustles,earning apps,remote work,dropshing amazon,freelancing jobs,cpa marketing work,best earning site,make money online 2024,earn money per click,microjobs,microjobs site,microjobs work,jobs,work, how to get earn money,typing work,how to earn money from mobile,mobile earn money,"
        />
      </Helmet>
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
