import "./App.css";
import "../src/Components/Assets/css/styles.min.css";

import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./Components/Common/RouterRoutes/routes";

import { UserProvider } from "./Components/Common/UseContext/usecontext";
import { ToastContainer } from "react-toastify";
import FileUpload from "./Components/Common/test/test";
// import PieChart from "./Components/Common/test/test";


function App() {
  return (
    <div className="App">
       <ToastContainer/>
      <UserProvider>
        <BrowserRouter>
          <RouterRoutes />
        </BrowserRouter>
      </UserProvider>
      {/* <PieChart/> */}

    </div>
  );
}

export default App;
