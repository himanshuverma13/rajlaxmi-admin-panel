import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../Common/Navbar/navbar";
import Sidebar from '../../Common/SideBar/sidebar';
import ProductSlider from '../../Common/ProductSlider/productslier';
import { UserContext } from '../../Common/UseContext/usecontext';
import { LuDot } from 'react-icons/lu';
import { GetProductAPI } from '../../Common/APIs/api';
import Product1 from "../../Assets/images/products/s11.jpg";
import dummy from "../../Assets/images/products/dummy.jpg";
const ProductDetails = () => {
  const { CurrentProductDetails,FirstPrdEdit } = useContext(UserContext);
  console.log('FirstPrdEdit: ', FirstPrdEdit);
   const [productDetails, setProductDetails] = useState([]);
  //  const defaultImg = productDetails[1]?.product_image ? JSON?.parse(productDetails[1]?.product_image) : [Product1, Product1]
  //  const CurrentImg = CurrentProductDetails?.product_image ? JSON?.parse(CurrentProductDetails?.product_image) : [Product1, Product1]

  // Ensure there's an item at index 1 before accessing it
const defaultImg = productDetails?.length > 1 && productDetails[1]?.product_image 
? JSON.parse(productDetails[1]?.product_image) 
: JSON.parse(FirstPrdEdit?.product_image) || [Product1, Product1];

// Check if CurrentProductDetails and its image exist
const CurrentImg = CurrentProductDetails?.product_image 
? JSON.parse(CurrentProductDetails?.product_image) 
: JSON.parse(FirstPrdEdit?.product_image) || [Product1, Product1]

  const fetchProducts = async () => {
    const response = await GetProductAPI();
    setProductDetails((response?.products)?.reverse());
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);
  

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

            {/* Main Content */}
            <div class="shop-detail">
              <div class="card shadow-none border">
                <div className='mt-2 mx-5'>
                  <h2 className='fw-bolder'>Product Details</h2>
                  <p className='text-dark'>Dashboard <LuDot /> Product <LuDot /> <span className='text-muted'>Product Details</span>
                  </p>
                </div>
                <div class="card-body pb-8">
                  <div class="row gap-3 p-4">
                    <div class="col-lg-6">
                      <ProductSlider prdImg={CurrentImg || defaultImg  } />
                    </div>
                    <div class="col-lg-5 pt-3">
                      <div class="shop-content">
                        {/* <div class="d-flex align-items-center gap-2 mb-2">
                          <span class="badge text-bg-success fs-2 fw-semibold">In Stock</span>
                        </div> */}
                    
                        <h4>{CurrentProductDetails?.product_name || productDetails[0]?.product_name || ""}</h4>
                        <p class="mb-3 text-truncate w-75">{CurrentProductDetails?.product_description || productDetails[0]?.product_description || ''}</p>
                        <h4 class="mb-3">
                       ₹ {CurrentProductDetails?.product_price || productDetails[0]?.product_price || ''}
                        </h4>
                        {/* <div class="d-flex align-items-center gap-8 pb-4 border-bottom">
                          <ul class="list-unstyled d-flex align-items-center mb-0">
                            <li>
                              <a class="me-1" href="#">
                                <i class="ti ti-star text-warning fs-4"></i>
                              </a>
                            </li>
                            <li>
                              <a class="me-1" href="#">
                                <i class="ti ti-star text-warning fs-4"></i>
                              </a>
                            </li>
                            <li>
                              <a class="me-1" href="#">
                                <i class="ti ti-star text-warning fs-4"></i>
                              </a>
                            </li>
                            <li>
                              <a class="me-1" href="#">
                                <i class="ti ti-star text-warning fs-4"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="ti ti-star text-warning fs-4"></i>
                              </a>
                            </li>
                          </ul>
                          <a href="#">(236 reviews)</a>
                        </div> */}

                        {/* <div class="d-flex align-items-center justify-content-between gap-8 py-7">
                          <h6 class="mb-0 fs-4">Category:</h6>
                          <div class="fw-bold d-block text-primary p-3">{CurrentProductDetails?.product_category || productDetails[0]?.product_category || ""}</div>
                        </div> */}
                        <div class="d-flex align-items-center justify-content-between gap-8 pb-7">
                          <h6 class="mb-0 fs-4">Stock :</h6>
                          <div class="fw-bold d-block text-primary p-3">{CurrentProductDetails?.product_stock || productDetails[0]?.product_stock || ""}</div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-7 pb-7  border-bottom">
                          <h6 class="mb-0 fs-4">Size :</h6>
                          <div class="fw-bold d-block text-primary p-3">{CurrentProductDetails?.product_quantity || productDetails[0]?.product_quantity || ""}</div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-7 pb-7 mb-7 border-bottom">
                          <h6 class="mb-0 fs-4">Category :</h6>
                          <div class="fw-bold d-block text-primary p-3">{CurrentProductDetails?.product_category || productDetails[0]?.product_website_name || ""}</div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="card shadow-none border">
                <div class="card-body py-2 px-4">
                
                  <div class="pt-2">
                     <h1 className='border-bottom'>Description</h1>
                      <p class="fs-5 mb-7">
                      {CurrentProductDetails?.product_description || productDetails[0]?.product_description}
                      </p>
                   
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductDetails;
