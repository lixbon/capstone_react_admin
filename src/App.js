import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import "antd/dist/antd.min.css";
import UserManagement from "./pages/UserManagement/UserManagement";
import Layout from "./HOC/Layout";
import SecureView from "./HOC/SecureView";
import HomePage from "./pages/HomePage/HomePage";
import MovieManagement from "./pages/MoviesManagement/MoviesManagement";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SecureView>
                <Layout Component={HomePage} />
              </SecureView>
            }
          />
          <Route
            path="/usermanagerment"
            element={
              <SecureView>
                <Layout Component={UserManagement} />
              </SecureView>
            }
          />
          <Route
            path="/moviesmanagerment"
            element={
              <SecureView>
                <Layout Component={MovieManagement} />
              </SecureView>
            }
          />
          <Route path="/login" element={<Layout Component={LoginPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
