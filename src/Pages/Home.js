import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "../Header";
import GSAbstract from "../Media/GSAbstract.png";
import Robo from "../Media/LORobo.png";
import Std from "../Media/std-element.png";
import Arrow1 from "../Media/step1.png";
import Arrow2 from "../Media/step2.png";
import Arrow3 from "../Media/step3.png";
import Arrow4 from "../Media/step4.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-container" id="Home">
      <Header />
      <div className="open-container">
        <div className="open-head">
          <div className="open-title">MindMate</div>
          <div className="open-caption">
            Empowering Minds, Embracing Differences
          </div>
        </div>
        <AnchorLink href="#GettingStarted" style={{ textDecoration: "none" }}>
          <button className="get-started">
            Get Started <FaArrowRightLong className="arrow-icon" />
          </button>
        </AnchorLink>
      </div>
      <div className="lo-container">
        <img className="lo-robo" alt="Robot Toy" src={Robo} />
        <div className="lo-title">Learning Outcomes</div>
        <div className="lo-contents">
          <div className="lo-content-section">
            <div className="lo-content">
              <div className="lo-content-title">Gentle Learning Curve </div>
              <div className="lo-content-body">
                Experience a supportive learning environment that adapts to your
                pace and abilities.
              </div>
            </div>
            <div className="lo-content">
              <div className="lo-content-title">Greater Independence </div>
              <div className="lo-content-body">
                Develop skills that promote independence and self-care in daily
                life.
              </div>
            </div>
          </div>
          <div className="lo-content-section mid-lo-section">
            <div className="lo-content">
              <div className="lo-content-title">Empowered Education </div>
              <div className="lo-content-body">
                Access quality educational resources tailored to your unique
                needs.
              </div>
            </div>
            <div className="lo-content">
              <div className="lo-content-title">Progress Tracking</div>
              <div className="lo-content-body">
                Monitor each learner's progress and growth individually for
                personalised development tracking.
              </div>
            </div>
          </div>
          <div className="lo-content-section">
            <div className="lo-content">
              <div className="lo-content-title">Inclusiveness </div>
              <div className="lo-content-body">
                Join an inclusive community where everyone is valued and
                supported.
              </div>
            </div>
            <div className="lo-content">
              <div className="lo-content-title">Streamlined Development </div>
              <div className="lo-content-body">
                Enjoy a user-friendly platform that facilitates seamless
                learning.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="std-container">
        <div className="std-element-left">
          <img src={Std} className="std-abstimg-left" alt="Abstract Element" />
        </div>
        <div className="std-element-right">
          <img src={Std} className="std-abstimg-right" alt="Abstract Element" />
        </div>
        <div className="std-title">SETTING THE STANDARD</div>
        <div className="std-section">
          <div className="std-box">
            <div className="std-heading">Personalised Learning Paths</div>
            <div className="std-body">
              Tailored educational experiences based on individual abilities and
              preferences.
            </div>
          </div>
          <div className="std-box">
            <div className="std-heading">Expertly Curated Content</div>
            <div className="std-body">
              Carefully selected resources designed for effective learning
              outcomes.
            </div>
          </div>
        </div>
        <div className="std-section mid-std-section">
          <div className="std-box">
            <div className="std-heading">Interactive Engagement</div>
            <div className="std-body">
              Engaging activities and interactive elements for active
              participation.
            </div>
          </div>
        </div>
        <div className="std-section">
          <div className="std-box">
            <div className="std-heading">User-Centric Design </div>
            <div className="std-body">
              Prioritizing user needs and usability in every aspect of the
              platform.
            </div>
          </div>
          <div className="std-box">
            <div className="std-heading">Innovative Teaching Methods</div>
            <div className="std-body">
              Incorporating innovative approaches to optimize learning outcomes.
            </div>
          </div>
        </div>
      </div>
      <div className="gs-container" id="GettingStarted">
        <div className="gs-title">GETTING STARTED</div>
        <div className="gs-contents">
          <div className="gs-section gsc">
            <div className="gs-step">
              <img className="gs-arrow" src={Arrow1} alt="Step Arrow Mark" />
              <div className="gs-step-content">Sign up or log in</div>
            </div>
            <div className="gs-step">
              <img className="gs-arrow" src={Arrow2} alt="Step Arrow Mark" />
              <div className="gs-step-content">
                Update individual reports in Insights
              </div>
            </div>
            <div className="gs-step">
              <img className="gs-arrow" src={Arrow3} alt="Step Arrow Mark" />
              <div className="gs-step-content">
                Explore suggested and other courses
              </div>
            </div>
            <div className="gs-step">
              <img className="gs-arrow" src={Arrow4} alt="Step Arrow Mark" />
              <div className="gs-step-content">
                Choose and allow interactive learning
              </div>
            </div>
          </div>
          <div className="gs-section">
            <img className="gs-abstract" src={GSAbstract} alt="Abstract" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
