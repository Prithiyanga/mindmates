import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Doctor from "../Media/doctor.png";
import Parent from "../Media/parent.png";
import Teacher from "../Media/teacher.png";
import "../Styles/Insight.css";
import { FiPlus } from "react-icons/fi";
import { PiFilePdfThin } from "react-icons/pi";
import { MdCancel } from "react-icons/md";

const Insight = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [bg,setBg]=useState(true)


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      console.log(file.name)
    }
    
  };

  return (
    <div>
      <Header />
      <div className="insight-container" style={{backgroundColor:bg?"none ":"white"}}>
        <div className="in-users" id="user-form">
          <div className="user">
            <img src={Teacher} className="user-icon" alt="Teacher" />
            <div className="user-name">Teacher</div>
            <button
              className="login"
              onClick={() => {
                document.getElementById("user-form").style.display = "none";
                document.getElementById("rep-form").style.display = "flex";
                setBg(false)
              }}
            >
              Login
            </button>
          </div>
          <div className="user">
            <img src={Doctor} className="user-icon" alt="Doctor" />
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
            <img src={Parent} className="user-icon" alt="Parent" />
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
        {fileUrl ? <MdCancel  className="cross" onClick={()=>{
          setFileUrl(null)

        }}/> : " "}
          <div className="dwnld">
          
          <PiFilePdfThin className="tbfile"/>
          <a href="/Template.pdf" className="anchor"  download="Template.pdf">
            <button id="pdf">Download Template</button>
          </a>
          </div>
          <div className="add">
           
            {fileUrl ? (
             
             <> <iframe
             src={fileUrl}
             title="Selected File"
             className="file-preview"
             style={{ width: "100%", height: "500px", border: "none" }}
           ></iframe></>
              

            ) : (
              <label className="add" htmlFor="addid">
                <input type="file" id="addid" onChange={handleFileChange} 
                  
                />
                <FiPlus className="addfi" />
              </label>
            )}
          </div>
          <p className="h2">UPLOAD <br></br>REPORT</p>

          <button
            className="submit"
            onClick={() => {
              localStorage.setItem("reported", "true");
              
              if(fileUrl){    



                alert("Your file has been successfully uploaded. We appreciate your submission");
                document.getElementById("learn-direct").click();
              }
              else{
                alert("Please upload a file before submitting the form");
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
      
      
      <Link to="/MindMateCourseOfferings" id="learn-direct"></Link>
    </div>
  );
};

export default Insight;
