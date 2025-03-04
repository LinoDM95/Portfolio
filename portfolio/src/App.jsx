import "./App.css";
// React
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// Nav
import Sidebar from "./components/sidebar";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
// Animations
import { AnimatePresence, motion } from "framer-motion";
import ChangePage from "./components/animations/change_page";
// Images
import TopLeftImg from "./components/images/top_left_img";
import BottomRightImg from "./components/images/bottom_right_img";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <ChangePage />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="bg-main h-screen">
      <Router>
        <ChangePage />
        <Sidebar />
        <TopLeftImg />
        <BottomRightImg />
        <AppRoutes />
        
      </Router>
    </div>
  );
}
