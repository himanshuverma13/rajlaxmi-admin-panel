import React, { useContext } from "react";
import profile from "../../Assets/images/profile/user1.jpg";
import { UserContext } from "../UseContext/usecontext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { toggleSidebar ,setUserLogin} = useContext(UserContext);
  const navigation = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setUserLogin('')
    navigation("/login")
  }
  return (
    <>
      {/*  Header Start */}
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a
                className="nav-link sidebartoggler nav-icon-hover"
                id="headerCollapse"
                onClick={toggleSidebar}
              >
                <i className="ti ti-menu-2" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-icon-hover">
                <i className="ti ti-bell-ringing" />
                <div className="notification bg-primary rounded-circle" />
              </a>
            </li>
          </ul>
          <div
            className="navbar-collapse justify-content-end px-0"
            id="navbarNav"
          >
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon-hover"
                  href="javascript:void(0)"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profile}
                    alt=""
                    width={35}
                    height={35}
                    className="rounded-circle"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                >
                  <div className="message-body">
                    <div class="d-flex align-items-center justify-content-center my-1">
                      <img
                        src="/static/media/user2.89a20cd1bd153acdf06c.jpg"
                        alt="avatar"
                        class="rounded-circle"
                        width="35"
                      />
                      <div class="ms-3">
                        <div class="user-meta-info">
                          <h6 class="user-name mb-0">Emma Adams</h6>
                          <span class="user-work fs-3">Web Developer</span>
                        </div>
                      </div>
                    </div>
                    <hr className=" mb-1" />
                    <span className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-list-check fs-6" />
                      <p className="mb-0 fs-3">Edit Profile</p>
                    </span>
                    <span className="btn btn-outline-primary mx-3 mt-2 d-block shadow-none" onClick={()=>handleLogout()}>
                      Logout
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*  Header End */}
    </>
  );
};

export default Navbar;
