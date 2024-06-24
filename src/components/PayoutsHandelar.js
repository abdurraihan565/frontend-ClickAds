import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PayoutsHandelar() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [PayoutsData, setPayoutsData] = useState([]);
  console.log(PayoutsData);
  useEffect(() => {
    try {
      axios
        .get('http://localhost:3002/api/payouts/all-payouts', {})
        .then((response) => {
          setPayoutsData(response.data.payload.payouts);
        });
    } catch (e) {
      console.log(e.response.data.message);
    }
  }, []);

  return (
    <div>
      <h1>payouts</h1>
      {PayoutsData.map((value) => {
        const { _id, email, paymentMethod, amount } = value;

        return (
          <div className="Earn_money_containner" key={_id}>
            <div className="Earn_money_containner_des">
              <span>{email}</span>
            </div>
            <h4>{paymentMethod}</h4>

            <p>{amount}points</p>
          </div>
        );
      })}
    </div>
  );
}

export default PayoutsHandelar;
