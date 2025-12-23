import Navbar from "./Navbar";
import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />

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
