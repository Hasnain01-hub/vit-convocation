import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import "../css/theme.css";
// import './css/maincons.css';
import "../css/bootstrap.css";
import { logout1 } from "../../Firebase";
function Header() {
  let dispath = useDispatch();
  let history = useHistory();
  const logout = () => {
    logout1();
    dispath({
      type: "LOGOUT_USERS",
      payload: null,
    });
    alert("Successfully Logout");
    history.push("/");
  };

  const { user } = useSelector((state) => ({ ...state }));
  // useEffect(() => {
  //   if (user && user.token) {
  //     history.push("/");
  //   }
  // }, [user, history]);
  return (
    <>
      <header data-testid="header">
        <nav className="navbar navbar-expand-lg navbar-light color navbar-float">
          <div className="container">
            {/* <a href="/" className="navbar-brand">
              ITSA<span className="text-primary"> VIT</span>
            </a> */}
            <Link class="navbar-brand" to="/">
              Convocation<span className="text-primary"> VIT</span>
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarContent">
              <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                <li className="nav-item active">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/class">
                    Class
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                {user && user.email ? (
                  <li className="nav-item">
                    <Link class="nav-link" to="/booked-data">
                      Booked Data
                    </Link>
                  </li>
                ) : (
                  <></>
                )}
                {user && user.email ? (
                  <>
                    {user.role == "admin" ? (
                      <li className="nav-item">
                        <Link class="nav-link" to="/addclass">
                          Add Class
                        </Link>
                      </li>
                    ) : (
                      console.log()
                    )}
                    {user.role == "admin" ? (
                      <li className="nav-item">
                        <Link class="nav-link" to="/contactus-retrive">
                          Contact-Data
                        </Link>
                      </li>
                    ) : (
                      console.log()
                    )}

                    {user.role == "admin" ? (
                      <li className="nav-item">
                        <Link class="nav-link" to="/class-retrive">
                          Class-Data
                        </Link>
                      </li>
                    ) : (
                      console.log()
                    )}
                    {/* {user.role == "admin" ? (
                      <li className="nav-item">
                        <Link class="nav-link" to="/addclass">
                          Add Class
                        </Link>
                      </li>
                    ) : (
                      console.log()
                    )} */}
                  </>
                ) : (
                  console.log()
                )}
              </ul>
              <div className="ml-auto">
                <>
                  {!user ? (
                    <Link to="/login" className="btn btn-outline rounded-pill">
                      Login
                    </Link>
                  ) : (
                    <>
                      <li class="nav-item active dropdown list-unstyled">
                        <li
                          class="nav-link dropdown-toggle btn btn-outline rounded-pill"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {user.email && user.email.split("@")[0]}
                        </li>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          {/* {user.role === 'admin' && <div><Link to="/admin/additems" className="dropdown-item">Dashboard</Link></div>} */}
                          <div>
                            <li class="dropdown-item" onClick={logout}>
                              Logout
                            </li>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                </>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
