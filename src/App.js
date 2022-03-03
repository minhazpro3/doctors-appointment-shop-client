import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/doctorProfile" element={<DoctorProfile />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/doctors" element={<AllDoctors />}></Route>
          <Route path="/makAppointment" element={<MakeAppointment />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/" element={<PatientInfo />}></Route>
            <Route path="/dashboard/shopInfo" element={<ShopInfo />}></Route>
            <Route path="/dashboard/addProducts" element={<AddProducts />}></Route>
            <Route path="/dashboard/addDoctors" element={<AddDcotor />}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
