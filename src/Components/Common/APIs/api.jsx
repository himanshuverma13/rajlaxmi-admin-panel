import axios from "axios";
import { axiosInstance } from "./Interceptor";

const URL = process.env.REACT_APP_API;
const WTHRURL = process.env.REACT_APP_API_WEATHER;
const Token = JSON?.parse(localStorage?.getItem("userDetails") ?? "[]");

// ---------------- Feedback API --------------------------------

export const FeedbackAPI = async () => {
  try {
    const response = await axiosInstance.get(`/admin/allfeedback`);
    return response?.data?.reviews;
  } catch (error) {
    console.error("Error fetching feedback:", error);
  }
};

export const DeleteFeedbackAPI = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/admin/deleteFeedbackById/${id}`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

//  ---------- Product CRUD API --------------------------------
export const GetProductAPI = async () => {
  try {
    const response = await axiosInstance.get(`/admin/getAllProduct`);
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const UpdateProductAPI = async (id, payload) => {
  try {
    const response = await axiosInstance.post(
      `/admin/updateProductById/${id}`,
      payload
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteProductAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `/admin/deleteProductById/${payload}`,
      {}
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};
export const AddProductAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(`/admin/createproduct`, payload);
    return response;
  } catch (error) {
    console.log('error: ', error);
    throw error;
  }
};

//  ---------- Login & Register API --------------------------------
export const LoginAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(`/admin/login`, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const GetUserDetailsAPI = async () => {
  try {
    const response = await axiosInstance.get(`/admin/me`);
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const RegisterAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(`/admin/register`, payload);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

// -------------------------ForgotPasswprd & Reset API----------------------------------
export const ForgotAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(`/admin/forgetPassword`, payload);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const ResetAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(`/admin/reset`, payload);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

// ------------------User Info API---------------------------------------

export const GetAllUser = async () => {
  try {
    const response = await axiosInstance.get(`/admin/getAllUserInfo`);
    // console.log('response: ', response);
    return response?.data?.userInfo;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ----------Contact API -------------------------------

export const GetAllContactAPI = async () => {
  try {
    const response = await axiosInstance.get(`/admin/getAllContact`);
    return response?.data?.contact;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ---------------Order Details API------------------------------

export const GetAllOrderDetailsAPI = async () => {
  try {
    const response = await axiosInstance.get(`/admin/getAllOrderDetails`);
    return response?.data?.orderDetails;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ------------- weather forecast --------------------

// export const GetWeatherReportAPI = async () => {
//   try {
//     const response = await axiosInstance.get(`${WTHRURL}`);
//     return response;
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

// ------------- Sale Report Chart data --------------------

export const GetSaleReportAPI = async () => {
  try {
    const response = await axiosInstance.get(`/admin/getAllSales`);
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ---------------- CSV Excel Download API --------------------------------
export const DownloadCSVExcelAPI = async () => {
  try {
    const response = await axios.get(`${URL}/admin/getAllSales`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
        "Content-Type": "text/csv; charset=UTF-8",
        "Authorization": `${Token?.data?.accessToken}` 
      },
      responseType: "blob",
    });
    return response
  } catch (error) {
    throw error
  }
};