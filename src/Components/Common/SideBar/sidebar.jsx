import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Collapse } from "react-bootstrap";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control collapse

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle the collapse state
  };
  return (
    <aside className="left-sidebar">
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <a href="index.html" className="text-nowrap logo-img ms-0 ms-md-1">
          <img
            src="https://demos.wrappixel.com/free-admin-templates/bootstrap/spike-bootstrap-free/src/assets/images/logos/dark-logo.svg"
            width={180}
            alt=""
          />
        </a>
        <div
          className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
        >
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar" data-simplebar="">
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
            <NavLink to={"/"}>
              <li className="sidebar-item">
                <a
                  className="sidebar-link sidebar-link primary-hover-bg"
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
            {/* UI Componenst */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-5" />
              <span className="hide-menu">UI Componenst</span>
            </li>
            <NavLink to={"/product"}>
              <li className="sidebar-item">
                <a
                  className="sidebar-link sidebar-link primary-hover-bg "
                  href="#"
                  onClick={toggleCollapse} // Handle toggle click
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-chart-line fs-7" />
                  </span>
                  <span className="hide-menu ps-1">Product</span>
                </a>
                <Collapse in={isOpen}>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <NavLink to={"/productdetails"} className="sidebar-link">
                        <span className="sidebar-icon mx-3">1</span>
                        <span className="hide-menu">Details</span>
                      </NavLink>
                    </li>
                    <NavLink to={"/productedit"} className="sidebar-link">
                      <li className="sidebar-item">
                        <span className="sidebar-icon mx-3">2</span>
                        <span className="hide-menu">Edit</span>
                      </li>
                    </NavLink>
                    <NavLink to={""} className="sidebar-link">
                      <li className="sidebar-item">
                        <span className="sidebar-icon mx-3">3</span>
                        <span className="hide-menu">Create</span>
                      </li>
                    </NavLink>
                  </ul>
                </Collapse>
              </li>
            </NavLink>
            <NavLink to={"/order"}  >
              <li className="sidebar-item">
                <a
                  className="sidebar-link sidebar-link primary-hover-bg"
                  href="#"
                  // aria-expanded="false"
                  onClick={toggleCollapse} // Handle toggle click
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-alert-circle fs-7" />
                  </span>
                  <span className="hide-menu ps-1">Orders</span>
                </a>
                <Collapse in={isOpen}>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="../main/eco-shop.html" className="sidebar-link">
                        <span className="sidebar-icon mx-3">1</span>

                        <span className="hide-menu">Shop One</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="../main/eco-shop2.html" className="sidebar-link">
                        <span className="sidebar-icon mx-3">2</span>
                        <span className="hide-menu">Shop Two</span>
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </NavLink>

            <NavLink to={"/userinfo"}>
              <li className="sidebar-item">
                <a
                  className="sidebar-link sidebar-link primary-hover-bg"
                  href="ui-card.html"
                  aria-expanded="false"
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-cards fs-7" />
                  </span>
                  <span className="hide-menu ps-1">User Info</span>
                </a>
              </li>
            </NavLink>

            <NavLink to={"/contactinfo"}>
              <li className="sidebar-item">
                <a
                  className="sidebar-link sidebar-link primary-hover-bg"
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
            
            {/* ============================= */}
            {/* Auth */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-5" />
              <span className="hide-menu">Auth</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link primary-hover-bg"
                href="authentication-login.html"
                aria-expanded="false"
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="ti ti-login fs-7" />
                </span>
                <span className="hide-menu ps-1">Login</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link primary-hover-bg"
                href="authentication-register.html"
                aria-expanded="false"
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="ti ti-user-plus fs-7" />
                </span>
                <span className="hide-menu ps-1">Register</span>
              </a>
            </li>
           
         
          
          
            {/* ============================= */}
            {/* Upgrade to Pro */}
            {/* ============================= */}
            <li className="sidebar-item my-4">
              <a
                href="https://www.wrappixel.com/templates/spike-bootstrap-admin-dashboard/?ref=33"
                target="_blank"
                className="btn btn-primary d-block"
              >
                Upgrade to Pro
              </a>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  )
}

export default Sidebar