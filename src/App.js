import "./App.css";
import "../src/Components/Assets/css/styles.min.css";
import Home from "./Components/Pages/Home/home";
import AccordionTable from "./Components/Common/test/test";

// import "../src/Components/Assets/libs/jquery/dist/jquery.min.js";
import "../src/Components/Assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import OrderList from "./Components/Common/OrderList/orderList.jsx";
import Order from "./Components/Pages/Order/order.jsx";
import FeedbackPage from "./Components/Pages/Feedback/feedback.jsx";
// import "../src/Components/Assets/js/sidebarmenu.js";
// import "../src/Components/Assets/js/app.min.js";
// import "../src/Components/Assets/libs/apexcharts/dist/apexcharts.min.js";
// import "../src/Components/Assets/libs/simplebar/dist/simplebar.js";
// import "../src/Components/Assets/js/dashboard.js";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <AccordionTable/> */}
      {/* <OrderList/> */}
      {/* <Order/> */}
      <FeedbackPage/>
    </div>
  );
}

export default App;
