import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./class.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../../Firebase";
import img1 from "../../assets/computer.jpeg";
import img2 from "../../assets/electronic.jpg";
import img3 from "../../assets/Information.jpg";
AOS.init();
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    background: "none",
    bottom: "auto",
    border: "none",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Classdata = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const { user } = useSelector((state) => ({ ...state }));

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }
  var imageName = require("../../assets/Information.jpg");
  function closeModal() {
    setIsOpen(false);
  }
  var id = uuidv4();
  const [loading, setLoading] = useState(false);
  const [seat, setseat] = useState("");
  const [event, setevent] = useState("");
  const [Data, setData] = useState([]);
  useEffect(() => {
    loadAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const realimage = [
    {
      id: 1,
      path:"../../assets/computer.jpeg",
      img: img1,
    },
    {
      id: 2,
      path:"../../assets/electronic.jpg",
      img: img2,
    },
    {
      id: 3,
      path:"../../assets/Information.jpg",
      img: img3,
    },
  ];
  const submit = async (e) => {
    e.preventDefault();
    if (user != null) {
      if (!Data.seat.includes(seat)) {
        await db
          .collection("user-class")
          .doc(id)
          .set({
            id: id,
            event: event,
            name: user.name,
            email: user.email,
            seat: seat,
            // venue: values.venue,
          })
          .then((res) => {
            console.log(res);
            alert(`${event} is register`);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            // alert("Event added");
            window.location.reload();
            // alert(err.response.data.err);
          });
      } else {
        toast.error("Please Enter Valid Phone Number");
      }
    } else {
      toast.error("Please Login to register in event");
      // alert("Please Login to register in event");
    }
    console.log(user);
  };

  const loadAllServices = async () => {
    setLoading(true);
    // getServices("price", "desc", page)
    const items = await db
      .collection("class")
      // .where('uid', '==', user.email)
      // .doc()
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setData((arr) => [...arr, data]);
        });
        setLoading(false);
      });
  };
  const handleremove = async (id) => {
    if (window.confirm("Are you sure want to delete this item?")) {
      try {
        await db
          .collection("class")
          // .where('uid', '==', user.email)
          .doc(id)
          .delete()
          .catch((error) => {
            console.log(error);
          });
        window.location.reload();
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    }
  };
  return (
    <>
      {console.log(Data)}
      {Data.length == 0 ? <center><h2>No data present</h2></center>:
      <div className="container box">
      
        {Data.map((item) => (
          <div data-aos="zoom-in" className="product-box">
            <div className="product">
              <span className="product__price">{item.seat.length}</span>
              <img
                className="product__image"
                src={realimage[item.image - 1].img}
                alt="Images"
              />
              <h1 className="product__title">Book Seat</h1>
              <hr />
              <p>
                <strong>Department: </strong>
                {item.class}
              </p>
              <p>
                <strong>venue:</strong> {item.venue}
              </p>

              <a
                onClick={() => {
                  openModal(item.event);
                  setevent(item.event);
                }}
                style={{ cursor: "pointer" }}
                className="product__bttn btn1"
              >
                Register
              </a>
              {user && user.role === "admin" && (
                <Button
                  onClick={() => {
                    handleremove(item.id);
                  }}
                  type="danger"
                  className="mb-3  custumbt"
                  block
                  shape="round"
                  icon={<DeleteOutlined />}
                  size="small"
                ></Button>
              )}
            </div>
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Register"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <div className="modalcard">
            <button
              className="close"
              style={{ outline: "none", border: "none", textAlign: "right" }}
              onClick={closeModal}
            >
              X
            </button>
            {/* <div>Enter Your</div> */}
            <br />
            <form>
              <input
                className="mobileinput"
                type="text"
                placeholder="Enter Seat No"
                onChange={(e) => setseat(e.target.value)}
                // pattern="[6789][0-9]{9}"
                id="seat"
                list="seat"
              />
              {Data.map((item) => (
                <datalist id="seat">
                  <option value={item.seat} />
                </datalist>
              ))}
              <br />
              <input
                type="submit"
                onClick={submit}
                value="Register"
                className="sub"
              />
            </form>
          </div>
        </Modal>
        <ToastContainer />
      </div>}
    </>
  );
};

export default Classdata;