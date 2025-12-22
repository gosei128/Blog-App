import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="">
        <div className="border rounded-lg shadow-xs border-gray-200 w-3xl">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/api/blogs/:id" element={<Blogdetails />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
