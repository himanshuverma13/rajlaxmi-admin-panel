import React from "react";

import orderimg from "../../Assets/images/profile/user1.jpg";
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    city: "New York",
    country: "USA",
    details: "John is a software engineer from New York, USA.",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    city: "London",
    country: "UK",
    details: "Jane is a data scientist based in London, UK.",
  },
  {
    id: 3,
    name: "Mark Wilson",
    age: 45,
    city: "Sydney",
    country: "Australia",
    details: "Mark is a project manager in Sydney, Australia.",
  },
];
const OrderList = () => {
  return (
    <div className="product-list">
      <div className="card">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-center gap-6 mb-3">
            <form className="position-relative">
              <input
                type="text"
                className="form-control search-chat py-2 ps-5"
                id="text-srh"
                placeholder="Search Product"
              />
              <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
            </form>
            <a
              className="fs-6 text-muted"
              href="javascript:void(0)"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Filter list"
            >
              <i className="ti ti-filter" />
            </a>
          </div>
          <div className="table-responsive border rounded">
            <table className="table align-middle text-nowrap mb-0">
              <thead>
                <tr className="border-bottom">
                  <th scope="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <th scope="col">Order</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Date</th>
                  <th scope="col">Items</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <>
                    <tr key={row?.id}>
                      <td>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault1"
                          />
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fs-4">#12345</h6>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={orderimg}
                            className="rounded-circle"
                            alt="spike-img"
                            width={40}
                            height={40}
                          />
                          <div className="ms-3 text-start">
                            <h6 className="mb-0 fs-4">Curology</h6>
                            <p className="mb-0 text-muted">Admin.panel@123gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">Thu, Jan 12 2024</p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 ms-2">1</p>
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fs-4">$275</h6>
                      </td>
                      <td>
                        <span class="badge rounded-pill bg-danger-subtle text-danger border-danger border">
                          Cancelled
                        </span>
                      </td>
                      <td>
                        <i
                          class="ti ti-chevron-down"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${row.id}`}
                          aria-expanded="false"
                          aria-controls={`collapse-${row.id}`}
                        ></i>
                      </td>

                      <td>
                        <div className="dropdown">
                          <button
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                            className="rounded-circle btn-transparent btn-sm px-1 btn shadow-none"
                          >
                            <i className="ti ti-dots-vertical fs-7 d-block" />
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton1"
                            style={{
                              position: "absolute",
                              inset: "0px 0px auto auto",
                              margin: 0,
                              transform: "translate3d(0px, 36px, 0px)",
                            }}
                            data-popper-placement="bottom-end"
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
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="10" className="py-0 border-0 bg-light px-1">
                        <div className="collapse" id={`collapse-${row.id}`}>
                          <div className="card card-body my-2 py-3 px-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <img
                                  src={orderimg}
                                  className="rounded-circle"
                                  alt="spike-img"
                                  width={30}
                                  height={30}
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0 fs-2">
                                    Curology Face wash
                                  </h6>
                                  <p className="mb-0">books</p>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex">
                                  <p className="mx-3 mb-0 ms-2">x 1</p>

                                  <h6 className="mx-3 mb-0 fs-4">$275</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <div className="d-flex align-items-center justify-content-end py-1">
              {/* <p className="mb-0 fs-2">Rows per page:</p>
              <select
                className="form-select w-auto ms-0 ms-sm-2 me-8 me-sm-4 py-1 pe-7 ps-2 border-0"
                aria-label="Default select example"
              >
                <option selected="">5</option>
                <option value={1}>10</option>
                <option value={2}>25</option>
              </select> */}
              <p className="mb-0 fs-2">1–5 of 12</p>
              <nav aria-label="...">
                <ul className="pagination justify-content-center mb-0 ms-8 ms-sm-9">
                  <li className="page-item p-1">
                    <a
                      className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                      //   href="javascript:void(0)"
                    >
                      <i className="ti ti-chevron-left" />
                    </a>
                  </li>
                  <li className="page-item p-1">
                    <a
                      className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                      //   href="javascript:void(0)"
                    >
                      <i className="ti ti-chevron-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
