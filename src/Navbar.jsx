import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="w-full  flex justify-center">
      <div className="flex items-center w-5xl p-4 border rounded-b-xl border-gray-100 shadow-lg justify-between">
        <h1 className=" font-medium">Blog app</h1>

        <GiHamburgerMenu size={25} className="lg:hidden" />
        <div className="mobile:hidden lg:block ">
          <Link to="/" className="px-5">
            Home
          </Link>
          <Link to="/create">New Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
