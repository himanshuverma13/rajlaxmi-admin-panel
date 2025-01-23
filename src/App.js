import "./App.css";
import "../src/Components/Assets/css/styles.min.css";

import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./Components/Common/RouterRoutes/routes";

import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      {/* {/* <Home /> */}
      
      <BrowserRouter>

        <RouterRoutes />
        
      </BrowserRouter> 
      {/* <AccordionTable/> */}
      {/* <OrderList/> */}
      {/* <Order/> */}
      {/* <FeedbackPage/> */}
    </div>
  );
}

export default App;
