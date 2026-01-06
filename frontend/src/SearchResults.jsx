import { useSearchParams } from "react-router-dom";
import useFetch from "./hook/useFetch";
import Bloglist from "./Bloglist";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const {
    data: blogs,
    loading,
    error,
  } = useFetch(
    title
      ? `https://blog-app-inlb.onrender.com/api/blogs/title/${encodeURIComponent(
          title
        )}`
      : ""
  );

  return (
    <div>
      {loading && (
        <p className="text-center mt-10">Loading search results...</p>
      )}
      {error && (
        <p className="text-red-600 text-center mt-10">
          No blogs found for "{title}"
        </p>
      )}
      {blogs && !loading && !error && (
        <Bloglist list={blogs} title={`Search Results for "${title}"`} />
      )}
    </div>
  );
};

export default SearchResults;
