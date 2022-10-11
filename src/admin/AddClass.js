import { LoadingOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { React, useState } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import "./addevent.css";
import { db } from "../Firebase";
import { Select } from "antd";
const { Option } = Select;

const initialState = {
  date: "",
  seat: "",
  venue: "",
};
const AddClass = () => {
  const [dropchange, setdropchange] = useState("");
  const [calsses, setcalsses] = useState({});

  const onChange = (value) => {
    setdropchange(value);
  };
  const image = [
    {
      id: 1,
      name: "Computer Engineering",
      image: "../../assets/computer.jpeg",
    },
    {
      id: 2,
      name: "Electronics and Communication Engineering",
      image: "../../assets/electronic.jpg",
    },
    {
      id: 3,
      name: "Information Engineering",
      image: "../../assets/Information.jpg",
    },
  ];

  var id = uuidv4();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var arr = [];

    if (calsses !== "" && values.date !== "" && values.desc !== "") {
      await db
        .collection("class")
        .doc(id)
        .set({
          id: id,
          class: calsses.value,
          dept: calsses.name,
          date: values.date,
          image: dropchange,
          seat: Array.from({ length: values.seat }, (_, i) => i + 1),
          venue: values.venue,
        })
        .then((res) => {
          console.log(res);
          alert(`"${calsses.name}" is added`);
          window.location.reload();
        })
        .catch((err) => {
          // console.log(err);
          // alert("Event added");
          window.location.reload();
          // alert(err.response.data.err);
        });
    } else {
      toast.error("Please fill all the fields");
    }
  };
  const classs = [
    {
      id: 1,
      name: "Computer Engineering",
      value: "comps",
    },
    {
      id: 2,
      name: "Electronics and Communication Engineering",
      value: "ece",
    },
    {
      id: 3,
      name: "Information Engineering",
      value: "it",
    },
  ];
  const onChanges = (values) => {
    classs.map((value) => {
      if (value.id == values) {
        setcalsses(value);
      }
    });
  };
  return (
    <>
      {console.log(calsses)}
      {/* {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Events</h4>)} */}
      <div class="containerevent">
        <div class="cardevent">
          <div class="card-image">
            {/* <Lottie className="eventgif" animationData={backg}  loop={true} /> */}
          </div>
          <form class="card-form">
            <div class="input">
              {/* <input
                type="text"
                name="class"
                onChange={handleChange}
                class="input-field"
                required
              /> */}
              <br />
              <Select
                showSearch
                placeholder="Select a Department"
                onChange={onChanges}
                // onChange={setdropchange(item.image)}
              >
                {classs.map((item) => (
                  <Option value={item.id}>{item.name}</Option>
                ))}
              </Select>
              {/* <label class="input-label">Department</label> */}
            </div>
            <div class="input">
              <input
                type="text"
                name="date"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Date</label>
            </div>
            <div class="input">
              <input
                type="text"
                name="seat"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Seating no</label>
            </div>
            <div class="input">
              {/* <label class="input-label">Seating no</label> */}
              <Select
                showSearch
                placeholder="Select a Image"
                onChange={onChange}
                // onChange={setdropchange(item.image)}
              >
                {image.map((item) => (
                  <Option value={item.id}>{item.name}</Option>
                ))}
              </Select>
            </div>
            <div class="input">
              <input
                type="text"
                name="venue"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Venue</label>
            </div>
            {/* <div class="input"> */}
            {/* <input
                type="file"
                onChange={handleChange}
                name="images"
                class="input-field"
                required
              /> */}

            {/* <label class="input-label">Image</label> */}
            {/* </div> */}
            <div class="action">
              <button onClick={handleSubmit} class="action-button">
                Submit
              </button>
            </div>
          </form>
          {/* <div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		</div> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddClass;
