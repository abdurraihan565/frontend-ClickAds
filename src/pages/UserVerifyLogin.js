import axios from 'axios';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function UserVerifyLogin() {
  // const Navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const segments = pathName.split('/');
  const token = segments.pop();
  console.log(token);
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const ActivateHandelar = async () => {
    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/users/verify', {
          token,
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
    <div className="Active_users">
      <div className="Active_users_containner">
        <span>Please Activete Your Email </span>
        <button onClick={ActivateHandelar}>activate</button>
        {successMsg ? (
          <h6>
            {successMsg}
            <Link to="/login">Login</Link>
          </h6>
        ) : (
          <h5>{InvaildMsg}</h5>
        )}
      </div>
    </div>
  );
}

export default UserVerifyLogin;
