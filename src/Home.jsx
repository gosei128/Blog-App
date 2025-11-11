import useFetch from './hook/useFetch'
import Bloglist from './Bloglist'
const Home = ()=>{
    const {data:blogs, loading, error} = useFetch('http://localhost:8000/posts')
  
    return (
        <div>
            {loading && <p>Loading blogs...</p>}
            {error && <p className="text-red-600">Error: {error.message}</p>}
            {blogs && !loading && !error && <Bloglist list={blogs} title="All Blogs"/>}
        </div>
    )
}
export default Home