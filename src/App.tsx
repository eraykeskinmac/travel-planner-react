import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
