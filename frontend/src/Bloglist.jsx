import { Link } from "react-router-dom";
import SearchInput from "./component/search";
const Bloglist = ({ list, title }) => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-5xl ">
        <div className="w-auto">
          <h1 className="text-2xl font-bold">{title}</h1>
          <hr />
        </div>
        <div className=" mt-5 flex flex-wrap justify-center tablet:justify-start gap-1">
          {
            // Card Detail of blogs
            list.map((blog) => (
              <div
                className="border-gray-200 border h-86 w-full max-w-84 p-3 rounded-xl"
                key={blog._id}
              >
                <Link to={`/api/blogs/${blog._id}`}>
                  <h1 className="text-xl lg:text-2xl tablet:text-3xl font-medium hover:underline">
                    {blog.title}
                  </h1>
                </Link>
                {blog.image && (
                  <img
                    src={`https://blog-app-inlb.onrender.com/uploads/${blog.image}`}
                    alt={blog.title || "Blog image"}
                    className="w-full h-55 rounded"
                  />
                )}
                <p className="text-xs lg:text-[15px] tablet:text-xl text-zinc-600 ">
                  {blog.body.slice(0, 100)}...
                </p>
                <p className="text-xs tablet:text-[15px] text-zinc-600">
                  Author: {blog.author}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Bloglist;
