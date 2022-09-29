import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Page from "../assets/pagenot.json";

import "./errorpage.css";
import { Link,  useHistory } from "react-router-dom";
const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory()

  useEffect(() => {
      const interval = setInterval(() => {
          setCount((currentCount) => --currentCount);
      }, 1000);
      //redirect when count is equal to 0
      count === 0 && history.push("/");
      //clean
      return () => clearInterval(interval);
  }, [count, history])
  return (
      <div className="container p-5 text-center topsp">
          <p>Redirecting you in {count} seconds</p>
          <Lottie className="errorpage" animationData={Page}  loop={true} />
      </div>
  );
};

export default LoadingToRedirect;
