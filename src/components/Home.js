import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Convocation from "../assets/convocation.mp4";
import "../components/css/bootstrap.css";
import '../components/css/footer.css';
import Images from "./Images";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="page-banner home-banner">
          <div className="row align-items-center flex-wrap-reverse h-100">
            <div className="col-md-6 py-5 wow fadeInLeft">
              <h1 className="mb-4">
                Vit Convocation
              </h1>
              <p className="text-lg text-grey mb-5">
                Hygiene is our theme, feel exquisite daily. <br />
                Made by us, made for you..!!
              </p>
              <a href="/products" className="btn btn-primary btn-split">
                Watch Videos{" "}
                <div className="fab">
                  <span className="fas fa-arrow-right"></span>
                </div>
              </a>
            </div>
            <div className="col-md-6  wow zoomIn">
              <div className="img-fluid text-center">
                {/* <Lottie options={defaultOptions}
              height={400}
              width={300}
              /> */}
                <video
                  loop
                  muted
                  className="video"
                  autoPlay
                  src={Convocation}
                  type="video/mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Images/>
    </>
  );
};

export default Home;
