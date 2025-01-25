import React from "react";
import TopPrd from "../../Assets/images/profile/user2.jpg";

const UpcoingOrder = () => {
  const clients = [
    {
      id: 1,
      name: 'Mark J. Freeman',
      profession: 'Prof. English',
      profilePic: '../assets/images/profile/user1.jpg',
      hourRate: '$150/hour',
      extraClasses: '+53',
      status: 'Available',
      statusClass: 'bg-light-success',
      statusText: 'Available',
    },
    {
      id: 2,
      name: 'Nina R. Oldman',
      profession: 'Prof. History',
      profilePic: '../assets/images/profile/user2.jpg',
      hourRate: '$150/hour',
      extraClasses: '+68',
      status: 'In Class',
      statusClass: 'bg-light-primary',
      statusText: 'In Class',
    },
    {
      id: 3,
      name: 'Arya H. Shah',
      profession: 'Prof. Maths',
      profilePic: '../assets/images/profile/user3.jpg',
      hourRate: '$150/hour',
      extraClasses: '+94',
      status: 'Absent',
      statusClass: 'bg-light-danger',
      statusText: 'Absent',
    },
    {
      id: 4,
      name: 'June R. Smith',
      profession: 'Prof. Arts',
      profilePic: '../assets/images/profile/user4.jpg',
      hourRate: '$150/hour',
      extraClasses: '+27',
      status: 'On Leave',
      statusClass: 'bg-light-warning',
      statusText: 'On Leave',
    },
  ];

  const clientsData = [
    {
      id: 1,
      name: 'Complete Product Name 1',
      role: 'Web Developer',
      payment: '₹ 100/-',
      image: TopPrd,
    },
    {
      id: 2,
      name: 'Complete Product Name 2',
      role: 'Web Developer',
      payment: '₹ 100/-',
      image: TopPrd,
    },
    // Add more clients as needed
  ];
  return (
    <>
      <div className="row">
        {/* <div className="col-lg-4 d-flex align-items-stretch">
          <div className="card w-100">
            <div class="d-flex m-4 justify-content-between align-items-center">
              <h5 class="mb-0 fw-bold">Top Paying Clients</h5>
            </div>
            <hr />
            <div className="row mt-4 mx-4">
              <div className="col-lg-4">
                <img className="w-100 rounded-4 shadow" src={TopPrd} alt="" />
              </div>
              <div className="col-lg-8">
                <h6 class="user-name mt-3">Complete Product Name</h6>
                <span class="user-work fs-3">Web Developer</span>
                <h4 className="fw-bold">₹ 100/-</h4>
              </div>
            </div>
            <div className="row mt-4 mx-4">
              <div className="col-lg-4">
                <img className="w-100 rounded-4 shadow" src={TopPrd} alt="" />
              </div>
              <div className="col-lg-8">
                <h6 class="user-name mt-3">Complete Product Name</h6>
                <span class="user-work fs-3">Web Developer</span>
                <h4 className="fw-bold">₹ 100/-</h4>
              </div>
            </div>
          </div>
        </div> */}
         <div className="col-lg-4 d-flex align-items-stretch">
      <div className="card w-100">
        <div className="d-flex m-4 justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold">Top Paying Clients</h5>
        </div>
        <hr />
        {clientsData.map(client => (
          <div className="row mt-4 mx-4" key={client.id}>
            <div className="col-lg-4">
              <img className="w-100 rounded-4 shadow" src={client.image} alt={client.name} />
            </div>
            <div className="col-lg-8">
              <h6 className="user-name mt-3">{client.name}</h6>
              <span className="user-work fs-3">{client.role}</span>
              <h4 className="fw-bold">{client.payment}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  
        <div className="col-lg-8 d-flex align-items-stretch">
      <div className="card w-100">
        <div className="card-body p-4">
          <div className="d-flex mb-4 justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">Top Paying Clients</h5>
            <div className="dropdown">
              <button
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="rounded-circle btn-transparent rounded-circle btn-sm px-1 btn shadow-none"
              >
                <i className="ti ti-dots-vertical fs-7 d-block" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className="table-responsive" data-simplebar="">
            <table className="table table-borderless align-middle text-nowrap">
              <thead>
                <tr>
                  <th scope="col">Profile</th>
                  <th scope="col">Hour Rate</th>
                  <th scope="col">Extra classes</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="me-4">
                          <img
                            src={client.profilePic}
                            width={50}
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bolder">{client.name}</h6>
                          <p className="fs-3 mb-0">{client.profession}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">{client.hourRate}</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0 text-success">{client.extraClasses}</p>
                    </td>
                    <td>
                      <span className={`badge ${client.statusClass} rounded-pill text-success px-3 py-2 fs-3`}>
                        {client.statusText}
                      </span>
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
  );
};

export default UpcoingOrder;
