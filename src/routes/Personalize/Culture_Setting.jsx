import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";
import Error from "../../components/Error/Error";

const Culture_Setting = () => {
  const [ipCountry, setIpCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountryData, setSelectedCountryData] = useState({

  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  useEffect(() => {
    axios.get("https://hr-project.onrender.com/api/user/getIP").then((res) => {
      const countryName = res.data;
     console.log(res);
      setIpCountry(countryName?.country_name);

    });

    axios.get(`${BaseUrl}/api/country-settings`).then((res) => {
      const countrySettings = res.data;
      setCountries(countrySettings);
    });
  }, []);
console.log(ipCountry);
  useEffect(() => {
    const foundCountryData = countries.find(
      (country) => country?.country === ipCountry
    );
    console.log(foundCountryData);
    setSelectedCountryData({
      number: foundCountryData?.number || "",
      currency: foundCountryData?.currency || "",
      date_format: foundCountryData?.date_format || "",
    });
  }, [ipCountry, countries]);
console.log(selectedCountryData);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      country: ipCountry,
      number: selectedCountryData.number,
      currency: selectedCountryData.currency,
      percentage: event.target.percentage.value,
      date_format: selectedCountryData.date_format,
      timezone: event.target.timezone.value,
      percentage_round: event.target["rounding-percentage"].value,
      number_round: event.target["rounding-number"].value,
      currency_round: event.target["rounding-currency"].value,
    };

    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/cultural`,
        formData,
        {
          headers,
        }
      );

      console.log("Form data submitted successfully:", response.data);
      if (response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);

      if (error.response.status === 401) {
        seterrorStatus(error.response.data.message);
        setIserror(true);
        setTimeout(() => {
          setIserror(false);
        }, 3000);
      }
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
            <input type="submit" className="update-button" value="Update" />
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
                  value={ipCountry.country_name}
                  onChange={(event) => setIpCountry(event.target.value)}
                >
                  {countries.map((country) => (
                    <option key={country._id} value={country.country}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <label htmlFor="number">Select Number</label>
                <input
                  type="text"
                  name="number"
                  value={selectedCountryData.number}
                  onChange={(event) =>
                    setSelectedCountryData((prevData) => ({
                      ...prevData,
                      number: event.target.value,
                    }))
                  }
                />
              </li>
              <li>
                <label htmlFor="currency">Select Currency</label>
                <input
                  type="text"
                  name="currency"
                  value={selectedCountryData.currency}
                  onChange={(event) =>
                    setSelectedCountryData((prevData) => ({
                      ...prevData,
                      currency: event.target.value,
                    }))
                  }
                />
              </li>
              <li>
                <label htmlFor="percentage">Select Percentage</label>
                <select className="countrySelection" name="percentage">
                  <option value="No_decimal">No Decimals</option>
                  <option value="One_decimal">One Decimal</option>
                  <option value="Two_decimal">Two Decimal</option>
                  <option value="Three_decimal">Three Decimal</option>
                </select>
              </li>
              <li>
                <label htmlFor="Date">Select date</label>
                <input
                  type="text"
                  name="date"
                  value={selectedCountryData.date_format}
                  onChange={(event) =>
                    setSelectedCountryData((prevData) => ({
                      ...prevData,
                      date_format: event.target.value,
                    }))
                  }
                />
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
                <label htmlFor="rounding-percentage">Select Percerntage</label>
                <select className="countrySelection" name="rounding-percentage">
                  <option value="No_decimal">No Decimals</option>
                  <option value="One_decimal">One Decimal</option>
                  <option value="Two_decimal">Two Decimal</option>
                  <option value="Three_decimal">Three Decimal</option>
                </select>
              </li>
              <li>
                <label htmlFor="rounding-percentage">Select Number</label>
                <select className="countrySelection" name="rounding-number">
                  <option value="No_decimal">No Decimals</option>
                  <option value="One_decimal">One Decimal</option>
                  <option value="Two_decimal">Two Decimal</option>
                </select>
              </li>
              <li>
                <label htmlFor="rounding-curency">Select Currency</label>
                <select className="countrySelection" name="rounding-currency">
                  <option value="No_decimal">No Decimals</option>
                  <option value="One_decimal">One Decimal</option>
                  <option value="Two_decimal">Two Decimal</option>
                </select>
              </li>
            </ul>
          </div>
        </form>
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default Culture_Setting;
