import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UpdateProductsDisplay() {
  const location = useLocation();
  const id = location.state._id;

  const [name, setname] = useState('');
  const [slug, setslug] = useState('');
  const [description, setdescription] = useState('');
  const [country, setcountry] = useState('');
  const [points, setpoints] = useState('');
  const [time, settime] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const UpdateProducsHandelar = async (e) => {
    e.preventDefault();
    const UpdateProducsInfo = {
      name: name,
      slug: slug,
      description: description,
      country: country,
      points: points,
      time: time,
    };

    try {
      await axios
        .put('http://localhost:3002/api/products/' + id, {
          name: UpdateProducsInfo.name,
          slug: UpdateProducsInfo.slug,
          description: UpdateProducsInfo.description,
          country: UpdateProducsInfo.country,
          points: UpdateProducsInfo.points,
          time: UpdateProducsInfo.time,
        })
        .then((response) => {
          setsuccessMsg(response.data.message);
        });
    } catch (e) {
      setInvalidMsg(e.response.data.message);
    }
  };

  return (
    <div className="Update_Products_Display">
      <h1>Update products</h1>
      <div className="hero_containner_input">
        <form action="" onSubmit={UpdateProducsHandelar}>
          <label for="">Name:</label> <br></br>
          <input
            type="text"
            autoFocus
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <br></br>
          <label for="">Slug:</label> <br></br>
          <input
            type="text"
            onChange={(e) => {
              setslug(e.target.value);
            }}
          />
          <br></br>
          <label for="">Description:</label> <br></br>
          <input
            type="text"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Country:</label> <br></br>
          <input
            type="text"
            onChange={(e) => {
              setcountry(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Points:</label> <br></br>
          <input
            type="Number"
            onChange={(e) => {
              setpoints(e.target.value);
            }}
          />
          <br></br>
          <label for=""> Time:</label> <br></br>
          <input
            type="Number"
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
          <br></br>
          <div className="btn">
            <input type="submit" value="Update-Products" />
            <br></br>
          </div>
        </form>
        {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
      </div>
    </div>
  );
}

export default UpdateProductsDisplay;
