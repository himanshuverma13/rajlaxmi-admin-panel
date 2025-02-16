import React, { useEffect, useState } from "react";

import orderimg from "../../Assets/images/profile/user1.jpg";
import { LuDot } from "react-icons/lu";
import { GetAllOrderDetailsAPI } from "../APIs/api";
const data = [
  {
    user_id: 112,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    date: '07/01/25',
    user_city: "New York",
    user_state: "dasdkf",
    user_country: "USA",
    user_pincode: 232345,
    user_total_amount: "12345",
    status: "Completed",
  },
  {
    user_id: 1123,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    date: '07/02/25',
    user_city: "New York",
    user_state: "dasdkf",
    user_country: "USA",
    user_pincode: 232345,
    user_total_amount: "12345",
    status: "Pending",
  },
  {
    user_id: 3,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    date: '07/03/25',
    user_city: "New York",
    user_state: "dasdkf",
    user_country: "USA",
    user_pincode: 232345,
    user_total_amount: "12345",
    status: "Cancelled",
  },
  {
    user_id: 4,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    date: '07/04/25',
    user_city: "New York",
    user_state: "dasdkf",
    user_country: "USA",
    user_pincode: 232345,
    user_total_amount: "12345",
    status: "Completed",
  },
  {
    user_id: 5,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    date: '07/04/25',
    user_city: "New York",
    user_state: "dasdkf",
    user_country: "USA",
    user_pincode: 232345,
    user_total_amount: "12345",
    status: "Completed",
  },
  {
    user_id: 6,
    user_name: "John Doe",
    user_mobile_num: 2813245678,
    date: '08/04/25',
    user_city: "New York",
    user_state: "dasdkf",
    user_country: "USA",
    user_pincode: 232345,
    user_total_amount: "12345",
    status: "Completed",
  },
 
];
const OrderList = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchId, setSearchId] = useState('');
  const [Orders, setOrders] = useState()
  const tabs = ["All", "Pending", "Completed", "Cancelled", "Refunded"];
  const getTabColor = (tab) => {
    switch (tab) {
      case "Pending":
        return "bg-yellow text-warning"; // Yellow
      case "Cancelled":
        return "bg-red text-danger"; // Red
      case "Completed":
        return "bg-green text-success"; // Green
      case "Refunded":
        return "bg-gray text-secondary"; // Gray
      default:
        return "bg-light text-dark"; // Default color
    }
  };
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
        // console.log("error: ", error);
      }
    };
  
    useEffect(() => {
      FetchOrderDetails();
    }, []);
  

  const filteredData = (OrderDetails||data)?.filter(
    (row) => activeTab === "All" || row.status === activeTab
  );


  const CurrentSearchFilter = (OrderDetails||data)?.filter((row) => {
    const isWithinDateRange =
    (!startDate || new Date(row?.date)?.toLocaleDateString('en-GB') >= new Date(startDate)?.toLocaleDateString('en-GB')) &&
    (!endDate || new Date(row?.date)?.toLocaleDateString('en-GB') <= new Date(endDate)?.toLocaleDateString('en-GB'));
    const isMatchingId = searchId ? row?.user_id?.toString()?.includes(searchId) : true;
    const isMatchingStatus = activeTab === "All" || row?.status === activeTab;

    return isWithinDateRange && isMatchingId && isMatchingStatus;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [startDate, endDate, searchId]);

  // Array of tab names
  // const tabs = ["All", "Pending", "Completed", "Cancelled", "Refunded"];

// .---------- paginations
        const [currentPage, setCurrentPage] = useState(1);
        const usersPerPage = 5; // Set number of users per page
        // Calculate pagination
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsersPage = (CurrentSearchFilter||filteredData)?.slice(indexOfFirstUser, indexOfLastUser); // Get current users
    
        // Total pages
        const totalPages = Math.ceil((CurrentSearchFilter||filteredData)?.length / usersPerPage);
    
        // Change page function
        const paginate = (pageNumber) => {
            if (pageNumber >= 1 && pageNumber <= totalPages) {
                setCurrentPage(pageNumber);
            }
        };
  


  return (
    <div className="product-list">
      <div className="card">
        <div className='mt-3 px-4'>
          <h2 className='fw-bolder'>List</h2>
          <p className='text-dark'>Dashboard <LuDot /> Order <LuDot /> <span className='text-muted'>List</span>
          </p>
        </div>
        <div className="card-body card-height">
          <div>
            <ul className="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row">
              {tabs?.map((tab) => (
                <li
                  key={tab}
                  className={`nav-item mx-3 order-filter my-1  d-flex justify-content-between align-items-center ${activeTab === tab ? "active border-bottom border-primary pb-1 border-2" : "pb-1"
                    }`}
                  onClick={() => handleTabClick(tab)}
                >
                  <span
                    className={` d-md-block fs-3 fw-bold ${activeTab === tab ? "fs-3 text-dark " : ""
                      }`}
                  >
                    {tab}
                  </span>
                  <span
                    className={`mx-2 px-1 fs-3 fw-bold rounded ${activeTab === tab
                      ? " text-primary bg-primary text-white"
                      : getTabColor(tab)
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
                  placeholder="Search Order Id"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
              </div>
            </div>

          </div>
          <div className="table-responsive rounded h-75 overflow-auto">
            <table className="table align-middle text-nowrap table-hover mb-0">
              <thead className="table-light position-sticky top-0">
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
                  {/* <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody className="h-100 overflow-scroll">
                {currentUsersPage?.map((row, index) => (
                  <>
                    <tr key={row?.user_id}>
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
                        <p className="mb-0">{new Date(row?.date)?.toLocaleDateString('en-GB')}</p>
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
                        <div className={`badge rounded-pill ${row.status === "Cancelled" ? "bg-red text-danger" :
                            row.status === "Pending" ? "bg-yellow text-warning" :
                              row.status === "Completed" ? "bg-green text-success" : ""
                          }`}>                          <span className={`fw-bold`}> {row.status}</span>
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
                                    Pincode
                                  </h6>
                                  <p className="mb-0">{row?.user_pincode}</p>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex">
                                  <p className="mx-3 mb-0 ms-2">{row?.user_state}</p>

                                  <h6 className="mx-3 mb-0 fs-4">{row?.user_country}</h6>
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
          </div>
        </div>
            {/* Pagination */}
            <div className="d-flex align-items-center justify-content-end pt-5 pb-3">
                <div
                    className="fs-5 me-2"
                    onClick={() => paginate(currentPage - 1)}
                    style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                    <i className="ti ti-chevron-left fs-5" />
                </div>
                <span className="fs-3">
                    Page {currentPage} of {totalPages}
                </span>
                <div
                    className="fs-5 ms-2 me-5"
                    onClick={() => paginate(currentPage + 1)}
                    style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                    <i className="ti ti-chevron-right fs-5" />
                </div>
            </div>
      </div>
    </div>
  );
};

export default OrderList;

