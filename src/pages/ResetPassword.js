import axios from 'axios';
import React, { useState } from 'react';
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
        .put('http://localhost:3002/api/users/reset-password', {
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
