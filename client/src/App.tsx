import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import PGP from "./pages/PGP";

import Terms from "./pages/ScamDetector/TOS";
import Privacy from "./pages/ScamDetector/PrivacyPolicy";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pgp" element={<PGP />} />

          <Route path="/scam-detector/terms" element={<Terms />} />
          <Route path="/scam-detector/privacy" element={<Privacy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
