import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Pages/About";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Insight from "./Pages/Insight";
import Learn from "./Pages/Learn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMindMate" element={<About />} />
        <Route path="/InsightMindMateReportInput" element={<Insight />} />
        <Route path="/MindMateCourseOfferings" element={<Learn />} />
        <Route path="/MindMateHelp" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
