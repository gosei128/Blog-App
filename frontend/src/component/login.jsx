import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://blog-app-inlb.onrender.com/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await res.json();
      console.log(data);

      // if (data.email || data.password) {
      //   setEmail(data.email);
      //   setPassword(data.password);
      // }
      if (data.user) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-2 pt-15 w-full flex justify-center">
      <form
        className="flex flex-col w-full max-w-lg p-3 gap-2 border mt-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold">Login</h1>
        <label for="email">Email:</label>
        <input
          className="border rounded-md p-1"
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <div class="email error"></div>
        <label for="password">Password:</label>
        <input
          className="border rounded-md p-1"
          placeholder="Enter password"
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="border p-2 rounded-lg bg-black text-white"
        >
          Login
        </button>
        <p className="self-center text-gray-400">
          Don't have account yet?{" "}
          <Link to="/signup" className="underline text-black">
            Sign up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
