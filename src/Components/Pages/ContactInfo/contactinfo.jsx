import React, { useEffect, useState } from 'react'
import Sidebar from '../../Common/SideBar/sidebar';
import Navbar from '../../Common/Navbar/navbar';
import profile from "../../Assets/images/profile/user2.jpg";
import { GetAllContactAPI } from '../../Common/APIs/api';
import { LuDot } from 'react-icons/lu';

const ContactInfo = () => {
  const ContactJson = [
    {
      user_name: "Demo",
      user_email: "demo121@gmail.com",
      user_mobile: 1237988,
      user_message: "fdsdhkjfdsklfkhgh",
    },
    {
      user_name: "Demfdfo",
      user_email: "demo121@gmail.com",
      user_mobile: 1237988,
      user_message: "fdsdhkjfdsklfkhgh",
    },
    {
      user_name: "Demoxcvdv",
      user_email: "demo121@gmail.com",
      user_mobile: 1237988,
      user_message: "fdsdhkjfdsklfkhgh",
    },
    {
      user_name: "Demodfdf",
      user_email: "demo121@gmail.com",
      user_mobile: 1237988,
      user_message: "fdsdhkjfdsklfkhgh",
    },
    {
      user_name: "Demo",
      user_email: "demo121@gmail.com",
      user_mobile: 1237988,
      user_message: "fdsdhkjfdsklfkhgh",
    },
    {
      user_name: "Demoaff",
      user_email: "demo121@gmail.com",
      user_mobile: 1237988,
      user_message: "fdsdhkjfdsklfkhgh",
    },
  ]




  const [Contact, setContact] = useState();

  const FetchContact = async () => {
    try {
      const response = await GetAllContactAPI();
      setContact(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchContact();
  }, []);

  //  pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Set number of users per page
  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsersPage = (Contact || ContactJson)?.slice(indexOfFirstUser, indexOfLastUser); // Get current users

  // Total pages
  const totalPages = Math.ceil((Contact || ContactJson)?.length / usersPerPage);

  // Change page function
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };


  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Sidebar />
        {/*  Main wrapper */}
        <div className="body-wrapper">
          <div className="container-fluid">
            <Navbar />
            {/* <h2>Contact</h2>
                        <p>Dashboard</p> */}
            <div className='card'>
              <div className="card-body card-height">
                <div>
                  <h2 className='fw-bolder'>List</h2>
                  <p className='text-dark'>Dashboard <LuDot /> Contact Info <LuDot /> <span className='text-muted'>List</span>
                  </p>
                </div>
                <div className="table-responsive">
                  <table className="table search-table align-middle table-hover  text-nowrap">
                    <thead className="header-item table-light">
                      <tr>
                        <th>
                          S No.
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentUsersPage?.map((item, index) => (
                        <tr key={item.id} className="search-items">
                          <td>
                            {++index}
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={profile}
                                alt="avatar"
                                className="rounded-circle"
                                width={35}
                              />
                              <div className="ms-3">
                                <div className="user-meta-info">
                                  <h6 className="user-name mb-0">{item?.user_name}</h6>
                                  <span className="user-work fs-3">
                                    {item.occupation}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="usr-email-addr">{item.user_email}</span>
                          </td>
                          <td>
                            <span className="usr-ph-no">{item.user_mobile}</span>
                          </td>
                          <td>
                            <span className="usr-location">{item.user_message}</span>
                          </td>
                          <td>
                            <div className="action-btn">
                              <a href="#" className="text-primary edit">
                                <i className="ti ti-eye fs-5" />
                              </a>
                              <a href="#" className="text-dark delete ms-2">
                                <i className="ti ti-trash fs-5" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Pagination */}
              <div className="d-flex align-items-center justify-content-end py-3">
                <div
                  className="fs-5 me-2"
                  onClick={() => paginate(currentPage - 1)}
                  style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                  <i className="ti ti-chevron-left fs-5" />
                </div>
                <span className="fs-5">
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
        </div>
      </div>
    </>
  )
}

export default ContactInfo;
