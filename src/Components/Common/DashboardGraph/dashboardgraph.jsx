import React from 'react'
import BarChart from '../Charts/bargraph'
import DonutChart from '../Charts/DonutChart'

const DashboardGraph = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-8 d-flex align-items-strech">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-10">
                                <div className="">
                                    <h5 className="card-title fw-semibold">
                                        Profit &amp; Expenses
                                    </h5>
                                </div>
                                <div className="dropdown">
                                    <button
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        className="rounded-circle btn-transparent rounded-circle btn-sm px-1 btn shadow-none"
                                    >
                                        <i className="ti ti-dots-vertical fs-7 d-block" />
                                    </button>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="profit" />
                            <BarChart/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12 col-sm-6">
                            {/* Yearly Breakup */}
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-10 fw-semibold">
                                        Traffic Distribution
                                    </h5>
                                    <div className="row align-items-center">
                                        <div className="col-7">
                                            <h4 className="fw-semibold mb-3">$36,358</h4>
                                            <div className="d-flex align-items-center mb-2">
                                                <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-arrow-up-left text-success" />
                                                </span>
                                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                <p className="fs-3 mb-0">last year</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="me-3">
                                                    <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                                                    <span className="fs-2">Oragnic</span>
                                                </div>
                                                <div>
                                                    <span className="round-8 bg-danger rounded-circle me-2 d-inline-block" />
                                                    <span className="fs-2">Refferal</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="d-flex justify-content-center">
                                                <div id="grade" />
                                                <DonutChart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-6">
                            {/* Monthly Earnings */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="row alig n-items-start">
                                        <div className="col-8">
                                            <h5 className="card-title mb-10 fw-semibold">
                                                {" "}
                                                Product Sales
                                            </h5>
                                            <h4 className="fw-semibold mb-3">$6,820</h4>
                                            <div className="d-flex align-items-center pb-1">
                                                <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-arrow-down-right text-danger" />
                                                </span>
                                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                <p className="fs-3 mb-0">last year</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="d-flex justify-content-end">
                                                <div className="text-white bg-danger rounded-circle p-7 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-currency-dollar fs-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="earning" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardGraph
