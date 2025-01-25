import React from 'react'
import Sidebar from '../../Common/SideBar/sidebar'
import BarChart from '../../Common/Charts/bargraph'
import DonutChart from '../../Common/Charts/DonutChart'

import Navbar from '../../Common/Navbar/navbar';
import RecentOrder from '../../Common/RecentOrderTable/RecentOrder';
import UpcoingOrder from '../../Common/UpcomingOrder/upcoimg';
import DashboardGraph from '../../Common/DashboardGraph/dashboardgraph';
import SalesCard from '../../Common/SalesCard/salescard';
import ProductTable from '../../Common/test/test';
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
      <Sidebar />
      {/*  Sidebar End */}
      {/*  Main wrapper */}
      <div className="body-wrapper">
        <div className="container-fluid">
          <Navbar />
          {/*  Row 1 */}
          <SalesCard />
          <DashboardGraph/>
          
          <UpcoingOrder/>
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
          <RecentOrder />
          <ProductTable/>
        </div>
        <div className="dark-transparent sidebartoggler" />
      </div>
    </div>
  )
}

export default Home