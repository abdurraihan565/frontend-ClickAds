import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const Navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');
  const [Loading, setLoading] = useState(false);

  const LoginHandelar = async (e) => {
    e.preventDefault();
    const LoginInfo = {
      email: email,
      password: password,
    };
   setLoading(true);

    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/auth/login', {
          timeout: 5000,
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
     //
    if (!InvaildMsg) {
      const loader = document.querySelector('.loader');
      loader.style.display = 'none';
      // const loader_btn = document.querySelector('.loader_btn');
      //loader_btn.style.display = 'none';
    } else {
      const loader = document.querySelector('.loader');
      loader.style.display = 'none';
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
          {Loading && <div class="loader">
            <p>Checking...</p>
            <span>Please waiting for 1 minutes</span>
          </div>}
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
