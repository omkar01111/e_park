import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import UserType from "./pages/UserType";
import CustomerSignUp from "./pages/customer/CustomerSignUp";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import VenderSignUp from "./pages/Vender/VenderSignUp";
import HeaderLogo from "./components/Header/HeaderLogo";
import VenderDashbord from "./pages/Vender/VenderDashbord";
import { Provider } from "react-redux";
import store from "./store/Store";
import Footer from "./components/Footer";
import VenderProfile from "./pages/Vender/VenderProfile";

import VenderAccount from "./pages/Vender/VenderAccount";
import VenderEditProfile from "./pages/Vender/VenderEditProfile";
import VenderSlotsDashbord from "./pages/Vender/VenderSlotsDashbord";
import AddSlot from "./pages/Vender/ParkingSlots/AddSlot";
import Slots from "./pages/customer/Slots";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <AppContent /> {/* Render the main content of your app */}
        </Router>
      </Provider>
    </>
  );
}

function AppContent() {
  const location = useLocation(); // Get the current location

  // Define an array of paths where you want to hide the header/navbar
  const pathsWithoutHeader = [
    "/user/login",
    "/user/custreg",
    "/user/venreg",
    "/user",
  ];

  const headerLogo = pathsWithoutHeader.includes(location.pathname);

  const shouldDisplayHeader = !pathsWithoutHeader.includes(location.pathname);

  return (
    <>
      {shouldDisplayHeader && <Header />}
      {headerLogo && <HeaderLogo />}
      {/* Conditionally render the Header */}
      <Routes>

        {/* common routes */}
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserType />} />
        <Route path="/user/login" element={<Login />} />
      

        {/* cutomer route */}

        <Route path="/user/custreg" element={<CustomerSignUp />} />
        <Route path="/account/Customer/slots" element={<Slots />} />

        {/* Vender route */}
        <Route path="/user/venreg" element={<VenderSignUp />} />
        <Route path="/Vender/dashbord" element={<VenderDashbord/>} />
        <Route path="/Vender/EditProfile" element={<VenderEditProfile/>} />
        <Route path="/Vender/account" element={<VenderProfile/>} />
        <Route path="/Vender/SlotsDashbord" element={<VenderSlotsDashbord/>} />

        {/* Add Slots */}
        <Route path="/Vender/Addslot" element={<AddSlot/>} />
      

      </Routes>
      <Toaster />
      {shouldDisplayHeader && <Footer />}
    </>
  );
}

export default App;
