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
  class: "",
  date: "",
  seat: "",
  venue: "",
};
const AddClass = () => {
  const [dropchange, setdropchange] = useState("");
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
  const [loading, setLoading] = useState(false);
  var id = uuidv4();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var arr = [];

    if (values.class !== "" && values.date !== "" && values.desc !== "") {
      await db
        .collection("class")
        .doc(id)
        .set({
          id: id,
          class: values.class,
          date: values.date,
          image: dropchange,
          seat: Array.from({ length: values.seat }, (_, i) => i + 1),
          venue: values.venue,
        })
        .then((res) => {
          console.log(res);
          alert(`"${values.class}" is added`);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          // alert("Event added");
          window.location.reload();
          // alert(err.response.data.err);
        });
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <>
      {/* {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Events</h4>)} */}
      <div class="containerevent">
        <div class="cardevent">
          <div class="card-image">
            {/* <Lottie className="eventgif" animationData={backg}  loop={true} /> */}
          </div>
          <form class="card-form" onSubmit={handleSubmit}>
            <div class="input">
              <input
                type="text"
                name="class"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Department</label>
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
              <button class="action-button">Submit</button>
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
