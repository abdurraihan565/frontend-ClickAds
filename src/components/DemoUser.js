import React from 'react';

function DemoUser() {
  return (
    <div className="Demo_User_Containner">
      <div className="Demo_User_des">
        <i class="fa-solid fa-users"></i>
        <br></br>
        <span>Easy to Sign UP</span>
        <p>Go to Register and simply Sign up and Easy to Start .</p>
      </div>
      <div className="Demo_User_des">
        <i class="fa fa-tachometer" aria-hidden="true"></i>
        <br></br>
        <span>Go to Dashboard</span>
        <p>Go to Dashboard and Click on task and Easy to Earn .</p>
      </div>
      <div className="Demo_User_des">
        <i class="fa-solid fa-money-bill"></i>
        <br></br>
        <span>Payouts</span>
        <p>Select to payout option and withdrawal Your Funds</p>
      </div>
    </div>
  );
}

export default DemoUser;
