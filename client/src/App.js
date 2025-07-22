import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Service Pages
import AccountingPage from "./pages/AccountingPage";
import ConstructionPage from "./pages/ConstructionPage";
import ITPage from "./pages/ITPage";

// Main Layout Component
const MainLayout = () => {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/accounting" element={<AccountingPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/it" element={<ITPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
