import React from 'react'
import RecentOrder from '../../Common/RecentOrderTable/RecentOrder';
import Sidebar from '../../Common/SideBar/sidebar';
import Navbar from '../../Common/Navbar/navbar';

const ContactInfo = () => {
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
                        <RecentOrder />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo;
