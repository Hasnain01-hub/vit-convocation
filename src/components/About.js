import React from "react";
import Lottie from "lottie-react";
import about from ".././assets/about.json";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="head">
        <div className="abtext">
          <p>
          Vidyalankar Institute of Technology is an Engineering & Management Institute approved by AICTE, New Delhi and Government of Maharashtra. The Institute is affiliated to University of Mumbai. Vidyalankar Institute of Technology was started in the year 1999 after having secured permission from the AICTE and University of Mumbai. It secured an A grade rating from the Mumbai University in 2005. Vidyalankar Institute of Technology (VIT) is a premier engineering degree college approved by the All India Council For Technical Education (AICTE) and affiliated to University of Mumbai, India.[3] It has been accredited by National assessment and accreditation with A+ grade in 2019.

          </p>
        </div>
        <div>
          <Lottie className="aboutimage" animationData={about} loop={true} />
        </div>
      </div>
    </>
  );
};

export default About;
