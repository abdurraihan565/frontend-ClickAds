import React, { useState } from 'react';
import axios from 'axios';
function ContactUs() {
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const ContactHandelars = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/contact', {
          email: email,
          message: message,
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
    <div className="contact_us">
    <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="This is a description of my page" />
        <meta
          name="keywords"
          content="make passive income,watch and earn money,passive money,passive revenue,static income,ideas of passive income,Earn Money Watching Ads,make passive income,Get Paid to Watch,earn passive income,amazon remote careers,survey monkey survey,get paid to watch,Paid to View,paid view point,paidview point,Ad Viewing Sites,Online Earnings Tips,Side Hustles,Earn Cash Online,Earn at Home,Earn Online Fast,Mobile Earnings,Social Media Marketing,Online Surveys,Forex Trading,bitcoin,Freelancing,work from home jobsremote data entry jobs,remote work part time,generate money online,affiliate marketingaffleting, marketingwatching advertisement earn money,Task Apps,Online Marketplaces,clickads,Career Development,watching ads and earn,top earn money site,online jobs,earn mone from home,make money online,passive income,advertise earning site,Cash for Ad Watching,Fast Cash,Get Paid Instantly,Ad Viewing Sites,Online Earnings,click to earn,typing jobs,writting jobs,work to earn,work from home,jobs online,online jobs,how to earn money online,how to get a jobs,how to earn money online,part time jobs for student,data entry jobs,online jobs,side hustles,earning apps,remote work,dropshing amazon,freelancing jobs,cpa marketing work,best earning site,make money online 2024,earn money per click,microjobs,microjobs site,microjobs work,jobs,work, how to get earn money,typing work,how to earn money from mobile,mobile earn money,"
        />
      </Helmet>
      <div className="forgot_password">
        <div className="Profile_handelar_des">
          <div className="hero_containner_input">
            <h1>Contact-Us</h1>
            <form action="" onSubmit={ContactHandelars}>
              <label for="">Enter Your Email :</label>
              <br></br>
              <input
                type="email"
                placeholder="Email..."
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <br></br>
              <label for="">Message :</label>
              <textarea
                type="text"
                placeholder="Write Message..."
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              />
              <br></br>
              <div className="btn">
                <input type="submit" value="Submit" />
                <br></br>
              </div>
            </form>
            {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
