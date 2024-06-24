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
          <p>{time}s</p>
          <h1>{result}</h1>
          <Link to={location.state.slug} target="_blank">
            <button onClick={timeCountHandelar}>/VIEW</button>
          </Link>
        </div>
      </div>
      <CollectPopUp Collect={Collect} points={points} id={id} />
    </div>
  );
}

export default EarnMoneyDisplay;
