import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Pages/Home/Home';
import AboutPage from './Component/Pages/AboutPage/AboutPage';
import Navbar from './Component/Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>
        </BrowserRouter>

    
    
    </div>
  );
}

export default App;
