import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardCatagory from '../components/DashboardCatagory';
import axios from 'axios';
function EarnMoney() {
  const [InvalidMsg, setInvalidMsg] = useState('');
  console.log(InvalidMsg);
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        const result = await axios.get('http://localhost:3002/api/products');

=======
        const result = await axios.get('http://localhost:3000/api/products');
>>>>>>> 29ac930 (first commit)
        setProductData(result.data.payload.products);
      } catch (e) {
        setInvalidMsg(e.response.data.message);
      }
    };
    fetchData();
  }, []);

  //

  return (
    <div className="dashboard_containner">
      <DashboardCatagory />

      <div className="Earn_money">
        <h1>Earn Money By Unlimited Watching ADS</h1>

        {ProductData.map((value) => {
          const { _id, name, slug, description, points, time } = value;

          return (
            <div className="Earn_money_containner" key={_id}>
              <div className="Earn_money_containner_des">
                <span>{name}</span>
              </div>
              <h4>{points}</h4>
              <i class="fa-solid fa-clock"></i>
              <p>{time}s</p>
              <Link
                to={`/dashboard/earn-money/${_id}`}
                state={{ _id, name, slug, description, time, points }}
              >
                <button>/Now</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EarnMoney;
