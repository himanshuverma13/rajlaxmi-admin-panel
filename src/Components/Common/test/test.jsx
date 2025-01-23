// src/AccordionTable.js

import React from 'react';

const AccordionTable = () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      city: 'New York',
      country: 'USA',
      details: 'John is a software engineer from New York, USA.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      city: 'London',
      country: 'UK',
      details: 'Jane is a data scientist based in London, UK.'
    },
    {
      id: 3,
      name: 'Mark Wilson',
      age: 45,
      city: 'Sydney',
      country: 'Australia',
      details: 'Mark is a project manager in Sydney, Australia.'
    },
  ];

  return (
    <div className="container mt-5">
      <h3>Accordion Table Example</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <>
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>{row.country}</td>
              <td>
                <button
                  className="btn btn-info"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${row.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${row.id}`}
                >
                  Show Details
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="6">
                <div className="collapse" id={`collapse-${row.id}`}>
                  <div className="card card-body">
                    {row.details}
                  </div>
                </div>
              </td>
            </tr>
            </>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccordionTable;
