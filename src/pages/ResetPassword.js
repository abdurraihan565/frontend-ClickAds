import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';

function ResetPassword() {
  const [password, setpassword] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');
  const location = useLocation();
  const pathName = location.pathname;
  const segments = pathName.split('/');
  const token = segments.pop();

  const ResetPasswordHandeler = async (e) => {
    e.preventDefault();

    try {
      await axios
        .put('https://clickads-backend.onrender.com/api/users/reset-password', {
          token: token,
          password: password,
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

  return (
    <div className="forgot_password">
    <Helmet>
        <title>Reset Password</title>
        <meta name="description" content="This is a description of my page" />
        <meta
          name="keywords"
          content="make passive income,watch and earn money,passive money,passive revenue,static income,ideas of passive income,Earn Money Watching Ads,make passive income,Get Paid to Watch,earn passive income,amazon remote careers,survey monkey survey,get paid to watch,Paid to View,paid view point,paidview point,Ad Viewing Sites,Online Earnings Tips,Side Hustles,Earn Cash Online,Earn at Home,Earn Online Fast,Mobile Earnings,Social Media Marketing,Online Surveys,Forex Trading,bitcoin,Freelancing,work from home jobsremote data entry jobs,remote work part time,generate money online,affiliate marketingaffleting, marketingwatching advertisement earn money,Task Apps,Online Marketplaces,clickads,Career Development,watching ads and earn,top earn money site,online jobs,earn mone from home,make money online,passive income,advertise earning site,Cash for Ad Watching,Fast Cash,Get Paid Instantly,Ad Viewing Sites,Online Earnings,click to earn,typing jobs,writting jobs,work to earn,work from home,jobs online,online jobs,how to earn money online,how to get a jobs,how to earn money online,part time jobs for student,data entry jobs,online jobs,side hustles,earning apps,remote work,dropshing amazon,freelancing jobs,cpa marketing work,best earning site,make money online 2024,earn money per click,microjobs,microjobs site,microjobs work,jobs,work, ho wto get earn money,"
        />
      </Helmet>
      <div className="Profile_handelar_des">
        <div className="hero_containner_input">
          <h1>Reset Password</h1>
          <form action="" onSubmit={ResetPasswordHandeler}>
            <label for="">Enter New Password :</label>
            <br></br>
            <input
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="New Password..."
            />
            <br></br>
            <div className="btn">
              <input type="submit" value="Update" />
              <br></br>
            </div>
          </form>
          {successMsg ? (
            <h6>
              {successMsg}
              <Link to="/login"> Login</Link>
            </h6>
          ) : (
            <h5>{InvaildMsg}</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
