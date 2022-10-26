import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<RegisterPage />} />
        </Routes>
      </Router>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
