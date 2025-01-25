// import React from "react";
// import { FaEllipsisV } from "react-icons/fa";

// const ProductTable = () => {
//   const productData = [
//     {
//       id: 1,
//       image: "https://via.placeholder.com/50",
//       name: "Urban Explorer Sneakers",
//       category: "Accessories",
//       createdAt: "28 Dec 2024",
//       time: "6:34 pm",
//       stock: "out of stock",
//       stockStatus: "danger",
//       price: "$83.74",
//       publish: "Draft",
//       publishClass: "secondary"
//     },
//     {
//       id: 2,
//       image: "https://via.placeholder.com/50",
//       name: "Classic Leather Loafers",
//       category: "Shoes",
//       createdAt: "27 Dec 2024",
//       time: "5:34 pm",
//       stock: "72 in stock",
//       stockStatus: "success",
//       price: "$97.14",
//       publish: "Published",
//       publishClass: "info"
//     },
//     {
//       id: 3,
//       image: "https://via.placeholder.com/50",
//       name: "Mountain Trekking Boots",
//       category: "Apparel",
//       createdAt: "26 Dec 2024",
//       time: "4:34 pm",
//       stock: "10 low stock",
//       stockStatus: "warning",
//       price: "$68.71",
//       publish: "Published",
//       publishClass: "info"
//     },
//     {
//       id: 4,
//       image: "https://via.placeholder.com/50",
//       name: "Elegance Stiletto Heels",
//       category: "Shoes",
//       createdAt: "25 Dec 2024",
//       time: "3:34 pm",
//       stock: "72 in stock",
//       stockStatus: "success",
//       price: "$85.21",
//       publish: "Draft",
//       publishClass: "secondary"
//     }
//   ];

//   return (
//     <div className="container mt-4">
//     <div className="table-responsive">
//     <table className="table align-middle table-hover">
//         <thead className="table-light">
//           <tr>
//             <th>
//               <input type="checkbox" />
//             </th>
//             <th>Product</th>
//             <th>Create at</th>
//             <th>Stock</th>
//             <th>Price</th>
//             <th>Publish</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {productData.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>
//                 <div className="d-flex align-items-center">
//                   <img src={item.image} className="rounded me-2" alt="product" />
//                   <div>
//                     <strong>{item.name}</strong>
//                     <br />
//                     <small className="text-muted">{item.category}</small>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <span>{item.createdAt}</span>
//                 <br />
//                 <small className="text-muted">{item.time}</small>
//               </td>
//               <td>
//                 <span className={`badge bg-${item.stockStatus}`}>{item.stock}</span>
//               </td>
//               <td>{item.price}</td>
//               <td>
//                 <span className={`badge bg-${item.publishClass}`}>{item.publish}</span>
//               </td>
//               <td>
//                 <button className="btn btn-light btn-sm">
//                   <FaEllipsisV />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//       <div className="d-flex justify-content-between align-items-center mt-3">
//         <span>Rows per page: 10</span>
//         <span>1-10 of {productData.length}</span>
//       </div>
//     </div>
//   );
// };

// export default ProductTable;
