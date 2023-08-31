import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../layout/Navbar";
import "./userplanmain.css";
import { FaPlayCircle, FaSun, FaUser } from "react-icons/fa";
import Countdown from "react-countdown";
import {
  addDays,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { useDataContext } from "../../../Context/Context";
import { MdSettings } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Userplan = () => {
  const { data, user } = useDataContext();

  const createdDate = new Date(data?.tat_time);
  const expiryDate = new Date(createdDate);
  expiryDate.setDate(expiryDate.getDate() + data?.tat);

  const currentDate = new Date();
  const timeLeft = expiryDate - currentDate;

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  console.log(`${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds left.`);

// getting new date from api tat expiry date

  const isDateString=data?.tat_time;
  const dateObject = new Date(isDateString);
  dateObject.setDate(dateObject.getDate() + data?.tat);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = dateObject.getDate();
  const formattedNewDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
  const renderer = ({ completed, days, hours, minutes, seconds }) => {
    if (completed) {
      return <p>Time s up!</p>;
    } else {
      return (
        <ul className="countdownlist">
          <li>{days} </li>
          <li>{hours} </li>
          <li>{minutes} </li>
          <li>{seconds} </li>
        </ul>
      );
    }
  };

  const percentage = 45;

  return (
    <div>
      <Navbar />
      <div className="heading-userplan">
        <h3>
          <FaSun style={{ color: "orange" }} />
          Good Morning {user}
        </h3>
        <Link to="/personalize">
          <MdSettings />
        </Link>
      </div>

      <div className="landing-container">
        <div className="content-plan">
          <Link to="/PlanData">
            {" "}
            <button className="beginhere">
              Beginhere <FaPlayCircle style={{ fontSize: "1rem" }} />
            </button>
          </Link>
        </div>
        {data?.cultural?.country.length !==0 && data?.tat>0 ? <div className="timer-wrapper">
          <div className="country-section">
            <FaUser style={{ color: "grey" }} />
            <div className="country">
              {data?.cultural?.country}
            </div>
          </div>
          <div className="tat-timer">
            <div className="tat-days">
              <h5>TAT : {data?.tat} days</h5>
              <h5>Ends on : {formattedNewDate}</h5>
            </div>

            <div className="countdown">
              <Countdown date={Date.now() + timeLeft} renderer={renderer} />
            </div>
          </div>
          <div style={{ width: "100%", padding: "4rem", display: "flex", alignItems: "center", height: "280px", justifyContent: "center" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: `#3e98c7`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div> : null}
      </div>
    </div>
  );
};

export default Userplan;
