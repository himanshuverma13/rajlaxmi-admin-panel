import React from 'react'

const Sidebar = () => {
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
          {/* ============================= */}
          {/* UI Componenst */}
          {/* ============================= */}
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-5" />
            <span className="hide-menu">UI Componenst</span>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link sidebar-link primary-hover-bg"
              href="ui-buttons.html"
              aria-expanded="false"
            >
              <span className="aside-icon p-2 bg-light-primary rounded-1">
                <i className="ti ti-article fs-7" />
              </span>
              <span className="hide-menu ps-1">Buttons</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link sidebar-link primary-hover-bg"
              href="ui-alerts.html"
              aria-expanded="false"
            >
              <span className="aside-icon p-2 bg-light-primary rounded-1">
                <i className="ti ti-alert-circle fs-7" />
              </span>
              <span className="hide-menu ps-1">Orders</span>
            </a>
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