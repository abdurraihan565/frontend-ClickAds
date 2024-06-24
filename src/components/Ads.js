import React from 'react';

function Ads() {
  return (
    <div className="Advertiser_containner">
      <button>Create New Campain</button>
      <div className="Advertiser_containner_des">
        <p>
          Prices starting at 3 satoshis per click! Each visit duration is at
          least 15 seconds. Only unique visits are counted each day. No
          illegal/warez, adult sites or hacks. Advertising of websites with
          viruses is strictly prohibited. Note, that Ads with higher price are
          prior.
        </p>
        <form action="">
          <div className="Advertiser_containner_des_url">
            <input type="url" id="" name="" placeholder="url..." required />
            <br></br>
          </div>

          <div className="Advertiser_containner_des_url">
            <input
              type="text"
              id=""
              name=""
              placeholder="Short description, will be shown to user, 100 symbols max"
              required
            />
            <br></br>
          </div>
          <div className="Advertiser_containner_des_url">
            <input
              type="number"
              id=""
              name=""
              placeholder="Per price"
              min="3"
              required
            />
            <br></br>
          </div>
          <div className="Ads_duration">
            <select>
              <option>Minimum visit duration</option>
              <option>15 seconds</option>
              <option>30 seconds</option>
            </select>
          </div>
          <br></br>
          <div className="Ads_country">
            <span>Select Country</span>
            <br></br>
            <div className="country_cty">
              <div className="country_cty_des">
                <input type="checkbox" />
                <span>Bangladesh</span>
                <input type="checkbox" />
                <span>Bangladesh</span>
                <input type="checkbox" />
                <span>Bangladesh</span>
                <input type="checkbox" />
                <span>Bangladesh</span>
                <input type="checkbox" />
                <span>Bangladesh</span>
                <input type="checkbox" />
                <span>Bangladesh</span>
                <input type="checkbox" />
                <span>Bangladesh</span>
                <input type="checkbox" />
                <span>Bangladesh</span>
              </div>
            </div>
          </div>
          <br></br>
          <div className="Advertise_btn">
            <input type="submit" value="submit" />
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ads;
