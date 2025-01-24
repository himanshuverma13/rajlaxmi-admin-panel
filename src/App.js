import "./App.css";
import "../src/Components/Assets/css/styles.min.css";

import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./Components/Common/RouterRoutes/routes";

import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import { UserProvider } from "./Components/Common/UseContext/usecontext";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <RouterRoutes />
        </BrowserRouter>
      </UserProvider>

    </div>
  );
}

export default App;
