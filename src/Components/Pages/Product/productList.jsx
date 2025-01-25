import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Common/SideBar/sidebar";
import Navbar from "../../Common/Navbar/navbar";

// Images
import Product1 from "../../Assets/images/products/s11.jpg";
import Product2 from "../../Assets/images/products/s4.jpg";
import Product3 from "../../Assets/images/products/s5.jpg";
import Product4 from "../../Assets/images/products/s7.jpg";

// React-Icons
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { DeleteProductAPI, GetProductAPI } from "../../Common/APIs/api";
import { UserContext } from "../../Common/UseContext/usecontext";
import { LuDot } from "react-icons/lu";

// Sample Product Data

const Product = () => {
  // const [productDetails, setProductDetails] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // const { setCurrentProductDetails } = useContext(UserContext);

  // const fetchProducts = async () => {
  //   const response = await GetProductAPI();
  //   setProductDetails(response?.products);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // useEffect(() => {
  //   // Filter products by search query when the search query or all products change
  //   setFilteredProducts(
  //     productDetails?.filter((product) =>
  //       product?.product_name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  //     )
  //   );
  // }, [searchQuery, productDetails]);


  const [productDetails, setProductDetails] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
const [filteredProducts, setFilteredProducts] = useState([]);
const [stockFilter, setStockFilter] = useState("all"); // New state to handle stock filter

const { setCurrentProductDetails } = useContext(UserContext);

const fetchProducts = async () => {
  const response = await GetProductAPI();
  setProductDetails(response?.products);
};

useEffect(() => {
  fetchProducts();
}, []);

console.log('filteredProducts: ', filteredProducts);
useEffect(() => {
  // Filter products by search query and stock filter
  let filtered = productDetails?.filter((product) =>
    product?.product_name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  if (stockFilter === "more") {
    filtered = filtered?.filter((product) => product?.product_stock > 5);
  } else if (stockFilter === "less") {
    filtered = filtered?.filter((product) => product?.product_stock < 5);
  }

  setFilteredProducts(filtered);
}, [searchQuery, productDetails, stockFilter]);

  const handleProductDelete = async (item) => {
    try {
      const response = await DeleteProductAPI(item?.product_id);
      // setProductDetails(updatedProducts);
      // setDeleteConfirm(false);
      fetchProducts();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  //   productDetails

  const handleProductView = (item) => {
    setCurrentProductDetails(item);
  };
  const handleProductEdit = (item) => {
    setCurrentProductDetails(item);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3); // You can adjust the number of products per page

  // Calculate the index of the last and first product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the total number of pages
  const totalPages = Math?.ceil(filteredProducts?.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <Sidebar />

      <div className="body-wrapper">
        <div className="container-fluid">
          <Navbar />
          <div className="product-list">
            <div className="card">
              <div className="mt-3 px-4">
                <h2 className="fw-bolder">Product List</h2>
                <p className="text-dark">
                  Dashboard <LuDot /> Product <LuDot />{" "}
                  <span className="text-muted">Product List</span>
                </p>
              </div>
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center gap-6 mb-3">
                  <form className="row w-50">
                  <select
                    className="form-select col-lg-2 w-50"
                    aria-label="Default select example"
                    value={stockFilter}
                    onChange={(e) => setStockFilter(e.target.value)} // Update stock filter state
                  >
                    <option value="all">Stock</option>
                    <option value="more">+5</option>
                    <option value="less">-5</option>
                  </select>
                    <div className="col-lg-6 position-relative">
                      <input
                        type="text"
                        className="form-control search-chat py-2 ps-5"
                        id="text-srh"
                        placeholder="Search Product"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
                    </div>
                  </form>
                  <a
                    className="fs-6 text-muted"
                    href="#!"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Filter list"
                  >
                    <i className="ti ti-filter"></i>
                  </a>
                </div>

                <div className="table-responsive border rounded">
                  <table className="table align-middle table-hover text-nowrap mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">S No.</th>
                        <th scope="col">Products</th>
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentProducts?.map((product, index) => (
                        <tr key={product.id}>
                          <td className="fw-bold">
                            {indexOfFirstProduct + index + 1}
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={Product1}
                                className="rounded-3"
                                alt={product?.product_name}
                                width="56"
                                height="56"
                              />
                              <div className="ms-3">
                                <h6 className="mb-0 fs-4">
                                  {product.product_name}
                                </h6>
                                <p className="mb-0">
                                  {product?.product_website_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0">
                              {new Date(product?.date)?.toLocaleDateString()}
                            </p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_price}</p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_quantity}</p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_stock}</p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_quantity}</p>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="true"
                                className="rounded-circle btn-transparent btn-sm px-1 btn shadow-none"
                              >
                                <i className="ti ti-dots-vertical fs-7 d-block" />
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-end bg-gradient"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <NavLink to={"/productdetails"}>
                                  <li
                                    onClick={() => handleProductView(product)}
                                  >
                                    <a className="dropdown-item fw-bold text-dark">
                                      <FaEye className="fs-2 me-3" />
                                      View
                                    </a>
                                  </li>
                                </NavLink>
                                <NavLink to={"/productedit"}>
                                  <li
                                    onClick={() => handleProductEdit(product)}
                                  >
                                    <a className="dropdown-item fw-bold text-dark">
                                      <FaPen className="fs-2 me-3" />
                                      Edit
                                    </a>
                                  </li>
                                </NavLink>
                                <li
                                  onClick={() => handleProductDelete(product)}
                                >
                                  <a className="dropdown-item text-danger fw-bold">
                                    <RiDeleteBin5Fill className="fs-3 me-3" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Pagination Controls */}
              <div className="d-flex align-items-center justify-content-end pb-3">
                <div
                  className="fs-5 me-2"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <i className="ti ti-chevron-left fs-5" />
                </div>
                <span className="fs-5">
                  Page {currentPage} of {totalPages}
                </span>
                <div
                  className="fs-5 ms-2 me-5"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <i className="ti ti-chevron-right fs-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
