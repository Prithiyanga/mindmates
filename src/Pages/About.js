import React from "react";
import Header from "../Header";
import AboutIll from "../Media/AboutIllustration.png";
import Target from "../Media/Custbg.png";
import CustRotate from "../Media/custspin.png";
import Future from "../Media/future.png";
import Past from "../Media/past.png";
import Present from "../Media/present.png";
import "../Styles/About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-section">
          <div className="about-title">About Us</div>
          <div className="about-body">
            Empower, support, and streamline with our innovative educational
            platform. Personalised learning, friendly interactions, and
            inclusive features ensure optimal growth and engagement for
            individuals with autism and intellectual disabilities.
          </div>
        </div>
        <div className="about-section">
          <img
            className="abt-illustration"
            src={AboutIll}
            alt="About Illustration"
          />
        </div>
      </div>
      <div className="ppf-container">
        <div className="ppf-box">
          <div className="ppf-section">
            <div className="ppf-img">
              <img
                src={Past}
                className="ppf-ill"
                alt="Past Illustration"
                id="past-ill"
              />
            </div>
            <div className="ppf-content" id="past-content">
              Many individuals with autism and intellectual disabilities lack
              access to personalised education, hindering their growth and
              independence in traditional learning settings
            </div>
            <button
              className="ppf-head"
              id="past-head"
              onClick={() => {
                document.getElementById("ppf-slide").style.transform =
                  "translateX(0vw)";
                document.getElementById("ppf-slide").style.borderTopLeftRadius =
                  "20px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderBottomLeftRadius = "20px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderTopRightRadius = "0px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderBottomRightRadius = "0px";
                document.getElementById("ppf-slide").style.transition = "0.6s";
                document.getElementById("past-ill").style.display = "none";
                document.getElementById("past-content").style.display = "flex";
                document.getElementById("present-ill").style.display = "flex";
                document.getElementById("present-content").style.display =
                  "none";
                document.getElementById("future-ill").style.display = "flex";
                document.getElementById("future-content").style.display =
                  "none";
                document.getElementById("past-head").style.color = "#fff";
                document.getElementById("past-head").style.backgroundColor =
                  "transparent";
                document.getElementById("present-head").style.color = "#000";
                document.getElementById("present-head").style.backgroundColor =
                  "#FF9900";
                document.getElementById("future-head").style.color = "#000";
                document.getElementById("future-head").style.backgroundColor =
                  "#FF9900";
              }}
            >
              Past
            </button>
          </div>
          <div className="ppf-section">
            <div className="ppf-img">
              <img
                src={Present}
                className="ppf-ill"
                alt="Present Illustration"
                id="present-ill"
              />
            </div>
            <div className="ppf-content" id="present-content">
              MindMate aims to empower individuals with intellectual
              disabilities through personalised education, fostering
              inclusivity, independence, and equal opportunities for growth
            </div>
            <button
              className="ppf-head"
              id="present-head"
              onClick={() => {
                document.getElementById("ppf-slide").style.transform =
                  "translateX(26.5vw)";
                document.getElementById("ppf-slide").style.transition = "0.6s";
                document.getElementById("ppf-slide").style.borderTopLeftRadius =
                  "0px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderBottomLeftRadius = "0px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderTopRightRadius = "0px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderBottomRightRadius = "0px";
                document.getElementById("past-ill").style.display = "flex";
                document.getElementById("past-content").style.display = "none";
                document.getElementById("present-ill").style.display = "none";
                document.getElementById("present-content").style.display =
                  "flex";
                document.getElementById("future-ill").style.display = "flex";
                document.getElementById("future-content").style.display =
                  "none";
                document.getElementById("past-head").style.color = "#000";
                document.getElementById("past-head").style.backgroundColor =
                  "#FF9900";
                document.getElementById("present-head").style.color = "#fff";
                document.getElementById("present-head").style.backgroundColor =
                  "transparent";
                document.getElementById("future-head").style.color = "#000";
                document.getElementById("future-head").style.backgroundColor =
                  "#FF9900";
              }}
            >
              Present
            </button>
          </div>
          <div className="ppf-section">
            <div className="ppf-img">
              <img
                src={Future}
                className="ppf-ill"
                alt="Future Illustration"
                id="future-ill"
              />
            </div>
            <div className="ppf-content" id="future-content">
              Individuals with intellectual disabilities will have access to
              quality education, thereby experiencing greater independence,
              inclusion, and opportunities for personal growth and achievement
              in society
            </div>
            <button
              className="ppf-head"
              id="future-head"
              onClick={() => {
                document.getElementById("ppf-slide").style.transform =
                  "translateX(53vw)";
                document.getElementById("ppf-slide").style.transition = "0.6s";
                document.getElementById("ppf-slide").style.borderTopLeftRadius =
                  "0px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderBottomLeftRadius = "0px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderTopRightRadius = "20px";
                document.getElementById(
                  "ppf-slide"
                ).style.borderBottomRightRadius = "20px";
                document.getElementById("past-ill").style.display = "flex";
                document.getElementById("past-content").style.display = "none";
                document.getElementById("present-ill").style.display = "flex";
                document.getElementById("present-content").style.display =
                  "none";
                document.getElementById("future-ill").style.display = "none";
                document.getElementById("future-content").style.display =
                  "flex";
                document.getElementById("past-head").style.color = "#000";
                document.getElementById("past-head").style.backgroundColor =
                  "#FF9900";
                document.getElementById("present-head").style.color = "#000";
                document.getElementById("present-head").style.backgroundColor =
                  "#FF9900";
                document.getElementById("future-head").style.color = "#fff";
                document.getElementById("future-head").style.backgroundColor =
                  "transparent";
              }}
            >
              Future
            </button>
          </div>
          <div className="ppf-slider" id="ppf-slide"></div>
        </div>
      </div>
      <div className="cust-container">
        <div className="cust-segs">
          <div className="cust cust1">
            <div className="cust-head">
              Individuals with Intellectual Disabilities
            </div>
            <div className="cust-body">
              We cater to individuals with intellectual disabilities by
              providing accessible and engaging educationalmaterials that
              promote skill development and independence.
            </div>
          </div>
          <div className="cust cust2">
            <div className="cust-head">Parents and Caregivers</div>
            <div className="cust-body">
              We support parents and caregivers of individuals with autism and
              intellectual disabilities by offering resources, guidance, and
              tools to assist in their loved one's educational journey.
            </div>
          </div>
          <div className="cust cust3">
            <div className="cust-head">
              Educators and Special Education Professionals
            </div>
            <div className="cust-body">
              Our platform serves educators and special education professionals
              who work with individuals with autism and intellectual
              disabilities, providing them with innovative teaching tools and
              strategies.
            </div>
          </div>
          <div className="cust cust4">
            <div className="cust-head">
              Community Organizations and Support Groups
            </div>
            <div className="cust-body">
              We collaborate with community organizations and support groups to
              promote awareness, advocacy, and access to quality education for
              individuals with autism and intellectual disabilities.
            </div>
          </div>

          <img src={CustRotate} alt="Target Abstract" className="cust-rotate" />
          <img src={Target} alt="Target Audience" className="cust-bg" />
        </div>
      </div>
      <div className="ft-container">
        <div className="ft-title">Features</div>
        <div className="ft-sections">
          <div className="ft-sec1">
            <div className="ft">
              <div className="ft-head">Personalized Learning Paths</div>
              <div className="ft-body">
                Tailored educational experiences to meet individual needs and
                abilities
              </div>
            </div>
            <div className="ft">
              <div className="ft-head">Playful Approach</div>
              <div className="ft-body">
                Incorporation of playful elements to enhance enjoyment and
                motivation in learning
              </div>
            </div>
            <div className="ft">
              <div className="ft-head">Global Access</div>
              <div className="ft-body">
                Availability and adaptability for users worldwide to promote
                inclusive education
              </div>
            </div>
          </div>
          <div className="ft-sec2">
            <div className="ft">
              <div className="ft-head">Interactive Activities</div>
              <div className="ft-body">
                Engaging games and interactive lessons for active learning and
                skill development
              </div>
            </div>
            <div className="ft">
              <div className="ft-head">Education-Focused Design</div>
              <div className="ft-body">
                Emphasis on educational content and skill-building modules
                aligned with learning goals
              </div>
            </div>
            <div className="ft">
              <div className="ft-head">User-Friendly Interface</div>
              <div className="ft-body">
                Intuitive design and navigation for easy accessibility and
                usability by diverse learners
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
