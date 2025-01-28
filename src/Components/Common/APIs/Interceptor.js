// import axios from 'axios';

// let axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_API,
//   headers: {
//     "ngrok-skip-browser-warning": "69420",
//   },
// });
// const AxiosInterceptors = TokenContext => {
//   const LocalToken =  JSON?.parse(localStorage?.getItem("userDetails"))
//   console.log('LocalToken?.data?.accessToken: ', LocalToken?.data?.accessToken);
  
//   // Add a request interceptor

//   axiosInstance.interceptors.request.use(
//     async config => {
//       const token = TokenContext ?? LocalToken?.data?.accessToken ;
//       console.log('token: ', token);

//       if (token) config.headers['Authorization'] = token;
//       config.headers['Content-Type'] = 'application/json';
//       // instance.defaults.headers.common['Authorization'] = token;

//       return config;
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error);
//     },
//   );

//   // Add a response interceptor
//   axiosInstance.interceptors.response.use(
//     function (response) {
//       //
//       // if (token) {
//       //   setData(response.data.token);
//       // }

//       // Any status code that lie within the range of 2xx cause this function to trigger
//       // Do something with response data
//       return response;
//     },
//     // function (error) {
//     error => {
  

//       return Promise.reject(error);

//       // Any status codes that falls outside the range of 2xx cause this function to trigger
//       // Do something with response error
//       // return Promise.reject(error);
//     },
//   );
//   // instance.interceptors.request.clear(); // Removes interceptors from requests
//   // instance.interceptors.response.clear(); // Removes interceptors from responses
// };

// export {axiosInstance, AxiosInterceptors};


import axios from 'axios';

// Create a single axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "ngrok-skip-browser-warning": "69420",
    "Content-Type": "application/json",
  },
});

// Function to set up interceptors (only once)
const AxiosInterceptors = (TokenContext) => {
  // Avoid adding interceptors multiple times
  if (axiosInstance.interceptors.request.handlers.length > 0) {
    return;
  }

  axiosInstance.interceptors.request.use(
    async (config) => {
      const LocalToken = JSON.parse(localStorage.getItem("userDetails"))?.data?.accessToken;
      const token = TokenContext || LocalToken;
      console.log('token:-------------------------- ', token);

      if (token) {
        config.headers["Authorization"] = `${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("API Error---------------------------------:", error);
      return Promise.reject(error);
    }
  );
};

export { axiosInstance, AxiosInterceptors };