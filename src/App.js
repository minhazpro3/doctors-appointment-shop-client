import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import AboutPage from "./Component/Pages/AboutPage/AboutPage";
import Navbar from "./Component/Pages/Navbar/Navbar";
import DoctorProfile from "./Component/Pages/DoctorProfile/DoctorProfile";
import Shop from "./Component/Pages/Shop/Shop";
import AllDoctors from "./Component/Pages/AllDoctors/AllDoctors";
import MakeAppointment from "./Component/Pages/MakeAppointment/MakeAppointment";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import PatientInfo from "./Component/Pages/PetaintInfo/PatientInfo";
import ShopInfo from "./Component/Pages/ShopInfo/ShopInfo";
import AddProducts from "./Component/Pages/AddProducts/AddProducts";
import AddDcotor from "./Component/Pages/AddDoctor/AddDcotor";
import MakeAdmin from "./Component/Pages/MakeAdmin/MakeAdmin";
import Login from "./Component/Pages/Login/Login";
import Register from "./Component/Pages/Register/Register";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import AllBookings from "./Component/Pages/AllBookings/AllBookings";
import AllProducts from "./Component/Pages/AllProducts/AllProducts";
import SaveCart from "./Component/Pages/SaveCart/SaveCart";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/doctorProfile/:doctorId"
              element={<DoctorProfile />}
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/saveCart" element={<SaveCart />}></Route>
            <Route
              path="/shop"
              element={  <Shop />  }
            ></Route>
            <Route path="/doctors" element={<AllDoctors />}></Route>
            <Route path="/makAppointment" element={<MakeAppointment />}></Route>
             
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard/" element={<PatientInfo />}></Route>
              <Route path="/dashboard/shopInfo" element={<ShopInfo />}></Route>
              <Route
                path="/dashboard/addProducts"
                element={<AddProducts />}
              ></Route>
              <Route
                path="/dashboard/addDoctors"
                element={<AddDcotor />}
              ></Route>
              <Route
                path="/dashboard/makeAdmin"
                element={<MakeAdmin />}
              ></Route>
              <Route
                path="/dashboard/allBookings"
                element={<AllBookings />}
              ></Route>
              <Route
                path="/dashboard/allProducts"
                element={<AllProducts />}
              ></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
