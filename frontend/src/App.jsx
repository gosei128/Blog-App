import Navbar from "./Navbar";
import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogdetails from "./Blogdetails";
import Create from "./Create";
import SearchResults from "./SearchResults";
import Login from "./component/login";
import Signup from "./component/signup";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/api/blogs/:id" element={<Blogdetails />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/search" element={<SearchResults />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
