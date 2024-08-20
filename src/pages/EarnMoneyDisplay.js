import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import DashboardCatagory from '../components/DashboardCatagory';
import CollectPopUp from '../components/CollectPopUp';
import { Link, useLocation } from 'react-router-dom';

function EarnMoneyDisplay() {
  const [result, setresult] = useState('');
  const [Collect, setCollect] = useState('');
  const location = useLocation();
  const id = location.state._id;
  const points = location.state.points;
  const time = location.state.time;
  const demo = 11000;
  const totalTime = time * demo;

  const timeCountHandelar = () => {
    //display none for p tag
    const p = document.querySelector('.Earn_money_containner p');
    p.style.display = 'none';

    // Set the date we're counting down to
    var countDownDate = new Date().getTime() + totalTime;
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result in an element with id="demo"
      setresult(+seconds + 's ');

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setCollect('Collect Your Points');
      }
    }, 1000);
  };

  return (
    <div className="dashboard_containner">
      <Helmet>
        <title>Earn Money by Viewing ads</title>
        <meta name="description" content="This is a description of my page" />
        <meta
          name="keywords"
          content="make passive income,watch and earn money,passive money,passive revenue,static income,ideas of passive income,Earn Money Watching Ads,make passive income,Get Paid to Watch,earn passive income,amazon remote careers,survey monkey survey,get paid to watch,Paid to View,paid view point,paidview point,Ad Viewing Sites,Online Earnings Tips,Side Hustles,Earn Cash Online,Earn at Home,Earn Online Fast,Mobile Earnings,Social Media Marketing,Online Surveys,Forex Trading,bitcoin,Freelancing,work from home jobsremote data entry jobs,remote work part time,generate money online,affiliate marketingaffleting, marketingwatching advertisement earn money,Task Apps,Online Marketplaces,clickads,Career Development,watching ads and earn,top earn money site,online jobs,earn mone from home,make money online,passive income,advertise earning site,Cash for Ad Watching,Fast Cash,Get Paid Instantly,Ad Viewing Sites,Online Earnings,click to earn,typing jobs,writting jobs,work to earn,work from home,jobs online,online jobs,how to earn money online,how to get a jobs,how to earn money online,part time jobs for student,data entry jobs,online jobs,side hustles,earning apps,remote work,dropshing amazon,freelancing jobs,cpa marketing work,best earning site,make money online 2024,earn money per click,microjobs,microjobs site,microjobs work,jobs,work, ho wto get earn money,"
        />
      </Helmet>
      <DashboardCatagory />

      <div className="Earn_money">
        <h1>Earn Money By Unlimited Watching ADS</h1>

        <div className="Earn_money_containner">
          <div className="Earn_money_containner_des">
            <span>{location.state.name}</span>
          </div>
          <h4>{points}</h4>
          <i class="fa-solid fa-clock"></i>
          <p>{time}0s</p>
          <h1>{result}</h1>
          <Link to={location.state.slug} target="_blank">
            <button onClick={timeCountHandelar}>/VIEW</button>
          </Link>
        </div>
      </div>
      <CollectPopUp Collect={Collect} points={points} id={id} />
   
  <script type='text/javascript' src='//pl24098694.highratecpm.com/83/42/83/834283bde4454ce2be50a3a213948e8d.js'></script>
    </div>
  );
}

export default EarnMoneyDisplay;
