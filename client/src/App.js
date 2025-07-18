import React from "react";
import Navbar from "./components/Navbar";
import TriServiceHero from "./components/TriServiceHero";
import TriServices from "./components/TriServices";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastProvider } from "./contexts/ToastContext";
// import heroImage from "../assets/hero-image.jpeg";

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <div className="App flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <TriServiceHero />
            <TriServices />
            <About />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
