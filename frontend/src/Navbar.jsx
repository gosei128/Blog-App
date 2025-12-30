import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchInput from "./component/search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { useAuth } from "./context/autContext";

const Navbar = () => {
  const [dropDown, setDropdown] = useState(false);
  const { user, setUser, loading } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`absolute h-60 w-full border drop-shadow-2xl bg-white transition-all duration-200 rounded-b-xl p-3 ${
          dropDown ? "translate-y-0" : "-translate-y-100"
        }`}
      >
        <div className="relative mt-1">
          <IoMdClose
            onClick={() => setDropdown(!dropDown)}
            className=" self-end absolute  -right-1"
            size={35}
          />
          <ul className="mt-10">
            <li className="border rounded-md p-2 text-center m-2">
              <Link to={"/login"} onClick={() => setDropdown(!dropDown)}>
                {" "}
                Login
              </Link>
            </li>
            <li className="border rounded-md p-2 text-center m-2 ">
              <Link to={"/signup"} onClick={() => setDropdown(!dropDown)}>
                {" "}
                Sign up
              </Link>
            </li>
          </ul>
        </div>
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
          {/* <SearchInput /> */}
          <GiHamburgerMenu
            size={25}
            className="lg:hidden"
            onClick={() => setDropdown(!dropDown)}
          />
          {user ? (
            <span>Hello, {user.email}</span>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
