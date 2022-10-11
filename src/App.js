import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import "antd/dist/antd.min.css";
import UserManagement from "./pages/UserManagement/UserManagement";
import Layout from "./HOC/Layout";
import SecureView from "./HOC/SecureView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SecureView>
                <Layout Component={UserManagement} />
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
