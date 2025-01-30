import React, { useContext, useState } from "react";
import Sidebar from "../../Common/SideBar/sidebar";
import Navbar from "../../Common/Navbar/navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AddProductAPI } from "../../Common/APIs/api";
import { UserContext } from "../../Common/UseContext/usecontext";
import { LuDot } from "react-icons/lu";
import { toast } from "react-toastify";
import dummyimg from "../../Assets/images/products/img-icon.png";
import LoaderButton from "../../Common/LoaderButton/loaderButton";
const ProductCreate = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [imageError, setimageError] = useState("");
  const [images, setImages] = useState([]); // To store multiple images
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const SetImage = watch("product_image"); // Ensure that this is an array of images now

  const onSubmit = async (data) => {
    // setLoading(true);
    try {
      if (images?.length == 0) {
        setimageError("At least one product image is required");
      } else {
        setimageError("");
        const productData = { ...data, product_image: images }; // Attach multiple images to the product data
        const response = await AddProductAPI(productData);
        toast?.success(response?.data?.message);
        reset();
        navigate("/product");
      }
    } catch (error) {
      console.log("error: ", error);
      toast?.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result); // Store the image result (data URL)
          if (newImages.length === files.length) {
            setImages(newImages); // Update the state with all uploaded images
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-2 px-3">
                <h2 className="fw-bolder">Product Create</h2>
                <p className="text-dark">
                  Dashboard <LuDot /> Product <LuDot />{" "}
                  <span className="text-muted">Product Create </span>
                </p>
              </div>
              <div className="card p-4">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label
                      for="productName"
                      className="form-label fw-bold text-dark"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="product_name"
                      placeholder="Enter Product"
                      {...register("product_name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.product_name && (
                      <span className="text-danger">
                        {errors.product_name.message}
                      </span>
                    )}
                  </div>

                  <div className="col-lg-6 mb-3 ">
                    <label
                      for="product_price"
                      className="form-label  fw-bold text-dark"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_price"
                      placeholder="Enter price"
                      {...register("product_price", {
                        required: "Price is required",
                        min: {
                          value: 1,
                          message: "Price must be positive",
                        },
                      })}
                    />
                    {errors.product_price && (
                      <span className="text-danger">
                        {errors.product_price.message}
                      </span>
                    )}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label
                      for="product_stock"
                      className="form-label  fw-bold text-dark"
                    >
                      Stock
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_stock"
                      placeholder="Enter Stock"
                      {...register("product_stock", {
                        required: "Stock is required",
                        min: {
                          value: 0,
                          message: "Stock cannot be negative",
                        },
                      })}
                    />
                    {errors.product_stock && (
                      <span className="text-danger">
                        {errors.product_stock.message}
                      </span>
                    )}
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label
                      for="product_category"
                      className="form-label  fw-bold text-dark"
                    >
                      Category list-
                    </label>
                    <select
                      className="form-select py-2"
                      {...register("product_category", {
                        required: "Please select an option",
                      })}
                    >
                      <option value="">Select</option>
                      <option value="Pulses">Pulses</option>
                      <option value="Millet">Millet</option>
                      <option value="Rice & Wheat">Rice & Wheat</option>
                      <option value="Garam Masala">Garam Masala</option>
                      <option value="Chaat Masala">Chaat Masala</option>
                      <option value="Sweets Items">Sweets Items</option>
                      <option value="Seeds">Seeds</option>
                      <option value="Other Items">Other Items</option>
                      <option value="Oils & Ghee">Oils & Ghee</option>
                    </select>
                    {errors.product_category && (
                      <span className="text-danger">
                        {errors.product_category.message}
                      </span>
                    )}
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label
                      for="product_quantity"
                      className="form-label  fw-bold text-dark"
                    >
                      Size
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_quantity"
                      placeholder="Enter Quantity"
                      {...register("product_quantity", {
                        required: "Quantity is required",
                        min: {
                          value: 1,
                          message: "Quantity must be positive",
                        },
                      })}
                    />
                    {errors.product_quantity && (
                      <span className="text-danger">
                        {errors.product_quantity.message}
                      </span>
                    )}
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label  fw-bold text-dark">
                    Website Name
                    </label>
                    <select
                      className="form-select py-2"
                      {...register("product_website_name", {
                        required: "Please select an option",
                      })}
                    >
                      <option value="">Select</option>
                      <option value="RajLaxmi">Raj Laxmi</option>
                      <option value="GauSwarn">GauSwarn</option>
                      <option value="Both">Both</option>
                    </select>
                    {errors.product_website_name && (
                      <span className="text-danger">
                        {errors.product_website_name.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="card p-4">
                {/* <h1 class="mb-4">Product Form</h1> */}

                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="mb-3">
                          <label
                            for="product_description"
                            className="form-label  fw-bold text-dark"
                          >
                            Product Description
                          </label>
                          <textarea
                            className="form-control"
                            id="product_description"
                            rows="3"
                            placeholder="Description"
                            {...register("product_description", {
                              required: "Description is required",
                            })}
                          ></textarea>
                          {errors.product_description && (
                            <span className="text-danger">
                              {errors.product_description.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-header py-2">
                        <h5 className="card-title py-0">
                          Upload Your Product Images
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card-body p-0">
                            <div className="container d-flex justify-content-center align-items-center">
                              <div className="card p-4 border-0 shadow w-100">
                                <div
                                  className="border border-primary border-dashed p-4 text-center rounded"
                                  style={{
                                    borderStyle: "dashed",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    document.getElementById("fileInput").click()
                                  }
                                >
                                  {SetImage ? (
                                    <img
                                      src={SetImage}
                                      alt="Uploaded Preview"
                                      className="img-fluid rounded"
                                    />
                                  ) : (
                                    <>
                                      <img
                                        src={images[0] || dummyimg}
                                        alt="Upload Icon"
                                        className="w-25"
                                      />
                                      <p className=" text-primary">
                                        Click to browse
                                      </p>
                                    </>
                                  )}
                                </div>

                                <input
                                  type="file"
                                  id="fileInput"
                                  multiple
                                  className="d-none"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                />

                                {imageError && (
                                  <span
                                    className={`text-danger ${
                                      images[0] ? "d-none" : ""
                                    }`}
                                  >
                                    {imageError}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {images?.map((i) => (
                            <>
                              <img
                                src={i}
                                className="border border-info border-dashed rounded-4 shadow m-2"
                                width={100}
                                height={100}
                                alt=""
                              />
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <LoaderButton
                text={`Submit`}
                styleClass={`btn btn-primary mb-4 rounded-pill`}
                loadingButtonStatus={loading}
              />
              {/* <button type="submit" className="btn btn-primary w-auto px-5">
                Submit
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreate;
