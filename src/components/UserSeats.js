import { EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import "../admin/table.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase";

const UserSeats = () => {
  const [services, setServices] = useState([]);
  
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(async () => {
    if (user && user.email) {
      await db
        .collection("user-class")
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach((element) => {
            data = element.data();
            if (data.email == user.email) {
              setServices((arr) => [...arr, data]);
            }
            
          });
        });
    }
  }, [user]);

  var data;

  
  //   const loadAllServices = async () => {
  //
  //   };

  //   //   data.map((item) => {

  //   //   });
  return (
    <>
      {console.log(data)}
      {services.length == 0 ? (
        <center>
          <h2>No data present</h2>
        </center>
      ) : (
        <div className="col-md-10">
          <div class="container3">
            <h2>Convocations Seats</h2>
            <ul class="responsive-table">
              <li class="table-header">
                <div class="col col1">Name</div>
                <div class="col col2" style={{ paddingRight: "16vw" }}>
                  Gmail
                </div>
                <div class="col col3" style={{ paddingRight: "6vw" }}>
                  Venue
                </div>
                <div class="col col4" style={{ paddingRight: "6vw" }}>
                  Seat-NO
                </div>
                <div class="col col5">Dept</div>
                <div class="col col5">ROll</div>
              </li>
              {services.map((s) => (
                <>
                  <li class="table-row">
                    <div class="col col1" data-label="Name">
                      {s.name}
                    </div>
                    <div
                      class="col col3 "
                      data-label="Gmail"
                      style={{ paddingRight: "16vw" }}
                    >
                      {s.email}
                    </div>
                    <div class="col col7" data-label="Venue">
                      {s.venue}
                    </div>
                    <div class="col col9" data-label="Seat">
                      {s.seat}
                    </div>
                    <div class="col col9" data-label="Department">
                      {s.event}
                    </div>
                    <div
                      class="col col9"
                      data-label="Roll-NO"
                      style={{ paddingRight: "5vw" }}
                    >
                      {s.roll}
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserSeats;
