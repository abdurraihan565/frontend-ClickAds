import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CollectPopUp(props) {
  const Navigate = useNavigate();
  //props data from product
  const Collect = props.Collect;
  const productPoints = props.points;
  const productId = props.id;
  const CheckProductInvalidMsg = props.InvalidMsg;

  // put data from databese poins
  const [successMsg, setsuccessMsg] = useState('');

 // console.log(successMsg);
  const [InvaildMsg, setInvalidMsg] = useState('');
//  console.log(InvaildMsg);

  //get data from session staorge

  const userDataAll = JSON.parse(sessionStorage.getItem('userData'));
  const id = userDataAll._id;
  // get sigle data from database

  const [userSingleData, setuserSingleData] = useState([]);
  const userid = userSingleData._id;
  const userPoints = userSingleData.points;

  //popup display
  const tatalPoints = productPoints + userPoints;

  if (Collect) {
    const Collect_pop_up = document.querySelector('.Collect_pop_up');
    Collect_pop_up.style.display = 'block';
  }

  //
  useEffect(() => {
    try {
      axios
        .get('https://clickads-backend.onrender.com/api/users/' + id, {})
        .then((response) => {
        //  console.log(response.data.message);
          setuserSingleData(response.data.payload.user);
        });
    } catch (e) {
      console.log(e.response.data.message);
    }
  }, []);

  //CollectHandelar
  const CollectHandelar = async () => {
    try {
      await axios
        .put('https://clickads-backend.onrender.com/api/users/update-user-points/' + userid, {
          points: tatalPoints,
        })
        .then((response) => {
          setsuccessMsg(response.data.message);
        });
    } catch (e) {
      setInvalidMsg(e);
    }
    // delete product
    try {
      axios
        .delete('https://clickads-backend.onrender.com/api/products/' + productId, {})
        .then((response) => {
          console.log(response.data.message);
        });
    } catch (e) {
      setInvalidMsg(e);
    }

    //navigate-
    setTimeout(() => {
      Navigate('/dashboard/earn-money/', {});
    }, 2000);
  };
  //check product msg responce
   if (CheckProductInvalidMsg) {
    const Collect_pop_up = document.querySelector('.Collect_pop_up');
    Collect_pop_up.style.display = 'none';
   }
  return (
    <div className="Collect_pop_up">
      <h1>{Collect}</h1>
      <span> Your Points: {productPoints}</span>
      {successMsg ? (
        <h1>
          {successMsg}
          {productPoints} Points
        </h1>
      ) : (
        <button onClick={CollectHandelar}>Collect Now</button>
      )}
    </div>
  );
}

export default CollectPopUp;
