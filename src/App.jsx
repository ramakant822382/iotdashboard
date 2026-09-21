import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Projects from "./component/pages/Projects";
import Contact from "./component/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Common Navbar */}
        <Navbar />

        {/* All Pages */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Common Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
