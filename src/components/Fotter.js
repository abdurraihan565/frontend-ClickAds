import React from 'react';
import { Link } from 'react-router-dom';

function Fotter() {
  return (
    <div className="fotter">
      <div className="fotter_containner">
        <div className="fotter_containner_first_des">
          <div className="fotter_containner_first_des_info">
            <h1>About Us</h1>
            <ul>
              <li>
                <Link>Help </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>Privecy Policy</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="fotter_containner_first_des_info">
            <h1>Info</h1>
            <ul>
              <li>
                <Link to="/forgot-password">Reset-Password </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fotter_containner_first_des_comunity">
          <h1>Comunity</h1>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-google-play"></i>
        </div>
      </div>
      <div className="fotter_containner_first_des_copy_right">
        <span>© 2024 Adgrand Limited. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Fotter;
