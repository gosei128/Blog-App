import { Link } from "react-router-dom"
const Bloglist = ({list, title}) =>{
    
    return(
        <div className="flex flex-col gap-5 mt-10">
            <h1 className="text-2xl font-bold">{title}</h1>
            <hr />
            {
                // Card Detail of blogs
                list.map(blog => (
                    <div className="border-gray-200 border shadow-lg p-6 rounded-xl" key={blog.id}>
						<Link to={`/posts/${blog.id}`}>
                        <h1 className="text-3xl font-medium hover:underline">{blog.title}</h1>
                        </Link>
                        <p className="text-[12px] text-zinc-600 ">{blog.body.slice(0, 100)}...</p>
                        <p className="text-[12px] text-zinc-600">Author: {blog.author}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default Bloglist