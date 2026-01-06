import { useParams, useNavigate } from "react-router-dom";

import useFetch from "./hook/useFetch";
const Blogdetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    loading,
  } = useFetch("http://localhost:3000/api/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:3000/api/blogs/" + id, { method: "DELETE" }).then(
      () => {
        navigate("/");
      }
    );
  };
  return (
    <section className="pt-25 px-2 w-full h-screen flex flex-col items-center border ">
      <div className=" w-full max-w-5xl h-screen ">
        {loading && <p>Loading blog...</p>}
        {error && <p className="text-red-600">Error: {error.message}</p>}
        {!loading && !error && !blog && <p>Blog not found.</p>}
        {blog && (
          <article className="grid grid-cols-1 tablet:grid-cols-[2fr_1fr] gap-3  border-gray-200  p-3 rounded-2xl shadow-lg h-fit max-h-screen ">
            <img
              src={`https://blog-app-inlb.onrender.com/uploads/${blog.image}`}
              className="w-full max-w-2xl h-fit"
              alt=""
            />
            <div className="border rounded-lg">
              <h1 className="text-3xl font-bold">{blog.title}</h1>
              <p className="text-[12px]"> Author: {blog.author}</p>
              <p>{blog.body}</p>
            </div>
          </article>
        )}
        <button
          className="border w-25 p-1 rounded-lg text-white font-medium bg-[#131316] mt-5 shadow-lg self-start"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </div>
    </section>
  );
};

export default Blogdetails;
