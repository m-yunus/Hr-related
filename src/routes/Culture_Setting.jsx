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

  useEffect(() => {
    const foundCountryData = countries.find(country => country.country === ipCountry);
    setSelectedCountryData(foundCountryData || {}); // Set to an empty object if not found

  }, [ipCountry, countries]);


  const handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      country: ipCountry,
      number: selectedCountryData.number,
      currency: selectedCountryData.currency,
      percentage: event.target.percentage.value, 
      date_format: selectedCountryData.date_format,
      timezone: event.target.timezone.value,
      percentage_round: event.target['rounding-percentage'].value, // Get value from the select element
      number_round: event.target['rounding-number'].value, 
      currency_round: event.target['rounding-currency'].value, 
    };
    console.log(event.target);
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    try {
      await axios.post(`${BaseUrl}/api/personalize/cultural` ,formData,{headers});
      
      console.log('Form data submitted successfully:', formData);
    } catch (error) {
     
      console.error('Error submitting form data:', error);
    }
  };


  return (
    <>
      <div className="wrapper-right">
      <form onSubmit={handleSubmit}>
     
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
              name="country"
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
        <input type="text" name="number" value={selectedCountryData.number}   />
      </li>
            <li>
            <label htmlFor="currency">Select Currency</label>
              <input type="text" name="currency" value={selectedCountryData.currency}   />
            </li>
            <li>
              <label htmlFor="percentage">Select Percentage</label>
              <select className="countrySelection"  name="percentage">
                <option value="No_decimal" >No Decimals</option>
                <option value="One_decimal">One Decimal</option>
                <option value="Two_decimal">Two Decimal</option>
                <option value="Three_decimal">Three Decimal</option>
              </select>
            </li>
            <li>
              <label htmlFor="Date">Select date</label>
              <input type="text" name="date" value={selectedCountryData.date_format} />
            </li>
            <li>
              <label htmlFor="Timezone">Select Timezone</label>
              <input type="text" name="timezone" value={ipCountry.timezone} />
            </li>
          </ul>
          <div className="heading-container" style={{ paddingTop: "1rem" }}>
            <h4>Rounding Rule</h4>
            <div className="underline-grey"></div>
          </div>

          <ul className="Culture-inputbox-list">
            <li>
            
            <label   htmlFor="rounding-percentage">Select Percerntage</label>
            <select className="countrySelection" name="rounding-percentage" >
                <option value="No_decimal">No Decimals</option>
                <option value="One_decimal">One Decimal</option>
                <option value="Two_decimal">Two Decimal</option>
                <option value="Three_decimal">Three Decimal</option>
              </select>
            </li>
            <li>
            <label   htmlFor="rounding-percentage">Select Number</label>
            <select className="countrySelection"  name="rounding-number">
                <option value="No_decimal" >No Decimals</option>
                <option value="One_decimal">One Decimal</option>
                <option value="Two_decimal">Two Decimal</option>
               
              </select>
            </li>
            <li>
              <label htmlFor="rounding-curency">Select Currency</label>
              <select className="countrySelection" name="rounding-currency">
                <option value="No_decimal" >No Decimals</option>
                <option value="One_decimal">One Decimal</option>
                <option value="Two_decimal">Two Decimal</option>
                
              </select>
            </li>
          </ul>
        </div>
      </form>
      </div>
    </>
  );
};

export default Culture_Setting;
