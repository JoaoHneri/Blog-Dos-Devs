import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/About/About";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreatePost from "../pages/CreatePost/CreatePost";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";
import Search from "../pages/Search/Search";
import Post from "../pages/PostIndividual/Post";
import EditPost from "../pages/EditPost/EditPost";
const Router = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);


  function ToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }


  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <ToTop/>
          <div className="container">
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/About" Component={About} />
              <Route exact path="/search" Component={Search} />
              <Route exact path="/posts/:id" Component={Post} />
              <Route exact path="/login" Component={!user ? Login : Home} />
              <Route
                exact
                path="/register"
                Component={!user ? Register : Home}
              /><Route
              exact
              path="/posts/edit/:id"
              Component={!user ? Home : EditPost}
            />
              <Route
                exact
                path="/posts/create"
                Component={user ? CreatePost : Login}
              />
              <Route
                exact
                path="/dashboard"
                Component={user ? Dashboard : Login}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
