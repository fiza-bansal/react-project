import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Discussion from "./pages/Discussion";
import SkillTrack from "./pages/SkillTrack";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* Each route connects a URL path to one page component. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/skill-track" element={<SkillTrack />} />
      </Routes>
    </>
  );
}

export default App;
