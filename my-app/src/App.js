import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Registration/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;