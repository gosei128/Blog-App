import { Link } from "react-router-dom";
import {useAuth} from './context/autContext.jsx'
import SearchInput from "./component/search";
const Bloglist = ({ list, title }) => {
    const {user} = useAuth()
  return (

    <section className="flex justify-center ">
        <div className="w-full max-w-5xl mx-auto border">
        <div className="w-auto">
            <h1 className="text-2xl font-bold">{title}</h1>
            <hr />
        </div>
      <div className=" mt-5 px-3 flex flex-wrap gap-4 border">
        {
          // Card Detail of blogs
          list.map((blog) => (
            <div className="py-2">
              <div
                className="border-gray-200 border max-w-xs h-86 shadow-lg p-6 rounded-xl"
                key={blog._id}
              >
                <Link to={`/api/blogs/${blog._id}`}>
                  <h1 className="text-xl lg:text-2xl tablet:text-3xl font-medium hover:underline">
                    {blog.title}
                  </h1>
                </Link>
                <img
                  src={`http://localhost:3000/uploads/${blog.image}`}
                  alt="image here"
                />
                <p className="text-xs lg:text-[15px] tablet:text-xl text-zinc-600 ">
                  {blog.body.slice(0, 100)}...
                </p>
                <p className="text-xs tablet:text-[15px] text-zinc-600">
                  Author: {user.email}
                </p>
              </div>
            </div>
          ))
        }
      </div>
        </div>
    </section>
  );
};

export default Bloglist;
