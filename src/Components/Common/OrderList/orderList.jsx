import React, { useEffect, useState } from "react";

import orderimg from "../../Assets/images/profile/user1.jpg";
import { LuDot } from "react-icons/lu";
import { GetAllOrderDetailsAPI } from "../APIs/api";
const data = [
  {
    user_id: 1,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    user_date: '1/07/25',
    user_city: "New York",
    user_country: "USA",
    user_total_amount: "12345",
    status: "Completed",
  },
  {
    user_id: 2,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    user_date: '1/07/25',
    user_city: "New York",
    user_country: "USA",
    user_total_amount: "12345",
    status: "Pending",
  },
  {
    user_id: 3,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    user_date: '1/07/25',
    user_city: "New York",
    user_country: "USA",
    user_total_amount: "12345",
    status: "Cancelled",
  },
  {
    user_id: 3,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    user_date: '1/07/25',
    user_city: "New York",
    user_country: "USA",
    user_total_amount: "12345",
    status: "Completed",
  },
  {
    user_id: 5,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    user_date: '1/07/25',
    user_city: "New York",
    user_country: "USA",
    user_total_amount: "12345",
    status: "Pending",
  },
  {
    user_id: 6,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    user_date: '1/07/25',
    user_city: "New York",
    user_country: "USA",
    user_total_amount: "12345",
    status: "Cancelled",
  },
];
const OrderList = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchId, setSearchId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const tabs = ["All", "Pending", "Completed", "Cancelled", "Refunded"];
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
  };

    const [OrderDetails, setOrderDetails] = useState();
  
    const FetchOrderDetails = async () => {
      try {
        const response = await GetAllOrderDetailsAPI();
        setOrderDetails(response);
      } catch (error) {
        console.log("error: ", error);
      }
    };
  
    useEffect(() => {
      FetchOrderDetails();
    }, []);
  

  const filteredData = (OrderDetails || data)?.filter(
    (row) => activeTab === "All" || row.status === activeTab
  );
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentItems = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // const currentItems = data.filter((row) => {
  //   const isWithinDateRange = (!startDate || new Date(row.date) >= new Date(startDate)) &&
  //     (!endDate || new Date(row.date) <= new Date(endDate));
  //   const isMatchingId = searchId ? row.id.toString().includes(searchId) : true;
  //   const isMatchingStatus = activeTab === "All" || row.status === activeTab;

  //   return isWithinDateRange && isMatchingId && isMatchingStatus;
  // });


  // // Array of tab names
  // const tabs = ["All", "Pending", "Completed", "Cancelled", "Refunded"];

  // // Function to handle tab click
  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName); // Set the clicked tab as active
  // };

  return (
    <div className="product-list">
      <div className="card">
        <div className='mt-3 px-4'>
          <h2 className='fw-bolder'>List</h2>
          <p className='text-dark'>Dashboard <LuDot /> Order <LuDot /> <span className='text-muted'>List</span>
          </p>
        </div>
        <div className="card-body p-3">
          <div>
            <ul className="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`nav-item mx-2 order-filter my-1 d-flex justify-content-between align-items-center ${activeTab === tab ? "active border-bottom border-bottom-primary pb-1 border-2" : ""
                    }`}
                  onClick={() => handleTabClick(tab)}
                >
                  <span
                    className={` d-md-block fs-3 fw-medium ${activeTab === tab ? "fs-2 text-primary " : ""
                      }`}
                  >
                    {tab}
                  </span>
                  <span
                    className={`mx-1 px-1 rounded ${activeTab === tab
                      ? "fs-3 text-primary bg-primary text-white"
                      : "bg-light"
                      }`}
                  >
                    07
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex row align-items-center gap-6 mb-3">
            <div className="col-lg-3">
              <div className="mx-2">
                <label className="form-label" htmlFor="">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control search-chat py-2"
                  name=""
                  id=""
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mx-2">
                <label className="form-label" htmlFor="">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control search-chat py-2"
                  name=""
                  id=""
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <label className="form-label" htmlFor="">
                Search
              </label>
              <div className="position-relative">
                <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                <input
                  type="text"
                  className="form-control search-chat py-2 ps-5"
                  id="text-srh"
                  placeholder="Order Order Id"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
              </div>
            </div>

          </div>
          <div className="table-responsive border rounded">
            <table className="table align-middle text-nowrap table-hover mb-0">
              <thead className="table-light">
                <tr className="border-bottom border-dark">
                  <th scope="col">
                    S No.
                  </th>
                  <th scope="col">Id</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Date</th>
                  <th scope="col">City</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((row, index) => (
                  <>
                    <tr key={row?.id}>
                      <td>
                        {++index}
                      </td>
                      <td>
                        <h6 className="mb-0 fs-4">{row?.user_id}</h6>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={orderimg}
                            className="rounded-circle"
                            alt="spike-img"
                            wuser_ididth={40}
                            height={40}
                          />
                          <div className="ms-3 text-start">
                            <h6 className="mb-0 fs-4">{row.user_name}</h6>
                            <p className="mb-0 text-muted">
                              {row.user_email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">{row?.user_mobile_num}</p>
                      </td>

                      <td>
                        <p className="mb-0">{new Date(row?.date)?.toLocaleDateString()}</p>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <p className="mb-0 ms-2">{row.user_city}</p>
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fs-4">{row?.user_total_amount}</h6>
                      </td>
                      <td>
                        <div className={`badge rounded-pill ${row.status === "Cancelled" ? "bg-red text-danger" : "bg-green text-success"}`}>
                          <span className={`fw-bold`}> {row.status}</span>
                        </div>
                      </td>
                      <td>
                        <i
                          class="ti ti-chevron-down fs-6"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${row?.user_id}`}
                          aria-expanded="false"
                          aria-controls={`collapse-${row?.user_id}`}
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
                        <div className="collapse" id={`collapse-${row?.user_id}`}>
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
              {/* <p className="mb-0 fs-2">1–5 of 12</p> */}
              {/* <nav aria-label="...">
                <ul className="pagination justify-content-center mb-0 ms-8 ms-sm-9">
                  <li className="page-item p-1">
                    <a
                      className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                    //   href="javascript:void(0)"
                    >
                    </a>
                  </li>
                  <li className="page-item p-1">
                    <a
                      className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                    //   href="javascript:void(0)"
                    >
                    
                    </a>
                  </li>
                </ul>
              </nav> */}
              <div className="d-flex align-items-center justify-content-end py-2">
                <div
                  className="fs-5 me-2"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <i className="ti ti-chevron-left fs-5" />

                </div>
                <span className="fs-5">
                  Page {currentPage} of {totalPages}
                </span>
                <div
                  className="fs-5 ms-2 me-5"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <i className="ti ti-chevron-right fs-5" />

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

