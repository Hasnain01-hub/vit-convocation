import "react-toastify/dist/ReactToastify.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase.js";
import "./login.css";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const eye = <FontAwesomeIcon icon={faEye} />;
function CompleteSignup() {
  const [email, setEmail] = useState({});
  //   const [roll, setroll] = useState("");
  //   const [department, setdepartment] = useState("");
  const [password, setpassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  let history = useHistory();
  //   useEffect(() => {
  //     let intended = history.location.state;
  //     if (intended) {
  //       return;
  //     } else {
  //       if (user && user.token) {
  //         history.push("/");
  //       }
  //     }
  //   }, [user, history]);
  useEffect(() => {
    setEmail(JSON.parse(window.localStorage.getItem("emailForRegistration")));
  }, []);

  let dispatch = useDispatch();
  const registerWithEmailAndPassword = async (e) => {
    e.preventDefault();
    
    if (!email.email || !password) {
      toast.error("Password is required");
      return;
    }
    try {
      // const result = await auth.isSignInWithEmailLink(
      //   email.email,
      //   window.location.href
      // );
      const result = await auth.signInWithEmailLink(email.email, window.location.href);
      if (result.user.emailVerified) {
        //   const res = await auth.signInWithEmailLink(email, window.location.href);
        let user = auth.currentUser;
        console.log(user);

        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // auth.signInWithEmailLink(email.email, window.location.href);
        // var separatedString;
        await db
          .collection("users")
          .doc(email.email)
          .set({
            name: email.email.split("@")[0],
            role: "user",
            id:idTokenResult.token,
            department: email.department,
            roll: email.roll,
            // token: idTokenResult.token,
            email: email.email,
          })
          .then(async () => {
            dispatch({
              type: "LOGGED_USERS",
              payload: {
                name: email.email.split("@")[0],
                roll: email.roll,
                department: email.department,
                email: email.email,
                role: "user",
                // token: idTokenResult.token,
                // id: user.email,
                // id: res.data.id,
              },
            });
            console.log("hello", email);
            window.localStorage.removeItem("emailForRegistration");
            alert("successfully Register");
            history.push("/");
          })
          .catch();
        // history.push("/");
      }
    } catch (err) {
      console.error(err);
      alert("Register Failed");
    }
    //   }
    //   else{
    //     toast.error("Please a valid use VIT email");
    //   }
  };
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
              <span className="register">Register</span>
              <div class="underline-title1"></div>
            </div>
            <form class="form">
              <label for="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Email
              </label>
              <input
                id="user-email"
                class="form-content"
                type="email"
                name="email"
                value={email.email}
                disabled
              />
              <div class="form-border"></div>
              <label for="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Roll No
              </label>
              <input
                id="user-email"
                class="form-content"
                type="text"
                disabled
                name="roll"
                value={email.roll}
              />
              <div class="form-border"></div>
              <label for="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Department
              </label>
              <input
                id="user-email"
                class="form-content"
                type="text"
                name="department"
                value={email.department}
                disabled
              />
              <div class="form-border"></div>
              <div class="form-border"></div>
              <label for="user-email1" style={{ paddingTop: "13px" }}>
                &nbsp;Password
              </label>
              <div className="flex">
                <input
                  id="user-email1"
                  class="form-content"
                  name="email"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type={passwordShown ? "text" : "password"}
                />
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

              <div class="form-border"></div>
              <Button
                id="submit-btn"
                onClick={registerWithEmailAndPassword}
                type="primary"
                className="mb-3"
                block
                shape="round"
                icon={<SendOutlined />}
                // disabled={!email || password.length < 6}
                size="large"
              >
                &nbsp;Register
              </Button>
              <div>
                <span className="sig">Do you have an account? </span> &nbsp;
                <Link to="/login" id="signup">
                  Login
                </Link>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </motion.div>
    </>
  );
}

export default CompleteSignup;
