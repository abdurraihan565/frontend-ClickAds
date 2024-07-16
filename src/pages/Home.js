import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ListUser from '../components/ListUser';
import DemoUser from '../components/DemoUser';
import AdsPartners from '../components/AdsPartners';

function Home() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [country, setcountry] = useState('');
  const [successMsg, setsuccessMsg] = useState('');
  const [InvaildMsg, setInvalidMsg] = useState('');

  //console.log(msg);
  const RegisterHandelar = async (e) => {
    e.preventDefault();
    const RegisterInfo = {
      name: name,
      email: email,
      password: password,
      country: country,
    };
    //console.log(RegisterInfo);

    try {
      await axios
        .post('https://clickads-backend.onrender.com/api/users/process-register', {
          name: RegisterInfo.name,
          email: RegisterInfo.email,
          password: RegisterInfo.password,
          country: RegisterInfo.country,
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
    <div>
     <Helmet>
        <title>Clickads-Home</title>
        <meta name="description" content="This is a description of my page" />
        <meta
          name="keywords"
          content="make passive income,watch and earn money,passive money,passive revenue,static income,ideas of passive income,Earn Money Watching Ads,make passive income,Get Paid to Watch,earn passive income,amazon remote careers,survey monkey survey,get paid to watch,Paid to View,paid view point,paidview point,Ad Viewing Sites,Online Earnings Tips,Side Hustles,Earn Cash Online,Earn at Home,Earn Online Fast,Mobile Earnings,Social Media Marketing,Online Surveys,Forex Trading,bitcoin,Freelancing,work from home jobsremote data entry jobs,remote work part time,generate money online,affiliate marketingaffleting, marketingwatching advertisement earn money,Task Apps,Online Marketplaces,clickads,Career Development,watching ads and earn,top earn money site,online jobs,earn mone from home,make money online,passive income,advertise earning site,Cash for Ad Watching,Fast Cash,Get Paid Instantly,Ad Viewing Sites,Online Earnings,click to earn,typing jobs,writting jobs,work to earn,work from home,jobs online,online jobs,how to earn money online,how to get a jobs,how to earn money online,part time jobs for student,data entry jobs,online jobs,side hustles,earning apps,remote work,dropshing amazon,freelancing jobs,cpa marketing work,best earning site,make money online 2024,earn money per click,microjobs,microjobs site,microjobs work,jobs,work, ho wto get earn money,"
        />
      </Helmet>
      <div className="hero_containner">
    
        <div className="hero_containner_des">
          <h1>
            <span>We Get paid ! </span>
            Earn Money Unlimited by viewing advertisements
          </h1>
          <ul>
            <li>
              <p>Earn from home</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Earn Money by viewing advertisements</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Earn more from offers and surveys</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Guaranteed ads daily</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                Instant payments with the most popular micropayment processors
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Low minimum for withdrawals</p>
            </li>
          </ul>
        </div>
        <div className="hero_containner_input">
          <form action="" onSubmit={RegisterHandelar}>
            <label for="">Enter FullName:</label> <br></br>
            <input
              type="text"
              required
              autoFocus
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <br></br>
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
              minLength="6"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br></br>
            <label for="">Enter Country:</label> <br></br>
            <select
              required
              onChange={(e) => {
                setcountry(e.target.value);
              }}
            >
              <option>Select Country</option>

              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option>B:</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option>C:</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo ">Congo </option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czechia">Czechia</option>
              <option value="">D:</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option>E:</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini (Swaziland)</option>
              <option value="Ethiopia">Ethiopia</option>
              <option>F:</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option>G:</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option>H :</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option>I</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option>J</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option>K :</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="North Korea">North Korea</option>
              <option value="South Korea">South Korea</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option>L :</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option>N:</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option>O</option>
              <option value="Oman">Oman</option>
              <option>P</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option>Q:</option>
              <option value="Qatar">Qatar</option>
              <option>R:</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option>S:</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="ão Tomé and Príncipe">ão Tomé and Príncipe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">SriLanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option>T:</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option>U:</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Usa">USA</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option>V:</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City ">Vatican City </option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option>Y:</option>
              <option value="Yemen">Yemen</option>
              <option>Z:</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <br></br>
            <div className="btn">
              <input type="submit" value="submit" />
              <br></br>
              <h1>Or</h1>

              <Link to="/login">Login</Link>
            </div>
          </form>
          {successMsg ? <h6>{successMsg}</h6> : <h5>{InvaildMsg}</h5>}
        </div>
      </div>
      <ListUser />
      <AdsPartners />
      <DemoUser />
    </div>
  );
}

export default Home;
