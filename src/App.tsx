import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppPage } from "./pages/AppPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
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
          <Route path="dashboard" element={<DashboardPage/>}/>
          </Route>
        </Routes>
      </Router>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
