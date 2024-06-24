import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UnbanDisplay() {
  const location = useLocation();
  const id = location.state._id;
  const email = location.state.email;
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const UnBanUserHandelar = async (e) => {
    e.preventDefault();

    try {
      await axios
        .put('http://localhost:3002/api/users/unban-user/' + id, {})
        .then((response) => {
          setsuccessMsg(response.data.message);
        });
    } catch (e) {
      setInvalidMsg(e.response.data.message);
    }
  };
  return (
    <div>
      <div className="delete_products_containner">
        <div className="delete_msg">
          {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
        </div>
        <div className="delete_products">
          <h1>{email}</h1>
          <div className="delete_btn">
            <button onClick={UnBanUserHandelar}>UnBan-User</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnbanDisplay;
