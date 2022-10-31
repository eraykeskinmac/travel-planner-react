import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppPage } from "./pages/AppPage";
import { LoginPage } from "./pages/LoginPage";
import { PlanPage } from "./pages/plans/PlanPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProtectedPage } from "./utils/ProtectedPages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="app"
            element={<ProtectedPage children={<AppPage />} />}
          >
          <Route path="plans" element={<PlanPage/>}/>
          </Route>
        </Routes>
      </Router>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
