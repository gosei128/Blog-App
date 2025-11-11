
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
    <div className="flex justify-between p-2 ">
        <h1 className="text-2xl font-medium">Blog app</h1>

        <div className="flex gap-5">
            <Link to='/'>Home</Link>
            <Link to='/create'>New Blog</Link>
        </div>
    </div>
    
    )
};

export default Navbar;
