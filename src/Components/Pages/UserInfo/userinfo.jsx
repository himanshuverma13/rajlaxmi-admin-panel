import React from 'react'
import Sidebar from '../../Common/SideBar/sidebar';
import Navbar from '../../Common/Navbar/navbar';
import profile from "../../Assets/images/profile/user2.jpg";

const UserInfo = () => {
    const currentUsers = [
        {
            user_id: 1,
            user_name: "Emma Adams",
            user_email: "adams@mail.com",
            user_landmark: "Boston, USA",
            user_house_number: 31,
            user_country: "India",
            user_city: "Indore",
            user_state: "M.P",
            user_pincode: 23433,
            user_mobile_num: "+91 (070) 123-4567",
        },
        {
            user_id: 1,
            user_name: "Emma Adams",
            user_email: "adams@mail.com",
            user_landmark: "Boston, USA",
            user_house_number: 31,
            user_country: "India",
            user_city: "Indore",
            user_state: "M.P",
            user_pincode: 23433,
            user_mobile_num: "+91 (070) 123-4567",
        },
        {
            user_id: 1,
            user_name: "Emma Adams",
            user_email: "adams@mail.com",
            user_landmark: "Boston, USA",
            user_house_number: 31,
            user_country: "India",
            user_city: "Indore",
            user_state: "M.P",
            user_pincode: 23433,
            user_mobile_num: "+91 (070) 123-4567",
        },
        {
            user_id: 1,
            user_name: "Emma Adams",
            user_email: "adams@mail.com",
            user_landmark: "Boston, USA",
            user_house_number: 31,
            user_country: "India",
            user_city: "Indore",
            user_state: "M.P",
            user_pincode: 23433,
            user_mobile_num: "+91 (070) 123-4567",
        },
        {
            user_id: 1,
            user_name: "Emma Adams",
            user_email: "adams@mail.com",
            user_landmark: "Boston, USA",
            user_house_number: 31,
            user_country: "India",
            user_city: "Indore",
            user_state: "M.P",
            user_pincode: 23433,
            user_mobile_num: "+91 (070) 123-4567",
        },
        {
            user_id: 1,
            user_name: "Emma Adams",
            user_email: "adams@mail.com",
            user_landmark: "Boston, USA",
            user_house_number: 31,
            user_country: "India",
            user_city: "Indore",
            user_state: "M.P",
            user_pincode: 23433,
            user_mobile_num: "+91 (070) 123-4567",
        },
    ];
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

                        <div className="card card-body">
                            <div className="table-responsive">
                                <table className="table search-table align-middle table-hover text-nowrap">
                                    <thead className="header-item table-light">
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
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Pincode</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentUsers?.map((items) => (
                                            <tr key={items.id} className="search-items">
                                                <td>
                                                    <div className="n-chk align-self-center text-center">
                                                        <div className="form-check">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input contact-chkbox primary"
                                                                id={`checkbox${items?.id}`}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor={`checkbox${items?.id}`}
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="usr-email-addr">{items?.user_id}</span>
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
                                                                <h6 className="user-name mb-1">{items?.user_name}</h6>
                                                                <span className="user-work text-secondary fs-3">
                                                                {items?.user_email}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                    <span className="usr-ph-no">{items?.user_mobile_num}</span>
                                                </td>
                                                <td>
                                                    <span className="usr-location">{items?.user_house_number} {", "} {items?.user_landmark}</span>
                                                </td>
                                                <td>
                                                    <span className="usr-ph-no">{items?.user_country}</span>
                                                </td>
                                                <td>
                                                    <span className="usr-ph-no">{items?.user_state}</span>
                                                </td>
                                                <td>
                                                    <span className="usr-ph-no">{items?.user_city}</span>
                                                </td>
                                                <td>
                                                    <span className="usr-ph-no">{items?.user_pincode}</span>
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

export default UserInfo;
