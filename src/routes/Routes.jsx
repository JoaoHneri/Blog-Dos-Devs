import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Router = () => {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/About" Component={About} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
