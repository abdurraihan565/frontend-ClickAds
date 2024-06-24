import axios from 'axios';
import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setemail] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const ForgotPasswordHandeler = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post('http://localhost:3002/api/users/forget-password', {
          email: email,
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
          <h1>Forgot Password</h1>
          <form action="" onSubmit={ForgotPasswordHandeler}>
            <label for="">Enter Your Email :</label>
            <br></br>
            <input
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Email..."
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
  );
}

export default ForgotPassword;
