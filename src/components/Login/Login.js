import { motion } from "framer-motion";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase/compat/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { auth, db } from "../../Firebase.js";
const eye = <FontAwesomeIcon icon={faEye} />;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  var separatedString;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (user && user.email) {
        history.push("/");
      }
    }
  }, [user, history]);
  let dispatch = useDispatch();
  
  

  
  const signInWithEmailAndPassword = async () => {
    try {
      await db
        .collection("users")
        // .where('uid', '==', user.email)
        .doc(email)
        .get()
        .then((snapshot) => {
          if (snapshot && snapshot.exists) {
            separatedString = snapshot.data();
            //use separatedString
          }
        })
        .catch((error) => {
          console.log(error);
        });
      var obj = JSON.stringify(separatedString.role);
      var roll= JSON.stringify(separatedString.roll);
      var department = JSON.stringify(separatedString.department);
      
      
      await auth.signInWithEmailAndPassword(email, password).then((res) => {
        dispatch({
          type: "LOGGED_IN_USERS",
          payload: {
            name: email.split("@")[0],
            email: email,
            roll:roll,
            department:department,
            // token: idTokenResult.token,
            role: obj,
            id: email,
          },
        });
      });
      alert("successfully login");
      history.push("/");
    } catch (error) {
      console.log(error);
      console.log("obj us hee", separatedString);
    }
  };

  const LoginForm = () => (
    
    <form onSubmit={signInWithEmailAndPassword} class="form">
      <label for="user-email" style={{ paddingTop: "13px" }}>
        &nbsp;Email
      </label>
      <input
        id="user-email"
        class="form-content"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <div class="form-border"></div>
      <label for="user-password" style={{ paddingTop: "22px" }}>
        &nbsp;Password
      </label>
      <div className="flex">
        <input
          id="user-password"
          class="form-content"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={passwordShown ? "text" : "password"}
        />{" "}
        <i
          style={{
            marginLeft: "auto",
          }}
          onClick={togglePasswordVisiblity}
        >
          {" "}
          {eye}
        </i>
      </div>
      <div class="form-border"></div>
      {/* <Link to="/forgot/password" id="signup" >
  
          <legend id="forgot-pass">Forgot password?</legend>
        </Link> */}
      <Button
        id="submit-btn"
        onClick={signInWithEmailAndPassword}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
      >
        &nbsp;Login
      </Button>
      <div>
        <span className="sig">Don't have an account? </span> &nbsp;
        <Link to="/signup" id="signup">
          Register
        </Link>
      </div>
    </form>
  );
  return (
    <>
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h3>Login</h3>
              <div class="underline-title"></div>
            </div>
            {LoginForm()}
            
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Login;
