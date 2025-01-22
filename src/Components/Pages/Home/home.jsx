import React from 'react'
import Sidebar from '../../Common/SideBar/sidebar'
import BarChart from '../../Common/Charts/bargraph'
import DonutChart from '../../Common/Charts/DonutChart'

const Home = () => {
  return (
    <div
    className="page-wrapper"
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin6"
    data-sidebartype="full"
    data-sidebar-position="fixed"
    data-header-position="fixed"
  >
    {/* Sidebar Start */}
<Sidebar/>
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div className="container-fluid">
        {/*  Header Start */}
        <header className="app-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item d-block d-xl-none">
                <a
                  className="nav-link sidebartoggler nav-icon-hover"
                  id="headerCollapse"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-icon-hover"
                  href="javascript:void(0)"
                >
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
                <a
                  href="https://www.wrappixel.com/templates/spike-bootstrap-admin-dashboard/?ref=33"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Upgrade to Pro
                </a>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-icon-hover"
                    href="javascript:void(0)"
                    id="drop2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/profile/user1.jpg"
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
                      <a
                        href="javascript:void(0)"
                        className="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i className="ti ti-user fs-6" />
                        <p className="mb-0 fs-3">My Profile</p>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i className="ti ti-mail fs-6" />
                        <p className="mb-0 fs-3">My Account</p>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i className="ti ti-list-check fs-6" />
                        <p className="mb-0 fs-3">My Task</p>
                      </a>
                      <a
                        href="authentication-login.html"
                        className="btn btn-outline-primary mx-3 mt-2 d-block shadow-none"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/*  Header End */}
        {/*  Row 1 */}
        <div className="row">
          <div className="col-lg-8 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-10">
                  <div className="">
                    <h5 className="card-title fw-semibold">
                      Profit &amp; Expenses
                    </h5>
                  </div>
                  <div className="dropdown">
                    <button
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="rounded-circle btn-transparent rounded-circle btn-sm px-1 btn shadow-none"
                    >
                      <i className="ti ti-dots-vertical fs-7 d-block" />
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="profit" />
                <BarChart/>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-sm-6">
                {/* Yearly Breakup */}
                <div className="card overflow-hidden">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-10 fw-semibold">
                      Traffic Distribution
                    </h5>
                    <div className="row align-items-center">
                      <div className="col-7">
                        <h4 className="fw-semibold mb-3">$36,358</h4>
                        <div className="d-flex align-items-center mb-2">
                          <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                            <i className="ti ti-arrow-up-left text-success" />
                          </span>
                          <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                          <p className="fs-3 mb-0">last year</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                            <span className="fs-2">Oragnic</span>
                          </div>
                          <div>
                            <span className="round-8 bg-danger rounded-circle me-2 d-inline-block" />
                            <span className="fs-2">Refferal</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="d-flex justify-content-center">
                          <div id="grade" />
                          <DonutChart/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-sm-6">
                {/* Monthly Earnings */}
                <div className="card">
                  <div className="card-body">
                    <div className="row alig n-items-start">
                      <div className="col-8">
                        <h5 className="card-title mb-10 fw-semibold">
                          {" "}
                          Product Sales
                        </h5>
                        <h4 className="fw-semibold mb-3">$6,820</h4>
                        <div className="d-flex align-items-center pb-1">
                          <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                            <i className="ti ti-arrow-down-right text-danger" />
                          </span>
                          <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                          <p className="fs-3 mb-0">last year</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="text-white bg-danger rounded-circle p-7 d-flex align-items-center justify-content-center">
                            <i className="ti ti-currency-dollar fs-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="earning" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <div className="mb-4">
                  <h5 className="card-title fw-semibold">Upcoming Schedules</h5>
                </div>
                <ul className="timeline-widget mb-0 position-relative mb-n5">
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">
                      09:30
                    </div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-primary flex-shrink-0 my-2" />
                      <span className="timeline-badge-border d-block flex-shrink-0" />
                    </div>
                    <div className="timeline-desc fs-3 text-dark mt-n1">
                      Payment received from John Doe of $385.90
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">
                      10:00 am
                    </div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-info flex-shrink-0 my-2" />
                      <span className="timeline-badge-border d-block flex-shrink-0" />
                    </div>
                    <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                      New sale recorded{" "}
                      <a
                        href="javascript:void(0)"
                        className="text-primary d-block fw-normal"
                      >
                        #ML-3467
                      </a>
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">
                      12:00 am
                    </div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-success flex-shrink-0 my-2" />
                      <span className="timeline-badge-border d-block flex-shrink-0" />
                    </div>
                    <div className="timeline-desc fs-3 text-dark mt-n1">
                      Payment was made of $64.95 to Michael
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">
                      09:30 am
                    </div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-warning flex-shrink-0 my-2" />
                      <span className="timeline-badge-border d-block flex-shrink-0" />
                    </div>
                    <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                      New sale recorded{" "}
                      <a
                        href="javascript:void(0)"
                        className="text-primary d-block fw-normal"
                      >
                        #ML-3467
                      </a>
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">
                      09:30 am
                    </div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-danger flex-shrink-0 my-2" />
                      <span className="timeline-badge-border d-block flex-shrink-0" />
                    </div>
                    <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                      New arrival recorded
                    </div>
                  </li>
                  <li className="timeline-item d-flex position-relative overflow-hidden">
                    <div className="timeline-time text-dark flex-shrink-0 text-end">
                      12:00 am
                    </div>
                    <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span className="timeline-badge border-2 border border-success flex-shrink-0 my-2" />
                    </div>
                    <div className="timeline-desc fs-3 text-dark mt-n1">
                      Payment Done
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <div className="d-flex mb-4 justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold">Top Paying Clients</h5>
                  <div className="dropdown">
                    <button
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="rounded-circle btn-transparent rounded-circle btn-sm px-1 btn shadow-none"
                    >
                      <i className="ti ti-dots-vertical fs-7 d-block" />
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="table-responsive" data-simplebar="">
                  <table className="table table-borderless align-middle text-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Profile</th>
                        <th scope="col">Hour Rate</th>
                        <th scope="col">Extra classes</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <img
                                src="../assets/images/profile/user1.jpg"
                                width={50}
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div>
                              <h6 className="mb-1 fw-bolder">
                                Mark J. Freeman
                              </h6>
                              <p className="fs-3 mb-0">Prof. English</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0">$150/hour</p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0 text-success">
                            +53
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-light-success rounded-pill text-success px-3 py-2 fs-3">
                            Available
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <img
                                src="../assets/images/profile/user2.jpg"
                                width={50}
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div>
                              <h6 className="mb-1 fw-bolder">Nina R. Oldman</h6>
                              <p className="fs-3 mb-0">Prof. History</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0">$150/hour</p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0 text-success">
                            +68
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-light-primary rounded-pill text-primary px-3 py-2 fs-3">
                            In Class
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <img
                                src="../assets/images/profile/user3.jpg"
                                width={50}
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div>
                              <h6 className="mb-1 fw-bolder">Arya H. Shah</h6>
                              <p className="fs-3 mb-0">Prof. Maths</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0">$150/hour</p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0 text-success">
                            +94
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-light-danger rounded-pill text-danger px-3 py-2 fs-3">
                            Absent
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <img
                                src="../assets/images/profile/user4.jpg"
                                width={50}
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div>
                              <h6 className="mb-1 fw-bolder">June R. Smith</h6>
                              <p className="fs-3 mb-0">Prof. Arts</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0">$150/hour</p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0 text-success">
                            +27
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-light-warning rounded-pill text-warning px-3 py-2 fs-3">
                            On Leave
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden">
              <div className="position-relative">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/products/s4.jpg"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Add To Cart"
                >
                  <i className="ti ti-basket fs-4" />
                </a>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">Boat Headphone</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    $50{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$65</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden">
              <div className="position-relative">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/products/s5.jpg"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Add To Cart"
                >
                  <i className="ti ti-basket fs-4" />
                </a>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">MacBook Air Pro</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    $650{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$900</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden">
              <div className="position-relative">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/products/s7.jpg"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Add To Cart"
                >
                  <i className="ti ti-basket fs-4" />
                </a>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">Red Valvet Dress</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    $150{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$200</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden">
              <div className="position-relative">
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/products/s11.jpg"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                </a>
                <a
                  href="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Add To Cart"
                >
                  <i className="ti ti-basket fs-4" />
                </a>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">Cute Soft Teddybear</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    $285{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$345</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star-filled text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="me-1" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                    <li>
                      <a className="" href="javascript:void(0)">
                        <i className="ti ti-star text-warning" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-6 text-center">
          <p className="mb-0 fs-4">
            Design and Developed by{" "}
            <a
              href="https://www.wrappixel.com/"
              target="_blank"
              className="pe-1 text-primary text-decoration-underline"
            >
              wrappixel.com
            </a>
          </p>
        </div>
        <div className="card card-body">
          <div className="table-responsive">
            <table className="table search-table align-middle text-nowrap">
              <thead className="header-item">
                <tr>
                  <th>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input primary"
                          id="contact-check-all"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="contact-check-all"
                        />
                        <span className="new-control-indicator" />
                      </div>
                    </div>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* start row */}
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox1"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-2.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6 className="user-name mb-0" data-name="Emma Adams">
                            Emma Adams
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="Web Developer"
                          >
                            Web Developer
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="adams@mail.com"
                    >
                      adams@mail.com
                    </span>
                  </td>
                  <td>
                    <span className="usr-location" data-location="Boston, USA">
                      Boston, USA
                    </span>
                  </td>
                  <td>
                    <span className="usr-ph-no" data-phone="+1 (070) 123-4567">
                      +91 (070) 123-4567
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                {/* end row */}
                {/* start row */}
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox2"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-2.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6
                            className="user-name mb-0"
                            data-name="Olivia Allen"
                          >
                            Olivia Allen
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="Web Designer"
                          >
                            Web Designer
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="allen@mail.com"
                    >
                      allen@mail.com
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-location"
                      data-location="Sydney, Australia"
                    >
                      Sydney, Australia
                    </span>
                  </td>
                  <td>
                    <span className="usr-ph-no" data-phone="+91 (125) 450-1500">
                      +91 (125) 450-1500
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                {/* end row */}
                {/* start row */}
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox3"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-3.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6
                            className="user-name mb-0"
                            data-name="Isabella Anderson"
                          >
                            {" "}
                            Isabella Anderson{" "}
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="UX/UI Designer"
                          >
                            UX/UI Designer
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="anderson@mail.com"
                    >
                      anderson@mail.com
                    </span>
                  </td>
                  <td>
                    <span className="usr-location" data-location="Miami, USA">
                      Miami, USA
                    </span>
                  </td>
                  <td>
                    <span className="usr-ph-no" data-phone="+91 (100) 154-1254">
                      +91 (100) 154-1254
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                {/* end row */}
                {/* start row */}
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox4"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-4.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6
                            className="user-name mb-0"
                            data-name="Amelia Armstrong"
                          >
                            {" "}
                            Amelia Armstrong{" "}
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="Ethical Hacker"
                          >
                            Ethical Hacker
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="armstrong@mail.com"
                    >
                      armstrong@mail.com
                    </span>
                  </td>
                  <td>
                    <span className="usr-location" data-location="Tokyo, Japan">
                      Tokyo, Japan
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-ph-no"
                      data-phone="+91 (154) 199- 1540"
                    >
                      +91 (154) 199- 1540
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                {/* end row */}
                {/* start row */}
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox5"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-5.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6
                            className="user-name mb-0"
                            data-name="Emily Atkinson"
                          >
                            {" "}
                            Emily Atkinson{" "}
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="Web developer"
                          >
                            Web developer
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="atkinson@mail.com"
                    >
                      atkinson@mail.com
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-location"
                      data-location="Edinburgh, UK"
                    >
                      Edinburgh, UK
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-ph-no"
                      data-phone="+91 (900) 150- 1500"
                    >
                      +91 (900) 150- 1500
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                {/* end row */}
                {/* start row */}
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox6"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-12.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6
                            className="user-name mb-0"
                            data-name="Sofia Bailey"
                          >
                            Sofia Bailey
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="UX/UI Designer"
                          >
                            UX/UI Designer
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="bailey@mail.com"
                    >
                      bailey@mail.com
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-location"
                      data-location="New York, USA"
                    >
                      New York, USA
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-ph-no"
                      data-phone="+91 (001) 160- 1845"
                    >
                      +91 (001) 160- 1845
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox7"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-2.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6
                            className="user-name mb-0"
                            data-name="Victoria Sharma"
                          >
                            {" "}
                            Victoria Sharma{" "}
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="Project Manager"
                          >
                            Project Manager
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="sharma@mail.com"
                    >
                      sharma@mail.com
                    </span>
                  </td>
                  <td>
                    <span className="usr-location" data-location="Miami, USA">
                      Miami, USA
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-ph-no"
                      data-phone="+91 (110) 180- 1600"
                    >
                      +91 (110) 180- 1600
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="search-items">
                  <td>
                    <div className="n-chk align-self-center text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input contact-chkbox primary"
                          id="checkbox8"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox8"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-3.jpg"
                        alt="avatar"
                        className="rounded-circle"
                        width={35}
                      />
                      <div className="ms-3">
                        <div className="user-meta-info">
                          <h6
                            className="user-name mb-0"
                            data-name="Penelope Baker"
                          >
                            {" "}
                            Penelope Baker{" "}
                          </h6>
                          <span
                            className="user-work fs-3"
                            data-occupation="Web Developer"
                          >
                            Web Developer
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="usr-email-addr"
                      data-email="baker@mail.com"
                    >
                      baker@mail.com
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-location"
                      data-location="Edinburgh, UK"
                    >
                      Edinburgh, UK
                    </span>
                  </td>
                  <td>
                    <span
                      className="usr-ph-no"
                      data-phone="+91 (405) 483- 4512"
                    >
                      +91 (405) 483- 4512
                    </span>
                  </td>
                  <td>
                    <div className="action-btn">
                      <a
                        href="javascript:void(0)"
                        className="text-primary edit"
                      >
                        <i className="ti ti-eye fs-5" />
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="text-dark delete ms-2"
                      >
                        <i className="ti ti-trash fs-5" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="dark-transparent sidebartoggler" />
    </div>
  </div>
  )
}

export default Home