import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SolutionPage from "./pages/SolutionPage";
import UseCasesPage from "./pages/UseCasesPage";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
// import Subscribe from "./components/footer/Subscribe";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="relative">
      <div className="z-50 relative">
        <Nav />
      </div>
      <ScrollToTop />
      <div className="z-0 relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/usecases" element={<UseCasesPage />} />
        </Routes>
        {/* <Subscribe />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
