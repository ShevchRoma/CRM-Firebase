import "bootstrap/dist/css/bootstrap.min.css";
import { PrivateRoute } from "./Routes/PrivateRoute";
import AuthEmail from "./components/AuthEmail/AuthEmail";
import { Routes, Route } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";
import TelAuth from "./components/TelAuth/TelAuth";
import FacebookAuth from "./components/FacebookAuth/Facebook";
import Auth from "./components/Auth/Auth";
import SignUp from "./components/SignUp/SignUp";
import AdminPage from "./components/AdminPage/AdminPage";
import EditUsers from "./components/EditUsers/EditUsers";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/email" element={<AuthEmail />} />
        <Route path="/google" element={<GoogleAuth />} />
        <Route path="/tel" element={<TelAuth />} />
        <Route path="/fb" element={<FacebookAuth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/edit" element={<EditUsers />} />
      </Routes>
    </div>
  );
}

export default App;
