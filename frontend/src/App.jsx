import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import UserType from "./pages/UserType";
import CustomerSignUp from "./pages/customer/CustomerSignUp";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import VenderSignUp from "./pages/Vender/VenderSignUp";
import HeaderLogo from "./components/HeaderLogo";

function App() {
  return (
    <>
      <Router>
        <AppContent /> {/* Render the main content of your app */}
      </Router>
    </>
  );
}

function AppContent() {
  const location = useLocation(); // Get the current location

  // Define an array of paths where you want to hide the header/navbar
  const pathsWithoutHeader = ["/user/login", "/user/custreg", "/user/venreg","/user"];

  const headerLogo=pathsWithoutHeader.includes(location.pathname)

  const shouldDisplayHeader = !pathsWithoutHeader.includes(location.pathname);

  return (
    <>
      {shouldDisplayHeader && <Header />} 
      {headerLogo && <HeaderLogo/>}
      {/* Conditionally render the Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserType />} />
        <Route path="/user/custreg" element={<CustomerSignUp />} />
        <Route path="/user/venreg" element={<VenderSignUp />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
