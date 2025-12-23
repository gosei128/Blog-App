import { Link } from "react-router-dom";
import SearchInput from "./component/search";
const Bloglist = ({ list, title }) => {
  return (
    <section className="w-full flex justify-center ">
      <div className=" mt-10  w-5xl px-3">
        <h1 className="text-2xl font-bold">{title}</h1>

        <hr />
        <SearchInput />
        {
          // Card Detail of blogs
          list.map((blog) => (
            <div className="grid grid-cols-1 py-2">
              <div
                className="border-gray-200 border min-h-40 shadow-lg p-6 rounded-xl"
                key={blog._id}
              >
                <Link to={`/api/blogs/${blog._id}`}>
                  <h1 className="text-xl lg:text-2xl tablet:text-3xl font-medium hover:underline">
                    {blog.title}
                  </h1>
                </Link>
                <p className="text-xs lg:text-[15px] tablet:text-xl text-zinc-600 ">
                  {blog.body.slice(0, 100)}...
                </p>
                <p className="text-xs tablet:text-[15px] text-zinc-600">
                  Author: {blog.author}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Bloglist;
