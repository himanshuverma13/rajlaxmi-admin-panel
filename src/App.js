import "./App.css";
import "../src/Components/Assets/css/styles.min.css";

import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./Components/Common/RouterRoutes/routes";

import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import { UserProvider } from "./Components/Common/UseContext/usecontext";
import { ToastContainer } from "react-toastify";
import FileUpload from "./Components/Common/test/test";


function App() {
  return (
    <div className="App">
       <ToastContainer/>
      <UserProvider>
        <BrowserRouter>
          <RouterRoutes />
        </BrowserRouter>
      </UserProvider>
      {/* <FileUpload/> */}

    </div>
  );
}

export default App;
