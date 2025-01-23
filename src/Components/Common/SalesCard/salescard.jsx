import React from 'react'
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";
import { MdBarChart } from "react-icons/md";

const SalesCard = () => {
    const SalesCardData = [
        {
            count: "178+",
            text: "Total Order",
            icon: <FaHeart className='' />,
            bgColor: "bg-primary bg-opacity-10",
            textColor: "text-primary"
        },
        {
            count: "20+",
            text: "Total Sales",
            icon:<MdBarChart className='' />,
            bgColor: "bg-warning bg-opacity-10",
            textColor: "text-warning"
        },
        {
            count: "190+",
            text: "Total Profit",
            icon: <FaShoppingBag className='' />,
            bgColor: "bg-danger bg-opacity-10",
            textColor: "text-danger"
        },
        {
            count: "12+",
            text: "Total Products",
            icon: <HiBriefcase className='' />,
            bgColor: "bg-info bg-opacity-10",
            textColor: "text-info"
        }
    ]
    return (
        <>
            <div className="row g-4">
                {SalesCardData.map((item, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card border-0 shadow-sm rounded-4 p-3">
                            <div className="d-flex align-items-center">
                                <div className={`px-2 py-1 rounded-circle ${item.bgColor} ${item.textColor}`}>
                                    {/* <i className={`${item.icon} fs-3`}></i> */}
                                    {item.icon}
                                </div>
                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1">{item.count}</h5>
                                    <p className="text-muted mb-0">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default SalesCard;
