import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [pending, setPending] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("author", author);
    formData.append("image", image);

    setPending(true);

    fetch("http://localhost:3000/api/blogs/", {
      method: "POST",
      credentials: "include",
      body: formData,
    }).then(async (res) => {
      if (res.status === 401) {
        alert("You must be logged in to create a post");
        navigate("/login");
        setPending(false);
        return;
      }
      setTimeout(() => {
        alert("new blog added");
        setPending(false);
        navigate("/");
      }, 1000);
    });
  };

  return (
    <section className="w-full flex mt-5  justify-center ">
      <div className="w-5xl border rounded-lg shadow-lg border-gray-200 p-5">
        <h1 className="text-2xl">Create your blog</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex mobile:flex-col gap-2 tablet:flex-row">
            <input
              type="text"
              value={title}
              required
              name="title"
              className="border p-2 max-w-2xl w-full rounded-md border-gray-300"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter title of blog"
            />
            <input
              type="text"
              value={author}
              required
              name="author"
              className="border max-w-96 w-full rounded-md border-gray-300 p-2"
              placeholder="Enter authors name"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <textarea
            name="body"
            required
            value={body}
            className="border h-72 w-full mt-5 rounded-lg border-gray-300 max-w-5xl p-3"
            placeholder="Enter your blog..."
            id=""
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          {!pending && (
            <button
              type="submit"
              className="border w-25 p-1 rounded-md bg-[#131316] self-baseline text-white"
            >
              Submit
            </button>
          )}
          {pending && (
            <button
              type="submit"
              className="border w-30 p-1 rounded-md bg-[#131316] text-white"
            >
              Submitting
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Create;
