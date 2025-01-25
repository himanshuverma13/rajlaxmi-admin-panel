import React from "react";
import TopPrd from "../../Assets/images/profile/user2.jpg";

const UpcoingOrder = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="card w-100">
            <div class="d-flex m-4 justify-content-between align-items-center">
              <h5 class="mb-0 fw-bold">Top Paying Clients</h5>
            </div>
            <hr />
            <div className="row mt-4 mx-4">
              <div className="col-lg-4">
                <img className="w-100 rounded-4 shadow" src={TopPrd} alt="" />
              </div>
              <div className="col-lg-8">
                <h6 class="user-name mt-3">Complete Product Name</h6>
                <span class="user-work fs-3">Web Developer</span>
                <h4 className="fw-bold">₹ 100/-</h4>
              </div>
            </div>
            <div className="row mt-4 mx-4">
              <div className="col-lg-4">
                <img className="w-100 rounded-4 shadow" src={TopPrd} alt="" />
              </div>
              <div className="col-lg-8">
                <h6 class="user-name mt-3">Complete Product Name</h6>
                <span class="user-work fs-3">Web Developer</span>
                <h4 className="fw-bold">₹ 100/-</h4>
              </div>
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
                            <h6 className="mb-1 fw-bolder">Mark J. Freeman</h6>
                            <p className="fs-3 mb-0">Prof. English</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fs-3 fw-normal mb-0">$150/hour</p>
                      </td>
                      <td>
                        <p className="fs-3 fw-normal mb-0 text-success">+53</p>
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
                        <p className="fs-3 fw-normal mb-0 text-success">+68</p>
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
                        <p className="fs-3 fw-normal mb-0 text-success">+94</p>
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
                        <p className="fs-3 fw-normal mb-0 text-success">+27</p>
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
    </>
  );
};

export default UpcoingOrder;
