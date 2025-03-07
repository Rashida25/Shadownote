import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/next-page" element={<div>Next Page Content</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;