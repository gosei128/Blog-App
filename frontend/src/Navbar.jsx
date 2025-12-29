import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchInput from "./component/search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [dropDown, setDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`absolute h-50 w-full border bg-white transition-all duration-200 ${
          dropDown ? "translate-y-0" : "-translate-y-100"
        }`}
      >
        <button onClick={() => setDropdown(!dropDown)}>close</button>
        <h1>Hello</h1>
      </div>
      <nav className="w-full  flex justify-center ">
        <div className="flex items-center w-5xl p-4 border rounded-b-xl border-gray-100 shadow-lg justify-between">
          <h1
            className="cursor-pointer font-medium"
            onClick={() => {
              navigate("/");
            }}
          >
            Blog app
          </h1>
          <SearchInput />
          <GiHamburgerMenu
            size={25}
            className="lg:hidden"
            onClick={() => setDropdown(!dropDown)}
          />
          <div className="mobile:hidden lg:block ">
            <Link to="/" className="px-5">
              Home
            </Link>
            <Link to="/create">New Blog</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
