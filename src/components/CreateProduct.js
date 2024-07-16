import axios from 'axios';
import React, { useState } from 'react';

function CreateProduct() {
  const [name, setname] = useState('');
  const [slug, setslug] = useState('');
  const [description, setdescription] = useState('');
  const [country, setcountry] = useState('');
  const [points, setpoints] = useState('');
  const [time, settime] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const CreateProducsHandelar = async (e) => {
    e.preventDefault();
    const CreateProducsInfo = {
      name: name,
      slug: slug,
      description: description,
      country: country,
      points: points,
      time: time,
    };
    console.log(CreateProducsInfo);
    //console.log(RegisterInfo);

    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/products/create-product', {
          name: CreateProducsInfo.name,
          slug: CreateProducsInfo.slug,
          description: CreateProducsInfo.description,
          country: CreateProducsInfo.country,
          points: CreateProducsInfo.points,
          time: CreateProducsInfo.time,
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
      //setInvalidMsg(e);
    }
  };

  return (
    <div className="Create_product">
      <h1>Create Product </h1>

      <div className="hero_containner_input">
        <form action="" onSubmit={CreateProducsHandelar}>
          <label for="">Name:</label> <br></br>
          <input
            type="text"
            required
            autoFocus
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <br></br>
          <label for="">Slug:</label> <br></br>
          <input
            type="text"
            required
            onChange={(e) => {
              setslug(e.target.value);
            }}
          />
          <br></br>
          <label for="">Description:</label> <br></br>
          <input
            type="text"
            required
            minLength="6"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Country:</label> <br></br>
          <input
            type="text"
            required
            onChange={(e) => {
              setcountry(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Points:</label> <br></br>
          <input
            type="Number"
            required
            onChange={(e) => {
              setpoints(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Time:</label> <br></br>
          <input
            type="Number"
            required
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
          <br></br>
          <div className="btn">
            <input type="submit" value="Post" />
            <br></br>
          </div>
        </form>
        {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
      </div>
    </div>
  );
}

export default CreateProduct;
