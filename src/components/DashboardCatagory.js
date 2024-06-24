import React from 'react';
import { Link } from 'react-router-dom';

function DashboardCatagory() {
  return (
    <div className="dashboard_containner_popup">
      <div className="dashboard_containner_popup_des_Active">
        <ul>
          <li>
            <i class="fa fa-tachometer" aria-hidden="true"></i>
            <Link>Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard_containner_popup_des">
        <ul>
          <li>
            <i class="fa-solid fa-eye"></i>
            <Link to="/dashboard/earn-money">Earn Money</Link>
          </li>
        </ul>
      </div>

      <div className="dashboard_containner_popup_des">
        <ul>
          <li>
            <i class="fa-solid fa-user"></i>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard_containner_popup_des">
        <ul>
          <li>
            <i class="fa-solid fa-money-bill"></i>
            <Link to="/dashboard/payouts">Payouts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardCatagory;
