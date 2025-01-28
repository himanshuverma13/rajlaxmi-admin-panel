import React, { useEffect, useState } from "react";
import Sidebar from "../../Common/SideBar/sidebar";
import Navbar from "../../Common/Navbar/navbar";
import profile from "../../Assets/images/profile/user2.jpg";
import { LuDot } from "react-icons/lu";
import { Pagination } from "react-bootstrap";
import { GetAllUser } from "../../Common/APIs/api";

const UserInfo = () => {
    const itemsPerPage = 3;
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


    const FetchUsers = async () => {
        try {
            const response = await GetAllUser(); // Adjust this to your fetch method
            console.log("response: user", response);
            setUsers(response); // Store the users
        } catch (error) {
            console.log("error: ", error);
        }
    };

    useEffect(() => {
        FetchUsers();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5; // Set number of users per page
    const [users, setUsers] = useState([]); // Initialize as an empty array
    // Calculate pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsersPage = (users || currentUsers)?.slice(indexOfFirstUser, indexOfLastUser); // Get current users

    // Total pages
    const totalPages = Math.ceil((users || currentUsers)?.length / usersPerPage);

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
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <Navbar />

                        <div className="card">
                            <div className="card-body card-height">
                                <div>
                                    <h2 className="fw-bolder">List</h2>
                                    <p className="text-dark">
                                        Dashboard <LuDot /> User <LuDot />{" "}
                                        <span className="text-muted">List</span>
                                    </p>
                                </div>
                                <div className="table-responsive">
                                    <table className="table search-table align-middle table-hover text-nowrap">
                                        <thead className="header-item table-light">
                                            <tr>
                                                <th>SNo.</th>
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
                                            {currentUsersPage?.map((items, index) => (
                                                <tr key={items.id} className="search-items">
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <span className="usr-email-addr">
                                                            {items?.user_id}
                                                        </span>
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
                                                                    <h6 className="user-name mb-1">
                                                                        {items?.user_name}
                                                                    </h6>
                                                                    <span className="user-work text-secondary fs-3">
                                                                        {items?.user_email}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="usr-ph-no">
                                                            {items?.user_mobile_num}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="usr-location">
                                                            {items?.user_house_number}, {items?.user_landmark}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="usr-ph-no">
                                                            {items?.user_country}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="usr-ph-no">{items?.user_state}</span>
                                                    </td>
                                                    <td>
                                                        <span className="usr-ph-no">{items?.user_city}</span>
                                                    </td>
                                                    <td>
                                                        <span className="usr-ph-no">
                                                            {items?.user_pincode}
                                                        </span>
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
    );
};

export default UserInfo;
