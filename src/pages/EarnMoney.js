import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardCatagory from '../components/DashboardCatagory';
import axios from 'axios';
import { Helmet } from 'react-helmet';
function EarnMoney() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://clickads-backend.onrender.com/api/products');
        setProductData(result.data.payload.products);
      } catch (e) {
        setInvalidMsg(e.response.data.message);
      }
    };
    fetchData();
  }, []);

  //

  return (
    <div className="dashboard_containner">
     <Helmet>
        <title>Earn Money</title>
        <meta name="description" content="This is a description of my page" />
        <meta
          name="keywords"
          content="make passive income,watch and earn money,passive money,passive revenue,static income,ideas of passive income,Earn Money Watching Ads,make passive income,Get Paid to Watch,earn passive income,amazon remote careers,survey monkey survey,get paid to watch,Paid to View,paid view point,paidview point,Ad Viewing Sites,Online Earnings Tips,Side Hustles,Earn Cash Online,Earn at Home,Earn Online Fast,Mobile Earnings,Social Media Marketing,Online Surveys,Forex Trading,bitcoin,Freelancing,work from home jobsremote data entry jobs,remote work part time,generate money online,affiliate marketingaffleting, marketingwatching advertisement earn money,Task Apps,Online Marketplaces,clickads,Career Development,watching ads and earn,top earn money site,online jobs,earn mone from home,make money online,passive income,advertise earning site,Cash for Ad Watching,Fast Cash,Get Paid Instantly,Ad Viewing Sites,Online Earnings,click to earn,typing jobs,writting jobs,work to earn,work from home,jobs online,online jobs,how to earn money online,how to get a jobs,how to earn money online,part time jobs for student,data entry jobs,online jobs,side hustles,earning apps,remote work,dropshing amazon,freelancing jobs,cpa marketing work,best earning site,make money online 2024,earn money per click,microjobs,microjobs site,microjobs work,jobs,work, ho wto get earn money,"
        />
      </Helmet>
    
      <DashboardCatagory />

      <div className="Earn_money">
        <h1>Earn Money By Unlimited Watching ADS</h1>

        {ProductData.map((value) => {
          const { _id, name, slug, description, points, time } = value;

          return (
            <div className="Earn_money_containner" key={_id}>
              <div className="Earn_money_containner_des">
                <span>{name}</span>
              </div>
              <h4>{points}</h4>
              <i class="fa-solid fa-clock"></i>
              <p>{time}s</p>
              <Link
                to={`/dashboard/earn-money/${_id}`}
                state={{ _id, name, slug, description, time, points }}
              >
                <button>/Now</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EarnMoney;
