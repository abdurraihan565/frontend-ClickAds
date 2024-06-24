import React from 'react';

import Ads from '../components/Ads';
import DashboardCatagory from '../components/DashboardCatagory';

function Advertiser() {
  return (
    <div className="dashboard_containner">
      <DashboardCatagory />
      <Ads />
    </div>
  );
}

export default Advertiser;
