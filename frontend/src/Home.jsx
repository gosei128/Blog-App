import useFetch from "./hook/useFetch";
import Bloglist from "./Bloglist";
import Hero from "./hero";
const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/api/blogs");

  return (
    <div>
      <Hero />
      {loading && <p>Loading blogs...</p>}
      {error && <p className="text-red-600">Error: {error.message}</p>}
      {data?.blogs && !loading && !error && (
        <Bloglist list={data.blogs} title="All Blogs" />
      )}
    </div>
  );
};
export default Home;
