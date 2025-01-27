import React, { useContext, useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import Sidebar from "../../Common/SideBar/sidebar";
import { useForm } from "react-hook-form";
import { UpdateProductAPI } from "../../Common/APIs/api";
import { UserContext } from "../../Common/UseContext/usecontext";
import { useEffect } from "react";
import { LuDot } from "react-icons/lu";
import { toast } from "react-toastify";
import dummyimg from "../../Assets/images/products/dummy.jpg";
import { useNavigate } from "react-router-dom";
const ProductEdit = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { CurrentProductDetails } = useContext(UserContext);

  
  useEffect(() => {
    setValue("product_name", CurrentProductDetails?.product_name);
    setValue("product_description", CurrentProductDetails?.product_description);
    setValue("product_price", CurrentProductDetails?.product_price);
    setValue("product_quantity", CurrentProductDetails?.product_quantity);
    setValue("product_stock", CurrentProductDetails?.product_stock);
    setValue("product_category", CurrentProductDetails?.product_category);
    setValue(
      "product_website_name",
      CurrentProductDetails?.product_website_name
    );
    const currentImg = JSON?.parse(CurrentProductDetails?.product_image ?? '[]')
    setValue("product_image",currentImg[0] );
    
    setImages(currentImg)
  }, []);

  const [productDetails, setProductDetails] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [currentPrdId, setcurrentPrdId] = useState();
  const [imageError, setimageError] = useState("");
  const [images, setImages] = useState([]);


  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result); // Store the image result (data URL)
          if (newImages?.length === files?.length) {
            
            setImages((prev)=>[...prev,...newImages]); // Update the state with all uploaded images
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };
  const navigate = useNavigate();
  const SetImage = watch("product_image");
  const onSubmit = async (data) => {
    const productData = { ...data, product_image: images };
    console.log("productData: ", productData);
    try {
      if (!images) {
        setimageError("product image required");
      } else {
        setimageError("");
        const productData = { ...data, product_image: images};
        console.log('productData: ', productData);
        setProductDetails(productData);
        const response = await UpdateProductAPI(
          CurrentProductDetails?.product_id,
          productData
        );
        toast?.success(response?.message);
        navigate('/product');
      }
    } catch (error) {
      toast?.error(error?.response?.message);
    }
  };

  const handleImgRemove = (index) => {
    const removedImg = images?.filter((_, i) => i !== index);
    setImages(removedImg);
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
                <h2 className="fw-bolder">Product Edit</h2>
                <p className="text-dark">
                  Dashboard <LuDot /> Product <LuDot />{" "}
                  <span className="text-muted">Product Edit</span>
                </p>
              </div>
              <div class="card p-4">
                <div className="row">
                  <div class="col-lg-6 mb-2">
                    <label for="productName" class="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="product_name"
                      placeholder="Product name"
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

                  <div class="col-lg-6 form-group mb-2">
                    <label for="product_price">Price</label>
                    <input
                      type="number"
                      class="form-control"
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

                  <div class="col-lg-6 form-group mb-2">
                    <label for="product_stock">Stock</label>
                    <input
                      type="number"
                      class="form-control"
                      id="product_stock"
                      placeholder="Enter price"
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
                  <div class="col-lg-6 form-group mb-2">
                    <label for="product_category">Category</label>
                    <input
                      type="text"
                      class="form-control"
                      id="product_category"
                      placeholder="Enter product code"
                      {...register("product_category", {
                        required: "Category is required",
                      })}
                    />
                    {errors.product_category && (
                      <span className="text-danger">
                        {errors.product_category.message}
                      </span>
                    )}
                  </div>
                  <div class="col-lg-6 form-group mb-2">
                    <label for="product_quantity">Quantity</label>
                    <input
                      type="number"
                      class="form-control"
                      id="product_quantity"
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
                  <div className="col-lg-6 form-group mb-2">
                    <label>Select</label>
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

                <div class="row">
                  <div class="col-md-12">
                    <div class="card mb-3">
                      {/* <div class="card-header">
                                                <h5 class="card-title">Properties</h5>
                                            </div> */}
                      <div class="card-body">
                        <div class="mb-3">
                          <label for="product_description" class="form-label">
                            Product Description
                          </label>
                          <textarea
                            class="form-control"
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
                  <div className="row">
                  <h5 className="card-title py-0">
                          Uploaded Product Images
                        </h5>
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
                                      src={dummyimg}
                                      alt="Uploaded Preview"
                                      className="img-fluid rounded w-50"
                                    />
                                  ) : (
                                    <>
                                      <img
                                        src={dummyimg}
                                        alt="Upload Icon"
                                        className="w-25"
                                      />
                                      <p className="text-muted">
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
                        <div className="col-lg-6 ">
                          <div className="row">
                          {images?.map((i,index)=>
                          <>
                          <div className="col-lg-3 d-flex">
                          <img src={i} className="border border-info border-dashed rounded-4 shadow m-2"  width={100} height={100} alt="" />
                          <span className=" cursor-pointer" onClick={() => handleImgRemove(index)}>x</span>
                          </div>
                          </>
                          )}

                          </div>
                        </div>
                      </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-auto px-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
