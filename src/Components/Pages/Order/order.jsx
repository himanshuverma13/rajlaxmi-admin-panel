import React from 'react'
import Sidebar from '../../Common/SideBar/sidebar'
import Navbar from '../../Common/Navbar/navbar'
import OrderList from '../../Common/OrderList/orderList'

const Order = () => {
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      {/* Sidebar Start */}
      <Sidebar />
      {/*  Sidebar End */}
      <div className="body-wrapper">
        <div className="container-fluid">
          <Navbar />
          {/*  Row 1 */}
          <OrderList/>
          
        </div>
        <div className="dark-transparent sidebartoggler" />
      </div>
    </div>
  )
}

export default Order