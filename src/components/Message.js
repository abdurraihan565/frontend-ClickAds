import axios from 'axios';
import React, { useState } from 'react';

function Message() {
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  const MessageReplayHandelars = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/contact/replay-message', {
          email: email,
          message: message,
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
    <div className="">
      <div className="">
        <div className="Profile_handelar_des">
          <div className="hero_containner_input">
            <h1>Send Message</h1>
            <form action="" onSubmit={MessageReplayHandelars}>
              <label for="">Enter Your Email :</label>
              <br></br>
              <input
                type="email"
                placeholder="Email..."
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <br></br>
              <label for="">Message :</label>
              <textarea
                type="text"
                placeholder="Write Message..."
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
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
    </div>
  );
}

export default Message;
