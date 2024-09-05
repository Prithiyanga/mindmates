/* import React from "react";
import Header from "../Header";
import "../Styles/Help.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../Media/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";





const Help = () => {
const cip=document.querySelector(
  '.cip');
cip.addEventListener(onclick,(event=>{
  event.target.placeholder="";
}))







  return (
    <div className="help-full-container">
      <Header />
      <div className="help-container">
        <div className="help-header">
          <h1 id="title">Help desk support</h1>
          <div className="button-section"> 
            <button className=" help-button"> learn more<IoIosArrowForward /> </button>
            <button className=" help-button"><IoIosArrowBack />for Enqiury</button>
          </div>
        </div>
        <div className="footer">
        <div className="logo-div">
          <img src={Logo} alt="Mind Mate Logo" className="header-logo-help-page" />
          <h1 id="logo-name">Mind Mate</h1>
        </div>
        <div className="contacts">
          <div className="cinputs"> 
              <input className="cip" placeholder="NAME" />
              <input className="cip" placeholder="E-MAIL" />
              <input className="cip"  placeholder="PHONE"/>
          </div>
          <div className="more-contacts">
          <textarea className="contacts-textarea" placeholder="MESSAGE">

          </textarea>
           <button id="message-btn">SUBMIT</button>


          </div>
          <div className="quick-links">
            <h2 id="ql">Quick Links

            </h2>
            <ul className="links">
              <li>
                Home
              </li>
              <li>
                About
                
              </li>
              <li>
                Insight
                
              </li>
              <li>
                learn
                
              </li>
 
 

            </ul>
            <div className="contact-link">
            <h2 className="contact-title">contact</h2>
            <p><FaPhoneAlt className="icon" />
            <span className="content">91+ 8148102652</span>
            </p>
            <p><MdEmail className="icon" />
            <span className="content">mitbots01@gmail.com</span>
            </p>

            </div>
            
           

          </div>
          
        </div>
        <div>

        </div>

        </div>
        
      </div>
    </div>
  );
};

export default Help;
 */
import React, { useEffect, useRef } from "react";
import Header from "../Header";
import "../Styles/Help.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Logo from "../Media/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Help = () => {
  const cipRefs = useRef([]);

  useEffect(() => {
    const elements = cipRefs.current;

    if (elements.length) {
    
      elements.forEach((element) => {
        if (element) {
          element.addEventListener('click', (event) => {
            event.target.placeholder = "";
          });
        }
      });

     
      return () => {
        elements.forEach((element) => {
          if (element) {
            element.removeEventListener('click', (event) => {
              event.target.placeholder = "";
            });
          }
        });
      };
    }
  }, []);

  return (
    <div className="help-full-container">
      <Header />
      <div className="help-container">
        <div className="help-header">
          <h1 id="title">Help desk support</h1>
          <div className="button-section">
            <button className="help-button">
              learn more <IoIosArrowForward />
            </button>
            <button className="help-button">
              <IoIosArrowBack />
              for Enquiry
            </button>
          </div>
        </div>
        <div className="footer">
          <div className="logo-div">
            <img
              src={Logo}
              alt="Mind Mate Logo"
              className="header-logo-help-page"
            />
            <h1 id="logo-name">Mind Mate</h1>
          </div>
          <div className="contacts">
            <div className="cinputs">
              {}
              <input
                className="cip"
                placeholder="NAME"
                ref={(el) => (cipRefs.current[0] = el)}
              />
              <input
                className="cip"
                placeholder="E-MAIL"
                ref={(el) => (cipRefs.current[1] = el)}
              />
              <input
                className="cip"
                placeholder="PHONE"
                ref={(el) => (cipRefs.current[2] = el)}
              />
            </div>
            <div className="more-contacts">
              <textarea
                className="contacts-textarea"
                placeholder="MESSAGE"
                ref={(el) => (cipRefs.current[3] = el)}
              />
              <button id="message-btn">SUBMIT</button>
            </div>
            <div className="quick-links">
              <h2 id="ql">Quick Links</h2>
              {/* <ul className="links">
                <li>Home</li>
                <li>About</li>
                <li>Insight</li>
                <li>Learn</li>
              </ul> */}
              <div className="links">
              <Link to="/" className="header-option1"><p>Home</p></Link>
              <Link to="/AboutMindMate" className="header-option1"><p>About</p></Link>
              <Link to="/InsightMindMateReportInput" className="header-option1"><p>Insight</p></Link>
              <Link to="/MindMateCourseOfferings" className="header-option1"> <p>Learn</p></Link>
              </div>
              <div className="contact-link">
                <h2 className="contact-title">Contact</h2>
                <p>
                  <FaPhoneAlt className="icon" />
                  <span className="content">91+ 8148102652</span>
                </p>
                <p>
                  <MdEmail className="icon" />
                  <span className="content">mitbots01@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Help;
