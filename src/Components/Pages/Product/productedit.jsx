import React from 'react'
import Navbar from '../../Common/Navbar/navbar';
import Sidebar from '../../Common/SideBar/sidebar';

const ProductEdit = () => {
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
                {/* Sidebar Start */}
                <Sidebar />
                {/*  Sidebar End */}

                {/*  Main wrapper */}
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <Navbar />

                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-7">
                                            <h4 className="card-title">General</h4>
                                            <button
                                                className="navbar-toggler border-0 shadow-none d-lg-none"
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasRight"
                                                aria-controls="offcanvasRight"
                                            >
                                                <i className="ti ti-menu fs-5 d-flex" />
                                            </button>
                                        </div>
                                        <form action="" className="form-horizontal">
                                            <div className="mb-4">
                                                <label className="form-label">
                                                    Product Name <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product Name"
                                                    defaultValue="Sample product"
                                                />
                                                <p className="fs-2">
                                                    A product name is required and recommended to be unique.
                                                </p>
                                            </div>
                                            <div>
                                                <label className="form-label">Description</label>
                                                <div className="ql-toolbar ql-snow">
                                                    <span className="ql-formats">
                                                        <span className="ql-header ql-picker">
                                                            <span
                                                                className="ql-picker-label"
                                                                tabIndex={0}
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="ql-picker-options-0"
                                                            >
                                                                <svg viewBox="0 0 18 18">
                                                                    {" "}
                                                                    <polygon
                                                                        className="ql-stroke"
                                                                        points="7 11 9 13 11 11 7 11"
                                                                    />
                                                                    <polygon
                                                                        className="ql-stroke"
                                                                        points="7 7 9 5 11 7 7 7"
                                                                    />{" "}
                                                                </svg>
                                                            </span>
                                                            <span
                                                                className="ql-picker-options"
                                                                aria-hidden="true"
                                                                tabIndex={-1}
                                                                id="ql-picker-options-0"
                                                            >
                                                                <span
                                                                    tabIndex={0}
                                                                    role="button"
                                                                    className="ql-picker-item"
                                                                    data-value={1}
                                                                />
                                                                <span
                                                                    tabIndex={0}
                                                                    role="button"
                                                                    className="ql-picker-item"
                                                                    data-value={2}
                                                                />
                                                                <span
                                                                    tabIndex={0}
                                                                    role="button"
                                                                    className="ql-picker-item"
                                                                    data-value={3}
                                                                />
                                                                <span
                                                                    tabIndex={0}
                                                                    role="button"
                                                                    className="ql-picker-item ql-selected"
                                                                />
                                                            </span>
                                                        </span>
                                                        <select className="ql-header" style={{ display: "none" }}>
                                                            <option value={1} />
                                                            <option value={2} />
                                                            <option value={3}></option>
                                                            <option selected="selected" />
                                                        </select>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button type="button" className="ql-bold">
                                                            <svg viewBox="0 0 18 18">
                                                                <path
                                                                    className="ql-stroke"
                                                                    d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                                                />
                                                                <path
                                                                    className="ql-stroke"
                                                                    d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                                                />{" "}
                                                            </svg>
                                                        </button>
                                                        <button type="button" className="ql-italic">
                                                            <svg viewBox="0 0 18 18">
                                                                {" "}
                                                                <line className="ql-stroke" x1={7} x2={13} y1={4} y2={4} />
                                                                <line
                                                                    className="ql-stroke"
                                                                    x1={5}
                                                                    x2={11}
                                                                    y1={14}
                                                                    y2={14}
                                                                />{" "}
                                                                <line className="ql-stroke" x1={8} x2={10} y1={14} y2={4} />
                                                            </svg>
                                                        </button>
                                                        <button type="button" className="ql-underline">
                                                            <svg viewBox="0 0 18 18">
                                                                {" "}
                                                                <path
                                                                    className="ql-stroke"
                                                                    d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                                                />
                                                                <rect
                                                                    className="ql-fill"
                                                                    height={1}
                                                                    rx="0.5"
                                                                    ry="0.5"
                                                                    width={12}
                                                                    x={3}
                                                                    y={15}
                                                                />{" "}
                                                            </svg>
                                                        </button>
                                                        <button type="button" className="ql-link">
                                                            <svg viewBox="0 0 18 18">
                                                                {" "}
                                                                <line className="ql-stroke" x1={7} x2={11} y1={7} y2={11} />
                                                                <path
                                                                    className="ql-even ql-stroke"
                                                                    d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                                                                />
                                                                <path
                                                                    className="ql-even ql-stroke"
                                                                    d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                                                                />{" "}
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button type="button" className="ql-list" value="ordered">
                                                            <svg viewBox="0 0 18 18">
                                                                <line className="ql-stroke" x1={7} x2={15} y1={4} y2={4} />{" "}
                                                                <line className="ql-stroke" x1={7} x2={15} y1={9} y2={9} />
                                                                <line
                                                                    className="ql-stroke"
                                                                    x1={7}
                                                                    x2={15}
                                                                    y1={14}
                                                                    y2={14}
                                                                />{" "}
                                                                <line
                                                                    className="ql-stroke ql-thin"
                                                                    x1="2.5"
                                                                    x2="4.5"
                                                                    y1="5.5"
                                                                    y2="5.5"
                                                                />
                                                                <path
                                                                    className="ql-fill"
                                                                    d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                                                                />
                                                                <path
                                                                    className="ql-stroke ql-thin"
                                                                    d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                                                                />
                                                                <path
                                                                    className="ql-stroke ql-thin"
                                                                    d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                                                                />{" "}
                                                            </svg>
                                                        </button>
                                                        <button type="button" className="ql-list" value="bullet">
                                                            <svg viewBox="0 0 18 18">
                                                                <line className="ql-stroke" x1={6} x2={15} y1={4} y2={4} />
                                                                <line className="ql-stroke" x1={6} x2={15} y1={9} y2={9} />
                                                                <line
                                                                    className="ql-stroke"
                                                                    x1={6}
                                                                    x2={15}
                                                                    y1={14}
                                                                    y2={14}
                                                                />
                                                                <line className="ql-stroke" x1={3} x2={3} y1={4} y2={4} />
                                                                <line className="ql-stroke" x1={3} x2={3} y1={9} y2={9} />
                                                                <line className="ql-stroke" x1={3} x2={3} y1={14} y2={14} />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button type="button" className="ql-clean">
                                                            <svg className="" viewBox="0 0 18 18">
                                                                <line className="ql-stroke" x1={5} x2={13} y1={3} y2={3} />{" "}
                                                                <line
                                                                    className="ql-stroke"
                                                                    x1={6}
                                                                    x2="9.35"
                                                                    y1={12}
                                                                    y2={3}
                                                                />
                                                                <line
                                                                    className="ql-stroke"
                                                                    x1={11}
                                                                    x2={15}
                                                                    y1={11}
                                                                    y2={15}
                                                                />{" "}
                                                                <line
                                                                    className="ql-stroke"
                                                                    x1={15}
                                                                    x2={11}
                                                                    y1={11}
                                                                    y2={15}
                                                                />
                                                                <rect
                                                                    className="ql-fill"
                                                                    height={1}
                                                                    rx="0.5"
                                                                    ry="0.5"
                                                                    width={7}
                                                                    x={2}
                                                                    y={14}
                                                                />{" "}
                                                            </svg>
                                                        </button>
                                                    </span>
                                                </div>
                                                <div id="editor" className="ql-container ql-snow">
                                                    <div
                                                        className="ql-editor ql-blank"
                                                        data-gramm="false"
                                                        contentEditable="true"
                                                    >
                                                        <p>
                                                            <br />
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="ql-clipboard"
                                                        contentEditable="true"
                                                        tabIndex={-1}
                                                    />
                                                    <div className="ql-tooltip ql-hidden">
                                                        <a
                                                            className="ql-preview"
                                                            rel="noopener noreferrer"
                                                            target="_blank"
                                                            href="about:blank"
                                                        />
                                                        <input
                                                            type="text"
                                                            data-formula="e=mc^2"
                                                            data-link="https://quilljs.com"
                                                            data-video="Embed URL"
                                                        />
                                                        <a className="ql-action" />
                                                        <a className="ql-remove" />
                                                    </div>
                                                </div>
                                                <p className="fs-2 mb-0">
                                                    Set a description to the product for better visibility.
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-7">Media</h4>
                                        <form action="#" className="dropzone dz-clickable mb-2">
                                            <div className="dz-default dz-message">
                                                <button className="dz-button" type="button">
                                                    Drop files here to upload
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-7">Variation</h4>
                                        <form action="">
                                            <label className="form-label">Add Product Variations</label>
                                            <div className="email-repeater mb-3">
                                                <div data-repeater-list="repeater-group">
                                                    <div data-repeater-item="" className="row mb-3">
                                                        <div className="col-md-4">
                                                            <select
                                                                className="select2 form-control select2-hidden-accessible"
                                                                data-select2-id="select2-data-1-2au6"
                                                                tabIndex={-1}
                                                                aria-hidden="true"
                                                            >
                                                                <option>Color</option>
                                                                <option selected="" data-select2-id="select2-data-3-0l5e">
                                                                    Size
                                                                </option>
                                                                <option>Material</option>
                                                                <option>Style</option>
                                                            </select>
                                                            <span
                                                                className="select2 select2-container select2-container--default"
                                                                dir="ltr"
                                                                data-select2-id="select2-data-2-c8wo"
                                                                style={{ width: "233.587px" }}
                                                            >
                                                                <span className="selection">
                                                                    <span
                                                                        className="select2-selection select2-selection--single"
                                                                        role="combobox"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        tabIndex={0}
                                                                        aria-disabled="false"
                                                                        aria-labelledby="select2-osf9-container"
                                                                        aria-controls="select2-osf9-container"
                                                                    >
                                                                        <span
                                                                            className="select2-selection__rendered"
                                                                            id="select2-osf9-container"
                                                                            role="textbox"
                                                                            aria-readonly="true"
                                                                            title="Size"
                                                                        >
                                                                            Size
                                                                        </span>
                                                                        <span
                                                                            className="select2-selection__arrow"
                                                                            role="presentation"
                                                                        >
                                                                            <b role="presentation" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dropdown-wrapper" aria-hidden="true" />
                                                            </span>
                                                        </div>
                                                        <div className="col-md-4 mt-3 mt-md-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Variation"
                                                            />
                                                        </div>
                                                        <div className="col-md-2 mt-3 mt-md-0">
                                                            <button
                                                                data-repeater-delete=""
                                                                className="btn bg-danger-subtle text-danger"
                                                                type="button"
                                                            >
                                                                <i className="ti ti-x fs-5 d-flex" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    data-repeater-create=""
                                                    className="btn bg-primary-subtle text-primary fs-3 fw-bold p-2"
                                                >
                                                    <span className="fs-4 me-1">+</span>
                                                    Add another variation
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-7">Pricing</h4>
                                        <form>
                                            <div className="mb-7">
                                                <label className="form-label">
                                                    Base Price <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product Price"
                                                    defaultValue="199.99"
                                                />
                                                <p className="fs-2">Set the product price.</p>
                                            </div>
                                            <div className="mb-7">
                                                <label className="form-label">Discount Type</label>
                                                <nav>
                                                    <div
                                                        className="nav nav-tabs justify-content-between align-items-center gap-9"
                                                        id="nav-tab"
                                                        role="tablist"
                                                    >
                                                        <label
                                                            htmlFor="radio1"
                                                            className="form-check-label form-check p-3  border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer"
                                                            id="customControlValidation2"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#nav-home"
                                                            aria-controls="nav-home"
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="form-check-input"
                                                                name="new-products"
                                                                id="radio1"
                                                                defaultChecked=""
                                                            />
                                                            <span className="fs-4 fw-bold text-dark">No Discount</span>
                                                        </label>
                                                        <label
                                                            htmlFor="radio2"
                                                            className="form-check-label p-3 form-check border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer"
                                                            id="customControlValidation2"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#nav-profile"
                                                            aria-controls="nav-profile"
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="form-check-input"
                                                                name="new-products"
                                                                id="radio2"
                                                            />
                                                            <span className="fs-4 fw-bold text-dark">Percentage %</span>
                                                        </label>
                                                        <label
                                                            htmlFor="radio3"
                                                            className="form-check-label form-check p-3 border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer"
                                                            id="customControlValidation2"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#nav-contact"
                                                            aria-controls="nav-contact"
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="form-check-input"
                                                                name="new-products"
                                                                id="radio3"
                                                            />
                                                            <span className="fs-4 fw-bold text-dark">Fixed Price</span>
                                                        </label>
                                                    </div>
                                                </nav>
                                                <div className="tab-content" id="nav-tabContent">
                                                    <div
                                                        className="tab-pane fade mt-7"
                                                        id="nav-profile"
                                                        role="tabpanel"
                                                        aria-labelledby="nav-profile-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="form-group">
                                                            <label className="form-label">
                                                                Set Discount Percentage{" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="range"
                                                                className="form-range"
                                                                id="customRange1"
                                                                min={0}
                                                                max={100}
                                                                step={10}
                                                            />
                                                            <p className="fs-2">
                                                                Set a percentage discount to be applied on this product.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane fade mt-7"
                                                        id="nav-contact"
                                                        role="tabpanel"
                                                        aria-labelledby="nav-contact-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="mb-7">
                                                            <label className="form-label">
                                                                Fixed Discounted Price{" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Discounted Price"
                                                            />
                                                            <p className="fs-2">
                                                                Set the discounted product price. The product will be
                                                                reduced at the determined fixed price.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">
                                                        Tax Class <span className="text-danger">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select mr-sm-2"
                                                        id="inlineFormCustomSelect"
                                                    >
                                                        <option>Select an option</option>
                                                        <option value={1}>Tax Free</option>
                                                        <option value={2} selected="">
                                                            Taxable Goods
                                                        </option>
                                                        <option value={3}>Downloadable Products</option>
                                                    </select>
                                                    <p className="fs-2">Set the product tax class.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">
                                                        VAT Amount (%) <span className="text-danger">*</span>
                                                    </label>
                                                    <input type="text" className="form-control" defaultValue={35} />
                                                    <p className="fs-2">Set the product VAT about.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-actions mb-5">
                                    <button type="submit" className="btn btn-primary">
                                        Save changes
                                    </button>
                                    <button type="button" className="btn bg-danger-subtle text-danger ms-6">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="offcanvas-lg offcanvas-end overflow-auto"
                                    tabIndex={-1}
                                    id="offcanvasRight"
                                    aria-labelledby="offcanvasRightLabel"
                                >
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title mb-7">Thumbnail</h4>
                                            <form action="#" className="dropzone dz-clickable mb-2">
                                                <div className="dz-default dz-message">
                                                    <button className="dz-button" type="button">
                                                        Drop Thumbnail here to upload
                                                    </button>
                                                </div>
                                            </form>
                                            <p className="fs-2 text-center mb-0">
                                                Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
                                                files are accepted.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between mb-7">
                                            <h4 className="card-title">Status</h4>
                                            <div className="p-2 h-100 bg-success rounded-circle" />
                                        </div>
                                        <form action="" className="form-horizontal">
                                            <div>
                                                <select
                                                    className="form-select mr-sm-2  mb-2"
                                                    id="inlineFormCustomSelect"
                                                >
                                                    <option selected="">Published</option>
                                                    <option value={1}>Draft</option>
                                                    <option value={2}>Sheduled</option>
                                                    <option value={3}>Inactive</option>
                                                </select>
                                                <p className="fs-2 mb-0">Set the product status.</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-7">Product Details</h4>
                                        <div className="mb-3">
                                            <label className="form-label">Categories</label>
                                            <select
                                                className="select2 form-control select2-hidden-accessible"
                                                multiple=""
                                                data-select2-id="select2-data-4-y2s7"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                            >
                                                <option
                                                    value=""
                                                    selected=""
                                                    data-select2-id="select2-data-6-w49j"
                                                >
                                                    Computer
                                                </option>
                                                <option
                                                    value=""
                                                    selected=""
                                                    data-select2-id="select2-data-7-zjpb"
                                                >
                                                    Watches
                                                </option>
                                                <option
                                                    value=""
                                                    selected=""
                                                    data-select2-id="select2-data-8-gubz"
                                                >
                                                    Headphones
                                                </option>
                                                <option value="">Beauty</option>
                                                <option value="">Fashion</option>
                                                <option value="">Footwear</option>
                                            </select>
                                            <span
                                                className="select2 select2-container select2-container--default"
                                                dir="ltr"
                                                data-select2-id="select2-data-5-7h9j"
                                                style={{ width: "332.388px" }}
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--multiple"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={-1}
                                                        aria-disabled="false"
                                                    >
                                                        <ul
                                                            className="select2-selection__rendered"
                                                            id="select2-wv63-container"
                                                        >
                                                            <li
                                                                className="select2-selection__choice"
                                                                title="Computer"
                                                                data-select2-id="select2-data-9-h465"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="select2-selection__choice__remove"
                                                                    tabIndex={-1}
                                                                    title="Remove item"
                                                                    aria-label="Remove item"
                                                                    aria-describedby="select2-wv63-container-choice-ete7-t978"
                                                                >
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                                <span
                                                                    className="select2-selection__choice__display"
                                                                    id="select2-wv63-container-choice-ete7-t978"
                                                                >
                                                                    Computer
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="select2-selection__choice"
                                                                title="Watches"
                                                                data-select2-id="select2-data-10-k40c"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="select2-selection__choice__remove"
                                                                    tabIndex={-1}
                                                                    title="Remove item"
                                                                    aria-label="Remove item"
                                                                    aria-describedby="select2-wv63-container-choice-05o0-lwjr"
                                                                >
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                                <span
                                                                    className="select2-selection__choice__display"
                                                                    id="select2-wv63-container-choice-05o0-lwjr"
                                                                >
                                                                    Watches
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="select2-selection__choice"
                                                                title="Headphones"
                                                                data-select2-id="select2-data-11-mxqc"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="select2-selection__choice__remove"
                                                                    tabIndex={-1}
                                                                    title="Remove item"
                                                                    aria-label="Remove item"
                                                                    aria-describedby="select2-wv63-container-choice-soyf-zclh"
                                                                >
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                                <span
                                                                    className="select2-selection__choice__display"
                                                                    id="select2-wv63-container-choice-soyf-zclh"
                                                                >
                                                                    Headphones
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <span className="select2-search select2-search--inline">
                                                            <textarea
                                                                className="select2-search__field"
                                                                type="search"
                                                                tabIndex={0}
                                                                autoCorrect="off"
                                                                autoCapitalize="none"
                                                                spellCheck="false"
                                                                role="searchbox"
                                                                aria-autocomplete="list"
                                                                autoComplete="off"
                                                                aria-label="Search"
                                                                aria-describedby="select2-wv63-container"
                                                                placeholder=""
                                                                style={{ width: "0.75em" }}
                                                                defaultValue={""}
                                                            />
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="dropdown-wrapper" aria-hidden="true" />
                                            </span>
                                            <p className="fs-2 mb-0">Add product to a category.</p>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn bg-primary-subtle text-primary fs-3 fw-bold p-2"
                                        >
                                            <span className="fs-4 me-1">+</span>
                                            Create New Category
                                        </button>
                                        <div className="mt-7">
                                            <label className="form-label">Tags</label>
                                            <select
                                                className="select2 form-control select2-hidden-accessible"
                                                multiple=""
                                                data-select2-id="select2-data-12-xj11"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                            >
                                                <option value="">New</option>
                                                <option
                                                    value=""
                                                    selected=""
                                                    data-select2-id="select2-data-14-0a2j"
                                                >
                                                    trending
                                                </option>
                                                <option value="">Headphones</option>
                                                <option
                                                    value=""
                                                    selected=""
                                                    data-select2-id="select2-data-15-707b"
                                                >
                                                    Beauty
                                                </option>
                                                <option
                                                    value=""
                                                    selected=""
                                                    data-select2-id="select2-data-16-mexu"
                                                >
                                                    Fashion
                                                </option>
                                                <option value="">Footwear</option>
                                            </select>
                                            <span
                                                className="select2 select2-container select2-container--default"
                                                dir="ltr"
                                                data-select2-id="select2-data-13-ppsf"
                                                style={{ width: "332.388px" }}
                                            >
                                                <span className="selection">
                                                    <span
                                                        className="select2-selection select2-selection--multiple"
                                                        role="combobox"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        tabIndex={-1}
                                                        aria-disabled="false"
                                                    >
                                                        <ul
                                                            className="select2-selection__rendered"
                                                            id="select2-h4gn-container"
                                                        >
                                                            <li
                                                                className="select2-selection__choice"
                                                                title="trending"
                                                                data-select2-id="select2-data-17-poxh"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="select2-selection__choice__remove"
                                                                    tabIndex={-1}
                                                                    title="Remove item"
                                                                    aria-label="Remove item"
                                                                    aria-describedby="select2-h4gn-container-choice-uxmr-bavb"
                                                                >
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                                <span
                                                                    className="select2-selection__choice__display"
                                                                    id="select2-h4gn-container-choice-uxmr-bavb"
                                                                >
                                                                    trending
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="select2-selection__choice"
                                                                title="Beauty"
                                                                data-select2-id="select2-data-18-z4z1"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="select2-selection__choice__remove"
                                                                    tabIndex={-1}
                                                                    title="Remove item"
                                                                    aria-label="Remove item"
                                                                    aria-describedby="select2-h4gn-container-choice-1s78-8hfq"
                                                                >
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                                <span
                                                                    className="select2-selection__choice__display"
                                                                    id="select2-h4gn-container-choice-1s78-8hfq"
                                                                >
                                                                    Beauty
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="select2-selection__choice"
                                                                title="Fashion"
                                                                data-select2-id="select2-data-19-ibmj"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="select2-selection__choice__remove"
                                                                    tabIndex={-1}
                                                                    title="Remove item"
                                                                    aria-label="Remove item"
                                                                    aria-describedby="select2-h4gn-container-choice-n57d-nzow"
                                                                >
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                                <span
                                                                    className="select2-selection__choice__display"
                                                                    id="select2-h4gn-container-choice-n57d-nzow"
                                                                >
                                                                    Fashion
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <span className="select2-search select2-search--inline">
                                                            <textarea
                                                                className="select2-search__field"
                                                                type="search"
                                                                tabIndex={0}
                                                                autoCorrect="off"
                                                                autoCapitalize="none"
                                                                spellCheck="false"
                                                                role="searchbox"
                                                                aria-autocomplete="list"
                                                                autoComplete="off"
                                                                aria-label="Search"
                                                                aria-describedby="select2-h4gn-container"
                                                                placeholder=""
                                                                style={{ width: "0.75em" }}
                                                                defaultValue={""}
                                                            />
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="dropdown-wrapper" aria-hidden="true" />
                                            </span>
                                            <p className="fs-2 mb-0">Add product to a category.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-2">$2,420</h4>
                                        <div className="d-flex align-items-center">
                                            <p className="fs-4 fw-base mb-0">Average Daily Sales</p>
                                            <p className="fs-2 text-success bg-success-subtle mb-0 px-2 py-1 rounded-1">
                                                2.6%
                                            </p>
                                        </div>

                                        {/* <div className="mt-7">
                                                <div id="sales" style={{ minHeight: 80 }}>
                                                    <div
                                                        id="apexchartsew8efewk"
                                                        className="apexcharts-canvas apexchartsew8efewk apexcharts-theme-light"
                                                        style={{ width: 332, height: 80 }}
                                                    >
                                                        <svg
                                                            id="SvgjsSvg1065"
                                                            width={332}
                                                            height={80}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            version="1.1"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xmlns:svgjs="http://svgjs.dev"
                                                            className="apexcharts-svg"
                                                            xmlns:data="ApexChartsNS"
                                                            transform="translate(-10, 0)"
                                                            style={{ background: "transparent" }}
                                                        >
                                                            <foreignObject x={0} y={0} width={332} height={80}>
                                                                <div
                                                                    className="apexcharts-legend"
                                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                                    style={{ maxHeight: 40 }}
                                                                />
                                                            </foreignObject>
                                                            <g
                                                                id="SvgjsG1120"
                                                                className="apexcharts-yaxis"
                                                                rel={0}
                                                                transform="translate(-18, 0)"
                                                            />
                                                            <g
                                                                id="SvgjsG1067"
                                                                className="apexcharts-inner apexcharts-graphical"
                                                                transform="translate(24.21666666666667, 0)"
                                                            >
                                                                <defs id="SvgjsDefs1066">
                                                                    <linearGradient
                                                                        id="SvgjsLinearGradient1069"
                                                                        x1={0}
                                                                        y1={0}
                                                                        x2={0}
                                                                        y2={1}
                                                                    >
                                                                        <stop
                                                                            id="SvgjsStop1070"
                                                                            stopOpacity="0.4"
                                                                            stopColor="rgba(216,227,240,0.4)"
                                                                            offset={0}
                                                                        />
                                                                        <stop
                                                                            id="SvgjsStop1071"
                                                                            stopOpacity="0.5"
                                                                            stopColor="rgba(190,209,230,0.5)"
                                                                            offset={1}
                                                                        />
                                                                        <stop
                                                                            id="SvgjsStop1072"
                                                                            stopOpacity="0.5"
                                                                            stopColor="rgba(190,209,230,0.5)"
                                                                            offset={1}
                                                                        />
                                                                    </linearGradient>
                                                                    <clipPath id="gridRectMaskew8efewk">
                                                                        <rect
                                                                            id="SvgjsRect1074"
                                                                            width={336}
                                                                            height={80}
                                                                            x="-22.21666666666667"
                                                                            y={0}
                                                                            rx={0}
                                                                            ry={0}
                                                                            opacity={1}
                                                                            strokeWidth={0}
                                                                            stroke="none"
                                                                            strokeDasharray={0}
                                                                            fill="#fff"
                                                                        />
                                                                    </clipPath>
                                                                    <clipPath id="forecastMaskew8efewk" />
                                                                    <clipPath id="nonForecastMaskew8efewk" />
                                                                    <clipPath id="gridRectMarkerMaskew8efewk">
                                                                        <rect
                                                                            id="SvgjsRect1075"
                                                                            width="295.56666666666666"
                                                                            height={84}
                                                                            x={-2}
                                                                            y={-2}
                                                                            rx={0}
                                                                            ry={0}
                                                                            opacity={1}
                                                                            strokeWidth={0}
                                                                            stroke="none"
                                                                            strokeDasharray={0}
                                                                            fill="#fff"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                                <rect
                                                                    id="SvgjsRect1073"
                                                                    width="20.04520833333333"
                                                                    height={80}
                                                                    x={0}
                                                                    y={0}
                                                                    rx={0}
                                                                    ry={0}
                                                                    opacity={1}
                                                                    strokeWidth={0}
                                                                    strokeDasharray={3}
                                                                    fill="url(#SvgjsLinearGradient1069)"
                                                                    className="apexcharts-xcrosshairs"
                                                                    y2={80}
                                                                    filter="none"
                                                                    fillOpacity="0.9"
                                                                />
                                                                <g id="SvgjsG1099" className="apexcharts-grid">
                                                                    <g
                                                                        id="SvgjsG1100"
                                                                        className="apexcharts-gridlines-horizontal"
                                                                        style={{ display: "none" }}
                                                                    >
                                                                        <line
                                                                            id="SvgjsLine1103"
                                                                            x1="-20.21666666666667"
                                                                            y1={0}
                                                                            x2="311.7833333333333"
                                                                            y2={0}
                                                                            stroke="#e0e0e0"
                                                                            strokeDasharray={0}
                                                                            strokeLinecap="butt"
                                                                            className="apexcharts-gridline"
                                                                        />
                                                                        <line
                                                                            id="SvgjsLine1104"
                                                                            x1="-20.21666666666667"
                                                                            y1={20}
                                                                            x2="311.7833333333333"
                                                                            y2={20}
                                                                            stroke="#e0e0e0"
                                                                            strokeDasharray={0}
                                                                            strokeLinecap="butt"
                                                                            className="apexcharts-gridline"
                                                                        />
                                                                        <line
                                                                            id="SvgjsLine1105"
                                                                            x1="-20.21666666666667"
                                                                            y1={40}
                                                                            x2="311.7833333333333"
                                                                            y2={40}
                                                                            stroke="#e0e0e0"
                                                                            strokeDasharray={0}
                                                                            strokeLinecap="butt"
                                                                            className="apexcharts-gridline"
                                                                        />
                                                                        <line
                                                                            id="SvgjsLine1106"
                                                                            x1="-20.21666666666667"
                                                                            y1={60}
                                                                            x2="311.7833333333333"
                                                                            y2={60}
                                                                            stroke="#e0e0e0"
                                                                            strokeDasharray={0}
                                                                            strokeLinecap="butt"
                                                                            className="apexcharts-gridline"
                                                                        />
                                                                        <line
                                                                            id="SvgjsLine1107"
                                                                            x1="-20.21666666666667"
                                                                            y1={80}
                                                                            x2="311.7833333333333"
                                                                            y2={80}
                                                                            stroke="#e0e0e0"
                                                                            strokeDasharray={0}
                                                                            strokeLinecap="butt"
                                                                            className="apexcharts-gridline"
                                                                        />
                                                                    </g>
                                                                    <g
                                                                        id="SvgjsG1101"
                                                                        className="apexcharts-gridlines-vertical"
                                                                        style={{ display: "none" }}
                                                                    />
                                                                    <line
                                                                        id="SvgjsLine1109"
                                                                        x1={0}
                                                                        y1={80}
                                                                        x2="291.56666666666666"
                                                                        y2={80}
                                                                        stroke="transparent"
                                                                        strokeDasharray={0}
                                                                        strokeLinecap="butt"
                                                                    />
                                                                    <line
                                                                        id="SvgjsLine1108"
                                                                        x1={0}
                                                                        y1={1}
                                                                        x2={0}
                                                                        y2={80}
                                                                        stroke="transparent"
                                                                        strokeDasharray={0}
                                                                        strokeLinecap="butt"
                                                                    />
                                                                </g>
                                                                <g
                                                                    id="SvgjsG1102"
                                                                    className="apexcharts-grid-borders"
                                                                    style={{ display: "none" }}
                                                                />
                                                                <g
                                                                    id="SvgjsG1076"
                                                                    className="apexcharts-bar-series apexcharts-plot-series"
                                                                >
                                                                    <g
                                                                        id="SvgjsG1077"
                                                                        className="apexcharts-series"
                                                                        rel={1}
                                                                        seriesname="Sales"
                                                                        data:realindex={0}
                                                                    >
                                                                        <path
                                                                            id="SvgjsPath1082"
                                                                            d="M -10.022604166666666 76.001 L -10.022604166666666 34.001000000000005 C -10.022604166666666 32.001000000000005 -8.022604166666666 30.001 -6.022604166666666 30.001 L 6.022604166666666 30.001 C 8.022604166666666 30.001 10.022604166666666 32.001000000000005 10.022604166666666 34.001000000000005 L 10.022604166666666 76.001 C 10.022604166666666 78.001 8.022604166666666 80.001 6.022604166666666 80.001 L -6.022604166666666 80.001 C -8.022604166666666 80.001 -10.022604166666666 78.001 -10.022604166666666 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M -10.022604166666666 76.001 L -10.022604166666666 34.001000000000005 C -10.022604166666666 32.001000000000005 -8.022604166666666 30.001 -6.022604166666666 30.001 L 6.022604166666666 30.001 C 8.022604166666666 30.001 10.022604166666666 32.001000000000005 10.022604166666666 34.001000000000005 L 10.022604166666666 76.001 C 10.022604166666666 78.001 8.022604166666666 80.001 6.022604166666666 80.001 L -6.022604166666666 80.001 C -8.022604166666666 80.001 -10.022604166666666 78.001 -10.022604166666666 76.001 Z "
                                                                            pathfrom="M -10.022604166666666 80.001 L -10.022604166666666 80.001 L 10.022604166666666 80.001 L 10.022604166666666 80.001 L 10.022604166666666 80.001 L 10.022604166666666 80.001 L 10.022604166666666 80.001 L -10.022604166666666 80.001 Z"
                                                                            cy={30}
                                                                            cx="10.022604166666666"
                                                                            j={0}
                                                                            val={20}
                                                                            barheight={50}
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1084"
                                                                            d="M 26.423229166666665 76.001 L 26.423229166666665 46.501 C 26.423229166666665 44.501 28.423229166666665 42.501 30.423229166666665 42.501 L 42.46843749999999 42.501 C 44.46843749999999 42.501 46.46843749999999 44.501 46.46843749999999 46.501 L 46.46843749999999 76.001 C 46.46843749999999 78.001 44.46843749999999 80.001 42.46843749999999 80.001 L 30.423229166666665 80.001 C 28.423229166666665 80.001 26.423229166666665 78.001 26.423229166666665 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 26.423229166666665 76.001 L 26.423229166666665 46.501 C 26.423229166666665 44.501 28.423229166666665 42.501 30.423229166666665 42.501 L 42.46843749999999 42.501 C 44.46843749999999 42.501 46.46843749999999 44.501 46.46843749999999 46.501 L 46.46843749999999 76.001 C 46.46843749999999 78.001 44.46843749999999 80.001 42.46843749999999 80.001 L 30.423229166666665 80.001 C 28.423229166666665 80.001 26.423229166666665 78.001 26.423229166666665 76.001 Z "
                                                                            pathfrom="M 26.423229166666665 80.001 L 26.423229166666665 80.001 L 46.46843749999999 80.001 L 46.46843749999999 80.001 L 46.46843749999999 80.001 L 46.46843749999999 80.001 L 46.46843749999999 80.001 L 26.423229166666665 80.001 Z"
                                                                            cy="42.5"
                                                                            cx="46.46843749999999"
                                                                            j={1}
                                                                            val={15}
                                                                            barheight="37.5"
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1086"
                                                                            d="M 62.8690625 76.001 L 62.8690625 9.001000000000001 C 62.8690625 7.001000000000001 64.8690625 5.001 66.8690625 5.001 L 78.91427083333333 5.001 C 80.91427083333333 5.001 82.91427083333333 7.001000000000001 82.91427083333333 9.001000000000001 L 82.91427083333333 76.001 C 82.91427083333333 78.001 80.91427083333333 80.001 78.91427083333333 80.001 L 66.8690625 80.001 C 64.8690625 80.001 62.8690625 78.001 62.8690625 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 62.8690625 76.001 L 62.8690625 9.001000000000001 C 62.8690625 7.001000000000001 64.8690625 5.001 66.8690625 5.001 L 78.91427083333333 5.001 C 80.91427083333333 5.001 82.91427083333333 7.001000000000001 82.91427083333333 9.001000000000001 L 82.91427083333333 76.001 C 82.91427083333333 78.001 80.91427083333333 80.001 78.91427083333333 80.001 L 66.8690625 80.001 C 64.8690625 80.001 62.8690625 78.001 62.8690625 76.001 Z "
                                                                            pathfrom="M 62.8690625 80.001 L 62.8690625 80.001 L 82.91427083333333 80.001 L 82.91427083333333 80.001 L 82.91427083333333 80.001 L 82.91427083333333 80.001 L 82.91427083333333 80.001 L 62.8690625 80.001 Z"
                                                                            cy={5}
                                                                            cx="82.91427083333333"
                                                                            j={2}
                                                                            val={30}
                                                                            barheight={75}
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1088"
                                                                            d="M 99.31489583333332 76.001 L 99.31489583333332 21.501 C 99.31489583333332 19.501 101.31489583333332 17.501 103.31489583333332 17.501 L 115.36010416666666 17.501 C 117.36010416666666 17.501 119.36010416666666 19.501 119.36010416666666 21.501 L 119.36010416666666 76.001 C 119.36010416666666 78.001 117.36010416666666 80.001 115.36010416666666 80.001 L 103.31489583333332 80.001 C 101.31489583333332 80.001 99.31489583333332 78.001 99.31489583333332 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 99.31489583333332 76.001 L 99.31489583333332 21.501 C 99.31489583333332 19.501 101.31489583333332 17.501 103.31489583333332 17.501 L 115.36010416666666 17.501 C 117.36010416666666 17.501 119.36010416666666 19.501 119.36010416666666 21.501 L 119.36010416666666 76.001 C 119.36010416666666 78.001 117.36010416666666 80.001 115.36010416666666 80.001 L 103.31489583333332 80.001 C 101.31489583333332 80.001 99.31489583333332 78.001 99.31489583333332 76.001 Z "
                                                                            pathfrom="M 99.31489583333332 80.001 L 99.31489583333332 80.001 L 119.36010416666666 80.001 L 119.36010416666666 80.001 L 119.36010416666666 80.001 L 119.36010416666666 80.001 L 119.36010416666666 80.001 L 99.31489583333332 80.001 Z"
                                                                            cy="17.5"
                                                                            cx="119.36010416666666"
                                                                            j={3}
                                                                            val={25}
                                                                            barheight="62.5"
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1090"
                                                                            d="M 135.76072916666666 76.001 L 135.76072916666666 59.001 C 135.76072916666666 57.001 137.76072916666666 55.001 139.76072916666666 55.001 L 151.8059375 55.001 C 153.8059375 55.001 155.8059375 57.001 155.8059375 59.001 L 155.8059375 76.001 C 155.8059375 78.001 153.8059375 80.001 151.8059375 80.001 L 139.76072916666666 80.001 C 137.76072916666666 80.001 135.76072916666666 78.001 135.76072916666666 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 135.76072916666666 76.001 L 135.76072916666666 59.001 C 135.76072916666666 57.001 137.76072916666666 55.001 139.76072916666666 55.001 L 151.8059375 55.001 C 153.8059375 55.001 155.8059375 57.001 155.8059375 59.001 L 155.8059375 76.001 C 155.8059375 78.001 153.8059375 80.001 151.8059375 80.001 L 139.76072916666666 80.001 C 137.76072916666666 80.001 135.76072916666666 78.001 135.76072916666666 76.001 Z "
                                                                            pathfrom="M 135.76072916666666 80.001 L 135.76072916666666 80.001 L 155.8059375 80.001 L 155.8059375 80.001 L 155.8059375 80.001 L 155.8059375 80.001 L 155.8059375 80.001 L 135.76072916666666 80.001 Z"
                                                                            cy={55}
                                                                            cx="155.8059375"
                                                                            j={4}
                                                                            val={10}
                                                                            barheight={25}
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1092"
                                                                            d="M 172.2065625 76.001 L 172.2065625 39.001 C 172.2065625 37.001 174.2065625 35.001 176.2065625 35.001 L 188.25177083333332 35.001 C 190.25177083333332 35.001 192.25177083333332 37.001 192.25177083333332 39.001 L 192.25177083333332 76.001 C 192.25177083333332 78.001 190.25177083333332 80.001 188.25177083333332 80.001 L 176.2065625 80.001 C 174.2065625 80.001 172.2065625 78.001 172.2065625 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 172.2065625 76.001 L 172.2065625 39.001 C 172.2065625 37.001 174.2065625 35.001 176.2065625 35.001 L 188.25177083333332 35.001 C 190.25177083333332 35.001 192.25177083333332 37.001 192.25177083333332 39.001 L 192.25177083333332 76.001 C 192.25177083333332 78.001 190.25177083333332 80.001 188.25177083333332 80.001 L 176.2065625 80.001 C 174.2065625 80.001 172.2065625 78.001 172.2065625 76.001 Z "
                                                                            pathfrom="M 172.2065625 80.001 L 172.2065625 80.001 L 192.25177083333332 80.001 L 192.25177083333332 80.001 L 192.25177083333332 80.001 L 192.25177083333332 80.001 L 192.25177083333332 80.001 L 172.2065625 80.001 Z"
                                                                            cy={35}
                                                                            cx="192.25177083333332"
                                                                            j={5}
                                                                            val={18}
                                                                            barheight={45}
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1094"
                                                                            d="M 208.65239583333332 76.001 L 208.65239583333332 34.001000000000005 C 208.65239583333332 32.001000000000005 210.65239583333332 30.001 212.65239583333332 30.001 L 224.69760416666665 30.001 C 226.69760416666665 30.001 228.69760416666665 32.001000000000005 228.69760416666665 34.001000000000005 L 228.69760416666665 76.001 C 228.69760416666665 78.001 226.69760416666665 80.001 224.69760416666665 80.001 L 212.65239583333332 80.001 C 210.65239583333332 80.001 208.65239583333332 78.001 208.65239583333332 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 208.65239583333332 76.001 L 208.65239583333332 34.001000000000005 C 208.65239583333332 32.001000000000005 210.65239583333332 30.001 212.65239583333332 30.001 L 224.69760416666665 30.001 C 226.69760416666665 30.001 228.69760416666665 32.001000000000005 228.69760416666665 34.001000000000005 L 228.69760416666665 76.001 C 228.69760416666665 78.001 226.69760416666665 80.001 224.69760416666665 80.001 L 212.65239583333332 80.001 C 210.65239583333332 80.001 208.65239583333332 78.001 208.65239583333332 76.001 Z "
                                                                            pathfrom="M 208.65239583333332 80.001 L 208.65239583333332 80.001 L 228.69760416666665 80.001 L 228.69760416666665 80.001 L 228.69760416666665 80.001 L 228.69760416666665 80.001 L 228.69760416666665 80.001 L 208.65239583333332 80.001 Z"
                                                                            cy={30}
                                                                            cx="228.69760416666665"
                                                                            j={6}
                                                                            val={20}
                                                                            barheight={50}
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1096"
                                                                            d="M 245.09822916666667 76.001 L 245.09822916666667 21.501 C 245.09822916666667 19.501 247.09822916666667 17.501 249.09822916666667 17.501 L 261.1434375 17.501 C 263.1434375 17.501 265.1434375 19.501 265.1434375 21.501 L 265.1434375 76.001 C 265.1434375 78.001 263.1434375 80.001 261.1434375 80.001 L 249.09822916666667 80.001 C 247.09822916666667 80.001 245.09822916666667 78.001 245.09822916666667 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 245.09822916666667 76.001 L 245.09822916666667 21.501 C 245.09822916666667 19.501 247.09822916666667 17.501 249.09822916666667 17.501 L 261.1434375 17.501 C 263.1434375 17.501 265.1434375 19.501 265.1434375 21.501 L 265.1434375 76.001 C 265.1434375 78.001 263.1434375 80.001 261.1434375 80.001 L 249.09822916666667 80.001 C 247.09822916666667 80.001 245.09822916666667 78.001 245.09822916666667 76.001 Z "
                                                                            pathfrom="M 245.09822916666667 80.001 L 245.09822916666667 80.001 L 265.1434375 80.001 L 265.1434375 80.001 L 265.1434375 80.001 L 265.1434375 80.001 L 265.1434375 80.001 L 245.09822916666667 80.001 Z"
                                                                            cy="17.5"
                                                                            cx="265.1434375"
                                                                            j={7}
                                                                            val={25}
                                                                            barheight="62.5"
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <path
                                                                            id="SvgjsPath1098"
                                                                            d="M 281.5440625 76.001 L 281.5440625 59.001 C 281.5440625 57.001 283.5440625 55.001 285.5440625 55.001 L 297.58927083333333 55.001 C 299.58927083333333 55.001 301.58927083333333 57.001 301.58927083333333 59.001 L 301.58927083333333 76.001 C 301.58927083333333 78.001 299.58927083333333 80.001 297.58927083333333 80.001 L 285.5440625 80.001 C 283.5440625 80.001 281.5440625 78.001 281.5440625 76.001 Z "
                                                                            fill="var(--bs-primary)"
                                                                            fillOpacity={1}
                                                                            strokeOpacity={1}
                                                                            strokeLinecap="round"
                                                                            strokeWidth={0}
                                                                            strokeDasharray={0}
                                                                            className="apexcharts-bar-area"
                                                                            index={0}
                                                                            clipPath="url(#gridRectMaskew8efewk)"
                                                                            pathto="M 281.5440625 76.001 L 281.5440625 59.001 C 281.5440625 57.001 283.5440625 55.001 285.5440625 55.001 L 297.58927083333333 55.001 C 299.58927083333333 55.001 301.58927083333333 57.001 301.58927083333333 59.001 L 301.58927083333333 76.001 C 301.58927083333333 78.001 299.58927083333333 80.001 297.58927083333333 80.001 L 285.5440625 80.001 C 283.5440625 80.001 281.5440625 78.001 281.5440625 76.001 Z "
                                                                            pathfrom="M 281.5440625 80.001 L 281.5440625 80.001 L 301.58927083333333 80.001 L 301.58927083333333 80.001 L 301.58927083333333 80.001 L 301.58927083333333 80.001 L 301.58927083333333 80.001 L 281.5440625 80.001 Z"
                                                                            cy={55}
                                                                            cx="301.58927083333333"
                                                                            j={8}
                                                                            val={10}
                                                                            barheight={25}
                                                                            barwidth="20.04520833333333"
                                                                        />
                                                                        <g
                                                                            id="SvgjsG1079"
                                                                            className="apexcharts-bar-goals-markers"
                                                                        >
                                                                            <g
                                                                                id="SvgjsG1081"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1083"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1085"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1087"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1089"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1091"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1093"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1095"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                            <g
                                                                                id="SvgjsG1097"
                                                                                classname="apexcharts-bar-goals-groups"
                                                                                className="apexcharts-hidden-element-shown"
                                                                                clipPath="url(#gridRectMarkerMaskew8efewk)"
                                                                            />
                                                                        </g>
                                                                        <g
                                                                            id="SvgjsG1080"
                                                                            className="apexcharts-bar-shadows apexcharts-hidden-element-shown"
                                                                        />
                                                                    </g>
                                                                    <g
                                                                        id="SvgjsG1078"
                                                                        className="apexcharts-datalabels apexcharts-hidden-element-shown"
                                                                        data:realindex={0}
                                                                    />
                                                                </g>
                                                                <line
                                                                    id="SvgjsLine1110"
                                                                    x1="-20.21666666666667"
                                                                    y1={0}
                                                                    x2="311.7833333333333"
                                                                    y2={0}
                                                                    stroke="#b6b6b6"
                                                                    strokeDasharray={0}
                                                                    strokeWidth={1}
                                                                    strokeLinecap="butt"
                                                                    className="apexcharts-ycrosshairs"
                                                                />
                                                                <line
                                                                    id="SvgjsLine1111"
                                                                    x1="-20.21666666666667"
                                                                    y1={0}
                                                                    x2="311.7833333333333"
                                                                    y2={0}
                                                                    strokeDasharray={0}
                                                                    strokeWidth={0}
                                                                    strokeLinecap="butt"
                                                                    className="apexcharts-ycrosshairs-hidden"
                                                                />
                                                                <g
                                                                    id="SvgjsG1112"
                                                                    className="apexcharts-xaxis"
                                                                    transform="translate(0, 0)"
                                                                >
                                                                    <g
                                                                        id="SvgjsG1113"
                                                                        className="apexcharts-xaxis-texts-g"
                                                                        transform="translate(0, -4)"
                                                                    />
                                                                </g>
                                                                <g
                                                                    id="SvgjsG1121"
                                                                    className="apexcharts-yaxis-annotations"
                                                                />
                                                                <g
                                                                    id="SvgjsG1122"
                                                                    className="apexcharts-xaxis-annotations"
                                                                />
                                                                <g
                                                                    id="SvgjsG1123"
                                                                    className="apexcharts-point-annotations"
                                                                />
                                                            </g>
                                                        </svg>
                                                        <div className="apexcharts-tooltip apexcharts-theme-dark">
                                                            <div
                                                                className="apexcharts-tooltip-title"
                                                                style={{ fontFamily: "inherit", fontSize: 12 }}
                                                            />
                                                            <div
                                                                className="apexcharts-tooltip-series-group"
                                                                style={{ order: 1 }}
                                                            >
                                                                <span
                                                                    className="apexcharts-tooltip-marker"
                                                                    style={{ backgroundColor: "var(--bs-primary)" }}
                                                                />
                                                                <div
                                                                    className="apexcharts-tooltip-text"
                                                                    style={{ fontFamily: "inherit", fontSize: 12 }}
                                                                >
                                                                    <div className="apexcharts-tooltip-y-group">
                                                                        <span className="apexcharts-tooltip-text-y-label" />
                                                                        <span className="apexcharts-tooltip-text-y-value" />
                                                                    </div>
                                                                    <div className="apexcharts-tooltip-goals-group">
                                                                        <span className="apexcharts-tooltip-text-goals-label" />
                                                                        <span className="apexcharts-tooltip-text-goals-value" />
                                                                    </div>
                                                                    <div className="apexcharts-tooltip-z-group">
                                                                        <span className="apexcharts-tooltip-text-z-label" />
                                                                        <span className="apexcharts-tooltip-text-z-value" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                                            <div className="apexcharts-yaxistooltip-text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-7">Product Template</h4>
                                        <form action="" className="form-horizontal">
                                            <div>
                                                <label className="form-label text-nowrap">
                                                    Select a product template
                                                </label>
                                                <select
                                                    className="form-select mr-sm-2  mb-2"
                                                    id="inlineFormCustomSelect"
                                                >
                                                    <option selected="">Default Template</option>
                                                    <option value={1}>Fashion</option>
                                                    <option value={2}>Office Stationary</option>
                                                    <option value={3}>Electronics</option>
                                                </select>
                                                <p className="fs-2 mb-0">
                                                    Assign a template from your current theme to define how a single
                                                    product is displayed.
                                                </p>
                                            </div>
                                        </form>
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

export default ProductEdit;
