import React from 'react'
import Sidebar from '../../Common/SideBar/sidebar';
import Navbar from '../../Common/Navbar/navbar';
import profile from "../../Assets/images/profile/user2.jpg";

const ContactInfo = () => {
    const Contact =[
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
                        <Navbar/>


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
                                      <th>Phone No.</th>
                                      <th>Message</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Contact.map((item) => (
                                      <tr key={item.id} className="search-items">
                                        <td>
                                          <div className="n-chk align-self-center text-center">
                                            <div className="form-check">
                                              <input
                                                type="checkbox"
                                                className="form-check-input contact-chkbox primary"
                                                id={`checkbox${item.id}`}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor={`checkbox${item.id}`}
                                              />
                                            </div>
                                          </div>
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
