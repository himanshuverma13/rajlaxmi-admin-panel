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
                  className="sidebar-link sidebar-link primary-hover-bg"
                  href="ui-buttons.html"
                  aria-expanded="false"
                >
                  <span className="aside-icon p-2 bg-light-primary rounded-1">
                    <i className="ti ti-article fs-7" />
                  </span>
                  <span className="hide-menu ps-1">Products</span>
                </a>
              </li>

            </NavLink>
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
                    <NavLink to="/order" className="sidebar-link">
                      <span className="sidebar-icon mx-3">1</span>
                      
                      <span className="hide-menu">Shop One</span>
                    </NavLink>
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
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow success-hover-bg"
                href="#"
                onClick={toggleCollapse} // Handle toggle click
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="aside-icon p-2 bg-success-subtle rounded-1">
                  <iconify-icon
                    icon="solar:smart-speaker-minimalistic-line-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu ps-1">Ecommerce</span>
              </a>
              <Collapse in={isOpen}>
                <ul className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="../main/eco-shop.html" className="sidebar-link">
                      <span className="sidebar-icon"></span>
                      <span className="hide-menu">Shop One</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/eco-shop2.html" className="sidebar-link">
                      <span className="sidebar-icon"></span>
                      <span className="hide-menu">Shop Two</span>
                    </a>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link primary-hover-bg"
                href="ui-card.html"
                aria-expanded="false"
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="ti ti-cards fs-7" />
                </span>
                <span className="hide-menu ps-1">Card</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link has-arrow success-hover-bg" href="" aria-expanded="false">
                <span class="aside-icon p-2 bg-success-subtle rounded-1">
                  <iconify-icon icon="solar:smart-speaker-minimalistic-line-duotone" class="fs-6"></iconify-icon>
                </span>
                <span class="hide-menu ps-1">Ecommerce</span>
              </a>
              <ul aria-expanded="false" class="collapse first-level">
                <li class="sidebar-item">
                  <a href="../main/eco-shop.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">Shop One</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a href="../main/eco-shop2.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">Shop Two</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a href="../main/eco-shop-detail.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">Details One</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a href="../main/eco-shop-detail2.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">Details Two</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a href="../main/eco-product-list.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">List</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a href="../main/eco-checkout.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">Checkout</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a href="../main/eco-add-product.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">Add Product</span>
                  </a>
                </li>
                <li class="sidebar-item">
                  <a href="../main/eco-edit-product.html" class="sidebar-link">
                    <span class="sidebar-icon"></span>
                    <span class="hide-menu">Edit Product</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link primary-hover-bg"
                href="ui-forms.html"
                aria-expanded="false"
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="ti ti-file-description fs-7" />
                </span>
                <span className="hide-menu ps-1">Forms</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link primary-hover-bg"
                href="ui-typography.html"
                aria-expanded="false"
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="ti ti-typography fs-7" />
                </span>
                <span className="hide-menu ps-1">Typography</span>
              </a>
            </li>
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
            {/* Extra */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-5" />
              <span className="hide-menu">Extra</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link primary-hover-bg"
                href="icon-tabler.html"
                aria-expanded="false"
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="ti ti-login fs-7" />
                </span>
                <span className="hide-menu ps-1">Icons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link primary-hover-bg"
                href="sample-page.html"
                aria-expanded="false"
              >
                <span className="aside-icon p-2 bg-light-primary rounded-1">
                  <i className="ti ti-user-plus fs-7" />
                </span>
                <span className="hide-menu ps-1">Simple Page</span>
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