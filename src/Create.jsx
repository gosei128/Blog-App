import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [pending, setPending] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()

        const blog = {title, body, author}

            setPending(true)

             fetch('http://localhost:8000/posts', {
                method: 'POST',
                body: JSON.stringify(blog),
                headers: {'Content-Type' : 'application/json'}
            }).then(()=>{
                setTimeout(()=>{
                    alert('new blog added')
                    setPending(false)
                    navigate('/')
                }, 1000)
                
            })
        }
    

    return(
        <div className="mt-10 flex flex-col gap-5">
            <h1>Create your blog</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit} >
              <div className="flex gap-5">
                <input type="text" value={title} required name="title" className="border w-lg p-2 rounded-md" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title of blog" />
                <input type="text" value={author} required name="author" className="border w-60 rounded-md p-2" placeholder="Enter authors name" onChange={(e)=>{setAuthor(e.target.value)}} />
            </div>
                <textarea name="body" required value={body}  className="border h-72 p-3" placeholder="Enter your blog..."  id="" onChange={(e)=>{setBody(e.target.value)}}></textarea>
                {!pending && <button type="submit" className="border w-25 p-1 rounded-md bg-[#131316] text-white">Submit</button>}
                {pending && <button type="submit"  className="border w-30 p-1 rounded-md bg-[#131316] text-white">Submitting</button>}

            </form>
        </div>
    )
}

export default Create