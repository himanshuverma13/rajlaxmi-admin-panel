import React, { useContext, useState } from "react";
import Navbar from "../../Common/Navbar/navbar";
import Sidebar from "../../Common/SideBar/sidebar";
import { useForm } from "react-hook-form";
import { UpdateProductAPI } from "../../Common/APIs/api";
import { UserContext } from "../../Common/UseContext/usecontext";
import { useEffect } from "react";
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
  console.log("CurrentProductDetails: ", CurrentProductDetails);

  useEffect(() => {
    setValue("product_name", CurrentProductDetails?.product_name);
    setValue("product_description", CurrentProductDetails?.product_description);
    setValue("product_price", CurrentProductDetails?.product_price);
    setValue("product_quantity", CurrentProductDetails?.product_quantity);
    setValue("product_stock", CurrentProductDetails?.product_stock);
    setValue("product_category", CurrentProductDetails?.product_category);
    setValue("product_website_name", CurrentProductDetails?.product_website_name);
    setValue("product_image", CurrentProductDetails?.product_image);
  }, [])
  

  const [productDetails, setProductDetails] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [currentPrdId, setcurrentPrdId] = useState();
  const [imageError, setimageError] = useState("");

  const handleImageUpload = (event, callback) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const SetImage = watch("product_image");
  const onSubmit = async (data) => {
    try {
      if (!SetImage) {
        setimageError("product image required");
      } else {
        setimageError("");
        // if (isEdit) {
        const updatedProducts = [...productDetails];
        updatedProducts[currentProductIndex] = { ...data };
        setProductDetails(updatedProducts);
        const response = await UpdateProductAPI(
          productDetails[currentProductIndex]?.product_id,
          data
        );
        //   toast.success(response?.message);
        //   fetchProducts();
        setModalOpen(false);

        //     } else {
        //       setProductDetails([...productDetails, data]);
        //       const response = await AddProductAPI(data);
        //       toast.success(response?.data?.message);

        //       fetchProducts();
        // setModalOpen(false);

        //     }
      }
    } catch (error) {
      console.log("error: ", error);
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
              <div class="card p-4">
                <h5>Product Details</h5>
                {/* <small class="text-muted">Title, short description, image...</small> */}

                <div class="mb-3 mt-3">
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
              <div className="card p-4">
                {/* <h1 class="mb-4">Product Form</h1> */}

                <div class="row">
                  <div class="col-md-12">
                    <div class="card mb-3">
                      {/* <div class="card-header">
                                                <h5 class="card-title">Properties</h5>
                                            </div> */}
                      <div class="card-body">
                        <div class="form-group mb-2">
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

                        <div class="form-group mb-2">
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
                        <div class="form-group mb-2">
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
                        <div class="form-group mb-2">
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
                        <div className="form-group">
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
                  </div>
                  <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-header">
                        <h5 className="card-title">Upload Images</h5>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-12">
                          {SetImage && (
                            <img
                              src={SetImage}
                              width={100}
                              height={100}
                              alt="Loading"
                            />
                          )}
                          <label className="font-weight-bold text-uppercase">
                            Image
                          </label>
                          <input
                            type="file"
                            className="form-control shadow"
                            accept="image/*"
                            onChange={(event) =>
                              handleImageUpload(event, (base64) =>
                                setValue("product_image", base64)
                              )
                            }
                          />
                          {
                            <span
                              className={`text-danger ${
                                SetImage ? "d-none" : ""
                              }`}
                            >
                              {imageError}
                            </span>
                          }
                        </div>
                        <div className="col-md-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-auto px-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
