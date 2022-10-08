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
            Fugiat et fugiat reprehenderit enim. Id nostrud in sint esse. Ex
            deserunt ad fugiat amet eu aliqua anim eu Lorem consequat
            consectetur veniam sunt ipsum.Anim commodo voluptate exercitation
            eiusmod ad pariatur. Labore non velit voluptate pariatur aliquip
            laboris qui nisi qui ex mollit nostrud tempor. Nostrud tempor magna
            excepteur adipisicing Lorem aliqua. Commodo pariatur culpa labore
            enim occaecat minim veniam irure sint aliquip excepteur mollit sint
            et.
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
