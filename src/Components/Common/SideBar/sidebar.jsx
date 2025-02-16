import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { UserContext } from "../UseContext/usecontext";

import Logo from "../../Assets/images/logos/RAJLAXMI JAVIK PNG.png";

const Sidebar = () => {
    const { setUserLogin} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false); // State to control collapse

  const params = useLocation();
  const navigation = useNavigate();

  const { toggleSidebar, isSidebarOpen, setIsSidebarOpen } = useContext(UserContext);

  const toggleCollapse = () => {
    // setIsSidebarOpen()
    // setIsSidebarOpen(!isSidebarOpen); // Toggle the collapse state
  };

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("UserNameEmail");
    setUserLogin('')
    navigation("/login");
  };
  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      toggleSidebar() // Close sidebar on small screens
    }
  };

  return (
    <aside className={`left-sidebar vh-100  position-fixed ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-end justify-content-center logo-img ms-0 ms-md-1">
          <NavLink to={"/"} onClick={handleNavClick}>
            <img
              src={Logo}
              // width={180}
              alt="Logo"
            />
          </NavLink>
          <h4 className="ms-3 fw-bold text-uppercase text-success">RajLaxmi</h4>
        </div>

        <div
          className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
        >
          <i className="ti ti-x fs-8" onClick={toggleSidebar} />
        </div>
      </div>
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar overflow-scroll" data-simplebar="">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="mb-0">
            {/* ============================= */}
            {/* Home */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-5" />
              <span className="hide-menu">Home</span>
            </li>
            <NavLink to={"/"} onClick={handleNavClick}>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link sidebar-link primary-hover-bg ${
                    params?.pathname == "/"
                      ? "primary-hover-bg-sidebar-active"
                      : ""
                  }`}
                  href="index.html"
                  aria-expanded="false"
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-layout-dashboard fs-7" />
                  </span>
                  <span className="hide-menu ps-1">Dashboard</span>
                </a>
              </li>
            </NavLink>
            {/* ============================= */}
            {/* Pages*/}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-5" />
              <span className="hide-menu">Pages</span>
            </li>

            <li className="sidebar-item">
              <div className="accordion" id="productAccordion">
                <div className=" border-0">
                  <a
                    className={`sidebar-link sidebar-link primary-hover-bg ${
                      params?.pathname == "/product" ||
                      params?.pathname == "/productdetails" ||
                      params?.pathname == "/productedit" ||
                      params?.pathname == "/productcreate"
                        ? "primary-hover-bg-sidebar-active"
                        : "collapsed"
                    }`}
                    // type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseProduct"
                    aria-expanded={
                      params?.pathname == "/product" ||
                      params?.pathname == "/productdetails" ||
                      params?.pathname == "/productedit" ||
                      params?.pathname == "/productcreate"
                        ? "true"
                        : "false"
                    }
                    aria-controls="collapseProduct"
                  >
                    <span className="aside-icon p-2 bg-light-primary rounded-1">
                      <i className="ti ti-chart-line fs-7" />
                    </span>
                    <span className="hide-menu ps-1">Product</span>
                  </a>
                  <div
                    id="collapseProduct"
                    className={`accordion-collapse collapse ${
                      params?.pathname == "/product" ||
                      params?.pathname == "/productdetails" ||
                      params?.pathname == "/productedit" ||
                      params?.pathname == "/productcreate"
                        ? "show"
                        : ""
                    }`}
                    aria-labelledby="headingProduct"
                    data-bs-parent="#productAccordion"
                  >
                    <div className="accordion-body p-0 ">
                      <ul className="list-unstyled tree-menu ms-2">
                        <NavLink to={"/product"} onClick={handleNavClick} className="sidebar-link">
                          <li className="sidebar-item">
                            {/* <span className="sidebar-icon mx-3">1</span> */}
                            <span className="hide-menu">List</span>
                          </li>
                        </NavLink>
                        <NavLink
                          to={"/productdetails"} onClick={handleNavClick}
                          className="sidebar-link"
                        >
                          <li className="sidebar-item">
                            {/* <span className="sidebar-icon mx-3">2</span> */}
                            <span className="hide-menu">Details</span>
                          </li>
                        </NavLink>
                        <NavLink onClick={handleNavClick} to={"/productedit"} className="sidebar-link">
                          <li className="sidebar-item">
                            {/* <span className="sidebar-icon mx-3">3</span> */}
                            <span className="hide-menu">Edit</span>
                          </li>
                        </NavLink>
                        <NavLink onClick={handleNavClick} to={"/productcreate"} className="sidebar-link">
                          <li className="sidebar-item">
                            {/* <span className="sidebar-icon mx-3">4</span> */}
                            <span className="hide-menu">Create</span>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <NavLink to={"/order"} onClick={handleNavClick}>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link sidebar-link primary-hover-bg ${
                    params?.pathname == "/order"
                      ? "primary-hover-bg-sidebar-active" 
                      : ""
                  }`} 
                  href="#"
                 
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-alert-circle fs-7" />
                  </span>
                  <span className="hide-menu ps-1">Orders</span>
                </a>

              </li>
            </NavLink>

            <NavLink onClick={handleNavClick} to={"/userinfo"}>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link sidebar-link primary-hover-bg ${
                    params?.pathname == "/userinfo"
                      ? "primary-hover-bg-sidebar-active"
                      : ""
                  }`}
                  aria-expanded="false"
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-cards fs-7" />
                  </span>
                  <span className="hide-menu ps-1">User Info</span>
                </a>
              </li>
            </NavLink>

            <NavLink onClick={handleNavClick} to={"/feedback"}>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link sidebar-link primary-hover-bg ${
                    params?.pathname == "/feedback"
                      ? "primary-hover-bg-sidebar-active"
                      : ""
                  }`}
                  aria-expanded="false"
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-cards fs-7" />
                  </span>
                  <span className="hide-menu ps-1">Feedback</span>
                </a>
              </li>
            </NavLink>

            <NavLink onClick={handleNavClick} to={"/contactinfo"}>
              <li className="sidebar-item">
                <a
                  className={`sidebar-link sidebar-link primary-hover-bg ${
                    params?.pathname == "/contactinfo"
                      ? "primary-hover-bg-sidebar-active"
                      : ""
                  }`}
                  href="ui-forms.html"
                  aria-expanded="false"
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-file-description fs-7" />
                  </span>
                  <span className="hide-menu ps-1">Contact Info</span>
                </a>
              </li>
            </NavLink>

            <li className="sidebar-item mt-4 mb-5">
              <span
                onClick={()=>handleLogout()}
                className="btn btn-primary d-block"
              >
                Logout
              </span>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
};

export default Sidebar;
