import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SolutionPage from "./pages/SolutionPage";
import UseCasesPage from "./pages/UseCasesPage";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/usecases" element={<UseCasesPage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
