import "react-toastify/dist/ReactToastify.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase.js";
import "./login.css";
import { Button, Select } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const { Option } = Select;
const eye = <FontAwesomeIcon icon={faEye} />;
function Signup() {
  const [email, setEmail] = useState("");
  const [roll, setroll] = useState("");
  
  const [password, setpassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  let history = useHistory();
  const [dropchange, setdropchange] = useState("");
  
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

  // let dispatch = useDispatch();
  const registerWithEmailAndPassword = async () => {
    
    // if(email.includes("@vit.edu.in")){
    const data = {
      email: email,
      roll: roll,
      department: dropchange,
    };
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    // .then((succ)=>{
    // console.log(succ);
    toast.success(
      `Email is sent to ${email} Click the link to complete your Registration, also check Junk folder`
    );
    window.localStorage.setItem("emailForRegistration", JSON.stringify(data));
    setEmail("");
    setdropchange("");
    setroll("");
    window.location.reload();
  // }else{
  //   toast.error("Please enter a valid VIT email");
  // }
  };
  const image = [
    {
      id: 1,
      name: "Computer Engineering",
      value:"comps",
      
    },
    {
      id: 2,
      name: "Electronics and Communication Engineering",
      value:"ece",
      
    },
    {
      id: 3,
      name: "Information Engineering",
      value:"it",
      
    },
  ];
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div class="form-border"></div>
              <label for="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Roll No
              </label>
              <input
                id="user-email"
                class="form-content"
                type="text"
                name="roll"
                value={roll}
                onChange={(e) => setroll(e.target.value)}
              />
              <div class="form-border"></div>
              {/* <label for="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Department
              </label> */}
              {/* <input
                id="user-email"
                class="form-content"
                type="text"
                name="department"
                value={department}
                onChange={(e) => setdepartment(e.target.value)}
              /> */}
              <br/>
              <Select
                showSearch
                placeholder="Select a Department"
                onChange={(value)=>setdropchange(value)}
                // onChange={setdropchange(item.image)}
              >
                {image.map((item) => (
                  <Option value={item.value}>{item.name}</Option>
                ))}
              </Select>
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

export default Signup;
