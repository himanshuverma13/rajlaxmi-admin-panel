import React from "react";
import profile from "../../Assets/images/profile/user2.jpg";

const orders = [
  {
    id: 1,
    name: "Emma Adams",
    occupation: "Web Developer",
    email: "adams@mail.com",
    location: "Boston, USA",
    phone: "+91 (070) 123-4567",
  },
  {
    id: 2,
    name: "Olivia Allen",
    occupation: "Web Designer",
    email: "allen@mail.com",
    location: "Sydney, Australia",
    phone: "+91 (125) 450-1500",
  },
  {
    id: 3,
    name: "Isabella Anderson",
    occupation: "UX/UI Designer",
    email: "anderson@mail.com",
    location: "Miami, USA",
    phone: "+91 (100) 154-1254",
  },
  {
    id: 4,
    name: "Amelia Armstrong",
    occupation: "Ethical Hacker",
    email: "armstrong@mail.com",
    location: "Tokyo, Japan",
    phone: "+91 (154) 199-1540",
  },
  {
    id: 5,
    name: "Amelia Armstrong",
    occupation: "Ethical Hacker",
    email: "armstrong@mail.com",
    location: "Tokyo, Japan",
    phone: "+91 (154) 199-1540",
  },
  {
    id: 6,
    name: "Amelia Armstrong",
    occupation: "Ethical Hacker",
    email: "armstrong@mail.com",
    location: "Tokyo, Japan",
    phone: "+91 (154) 199-1540",
  },
  {
    id: 7,
    name: "Amelia Armstrong",
    occupation: "Ethical Hacker",
    email: "armstrong@mail.com",
    location: "Tokyo, Japan",
    phone: "+91 (154) 199-1540",
  },{
    id: 8,
    name: "Amelia Armstrong",
    occupation: "Ethical Hacker",
    email: "armstrong@mail.com",
    location: "Tokyo, Japan",
    phone: "+91 (154) 199-1540",
  },
];

const RecentOrder = () => {
  return (
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
              <th>Location</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="search-items">
                <td>
                  <div className="n-chk align-self-center text-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input contact-chkbox primary"
                        id={`checkbox${order.id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`checkbox${order.id}`}
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
                        <h6 className="user-name mb-0">{order.name}</h6>
                        <span className="user-work fs-3">
                          {order.occupation}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="usr-email-addr">{order.email}</span>
                </td>
                <td>
                  <span className="usr-location">{order.location}</span>
                </td>
                <td>
                  <span className="usr-ph-no">{order.phone}</span>
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
  );
};

export default RecentOrder;
