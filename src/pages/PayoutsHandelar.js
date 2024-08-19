import React, { useEffect, useState } from 'react';
import DashboardCatagory from '../components/DashboardCatagory';
import axios from 'axios';
import { Helmet } from 'react-helmet';
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
         // console.log(response.data.message);
          setuserSingleData(response.data.payload.user);
        });
    } catch (e) {
      console.log(e.response.data.message);
    }
  }, []);
  return (
    <div className="Profile_handelar">
    <Helmet>
        <title>Payouts</title>
        <meta name="description" content="This is a description of my page" />
        <meta
          name="keywords"
          content="make passive income,watch and earn money,passive money,passive revenue,static income,ideas of passive income,Earn Money Watching Ads,make passive income,Get Paid to Watch,earn passive income,amazon remote careers,survey monkey survey,get paid to watch,Paid to View,paid view point,paidview point,Ad Viewing Sites,Online Earnings Tips,Side Hustles,Earn Cash Online,Earn at Home,Earn Online Fast,Mobile Earnings,Social Media Marketing,Online Surveys,Forex Trading,bitcoin,Freelancing,work from home jobsremote data entry jobs,remote work part time,generate money online,affiliate marketingaffleting, marketingwatching advertisement earn money,Task Apps,Online Marketplaces,clickads,Career Development,watching ads and earn,top earn money site,online jobs,earn mone from home,make money online,passive income,advertise earning site,Cash for Ad Watching,Fast Cash,Get Paid Instantly,Ad Viewing Sites,Online Earnings,click to earn,typing jobs,writting jobs,work to earn,work from home,jobs online,online jobs,how to earn money online,how to get a jobs,how to earn money online,part time jobs for student,data entry jobs,online jobs,side hustles,earning apps,remote work,dropshing amazon,freelancing jobs,cpa marketing work,best earning site,make money online 2024,earn money per click,microjobs,microjobs site,microjobs work,jobs,work, ho wto get earn money,"
        />
      </Helmet>
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
