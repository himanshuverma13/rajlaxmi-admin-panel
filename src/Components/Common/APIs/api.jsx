import axios from "axios";

const URL = process.env.REACT_APP_API;
const WTHRURL = process.env.REACT_APP_API_WEATHER;
const Token = JSON?.parse(localStorage?.getItem("userDetails") ?? "[]");


// ---------------- Feedback API --------------------------------

export const FeedbackAPI = async () => {
  try {
    const response = await axios.get(`${URL}/admin/allfeedback`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data?.reviews;
  } catch (error) {
    console.log("error: ", error);
  }
};


export const DeleteFeedbackAPI = async (id) => {
  try {
    const response = await axios.delete(`${URL}/admin/deleteFeedbackById/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data
  } catch (error) {
    throw error
  }
};

//  ---------- Product CRUD API --------------------------------
export const GetProductAPI = async () => {
  try {
    const response = await axios.get(`${URL}/admin/getAllProduct`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const UpdateProductAPI = async (id, payload) => {
  try {
    const response = await axios.post(
      `${URL}/admin/updateProductById/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          "Authorization": `${Token?.data?.accessToken}` 
        },
      }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteProductAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/admin/deleteProductById/${payload}`,{} ,{
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data;
  } catch (error) {
    throw error;  
  }
};
export const AddProductAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/admin/createproduct`, payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

//  ---------- Login & Register API --------------------------------
export const LoginAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/admin/login`, payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const GetUserDetailsAPI = async () => {
  try {
    const response = await axios.get(`${URL}/admin/me`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data
  } catch (error) {
    console.log("error: ", error);
  }
};

export const RegisterAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/admin/register`, payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

// -------------------------ForgotPasswprd & Reset API----------------------------------
export const ForgotAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/admin/forgetPassword`, payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const ResetAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/admin/reset`, payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

// ------------------User Info API---------------------------------------

export const GetAllUser = async () => {
  try {
    const response = await axios.get(`${URL}/admin/getAllUserInfo`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    // console.log('response: ', response);
    return response?.data?.userInfo;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ----------Contact API -------------------------------

export const GetAllContactAPI = async () => {
  try {
    const response = await axios.get(`${URL}/admin/getAllContact`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data?.contact;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ---------------Order Details API------------------------------

export const GetAllOrderDetailsAPI = async () => {
  try {
    const response = await axios.get(`${URL}/admin/getAllOrderDetails`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response?.data?.orderDetails;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ------------- weather forecast --------------------

export const GetWeatherReportAPI = async () => {
  try {
    const response = await axios.get(`${WTHRURL}`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        "Authorization": `${Token?.data?.accessToken}` 
      },
    });
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};

// ------------- Sale Report Chart data --------------------

export const GetSaleReportAPI = async () => {
    try {
      const response = await axios.get(`${URL}/admin/getAllSales`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          "Authorization": `${Token?.data?.accessToken}` 
        },
      });
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

