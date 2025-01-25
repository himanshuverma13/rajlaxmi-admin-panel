import React, { useContext } from 'react'
import Navbar from "../../Common/Navbar/navbar";
import Sidebar from '../../Common/SideBar/sidebar';
import ProductSlider from '../../Common/ProductSlider/productslier';
import { UserContext } from '../../Common/UseContext/usecontext';
import { LuDot } from 'react-icons/lu';
const ProductDetails = () => {
  const { CurrentProductDetails } = useContext(UserContext);

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
               <div className='mt-2 mx-5  '>
               <h2 className='fw-bolder'>Product Details</h2>
                <p className='text-dark'>Dashboard <LuDot /> Product <LuDot /> <span className='text-muted'>Product Details</span>
                </p>
               </div>
                <div class="card-body pb-8">
                  <div class="row gap-3 p-4">
                    <div class="col-lg-6">
                      <ProductSlider />
                    </div>
                    <div class="col-lg-5">
                      <div class="shop-content">
                        <div class="d-flex align-items-center gap-2 mb-2">
                          <span class="badge text-bg-success fs-2 fw-semibold">In Stock</span>
                          <span class="fs-2">books</span>
                        </div>
                        <h4>Curology Face wash</h4>
                        <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu, tincidunt
                          bibendum felis.</p>
                        <h4 class="mb-3">
                          <del class="fs-5 text-muted">$350</del> $275
                        </h4>
                        <div class="d-flex align-items-center gap-8 pb-4 border-bottom">
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
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-8 py-7">
                          <h6 class="mb-0 fs-4">Colors:</h6>
                          <a class="rounded-circle d-block text-bg-primary p-3" href="#"></a>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-7 pb-7 mb-7 border-bottom">
                          <h6 class="mb-0 fs-4">QTY:</h6>
                          <div class="input-group input-group-sm rounded">
                            <button class="btn minus min-width-40 py-0 border-end border-muted fs-5 border-end-0 text-muted" type="button" id="add1">
                              <i class="ti ti-minus"></i>
                            </button>
                            <input type="text" class="min-width-40 flex-grow-0 border border-muted text-muted fs-4 fw-semibold form-control text-center qty" placeholder="" aria-label="Example text with button addon" aria-describedby="add1" value="1" />
                            <button class="btn min-width-40 py-0 border border-muted fs-5 border-start-0 text-muted add" type="button" id="addo2">
                              <i class="ti ti-plus"></i>
                            </button>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-evenly pt-2 mb-7">
                          <button type='button' class="btn d-block btn-primary px-5 py-2">Buy Now</button>
                          <button type='button' class="btn d-block btn-danger px-7 py-2">Add to Cart</button>
                        </div>
                        <p class="mb-0">Dispatched in 2-3 weeks</p>
                        <a href="javascript:void(0)">Why the longer time for delivery?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card shadow-none border">
                <div class="card-body p-4">
                  <ul class="nav nav-pills user-profile-tab border-bottom" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description" type="button" role="tab" aria-controls="pills-description" aria-selected="true">
                        Description
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="false" tabindex="-1">
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content pt-4" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab" tabindex="0">
                      <h5 class="fs-5 mb-7">
                        Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem
                        pellentesque eu tincidunt a, aliquet sit amet lorem.
                      </h5>
                      <p class="mb-7">
                        Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum
                        ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis
                        vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim.
                      </p>
                      <p class="mb-0">
                        Vivamus quis metus in nunc semper efficitur eget vitae diam. Proin justo diam, venenatis sit amet
                        eros in, iaculis auctor magna. Pellentesque sit amet accumsan urna, sit
                        amet pretium ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae;
                      </p>
                    </div>
                    <div class="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabindex="0">
                      <div class="row">
                        <div class="col-lg-4 d-flex align-items-stretch">
                          <div class="card shadow-none border w-100 mb-7 mb-lg-0">
                            <div class="card-body text-center p-4 d-flex flex-column justify-content-center">
                              <h6 class="mb-3">Average Rating</h6>
                              <h2 class="text-primary mb-3 fw-semibold fs-9">4/5</h2>
                              <ul class="list-unstyled d-flex align-items-center justify-content-center mb-0">
                                <li>
                                  <a class="me-1" href="javascript:void(0)">
                                    <i class="ti ti-star text-warning fs-6"></i>
                                  </a>
                                </li>
                                <li>
                                  <a class="me-1" href="javascript:void(0)">
                                    <i class="ti ti-star text-warning fs-6"></i>
                                  </a>
                                </li>
                                <li>
                                  <a class="me-1" href="javascript:void(0)">
                                    <i class="ti ti-star text-warning fs-6"></i>
                                  </a>
                                </li>
                                <li>
                                  <a class="me-1" href="javascript:void(0)">
                                    <i class="ti ti-star text-warning fs-6"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)">
                                    <i class="ti ti-star text-warning fs-6"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-stretch">
                          <div class="card shadow-none border w-100 mb-7 mb-lg-0">
                            <div class="card-body p-4 d-flex flex-column justify-content-center">
                              <div class="d-flex align-items-center gap-9 mb-3">
                                <span class="flex-shrink-0 fs-2">1 Stars</span>
                                <div class="progress bg-primary-subtle w-100 h-4">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{ width: "45%" }}></div>
                                </div>
                                <h6 class="mb-0">(485)</h6>
                              </div>
                              <div class="d-flex align-items-center gap-9 mb-3">
                                <span class="flex-shrink-0 fs-2">2 Stars</span>
                                <div class="progress bg-primary-subtle w-100 h-4">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                                </div>
                                <h6 class="mb-0">(215)</h6>
                              </div>
                              <div class="d-flex align-items-center gap-9 mb-3">
                                <span class="flex-shrink-0 fs-2">3 Stars</span>
                                <div class="progress bg-primary-subtle w-100 h-4">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}></div>
                                </div>
                                <h6 class="mb-0">(110)</h6>
                              </div>
                              <div class="d-flex align-items-center gap-9 mb-3">
                                <span class="flex-shrink-0 fs-2">4 Stars</span>
                                <div class="progress bg-primary-subtle w-100 h-4">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                </div>
                                <h6 class="mb-0">(620)</h6>
                              </div>
                              <div class="d-flex align-items-center gap-9">
                                <span class="flex-shrink-0 fs-2">5 Stars</span>
                                <div class="progress bg-primary-subtle w-100 h-4">
                                  <div class="progress-bar" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style={{ width: "12%" }}></div>
                                </div>
                                <h6 class="mb-0">(160)</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-stretch">
                          <div class="card shadow-none border w-100 mb-7 mb-lg-0">
                            <div class="card-body p-4 d-flex flex-column justify-content-center">
                              <button type="button" class="btn btn-outline-primary d-flex align-items-center gap-2 mx-auto">
                                <i class="ti ti-pencil fs-7"></i>Write an Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductDetails;
