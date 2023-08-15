import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../ApiService/ApiService";



const Culture_Setting = () => {
 
  const [ipCountry, setIpCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountryData, setSelectedCountryData] = useState({}); // Initialize with an empty object

  useEffect(() => {
    axios.get(`${BaseUrl}/api/user/getIP`).then(res => {
      const countryName = res.data;
      setIpCountry(countryName);
    });

    axios.get(`${BaseUrl}/api/country-settings`).then(res => {
      const countrySettings = res.data;
      setCountries(countrySettings);
    });

  }, []);
console.log(ipCountry);
  useEffect(() => {
    const foundCountryData = countries.find(country => country.country === ipCountry);
    setSelectedCountryData(foundCountryData || {}); // Set to an empty object if not found

  }, [ipCountry, countries]);
  console.log(selectedCountryData);
  return (
    <>
      <div className="wrapper-right">
      <form action="">
     
        <div className="dash-right-top">
      
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ Culture Settings</span>
            </h3>
          </div>
          <input type="submit" className="update-button" value="Update"/>
        
        </div>
        <div className="content-container">
          <div className="heading-container">
            <h4>Culture Setting</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
              <label htmlFor="country">Select country</label>
              <select
        className="countrySelection"
        value={ipCountry} // Set selected value to ipCountry
        onChange={event => setIpCountry(event.target.value)}
      >
        {countries.map(country => (
          <option key={country._id} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
            </li>
            <li>
        <label htmlFor="number">Select Number</label>
        <input type="text" name="number" value={selectedCountryData.number} />
      </li>
            <li>
            <label htmlFor="currency">Select Currency</label>
              <input type="text" name="currency" value={selectedCountryData.currency} readOnly/>
            </li>
            <li>
              <label htmlFor="percentage">Select Percentage</label>
              <input type="text" name="percentage" />
            </li>
            <li>
              <label htmlFor="Date">Select date</label>
              <input type="text" name="Date" value={selectedCountryData.date_format} />
            </li>
            <li>
              <label htmlFor="Timezone">Select Timezone</label>
              <input type="text" name="Timezone" value={ipCountry.timezone}/>
            </li>
          </ul>
          <div className="heading-container" style={{ paddingTop: "1rem" }}>
            <h4>Rounding Rule</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
            <label   htmlFor="rounding-percentage">Select Percerntage</label>
              <input type="text"  name="rounding-percentage" />
            </li>
            <li>
            <label   htmlFor="rounding-percentage">Select Number</label>
              <input type="number" name="rounding number" />
            </li>
            <li>
              <label htmlFor="rounding-curency">Select Currency</label>
              <input type="text" name="rounding-currency" />
            </li>
          </ul>
        </div>
      </form>
      </div>
    </>
  );
};

export default Culture_Setting;
