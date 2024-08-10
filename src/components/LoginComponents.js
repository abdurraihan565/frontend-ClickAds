import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const Navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const LoginHandelar = async (e) => {
    e.preventDefault();
    const LoginInfo = {
      email: email,
      password: password,
    };

    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/auth/login', {
          timeout: 1000, 
          email: LoginInfo.email,
          password: LoginInfo.password,
        })
        .then((response) => {
          setsuccessMsg(response.data.message);
          sessionStorage.setItem(
            'userData',
            JSON.stringify(response.data.payload.user)
          );
          if (response.data.payload.user.isAdmin === true) {
            sessionStorage.setItem(
              'isAdmin',
              JSON.stringify(response.data.payload.user.isAdmin)
            );
          } else {
          }

          setTimeout(() => {
            if (response.data.message) {
              Navigate('/dashboard');
              window.location.reload();
            }
          }, 1000);
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
    <div className="login_containner">
      <div className="hero_containner_input">
        <h1>Login</h1>

        <form action="" onSubmit={LoginHandelar}>
          <label for="">Enter Email:</label> <br></br>
          <input
            type="email"
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br></br>
          <label for="">Enter Password:</label> <br></br>
          <input
            type="password"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br></br>
          <div className="btn">
            <input type="submit" value="submit" />
            <br></br>
            <h1>Or</h1>
          </div>
          <div className="btn_link">
            <Link to="/forgot-password">
              <button>Forgot Password</button>
            </Link>
            /
            <Link to="/">
              <button>Register</button>
            </Link>
          </div>
        </form>
        {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
      </div>
    </div>
  );
}

export default Login;
