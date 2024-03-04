// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Navbar from '../components/Navbar.jsx';
import Signup from '../pages/OrganiserSignup.jsx';
import NotFound from '../pages/NotFound.jsx';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
