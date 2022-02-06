import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
// import Register from "./components/Registration/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home";
import RegisterPage from "./pages/Registration";
import DashboardPage from "./pages/DashboardPage";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;