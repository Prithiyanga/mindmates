import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Doctor from "../Media/doctor.png";
import Parent from "../Media/parent.png";
import Teacher from "../Media/teacher.png";
import "../Styles/Insight.css";

const Insight = () => {
  return (
    <div>
      <Header />
      <div className="insight-container">
        <div className="in-users" id="user-form">
          <div className="user">
            <img src={Teacher} className="user-icon" alt="Teacher" />
            <div className="user-name">Teacher</div>
            <button
              className="login"
              onClick={() => {
                document.getElementById("user-form").style.display = "none";
                document.getElementById("rep-form").style.display = "flex";
              }}
            >
              Login
            </button>
          </div>
          <div className="user">
            <img src={Doctor} className="user-icon" alt="Teacher" />
            <div className="user-name">Doctor</div>
            <button
              className="login"
              onClick={() => {
                document.getElementById("user-form").style.display = "none";
                document.getElementById("rep-form").style.display = "flex";
              }}
            >
              Login
            </button>
          </div>
          <div className="user">
            <img src={Parent} className="user-icon" alt="Teacher" />
            <div className="user-name">Parent</div>
            <button
              className="login"
              onClick={() => {
                document.getElementById("user-form").style.display = "none";
                document.getElementById("rep-form").style.display = "flex";
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="in-box" id="rep-form">
          <div className="in-field">
            <label className="inq">What is the IQ?</label>
            <input className="inp" type="text"></input>
          </div>
          <div className="in-field">
            <label className="inq">What is the Cognitive Referenced Age?</label>
            <input className="inp" type="number"></input>
          </div>
          <div className="in-field">
            <label className="inq">
              Any Milestone Achieved During Childhood?
            </label>
            <input className="inp" type="text"></input>
          </div>
          <div className="in-field">
            <label className="inq">
              How Well Does the Individual Interact?
            </label>
            <input className="inp" type="text"></input>
          </div>
          <div className="in-field">
            <label className="inq">
              Any Repetitive Behaviour of the Individual?
            </label>
            <input className="inp" type="text"></input>
          </div>
          <div className="in-field">
            <label className="inq">Any Other Concerns?</label>
            <input className="inp" type="text"></input>
          </div>
          <button
            className="submit"
            onClick={() => {
              localStorage.setItem("reported", "true");
              alert("Report Updated Successfully");
              document.getElementById("home-direct").click();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Link to="/" id="home-direct"></Link>
    </div>
  );
};

export default Insight;
