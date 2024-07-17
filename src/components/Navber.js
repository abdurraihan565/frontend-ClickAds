import React from 'react';
import { Link } from 'react-router-dom';

function Navber() {
  //get data from session staorge
  const userDataAll = JSON.parse(sessionStorage.getItem('userData'));
  //const id = userDataAll._id;

  const Dashboard_nav_handle = () => {
    const dashboard_nav_pop = document.querySelector('.dashboard_nav_pop');
    dashboard_nav_pop.style.display = 'block';
  };

  const handle_x = () => {
    const dashboard_nav_pop = document.querySelector('.dashboard_nav_pop');
    dashboard_nav_pop.style.display = 'none';
  };

  return (
    <div className="navber_containner">
      <div className="navber_containner_title">
        <ul>
          <li>
            <Link to="/">Clickads</Link>
          </li>
        </ul>
      </div>
      <div className="navber_containner_hero">
        <ul>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            {userDataAll ? (
              <div
                className="dashboard_profile"
                onMouseOver={Dashboard_nav_handle}
              >
                <i class="fa-regular fa-user"></i>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="dashboard_nav_pop">
        <p className="x" onClick={handle_x}>
          X
        </p>
        <div className="dashboard_nav_profile">
          <button>
            <Link to="/dashboard">dashboard</Link>
          </button>
          <br></br>
          <button>
            <Link to="/dashboard/earn-money">Earn-Money</Link>
          </button>
          <br></br>
          <button>
            <Link to="/dashboard/profile">Profile</Link>
          </button>
          <br></br>
          <button>
            <Link to="/dashboard/payouts">Payouts</Link>
          </button>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Navber;
