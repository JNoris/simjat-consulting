import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastProvider } from "./contexts/ToastContext";

const TriServiceHero = lazy(() => import("./components/TriServiceHero"));
const TriServices = lazy(() => import("./components/TriServices"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <div className="App flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <TriServiceHero />
              <TriServices />
              <About />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={<div></div>}>
            <Footer />
            <ScrollToTop />
          </Suspense>
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
