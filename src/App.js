import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import PostASecret from "./postasecret";
import ConfessionPage from "./confession";
import GenerateLinkPage from "./generatelink";
import CheckMessagePage from "./message"; // Correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postasecret" element={<PostASecret />} />
        <Route path="/confession" element={<ConfessionPage />} />
        <Route path="/generatelink" element={<GenerateLinkPage />} />
        <Route path="/checkmessage" element={<CheckMessagePage />} /> {/* FIXED */}
      </Routes>
    </Router>
  );
}

export default App;
