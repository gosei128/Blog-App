import { useParams, useNavigate } from "react-router-dom"

import useFetch from "./hook/useFetch";
const Blogdetails = ()=>{
    const {id} = useParams();
    const {data:blog, error, loading} = useFetch('http://localhost:8000/posts/' + id)
    const navigate = useNavigate()

    const handleDelete = () =>{
        fetch('http://localhost:8000/posts/' + id, {method: 'DELETE'})
        .then(()=>{
            navigate('/')
        })
    }
    return (
        <div className="mt-14 w-3xl ">
            {loading && <p>Loading blog...</p>}
            {error && <p className="text-red-600">Error: {error.message}</p>}
            {!loading && !error && !blog && <p>Blog not found.</p>}
            {blog && 
            <article className="flex flex-col gap-3 border border-gray-200 h-96 p-3 rounded-2xl shadow-lg ">
                <div>
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <p className="text-[12px]"> Author: {blog.author}</p>
                </div>
                <p>{blog.body}</p>
                
            </article>
            }
            <button className="border w-25 p-1 rounded-lg text-white font-medium bg-[#131316] mt-5 shadow-lg hover:" onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default Blogdetails