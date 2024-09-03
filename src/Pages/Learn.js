import React, { useEffect } from "react";
import Header from "../Header";
import Color from "../Media/color-ill.png";
import Shape from "../Media/shape-ill.png";
import "../Styles/Learn.css";

const Learn = () => {
  useEffect(() => {
    if (localStorage.getItem("reported") === "true") {
      document.getElementById("suggested-courses").style.display = "flex";
    } else {
      document.getElementById("suggested-courses").style.display = "none";
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="learn-container">
        <div className="sugg-courses" id="suggested-courses">
          <div className="sugg-head">Suggested Courses -</div>
          <div className="sugg-crs-card">
            <div className="sug-crs-ill">
              <img src={Shape} className="crs-ill" alt="Shapes Course" />
            </div>
            <div className="sug-crs-head">Shapify</div>
            <div className="start-button">Start</div>
          </div>
        </div>
        <div className="all-courses" id="all-courses">
          <div className="all-head">All Courses -</div>
          <div className="crs-seq">
            <div className="all-crs-card">
              <div className="all-crs-ill">
                <img src={Color} className="crs-ill" alt="Shapes Course" />
              </div>
              <div className="all-crs-head">Sketch Up</div>
              <div className="start-button">Start</div>
            </div>
            <div className="all-crs-card">
              <div className="all-crs-ill">
                <img src={Shape} className="crs-ill" alt="Shapes Course" />
              </div>
              <div className="all-crs-head">Shapify</div>
              <div className="start-button">Start</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
