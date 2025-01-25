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
      user_name: "Demo",
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
      user_name: "Demo",
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
      user_name: "Demo",
      user_email: "demo121@gmail.com",
      user_mobile: 1237988,
      user_message: "fdsdhkjfdsklfkhgh",
    },
  ]


  const [Contact, setContact] = useState();

  const FetchContact = async () => {
    try {
      const response = await GetAllContactAPI();
      console.log("response: ", response);
      setContact(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchContact();
  }, []);


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
            <div className="card card-body">
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
                    {ContactJson?.map((item, index) => (
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
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo;
