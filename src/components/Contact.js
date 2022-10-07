import { useSelector } from "react-redux";
import {React,useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './contact.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { db } from "../Firebase";
const initialState = {
  Name: '',
  Contact: '',
  message: '',
};
const Contactus = () => {
  const { user } = useSelector((state) => ({ ...state }));
  var id =uuidv4();
    const [values, setValues] = useState(initialState);
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(user){
        await db.collection("Contact").doc(id).set({
            id : id,
            email:user.email,
            Name: values.Name,
            Contact: values.Contact,
            message: values.message,
        })
          .then((res) => {
            console.log(res);
            window.alert(`"${res.data.brands}" is created`);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            alert("Your message as been recorded")
            window.location.reload();
            // alert(err.response.data.err);
          });
        }else{
            toast.error("Please login to contact us");
        }
      };
  return (
    <>
    <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close1"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          {/* <div class="app-contact">CONTACT</div> */}
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" name="Name" onChange={handleChange} placeholder="NAME" />
            </div>
            {/* <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div> */}
            <div class="app-form-group">
              <input class="app-form-control" name="Contact" maxLength="10" onChange={handleChange}  placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" name="message" onChange={handleChange} placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              {/* <button class="app-form-button">CANCEL</button> */}
              <button class="app-form-button" onClick={handleSubmit}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<ToastContainer />
</div>

    </>
  )
}

export default Contactus
